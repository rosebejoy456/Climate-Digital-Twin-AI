from datetime import datetime
from pathlib import Path

import pandas as pd
import numpy as np
import shap

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from xgboost import XGBRegressor

from engine.state_manager import StateManager, ClimateState


# ============================================================
# CONFIGURATION
# ============================================================

TEST_FILE = Path(
    "data/processed/Climate_Ernakulam_Test.csv"
)

MODEL_DIR = Path(
    "models/multiple_xgboost"
)


# ============================================================
# MODEL FILES
# ============================================================

MODEL_FILES = {
    "rainfall": MODEL_DIR / "xgboost_rainfall.json",
    "temperature": MODEL_DIR / "xgboost_temperature.json",
    "pressure": MODEL_DIR / "xgboost_pressure.json",
    "lst": MODEL_DIR / "xgboost_lst.json",
    "ndvi": MODEL_DIR / "xgboost_ndvi.json",
}


# ============================================================
# CREATE FASTAPI APP
# ============================================================

app = FastAPI(
    title="Climate Digital Twin API",
    description=(
        "AI-powered Climate Digital Twin API with "
        "multi-variable XGBoost prediction, SHAP "
        "explainability and What-If simulation."
    ),
    version="3.0.0"
)


# ============================================================
# STATE MANAGER
# ============================================================

sample_state = ClimateState(
    timestamp=datetime.now(),
    rainfall=42.5,
    max_temp=32,
    min_temp=25,
    lst=34,
    sst=29
)

manager = StateManager()
manager.update_state(sample_state)


# ============================================================
# LOAD XGBOOST MODELS
# ============================================================

models = {}

print("\nLoading XGBoost models...")

for name, model_file in MODEL_FILES.items():

    if model_file.exists():

        try:

            loaded_model = XGBRegressor()

            loaded_model.load_model(
                model_file
            )

            models[name] = loaded_model

            print(
                f"Loaded {name} model: {model_file}"
            )

        except Exception as e:

            print(
                f"Warning: Could not load "
                f"{name} model: {e}"
            )

    else:

        print(
            f"Warning: {name} model not found: "
            f"{model_file}"
        )


print(
    f"Models loaded: "
    f"{len(models)}/{len(MODEL_FILES)}"
)


# ============================================================
# HELPER FUNCTION
# ============================================================

def prepare_features(
    current_model,
    data
):

    booster = current_model.get_booster()

    model_features = booster.feature_names

    if model_features is None:

        raise HTTPException(
            status_code=500,
            detail="XGBoost model has no feature names."
        )

    missing_features = [
        feature
        for feature in model_features
        if feature not in data.columns
    ]

    if missing_features:

        raise HTTPException(
            status_code=500,
            detail={
                "message": "Required model features missing.",
                "missing_features": missing_features
            }
        )

    X = data[model_features].copy()

    X = X.replace(
        [np.inf, -np.inf],
        np.nan
    )

    if X.isnull().sum().sum() > 0:

        X = X.fillna(
            X.median(numeric_only=True)
        )

    return X


# ============================================================
# HELPER FUNCTION
# FORMAT PREDICTIONS
# ============================================================

def format_predictions(
    predictions
):

    return {

        "rainfall_mm":
            predictions.get("rainfall"),

        "temperature_celsius":
            (
                predictions.get("temperature") - 273.15
                if predictions.get("temperature") is not None
                else None
            ),

        "pressure_hpa":
            (
                predictions.get("pressure") / 100
                if predictions.get("pressure") is not None
                else None
            ),

        "lst_celsius":
            predictions.get("lst"),

        "ndvi":
            predictions.get("ndvi")
    }


# ============================================================
# WHAT-IF REQUEST MODEL
# ============================================================

