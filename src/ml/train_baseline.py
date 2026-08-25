import pandas as pd
from pathlib import Path

from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler


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
# Select target
# -----------------------------

TARGET = "target_rainfall_next_day"


# -----------------------------
# Select features
# -----------------------------

exclude_columns = [
    "date",
    TARGET,
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


print("\nNumber of features:", len(feature_columns))


# -----------------------------
# Standardize features
# -----------------------------

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)

X_test_scaled = scaler.transform(X_test)


# -----------------------------
# Train Linear Regression
# -----------------------------

model = LinearRegression()

model.fit(
    X_train_scaled,
    y_train
)


# -----------------------------
# Predict
# -----------------------------

predictions = model.predict(
    X_test_scaled
)


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

print("\nLINEAR REGRESSION RESULTS")
print("-------------------------")

print("MAE :", round(mae, 4))
print("RMSE:", round(rmse, 4))
print("R²  :", round(r2, 4))