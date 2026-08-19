import pandas as pd
from pathlib import Path

# Input and output paths
input_file = Path("data/processed/ERA5_2015_2025.csv")
output_file = Path("data/processed/ERA5_clean_2015_2025.csv")

# Load dataset
df = pd.read_csv(input_file)

print("Original shape:", df.shape)

# Keep only the required climate variables
required_columns = [
    "date",
    "surface_pressure",
    "temperature_2m",
    "total_precipitation_sum",
    "u_component_of_wind_10m",
    "v_component_of_wind_10m",
    "volumetric_soil_water_layer_1"
]

df = df[required_columns]

# Convert date
df["date"] = pd.to_datetime(df["date"], errors="coerce")

# Convert climate variables to numeric
numeric_columns = [
    "surface_pressure",
    "temperature_2m",
    "total_precipitation_sum",
    "u_component_of_wind_10m",
    "v_component_of_wind_10m",
    "volumetric_soil_water_layer_1"
]

for column in numeric_columns:
    df[column] = pd.to_numeric(df[column], errors="coerce")

# Remove rows with invalid dates
df = df.dropna(subset=["date"])

# Remove duplicate dates
df = df.drop_duplicates(subset=["date"])

# Sort chronologically
df = df.sort_values("date").reset_index(drop=True)

# Check missing values
print("\nMissing values:")
print(df.isnull().sum())

# Save cleaned dataset
df.to_csv(output_file, index=False)

print("\nCleaned shape:", df.shape)
print("Saved to:", output_file)
print("\nFinal columns:")
print(df.columns.tolist())