class WhatIfScenario(BaseModel):

    rainfall_change_percent: float = Field(
        0.0,
        description=(
            "Percentage change in rainfall. "
            "Example: 20 means rainfall increases by 20%."
        )
    )

    temperature_change_c: float = Field(
        0.0,
        description=(
            "Temperature change in Celsius. "
            "Example: 2 means temperature increases by 2°C."
        )
    )

    pressure_change_hpa: float = Field(
        0.0,
        description=(
            "Atmospheric pressure change in hPa."
        )
    )

    lst_change_c: float = Field(
        0.0,
        description=(
            "Land Surface Temperature change in Celsius."
        )
    )

    ndvi_change_percent: float = Field(
        0.0,
        description=(
            "Percentage change in NDVI."
        )
    )

    # Optional absolute-value overrides

    rainfall_mm: float | None = Field(
        None,
        description=(
            "Optional absolute rainfall value in mm."
        )
    )

    temperature_celsius: float | None = Field(
        None,
        description=(
            "Optional absolute temperature in Celsius."
        )
    )

    pressure_hpa: float | None = Field(
        None,
        description=(
            "Optional absolute pressure in hPa."
        )
    )

    lst_celsius: float | None = Field(
        None,
        description=(
            "Optional absolute LST in Celsius."
        )
    )

    ndvi: float | None = Field(
        None,
        description=(
            "Optional absolute NDVI value."
        )
    )


# ============================================================
# HOME
# ============================================================

@app.get("/")
def home():

    return {

        "message":
            "Welcome to the Climate Digital Twin API!",

        "version":
            "3.0.0",

        "prediction_variables": [

            "rainfall",
            "temperature",
            "pressure",
            "lst",
            "ndvi"

        ],

        "features": [

            "Multi-variable XGBoost",
            "SHAP Explainability",
            "What-If Simulation"

        ]
    }


# ============================================================
# CURRENT CLIMATE STATE
# ============================================================

@app.get("/state/current")
def get_current_state():

    current = manager.get_current_state()

    if current is None:

        return {
            "message":
                "No climate data available."
        }

    return {

        "timestamp":
            current.timestamp.isoformat(),

        "rainfall":
            current.rainfall,

        "max_temp":
            current.max_temp,

        "min_temp":
            current.min_temp,

        "lst":
            current.lst,

        "sst":
            current.sst
    }


# ============================================================
# MULTI-VARIABLE PREDICTION
# ============================================================

@app.get("/prediction/multiple")
def predict_multiple():

    if len(models) == 0:

        raise HTTPException(
            status_code=500,
            detail="No XGBoost models are available."
        )

    if not TEST_FILE.exists():

        raise HTTPException(
            status_code=404,
            detail=f"Test dataset not found: {TEST_FILE}"
        )

    try:

        df = pd.read_csv(
            TEST_FILE
        )

        if df.empty:

            raise HTTPException(
                status_code=404,
                detail="Test dataset is empty."
            )

        predictions = {}

        for name, current_model in models.items():

            X = prepare_features(
                current_model,
                df
            )

            prediction = current_model.predict(
                X
            )

            predictions[name] = float(
                prediction[-1]
            )

        latest_date = None

        if "date" in df.columns:

            latest_date = str(
                df["date"].iloc[-1]
            )

        return {

            "model":
                "XGBoost",

            "date":
                latest_date,

            "predictions":
                format_predictions(predictions),

            "models_loaded":
                len(models)
        }

    except HTTPException:

        raise

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(e)}"
        )


# ============================================================
# MULTI-VARIABLE PREDICTION + SHAP
# ============================================================

