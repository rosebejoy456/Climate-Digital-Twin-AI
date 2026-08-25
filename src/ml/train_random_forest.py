import pandas as pd
from pathlib import Path

from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


# -----------------------------
# Paths
# -----------------------------

TRAIN_FILE = Path(
    "data/processed/Climate_Ernakulam_Train.csv"
)

TEST_FILE = Path(
    "data/processed/Climate_Ernakulam_Test.csv"
)


# -----------------------------
# Load data
# -----------------------------

train = pd.read_csv(TRAIN_FILE)
test = pd.read_csv(TEST_FILE)

print("Train shape:", train.shape)
print("Test shape:", test.shape)


# -----------------------------
# Target
# -----------------------------

TARGET = "target_rainfall_next_day"


# -----------------------------
# Features
# -----------------------------

exclude_columns = [
    "date",
    TARGET
]

feature_columns = [
    column
    for column in train.columns
    if column not in exclude_columns
]

X_train = train[feature_columns]
y_train = train[TARGET]

X_test = test[feature_columns]
y_test = test[TARGET]

print("Number of features:", len(feature_columns))


# -----------------------------
# Random Forest
# -----------------------------

model = RandomForestRegressor(
    n_estimators=200,
    max_depth=15,
    min_samples_leaf=2,
    random_state=42,
    n_jobs=-1
)

print("\nTraining Random Forest...")

model.fit(
    X_train,
    y_train
)


# -----------------------------
# Prediction
# -----------------------------

predictions = model.predict(X_test)


# -----------------------------
# Evaluation
# -----------------------------

mae = mean_absolute_error(
    y_test,
    predictions
)

rmse = mean_squared_error(
    y_test,
    predictions
) ** 0.5

r2 = r2_score(
    y_test,
    predictions
)


# -----------------------------
# Results
# -----------------------------

print("\nRANDOM FOREST RESULTS")
print("---------------------")

print("MAE :", round(mae, 4))
print("RMSE:", round(rmse, 4))
print("R²  :", round(r2, 4))