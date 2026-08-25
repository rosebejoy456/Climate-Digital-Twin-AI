import pandas as pd
from pathlib import Path

# -----------------------------
# Paths
# -----------------------------

INPUT_FILE = Path(
    "data/processed/Climate_Ernakulam_Features_2015_2025.csv"
)

OUTPUT_FILE = Path(
    "data/processed/Climate_Ernakulam_Training_2015_2025.csv"
)

# -----------------------------
# Load dataset
# -----------------------------

df = pd.read_csv(
    INPUT_FILE,
    parse_dates=["date"]
)

print("Original shape:", df.shape)

# -----------------------------
# Remove rows without target
# -----------------------------

df = df.dropna(
    subset=["target_rainfall_next_day"]
)

# -----------------------------
# Remove rows with missing
# lag features
# -----------------------------

lag_columns = [
    column for column in df.columns
    if "_lag_" in column
]

df = df.dropna(
    subset=lag_columns
)

# -----------------------------
# Sort by date
# -----------------------------

df = df.sort_values("date").reset_index(drop=True)

# -----------------------------
# Save training dataset
# -----------------------------

df.to_csv(
    OUTPUT_FILE,
    index=False
)

# -----------------------------
# Validation
# -----------------------------

print("\nTRAINING DATASET READY")
print("----------------------")
print("Rows:", len(df))
print("Columns:", len(df.columns))
print("Date:", df["date"].min(), "to", df["date"].max())
print(
    "Missing values:",
    df.isna().sum().sum()
)
print(
    "Target missing:",
    df["target_rainfall_next_day"].isna().sum()
)

print("\nTarget statistics:")
print(
    df["target_rainfall_next_day"].describe()
)

print("\nSaved:")
print(OUTPUT_FILE)