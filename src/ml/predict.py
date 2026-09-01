import os
import json
import pandas as pd
import numpy as np
import shap
import matplotlib.pyplot as plt

from pathlib import Path
from xgboost import XGBRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


# ============================================================
# CONFIGURATION
# ============================================================

DATA_FILE = Path(
    "data/processed/Climate_Ernakulam_Features_2015_2025.csv"
)

MODEL_DIR = Path("models/multiple_xgboost")

OUTPUT_DIR = Path("outputs/multiple_predictions")

SHAP_DIR = Path("outputs/shap")


# ============================================================
# PREDICTION TARGETS
# ============================================================

TARGETS = {
    "rainfall": "target_rainfall_next_day",
    "temperature": "target_temperature_next_day",
    "pressure": "target_pressure_next_day",
    "lst": "target_lst_next_day",
    "ndvi": "target_ndvi_next_day"
}


# ============================================================
# LOAD DATA
# ============================================================

print("=" * 70)
print("MULTI-VARIABLE XGBOOST + SHAP PREDICTION PIPELINE")
print("=" * 70)

print("\nLoading feature-engineered dataset...")

if not DATA_FILE.exists():
    raise FileNotFoundError(
        f"Feature dataset not found: {DATA_FILE}"
    )

df = pd.read_csv(
    DATA_FILE,
    parse_dates=["date"]
)

df = df.sort_values("date").reset_index(drop=True)

print(f"Dataset shape: {df.shape}")


# ============================================================
# CHECK TARGETS
# ============================================================

print("\nChecking prediction targets...")

for name, target in TARGETS.items():

    if target not in df.columns:
        raise ValueError(
            f"Missing target column: {target}"
        )

    print(f"  {name:12} -> {target}")

print("All five prediction targets are available.")


# ============================================================
# REMOVE ROWS WITHOUT TARGET VALUES
# ============================================================

df = df.dropna(
    subset=list(TARGETS.values())
).reset_index(drop=True)

print(f"\nDataset after removing target NaN rows: {df.shape}")


# ============================================================
# IDENTIFY FEATURES
# ============================================================

# Columns that must NOT be used as input features
exclude_columns = [
    "date",
    "target_rainfall_next_day",
    "target_temperature_next_day",
    "target_pressure_next_day",
    "target_lst_next_day",
    "target_ndvi_next_day"
]


feature_columns = [
    column
    for column in df.columns
    if column not in exclude_columns
]


print("\nNumber of input features:", len(feature_columns))

print("\nInput features:")
for feature in feature_columns:
    print("  -", feature)


# ============================================================
# PREPARE FEATURES
# ============================================================

X = df[feature_columns].copy()

# Convert everything to numeric
X = X.apply(
    pd.to_numeric,
    errors="coerce"
)

# Replace infinite values
X = X.replace(
    [np.inf, -np.inf],
    np.nan
)

# Fill missing values
X = X.fillna(
    X.median(numeric_only=True)
)

print("\nFeature matrix shape:", X.shape)


# ============================================================
# TIME-BASED TRAIN / TEST SPLIT
# ============================================================

# Use first 80% for training
# Last 20% for testing

split_index = int(
    len(df) * 0.80
)

X_train = X.iloc[:split_index].copy()
X_test = X.iloc[split_index:].copy()

print("\nTime-based split:")
print("Training rows:", len(X_train))
print("Testing rows :", len(X_test))


# ============================================================
# CREATE DIRECTORIES
# ============================================================

MODEL_DIR.mkdir(
    parents=True,
    exist_ok=True
)

OUTPUT_DIR.mkdir(
    parents=True,
    exist_ok=True
)

SHAP_DIR.mkdir(
    parents=True,
    exist_ok=True
)


# ============================================================
# RESULTS STORAGE
# ============================================================

all_predictions = pd.DataFrame()

if "date" in df.columns:

    all_predictions["date"] = (
        df.iloc[split_index:]["date"].values
    )


metrics = []


# ============================================================
# TRAIN FIVE XGBOOST MODELS
# ============================================================

