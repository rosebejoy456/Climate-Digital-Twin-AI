import pandas as pd
from pathlib import Path

# -----------------------------------------
# Folders
# -----------------------------------------

input_file = Path("data/raw/modis_ndvi/Ernakulam_NDVI_2015_2025.csv")
output_folder = Path("data/processed")

output_folder.mkdir(parents=True, exist_ok=True)

# -----------------------------------------
# Load data
# -----------------------------------------

df = pd.read_csv(input_file)

print("Original shape:", df.shape)
print("Original columns:", df.columns.tolist())

# -----------------------------------------
# Keep required columns
# -----------------------------------------

df = df[["date", "NDVI"]].copy()

# Convert date
df["date"] = pd.to_datetime(df["date"], errors="coerce")

# Convert NDVI to numeric
df["NDVI"] = pd.to_numeric(df["NDVI"], errors="coerce")

# -----------------------------------------
# Remove invalid values
# -----------------------------------------

df = df.dropna(subset=["date", "NDVI"])

# NDVI normally lies between -1 and 1
df = df[(df["NDVI"] >= -1) & (df["NDVI"] <= 1)]

# -----------------------------------------
# Remove duplicate dates
# -----------------------------------------

df = df.drop_duplicates(subset=["date"])

# Sort chronologically
df = df.sort_values("date").reset_index(drop=True)

# -----------------------------------------
# Validation
# -----------------------------------------

print("\nAfter cleaning:")
print("Shape:", df.shape)

print("\nMissing values:")
print(df.isnull().sum())

print("\nDuplicate dates:", df["date"].duplicated().sum())

print("\nDate range:")
print(df["date"].min(), "to", df["date"].max())

print("\nNDVI statistics:")
print(df["NDVI"].describe())

# -----------------------------------------
# Save
# -----------------------------------------

output_file = output_folder / "MODIS_NDVI_Ernakulam_2015_2025.csv"

df.to_csv(output_file, index=False)

print("\nSaved to:")
print(output_file)