import numpy as np
import pandas as pd
from pathlib import Path

# -----------------------------
# Paths
# -----------------------------
INPUT_DIR = Path("data/raw/imd_temperature")
OUTPUT_FILE = Path("data/processed/IMD_Temperature_Ernakulam_2015_2025.csv")

# Ernakulam nearest 1° IMD grid
TARGET_LAT = 9.5
TARGET_LON = 76.5

# IMD temperature grid
LATS = np.arange(7.5, 38.5, 1.0)
LONS = np.arange(67.5, 98.5, 1.0)

lat_idx = np.argmin(np.abs(LATS - TARGET_LAT))
lon_idx = np.argmin(np.abs(LONS - TARGET_LON))

print("Selected grid:")
print("Latitude:", LATS[lat_idx])
print("Longitude:", LONS[lon_idx])

records = []

for year in range(2015, 2026):

    max_file = INPUT_DIR / f"Maxtemp_MaxT_{year}.GRD"
    min_file = INPUT_DIR / f"Mintemp_MinT_{year}.GRD"

    print(f"\nReading {year}...")

    # Number of days
    days = 366 if pd.Timestamp(f"{year}-12-31").dayofyear == 366 else 365

    # Read binary files as little-endian float32
    max_data = np.fromfile(max_file, dtype="<f4")
    min_data = np.fromfile(min_file, dtype="<f4")

    print("Max values:", len(max_data))
    print("Min values:", len(min_data))

    # Check expected size
    expected = days * 31 * 31

    if len(max_data) != expected:
        print("WARNING: MaxTemp file size does not match expected size.")

    if len(min_data) != expected:
        print("WARNING: MinTemp file size does not match expected size.")

    # Reshape into:
    # day × latitude × longitude
    max_data = max_data.reshape(days, 31, 31)
    min_data = min_data.reshape(days, 31, 31)

    # Extract Ernakulam grid cell
    max_values = max_data[:, lat_idx, lon_idx]
    min_values = min_data[:, lat_idx, lon_idx]

    dates = pd.date_range(
        start=f"{year}-01-01",
        periods=days,
        freq="D"
    )

    for i in range(days):
        max_temp = float(max_values[i])
        min_temp = float(min_values[i])

        # IMD missing value
        if max_temp >= 99:
            max_temp = np.nan

        if min_temp >= 99:
            min_temp = np.nan

        records.append({
            "date": dates[i],
            "IMD_MaxTemp_C": max_temp,
            "IMD_MinTemp_C": min_temp
        })

# -----------------------------
# Create DataFrame
# -----------------------------
df = pd.DataFrame(records)

OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

df.to_csv(OUTPUT_FILE, index=False)

print("\n==============================")
print("IMD TEMPERATURE EXTRACTION DONE")
print("==============================")

print("Rows:", len(df))
print("Columns:", df.columns.tolist())

print("\nMissing values:")
print(df.isnull().sum())

print("\nTemperature ranges:")
print("MaxTemp:", df["IMD_MaxTemp_C"].min(), "to", df["IMD_MaxTemp_C"].max())
print("MinTemp:", df["IMD_MinTemp_C"].min(), "to", df["IMD_MinTemp_C"].max())

print("\nSaved:")
print(OUTPUT_FILE)