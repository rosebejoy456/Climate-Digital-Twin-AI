import pandas as pd
from xgboost import XGBRegressor

# --------------------------------
# Load datasets
# --------------------------------

TRAIN_FILE = "data/processed/Climate_Ernakulam_Train.csv"

df = pd.read_csv(TRAIN_FILE)

TARGET = "target_rainfall_next_day"

X = df.drop(columns=[TARGET, "date"])
y = df[TARGET]

print("Dataset shape:", X.shape)
print("Number of features:", X.shape[1])

# --------------------------------
# Train XGBoost
# --------------------------------

model = XGBRegressor(
    n_estimators=300,
    max_depth=6,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    objective="reg:squarederror",
    random_state=42
)

model.fit(X, y)

# --------------------------------
# Feature importance
# --------------------------------

importance = pd.DataFrame({
    "feature": X.columns,
    "importance": model.feature_importances_
})

importance = importance.sort_values(
    by="importance",
    ascending=False
)

print("\nTOP 20 IMPORTANT FEATURES")
print("-------------------------")

print(
    importance.head(20).to_string(index=False)
)