for prediction_name, target_column in TARGETS.items():

    print("\n" + "=" * 70)
    print(f"TRAINING MODEL: {prediction_name.upper()}")
    print("=" * 70)

    y = pd.to_numeric(
        df[target_column],
        errors="coerce"
    )

    y_train = y.iloc[:split_index]
    y_test = y.iloc[split_index:]

    # --------------------------------------------------------
    # XGBOOST MODEL
    # --------------------------------------------------------

    model = XGBRegressor(
        n_estimators=500,
        max_depth=6,
        learning_rate=0.05,
        subsample=0.8,
        colsample_bytree=0.8,
        objective="reg:squarederror",
        random_state=42,
        n_jobs=-1
    )

    print("Training XGBoost...")

    model.fit(
        X_train,
        y_train,
        verbose=False
    )

    print("Training completed.")

    # --------------------------------------------------------
    # PREDICTION
    # --------------------------------------------------------

    predictions = model.predict(X_test)

    # --------------------------------------------------------
    # METRICS
    # --------------------------------------------------------

    mae = mean_absolute_error(
        y_test,
        predictions
    )

    rmse = np.sqrt(
        mean_squared_error(
            y_test,
            predictions
        )
    )

    r2 = r2_score(
        y_test,
        predictions
    )

    print("\nModel performance:")
    print(f"MAE  : {mae:.4f}")
    print(f"RMSE : {rmse:.4f}")
    print(f"R2   : {r2:.4f}")

    # --------------------------------------------------------
    # SAVE MODEL
    # --------------------------------------------------------

    model_file = (
        MODEL_DIR /
        f"xgboost_{prediction_name}.json"
    )

    model.save_model(
        model_file
    )

    print("\nModel saved:")
    print(model_file)

    # --------------------------------------------------------
    # SAVE PREDICTIONS
    # --------------------------------------------------------

    all_predictions[
        f"actual_{prediction_name}"
    ] = y_test.values

    all_predictions[
        f"predicted_{prediction_name}"
    ] = predictions

    all_predictions[
        f"error_{prediction_name}"
    ] = (
        y_test.values - predictions
    )

    # --------------------------------------------------------
    # STORE METRICS
    # --------------------------------------------------------

    metrics.append({
        "prediction": prediction_name,
        "target": target_column,
        "MAE": mae,
        "RMSE": rmse,
        "R2": r2
    })

    # ========================================================
    # SHAP EXPLANATION
    # ========================================================

    print("\nCalculating SHAP values...")

    # Use a sample to keep SHAP computation manageable
    shap_sample_size = min(
        500,
        len(X_test)
    )

    X_shap = X_test.iloc[
        :shap_sample_size
    ]

    explainer = shap.TreeExplainer(
        model
    )

    shap_values = explainer.shap_values(
        X_shap
    )

    # --------------------------------------------------------
    # SHAP SUMMARY PLOT
    # --------------------------------------------------------

    shap_plot_file = (
        SHAP_DIR /
        f"shap_{prediction_name}.png"
    )

    plt.figure()

    shap.summary_plot(
        shap_values,
        X_shap,
        show=False
    )

    plt.tight_layout()

    plt.savefig(
        shap_plot_file,
        dpi=300,
        bbox_inches="tight"
    )

    plt.close()

    print("SHAP plot saved:")
    print(shap_plot_file)

    # --------------------------------------------------------
    # SHAP FEATURE IMPORTANCE
    # --------------------------------------------------------

    mean_shap = np.abs(
        shap_values
    ).mean(axis=0)

    shap_importance = pd.DataFrame({
        "feature": X_shap.columns,
        "mean_abs_shap": mean_shap
    })

    shap_importance = (
        shap_importance
        .sort_values(
            "mean_abs_shap",
            ascending=False
        )
        .reset_index(drop=True)
    )

    shap_csv_file = (
        SHAP_DIR /
        f"shap_{prediction_name}_importance.csv"
    )

    shap_importance.to_csv(
        shap_csv_file,
        index=False
    )

    print("SHAP importance saved:")
    print(shap_csv_file)

    # --------------------------------------------------------
    # DISPLAY TOP SHAP FEATURES
    # --------------------------------------------------------

    print("\nTop 10 important features:")

    print(
        shap_importance
        .head(10)
        .to_string(index=False)
    )


# ============================================================
# SAVE ALL PREDICTIONS
# ============================================================

prediction_file = (
    OUTPUT_DIR /
    "multi_xgboost_predictions.csv"
)

all_predictions.to_csv(
    prediction_file,
    index=False
)

print("\n" + "=" * 70)
print("ALL PREDICTIONS SAVED")
print("=" * 70)

print(prediction_file)


# ============================================================
# SAVE MODEL METRICS
# ============================================================

metrics_df = pd.DataFrame(
    metrics
)

metrics_file = (
    OUTPUT_DIR /
    "multi_xgboost_metrics.csv"
)

metrics_df.to_csv(
    metrics_file,
    index=False
)

print("\nModel metrics saved:")
print(metrics_file)


# ============================================================
# SAVE SUMMARY JSON
# ============================================================

summary = {
    "model": "XGBoost",
    "number_of_predictions": 5,
    "predictions": [
        "rainfall",
        "temperature",
        "pressure",
        "lst",
        "ndvi"
    ],
    "number_of_features": len(feature_columns),
    "training_rows": len(X_train),
    "testing_rows": len(X_test),
    "shap_enabled": True
}

summary_file = (
    OUTPUT_DIR /
    "pipeline_summary.json"
)

with open(
    summary_file,
    "w"
) as file:

    json.dump(
        summary,
        file,
        indent=4
    )


print("\nSummary saved:")
print(summary_file)


# ============================================================
# FINAL RESULTS
# ============================================================

print("\n" + "=" * 70)
print("FINAL MULTI-PREDICTION RESULTS")
print("=" * 70)

print(
    metrics_df.to_string(
        index=False
    )
)

print("\n" + "=" * 70)
print("MULTI-VARIABLE XGBOOST + SHAP PIPELINE COMPLETE")
print("=" * 70)