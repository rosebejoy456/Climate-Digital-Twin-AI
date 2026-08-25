import pandas as pd
from pathlib import Path

# -----------------------------
# Paths
# -----------------------------

INPUT_FILE = Path(
    "data/processed/Climate_Ernakulam_Training_2015_2025.csv"
)

TRAIN_FILE = Path(
    "data/processed/Climate_Ernakulam_Train.csv"
)

TEST_FILE = Path(
    "data/processed/Climate_Ernakulam_Test.csv"
)

# -----------------------------
# Load dataset
# -----------------------------

df = pd.read_csv(
    INPUT_FILE,
    parse_dates=["date"]
)

df = df.sort_values("date").reset_index(drop=True)

# -----------------------------
# Chronological split
# -----------------------------

split_date = pd.Timestamp("2024-01-01")

train = df[df["date"] < split_date].copy()
test = df[df["date"] >= split_date].copy()

# -----------------------------
# Save datasets
# -----------------------------

train.to_csv(TRAIN_FILE, index=False)
test.to_csv(TEST_FILE, index=False)

# -----------------------------
# Validation
# -----------------------------

print("TIME-SERIES SPLIT COMPLETE")
print("---------------------------")

print("\nTRAINING SET")
print("Rows:", len(train))
print("Date:", train["date"].min(), "to", train["date"].max())

print("\nTEST SET")
print("Rows:", len(test))
print("Date:", test["date"].min(), "to", test["date"].max())

print("\nTotal rows:", len(train) + len(test))

print("\nMissing values:")
print("Train:", train.isna().sum().sum())
print("Test:", test.isna().sum().sum())

print("\nSaved:")
print(TRAIN_FILE)
print(TEST_FILE)