@app.get("/prediction/multiple/explain")
def predict_multiple_with_shap():

    if len(models) == 0:

        raise HTTPException(
            status_code=500,
            detail="No XGBoost models are available."
        )

    if not TEST_FILE.exists():

        raise HTTPException(
            status_code=404,
            detail=f"Test dataset not found: {TEST_FILE}"
        )

    try:

        df = pd.read_csv(
            TEST_FILE
        )

        if df.empty:

            raise HTTPException(
                status_code=404,
                detail="Test dataset is empty."
            )

        predictions = {}

        explanations = {}

        # ----------------------------------------------------
        # PROCESS EACH MODEL
        # ----------------------------------------------------

        for name, current_model in models.items():

            X = prepare_features(
                current_model,
                df
            )

            latest_X = X.iloc[[-1]]

            # ------------------------------------------------
            # Prediction
            # ------------------------------------------------

            prediction = current_model.predict(
                latest_X
            )[0]

            predictions[name] = float(
                prediction
            )

            # ------------------------------------------------
            # SHAP
            # ------------------------------------------------

            explainer = shap.TreeExplainer(
                current_model
            )

            shap_values = explainer(
                latest_X
            )

            values = shap_values.values[0]

            model_features = (
                current_model
                .get_booster()
                .feature_names
            )

            feature_contributions = []

            for feature, value in zip(
                model_features,
                values
            ):

                feature_contributions.append({

                    "feature":
                        feature,

                    "shap_value":
                        float(value),

                    "feature_value":
                        float(
                            latest_X[
                                feature
                            ].iloc[0]
                        )
                })

            # ------------------------------------------------
            # Sort by importance
            # ------------------------------------------------

            feature_contributions.sort(

                key=lambda x:
                    abs(x["shap_value"]),

                reverse=True
            )

            base_value = float(
                np.array(
                    shap_values.base_values
                ).flatten()[0]
            )

            explanations[name] = {

                "base_value":
                    base_value,

                "top_features":
                    feature_contributions[:10]
            }

        # ----------------------------------------------------
        # Date
        # ----------------------------------------------------

        latest_date = None

        if "date" in df.columns:

            latest_date = str(
                df["date"].iloc[-1]
            )

        # ----------------------------------------------------
        # Response
        # ----------------------------------------------------

        return {

            "model":
                "XGBoost",

            "date":
                latest_date,

            "predictions":
                format_predictions(predictions),

            "shap_explanations":
                explanations,

            "explanation": (
                "SHAP values show how each feature "
                "contributed to the prediction. "
                "Positive values increase the prediction "
                "while negative values decrease it."
            )
        }

    except HTTPException:

        raise

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=(
                f"Prediction and SHAP failed: {str(e)}"
            )
        )


# ============================================================
# WHAT-IF SIMULATION
# ============================================================

