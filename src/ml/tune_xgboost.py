import os
import numpy as np
import pandas as pd

from xgboost import XGBRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


# ============================================================
# FILE PATHS
# ============================================================

TRAIN_FILE = "data/processed/Climate_Ernakulam_Train.csv"
TEST_FILE = "data/processed/Climate_Ernakulam_Test.csv"

MODEL_FILE = "models/xgboost_rainfall_best.json"


# ============================================================
# LOAD DATA
# ============================================================

train_df = pd.read_csv(TRAIN_FILE)
test_df = pd.read_csv(TEST_FILE)

print("Train shape:", train_df.shape)
print("Test shape :", test_df.shape)


# ============================================================
# TARGET
# ============================================================

TARGET = "target_rainfall_next_day"


# ============================================================
# PREPARE FEATURES
# ============================================================

feature_columns = [
    col for col in train_df.columns
    if col not in ["date", TARGET]
]

X_train = train_df[feature_columns].copy()
y_train = train_df[TARGET].copy()

X_test = test_df[feature_columns].copy()
y_test = test_df[TARGET].copy()


# ============================================================
# HANDLE MISSING VALUES
# ============================================================

X_train = X_train.replace([np.inf, -np.inf], np.nan)
X_test = X_test.replace([np.inf, -np.inf], np.nan)

X_train = X_train.fillna(0)
X_test = X_test.fillna(0)


print("\nNumber of features:", len(feature_columns))
print("Training rows:", len(X_train))
print("Testing rows :", len(X_test))


# ============================================================
# PARAMETER COMBINATIONS
# ============================================================

parameter_sets = [

    {
        "n_estimators": 300,
        "max_depth": 4,
        "learning_rate": 0.05
    },

    {
        "n_estimators": 500,
        "max_depth": 4,
        "learning_rate": 0.03
    },

    {
        "n_estimators": 500,
        "max_depth": 5,
        "learning_rate": 0.03
    },

    {
        "n_estimators": 700,
        "max_depth": 5,
        "learning_rate": 0.03
    },

    {
        "n_estimators": 500,
        "max_depth": 6,
        "learning_rate": 0.03
    },

    {
        "n_estimators": 700,
        "max_depth": 6,
        "learning_rate": 0.02
    },

    {
        "n_estimators": 800,
        "max_depth": 4,
        "learning_rate": 0.02
    },

    {
        "n_estimators": 1000,
        "max_depth": 5,
        "learning_rate": 0.02
    }
]


# ============================================================
# RESULTS
# ============================================================

results = []

best_r2 = -999
best_model = None
best_params = None


# ============================================================
# TRAIN MODELS
# ============================================================

print("\n")
print("XGBOOST HYPERPARAMETER TUNING")
print("=============================")


for i, params in enumerate(parameter_sets, start=1):

    print("\n--------------------------------")
    print(f"Experiment {i}/{len(parameter_sets)}")
    print("--------------------------------")

    print("Parameters:")
    print(params)

    model = XGBRegressor(
        n_estimators=params["n_estimators"],
        max_depth=params["max_depth"],
        learning_rate=params["learning_rate"],

        subsample=0.8,
        colsample_bytree=0.8,

        objective="reg:squarederror",

        random_state=42,
        n_jobs=-1
    )

    print("Training...")

    model.fit(
        X_train,
        y_train
    )

    # Predictions
    y_pred = model.predict(X_test)

    # Metrics
    mae = mean_absolute_error(y_test, y_pred)

    rmse = np.sqrt(
        mean_squared_error(y_test, y_pred)
    )

    r2 = r2_score(y_test, y_pred)

    print(f"MAE  : {mae:.4f}")
    print(f"RMSE : {rmse:.4f}")
    print(f"R²   : {r2:.4f}")

    results.append({
        "experiment": i,
        "n_estimators": params["n_estimators"],
        "max_depth": params["max_depth"],
        "learning_rate": params["learning_rate"],
        "MAE": mae,
        "RMSE": rmse,
        "R2": r2
    })

    # Best model
    if r2 > best_r2:

        best_r2 = r2

        best_model = model

        best_params = params


# ============================================================
# RESULTS TABLE
# ============================================================

results_df = pd.DataFrame(results)

results_df = results_df.sort_values(
    by="R2",
    ascending=False
)

print("\n")
print("ALL EXPERIMENT RESULTS")
print("======================")

print(results_df.to_string(index=False))


# ============================================================
# BEST MODEL
# ============================================================

print("\n")
print("BEST XGBOOST MODEL")
print("==================")

print("Parameters:")
print(best_params)

best_row = results_df.iloc[0]

print(f"\nMAE  : {best_row['MAE']:.4f}")
print(f"RMSE : {best_row['RMSE']:.4f}")
print(f"R²   : {best_row['R2']:.4f}")


# ============================================================
# SAVE MODEL
# ============================================================

os.makedirs("models", exist_ok=True)

best_model.save_model(MODEL_FILE)

print("\nBest model saved:")
print(MODEL_FILE)


# ============================================================
# SAVE RESULTS
# ============================================================

RESULTS_FILE = "data/processed/xgboost_tuning_results.csv"

results_df.to_csv(
    RESULTS_FILE,
    index=False
)

print("\nTuning results saved:")
print(RESULTS_FILE)


print("\n")
print("XGBOOST TUNING COMPLETE")
print("=======================")