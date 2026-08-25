import pandas as pd
from xgboost import XGBRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# --------------------------------
# Load training and test datasets
# --------------------------------

TRAIN_FILE = "data/processed/Climate_Ernakulam_Train.csv"
TEST_FILE = "data/processed/Climate_Ernakulam_Test.csv"

train_df = pd.read_csv(TRAIN_FILE)
test_df = pd.read_csv(TEST_FILE)

# --------------------------------
# Separate features and target
# --------------------------------

TARGET = "target_rainfall_next_day"

X_train = train_df.drop(columns=[TARGET, "date"])
y_train = train_df[TARGET]

X_test = test_df.drop(columns=[TARGET, "date"])
y_test = test_df[TARGET]

print("Train shape:", X_train.shape)
print("Test shape:", X_test.shape)
print("Number of features:", X_train.shape[1])

# --------------------------------
# Train XGBoost
# --------------------------------

print("\nTraining XGBoost...")

model = XGBRegressor(
    n_estimators=300,
    max_depth=6,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    objective="reg:squarederror",
    random_state=42
)

model.fit(X_train, y_train)

# --------------------------------
# Predictions
# --------------------------------

y_pred = model.predict(X_test)

# --------------------------------
# Evaluation
# --------------------------------

mae = mean_absolute_error(y_test, y_pred)
rmse = mean_squared_error(y_test, y_pred) ** 0.5
r2 = r2_score(y_test, y_pred)

print("\nXGBOOST RESULTS")
print("----------------")
print(f"MAE  : {mae:.4f}")
print(f"RMSE : {rmse:.4f}")
print(f"R²   : {r2:.4f}")