@app.post("/simulation/what-if")
def what_if_simulation(
    scenario: WhatIfScenario
):

    if len(models) == 0:

        raise HTTPException(
            status_code=500,
            detail="No XGBoost models are available."
        )

    if not TEST_FILE.exists():

        raise HTTPException(
            status_code=404,
            detail=f"Test dataset not found: {TEST_FILE}"
        )

    try:

        # ----------------------------------------------------
        # Load data
        # ----------------------------------------------------

        df = pd.read_csv(
            TEST_FILE
        )

        if df.empty:

            raise HTTPException(
                status_code=404,
                detail="Test dataset is empty."
            )

        # ----------------------------------------------------
        # Latest climate record
        # ----------------------------------------------------

        baseline_row = df.iloc[[-1]].copy()

        scenario_row = baseline_row.copy()

        latest_date = None

        if "date" in df.columns:

            latest_date = str(
                df["date"].iloc[-1]
            )

        # ----------------------------------------------------
        # Store original values
        # ----------------------------------------------------

        original_rainfall = float(
            baseline_row[
                "imd_rainfall_mm"
            ].iloc[0]
        )

        original_temperature = float(
            baseline_row[
                "temperature_2m"
            ].iloc[0]
        )

        original_pressure = float(
            baseline_row[
                "surface_pressure"
            ].iloc[0]
        )

        original_lst = float(
            baseline_row[
                "LST_Celsius"
            ].iloc[0]
        )

        original_ndvi = float(
            baseline_row[
                "NDVI"
            ].iloc[0]
        )

        # ----------------------------------------------------
        # Apply rainfall scenario
        # ----------------------------------------------------

        if scenario.rainfall_mm is not None:

            new_rainfall = (
                scenario.rainfall_mm
            )

        else:

            new_rainfall = (
                original_rainfall
                *
                (
                    1
                    +
                    scenario.rainfall_change_percent
                    / 100
                )
            )

        scenario_row[
            "imd_rainfall_mm"
        ] = new_rainfall

        # ----------------------------------------------------
        # Apply temperature scenario
        # ----------------------------------------------------

        if scenario.temperature_celsius is not None:

            new_temperature = (
                scenario.temperature_celsius
                + 273.15
            )

        else:

            new_temperature = (
                original_temperature
                +
                scenario.temperature_change_c
            )

        scenario_row[
            "temperature_2m"
        ] = new_temperature

        # ----------------------------------------------------
        # Apply pressure scenario
        # ----------------------------------------------------

        if scenario.pressure_hpa is not None:

            new_pressure = (
                scenario.pressure_hpa
                * 100
            )

        else:

            new_pressure = (
                original_pressure
                +
                scenario.pressure_change_hpa
                * 100
            )

        scenario_row[
            "surface_pressure"
        ] = new_pressure

        # ----------------------------------------------------
        # Apply LST scenario
        # ----------------------------------------------------

        if scenario.lst_celsius is not None:

            new_lst = (
                scenario.lst_celsius
            )

        else:

            new_lst = (
                original_lst
                +
                scenario.lst_change_c
            )

        scenario_row[
            "LST_Celsius"
        ] = new_lst

        # ----------------------------------------------------
        # Apply NDVI scenario
        # ----------------------------------------------------

        if scenario.ndvi is not None:

            new_ndvi = (
                scenario.ndvi
            )

        else:

            new_ndvi = (
                original_ndvi
                *
                (
                    1
                    +
                    scenario.ndvi_change_percent
                    / 100
                )
            )

        # Keep NDVI within normal range
        new_ndvi = max(
            0.0,
            min(1.0, new_ndvi)
        )

        scenario_row[
            "NDVI"
        ] = new_ndvi

        # ----------------------------------------------------
        # Predict baseline
        # ----------------------------------------------------

        baseline_predictions = {}

        scenario_predictions = {}

        for name, current_model in models.items():

            X_baseline = prepare_features(
                current_model,
                baseline_row
            )

            X_scenario = prepare_features(
                current_model,
                scenario_row
            )

            baseline_prediction = (
                current_model.predict(
                    X_baseline
                )[0]
            )

            scenario_prediction = (
                current_model.predict(
                    X_scenario
                )[0]
            )

            baseline_predictions[name] = float(
                baseline_prediction
            )

            scenario_predictions[name] = float(
                scenario_prediction
            )

        # ----------------------------------------------------
        # Format predictions
        # ----------------------------------------------------

        baseline = format_predictions(
            baseline_predictions
        )

        simulated = format_predictions(
            scenario_predictions
        )

        # ----------------------------------------------------
        # Calculate impact
        # ----------------------------------------------------

        impact = {

            "rainfall_mm":
                simulated["rainfall_mm"]
                -
                baseline["rainfall_mm"],

            "temperature_celsius":
                simulated["temperature_celsius"]
                -
                baseline["temperature_celsius"],

            "pressure_hpa":
                simulated["pressure_hpa"]
                -
                baseline["pressure_hpa"],

            "lst_celsius":
                simulated["lst_celsius"]
                -
                baseline["lst_celsius"],

            "ndvi":
                simulated["ndvi"]
                -
                baseline["ndvi"]
        }

        # ----------------------------------------------------
        # Return result
        # ----------------------------------------------------

        return {

            "simulation":
                "What-If Climate Scenario",

            "date":
                latest_date,

            "scenario_inputs": {

                "rainfall_change_percent":
                    scenario.rainfall_change_percent,

                "temperature_change_c":
                    scenario.temperature_change_c,

                "pressure_change_hpa":
                    scenario.pressure_change_hpa,

                "lst_change_c":
                    scenario.lst_change_c,

                "ndvi_change_percent":
                    scenario.ndvi_change_percent
            },

            "baseline":
                baseline,

            "scenario":
                simulated,

            "impact":
                impact,

            "interpretation": (
                "Impact represents the difference between "
                "the simulated scenario and the baseline "
                "prediction. Positive values indicate an "
                "increase, while negative values indicate "
                "a decrease."
            ),

            "note": (
                "What-If results are AI-based model "
                "simulations and should not be interpreted "
                "as guaranteed real-world outcomes."
            )
        }

    except HTTPException:

        raise

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=(
                f"What-If simulation failed: {str(e)}"
            )
        )


# ============================================================
# OLD RAINFALL ENDPOINT
# ============================================================

@app.get("/prediction/rainfall")
def predict_rainfall():

    result = predict_multiple()

    return {

        "model":
            "XGBoost",

        "prediction_type":
            "rainfall",

        "predicted_rainfall_mm":
            result[
                "predictions"
            ][
                "rainfall_mm"
            ],

        "date":
            result["date"]
    }


# ============================================================
# API STATUS
# ============================================================

@app.get("/status")
def api_status():

    return {

        "api":
            "Climate Digital Twin API",

        "status":
            "running",

        "models_loaded":
            list(models.keys()),

        "number_of_models":
            len(models),

        "model_directory":
            str(MODEL_DIR),

        "test_file":
            str(TEST_FILE),

        "features":
            [
                "Multi-variable prediction",
                "SHAP explainability",
                "What-If simulation"
            ]
    }