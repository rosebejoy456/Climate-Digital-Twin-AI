import pandas as pd
from pathlib import Path

# --------------------------------------------------
# Folders
# --------------------------------------------------

input_file = Path("data/raw/modis_lst/Ernakulam_LST_2015_2025.csv")
output_folder = Path("data/processed")

output_folder.mkdir(parents=True, exist_ok=True)


# --------------------------------------------------
# Load data
# --------------------------------------------------

df = pd.read_csv(input_file)

print("Original shape:", df.shape)
print("Original columns:", df.columns.tolist())


# --------------------------------------------------
# Keep required columns
# --------------------------------------------------

df = df[["date", "LST_Celsius"]].copy()


# --------------------------------------------------
# Convert date
# --------------------------------------------------

df["date"] = pd.to_datetime(
    df["date"],
    errors="coerce"
)


# --------------------------------------------------
# Convert LST to numeric
# --------------------------------------------------

df["LST_Celsius"] = pd.to_numeric(
    df["LST_Celsius"],
    errors="coerce"
)


# --------------------------------------------------
# Remove invalid values
# --------------------------------------------------

df.loc[
    (df["LST_Celsius"] < -20) |
    (df["LST_Celsius"] > 60),
    "LST_Celsius"
] = pd.NA


# --------------------------------------------------
# Remove rows without date
# --------------------------------------------------

df = df.dropna(subset=["date"])


# --------------------------------------------------
# Handle duplicate dates
# --------------------------------------------------

df = (
    df.groupby("date", as_index=False)["LST_Celsius"]
    .mean()
)


# --------------------------------------------------
# Sort by date
# --------------------------------------------------

df = df.sort_values("date").reset_index(drop=True)


# --------------------------------------------------
# Statistics
# --------------------------------------------------

print("\nAfter cleaning:")
print("Shape:", df.shape)

print("\nMissing values:")
print(df.isnull().sum())

print("\nDuplicate dates:", df["date"].duplicated().sum())

print("\nDate range:")
print(df["date"].min(), "to", df["date"].max())

print("\nLST statistics:")
print(df["LST_Celsius"].describe())


# --------------------------------------------------
# Save
# --------------------------------------------------

output_file = output_folder / "MODIS_LST_Ernakulam_2015_2025.csv"

df.to_csv(output_file, index=False)

print("\nSaved to:")
print(output_file)
