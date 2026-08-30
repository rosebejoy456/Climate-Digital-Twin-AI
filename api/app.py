from datetime import datetime
from pathlib import Path

import pandas as pd
from fastapi import FastAPI, HTTPException
from xgboost import XGBRegressor

from engine.state_manager import StateManager, ClimateState


# ============================================================
# CONFIGURATION
# ============================================================

MODEL_FILE = Path("models/xgboost_rainfall_best.json")
TEST_FILE = Path("data/processed/Climate_Ernakulam_Test.csv")


# ============================================================
# CREATE FASTAPI APP
# ============================================================

app = FastAPI(
    title="Climate Digital Twin API",
    description="Backend API for the Climate Digital Twin of Ernakulam",
    version="1.0.0"
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
# LOAD XGBOOST MODEL
# ============================================================

model = None

if MODEL_FILE.exists():
    try:
        model = XGBRegressor()
        model.load_model(MODEL_FILE)
        print("XGBoost rainfall model loaded successfully.")
    except Exception as e:
        print(f"Warning: Could not load XGBoost model: {e}")
else:
    print(f"Warning: Model not found: {MODEL_FILE}")


# ============================================================
# HOME ROUTE
# ============================================================

@app.get("/")
def home():
    return {
        "message": "Welcome to the Climate Digital Twin API!"
    }


# ============================================================
# CURRENT CLIMATE STATE
# ============================================================

@app.get("/state/current")
def get_current_state():

    current = manager.get_current_state()

    if current is None:
        return {
            "message": "No climate data available."
        }

    return {
        "timestamp": current.timestamp.isoformat(),
        "rainfall": current.rainfall,
        "max_temp": current.max_temp,
        "min_temp": current.min_temp,
        "lst": current.lst,
        "sst": current.sst
    }


# ============================================================
# RAINFALL PREDICTION
# ============================================================

@app.get("/prediction/rainfall")
def predict_rainfall():

    # Check model
    if model is None:
        raise HTTPException(
            status_code=500,
            detail="XGBoost rainfall model is not available."
        )

    # Check test dataset
    if not TEST_FILE.exists():
        raise HTTPException(
            status_code=404,
            detail=f"Test dataset not found: {TEST_FILE}"
        )

    try:

        # ----------------------------------------------------
        # Load test data
        # ----------------------------------------------------

        df = pd.read_csv(TEST_FILE)

        if df.empty:
            raise HTTPException(
                status_code=404,
                detail="Test dataset is empty."
            )

        # ----------------------------------------------------
        # Get model feature names
        # ----------------------------------------------------

        booster = model.get_booster()
        model_features = booster.feature_names

        if model_features is None:
            raise HTTPException(
                status_code=500,
                detail="Saved XGBoost model has no feature names."
            )

        # ----------------------------------------------------
        # Check missing features
        # ----------------------------------------------------

        missing_features = [
            feature
            for feature in model_features
            if feature not in df.columns
        ]

        if missing_features:
            raise HTTPException(
                status_code=500,
                detail={
                    "message": "Test dataset is missing model features.",
                    "missing_features": missing_features
                }
            )

        # ----------------------------------------------------
        # Prepare latest row
        # ----------------------------------------------------

        X = df[model_features].copy()

        # Fill missing values
        if X.isnull().sum().sum() > 0:
            X = X.fillna(
                X.median(numeric_only=True)
            )

        # ----------------------------------------------------
        # Predict
        # ----------------------------------------------------

        predictions = model.predict(X)

        latest_prediction = float(predictions[-1])

        # ----------------------------------------------------
        # Get date
        # ----------------------------------------------------

        latest_date = None

        if "date" in df.columns:
            latest_date = str(df["date"].iloc[-1])

        # ----------------------------------------------------
        # Return result
        # ----------------------------------------------------

        return {
            "model": "XGBoost",
            "prediction_type": "rainfall",
            "predicted_rainfall_mm": latest_prediction,
            "date": latest_date,
            "features_used": len(model_features)
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(e)}"
        )


# ============================================================
# API STATUS
# ============================================================

@app.get("/status")
def api_status():

    return {
        "api": "Climate Digital Twin API",
        "status": "running",
        "xgboost_model_loaded": model is not None,
        "model_file": str(MODEL_FILE),
        "test_file": str(TEST_FILE)
    }