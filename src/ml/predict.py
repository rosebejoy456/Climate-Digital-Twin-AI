import os
import pandas as pd
import numpy as np

from xgboost import XGBRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


# ============================================================
# CONFIGURATION
# ============================================================

TEST_FILE = "data/processed/Climate_Ernakulam_Test.csv"
MODEL_FILE = "models/xgboost_rainfall_best.json"
OUTPUT_FILE = "data/processed/xgboost_predictions.csv"


# ============================================================
# LOAD TEST DATA
# ============================================================

print("=" * 60)
print("XGBOOST RAINFALL PREDICTION")
print("=" * 60)

print("\nLoading test dataset...")

if not os.path.exists(TEST_FILE):
    raise FileNotFoundError(
        f"Test dataset not found: {TEST_FILE}"
    )

if not os.path.exists(MODEL_FILE):
    raise FileNotFoundError(
        f"Model not found: {MODEL_FILE}"
    )

df = pd.read_csv(TEST_FILE)

print(f"Test dataset shape: {df.shape}")


# ============================================================
# LOAD MODEL
# ============================================================

print("\nLoading tuned XGBoost model...")

model = XGBRegressor()
model.load_model(MODEL_FILE)

print("Model loaded successfully.")


# ============================================================
# IDENTIFY TARGET COLUMN
# ============================================================

target_candidates = [
    "chirps_rainfall_mm",
    "imd_rainfall_mm",
    "total_precipitation_sum",
    "rainfall_mm",
    "rainfall"
]

TARGET_COLUMN = None

for column in target_candidates:
    if column in df.columns:
        TARGET_COLUMN = column
        break

if TARGET_COLUMN is None:
    raise ValueError(
        "Could not identify rainfall target column.\n"
        f"Available columns: {list(df.columns)}"
    )

print(f"Target column identified: {TARGET_COLUMN}")


# ============================================================
# GET MODEL FEATURE NAMES
# ============================================================

booster = model.get_booster()

model_features = booster.feature_names

if model_features is None:
    raise ValueError(
        "The saved XGBoost model does not contain feature names."
    )

print(f"Number of model features: {len(model_features)}")


# ============================================================
# CHECK REQUIRED FEATURES
# ============================================================

missing_features = [
    feature
    for feature in model_features
    if feature not in df.columns
]

if missing_features:
    print("\nERROR: Missing features in test dataset:")

    for feature in missing_features:
        print(f"  - {feature}")

    raise ValueError(
        "Test dataset does not contain all model features."
    )


print("All model features are available.")


# ============================================================
# PREPARE TEST DATA
# ============================================================

X_test = df[model_features]

y_test = df[TARGET_COLUMN]

print(f"\nX_test shape: {X_test.shape}")
print(f"y_test shape: {y_test.shape}")


# ============================================================
# CHECK MISSING VALUES
# ============================================================

missing_values = X_test.isnull().sum().sum()

print(f"\nMissing feature values: {missing_values}")

if missing_values > 0:

    print("Filling missing values using column medians...")

    X_test = X_test.fillna(
        X_test.median(numeric_only=True)
    )


# ============================================================
# MAKE PREDICTIONS
# ============================================================

print("\nMaking rainfall predictions...")

predictions = model.predict(X_test)

print("Predictions completed.")


# ============================================================
# EVALUATE MODEL
# ============================================================

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


# ============================================================
# DISPLAY RESULTS
# ============================================================

print("\n" + "=" * 60)
print("FINAL XGBOOST PREDICTION RESULTS")
print("=" * 60)

print(f"MAE  : {mae:.4f}")
print(f"RMSE : {rmse:.4f}")
print(f"R²   : {r2:.4f}")


# ============================================================
# CREATE OUTPUT DATAFRAME
# ============================================================

results = pd.DataFrame()

# Preserve date
if "date" in df.columns:
    results["date"] = df["date"]

# Actual rainfall
results["actual_rainfall_mm"] = y_test.values

# Predicted rainfall
results["predicted_rainfall_mm"] = predictions

# Prediction error
results["error_mm"] = (
    results["actual_rainfall_mm"]
    - results["predicted_rainfall_mm"]
)


# ============================================================
# SAVE PREDICTIONS
# ============================================================

os.makedirs(
    os.path.dirname(OUTPUT_FILE),
    exist_ok=True
)

results.to_csv(
    OUTPUT_FILE,
    index=False
)

print("\nPredictions saved to:")
print(OUTPUT_FILE)


# ============================================================
# SHOW SAMPLE PREDICTIONS
# ============================================================

print("\nSample predictions:")
print("-" * 60)

print(
    results.head(10).to_string(index=False)
)


# ============================================================
# COMPLETE
# ============================================================

print("\n" + "=" * 60)
print("PREDICTION PIPELINE COMPLETE")
print("=" * 60)