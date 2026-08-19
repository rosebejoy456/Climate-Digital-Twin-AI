import pandas as pd
from pathlib import Path

# Input and output files
input_file = Path("data/processed/ERA5_complete_2015_2025.csv")
output_file = Path("data/processed/ERA5_standardized_2015_2025.csv")

# Read complete ERA5 dataset
df = pd.read_csv(input_file)

# Convert temperature from Kelvin to Celsius
df["temperature_2m"] = df["temperature_2m"] - 273.15
df["dewpoint_temperature_2m"] = df["dewpoint_temperature_2m"] - 273.15

# Convert surface pressure from Pa to hPa
df["surface_pressure"] = df["surface_pressure"] / 100

# Convert precipitation from metres to millimetres
df["total_precipitation_sum"] = df["total_precipitation_sum"] * 1000

# Save standardized dataset
df.to_csv(output_file, index=False)

print("Standardization completed.")
print("Shape:", df.shape)
print("Saved to:", output_file)

print("\nColumns:")
print(df.columns.tolist())

print("\nFirst 5 rows:")
print(df.head())