import pandas as pd
from pathlib import Path

# Folder containing Additional ERA5 files
raw_folder = Path("data/raw/era5")

# Output file
output_file = Path("data/processed/ERA5_Additional_clean_2015_2025.csv")

# Find all Additional ERA5 files
files = sorted(raw_folder.glob("Ernakulam_ERA5_Additional_*.csv"))

print("Files found:", len(files))

# Columns we actually need
keep_columns = [
    "date",
    "dewpoint_temperature_2m",
    "potential_evaporation_sum",
    "runoff_sum",
    "surface_runoff_sum",
    "surface_solar_radiation_downwards_sum"
]

dataframes = []

for file in files:
    print("Reading:", file.name)

    df = pd.read_csv(file)

    # Keep only required columns
    df = df[keep_columns]

    dataframes.append(df)

# Merge all years
df = pd.concat(dataframes, ignore_index=True)

# Convert date to proper datetime
df["date"] = pd.to_datetime(df["date"], errors="coerce")

# Remove rows with invalid dates
df = df.dropna(subset=["date"])

# Remove duplicate dates
df = df.drop_duplicates(subset=["date"])

# Sort chronologically
df = df.sort_values("date").reset_index(drop=True)

# Check missing values
print("\nMissing values:")
print(df.isnull().sum())

# Check duplicate dates
print("\nDuplicate dates:", df["date"].duplicated().sum())

# Create output folder
output_file.parent.mkdir(parents=True, exist_ok=True)

# Save cleaned dataset
df.to_csv(output_file, index=False)

print("\nCleaned Additional ERA5 dataset")
print("Shape:", df.shape)
print("Saved to:", output_file)
print("Columns:")
print(df.columns.tolist())