import xarray as xr
import pandas as pd
from pathlib import Path

# -----------------------------------------
# Folders
# -----------------------------------------

input_folder = Path("data/raw/chirps")
output_folder = Path("data/processed")

output_folder.mkdir(parents=True, exist_ok=True)

# -----------------------------------------
# Ernakulam bounding box
# -----------------------------------------

LAT_MIN = 9.5
LAT_MAX = 10.5

LON_MIN = 76.0
LON_MAX = 77.5

# -----------------------------------------
# Find CHIRPS NetCDF files
# -----------------------------------------

files = sorted(input_folder.rglob("*.nc"))

print("CHIRPS files found:", len(files))

if not files:
    raise FileNotFoundError("No CHIRPS .nc files found.")

# -----------------------------------------
# Process each file
# -----------------------------------------

all_data = []

for file in files:

    print("\nProcessing:", file.name)

    ds = xr.open_dataset(file)

    # Select Ernakulam region
    region = ds["precip"].sel(
        latitude=slice(LAT_MIN, LAT_MAX),
        longitude=slice(LON_MIN, LON_MAX)
    )

    # Spatial average over Ernakulam
    rainfall = region.mean(
        dim=["latitude", "longitude"],
        skipna=True
    )

    # Convert to pandas DataFrame
    temp = rainfall.to_dataframe(name="chirps_rainfall_mm").reset_index()

    all_data.append(temp)

    ds.close()

# -----------------------------------------
# Combine all years
# -----------------------------------------

df = pd.concat(all_data, ignore_index=True)

# -----------------------------------------
# Clean
# -----------------------------------------

df["time"] = pd.to_datetime(df["time"], errors="coerce")

df["chirps_rainfall_mm"] = pd.to_numeric(
    df["chirps_rainfall_mm"],
    errors="coerce"
)

df = df.dropna(
    subset=["time", "chirps_rainfall_mm"]
)

# Rainfall cannot be negative
df = df[df["chirps_rainfall_mm"] >= 0]

# Remove duplicate dates
df = df.drop_duplicates(subset=["time"])

# Sort by date
df = df.sort_values("time").reset_index(drop=True)

# Rename time → date
df = df.rename(columns={"time": "date"})

# -----------------------------------------
# Validation
# -----------------------------------------

print("\n--------------------------------")
print("CHIRPS CLEANING COMPLETE")
print("--------------------------------")

print("Shape:", df.shape)

print("\nDate range:")
print(df["date"].min(), "to", df["date"].max())

print("\nMissing values:")
print(df.isnull().sum())

print("\nDuplicate dates:")
print(df["date"].duplicated().sum())

print("\nRainfall statistics:")
print(df["chirps_rainfall_mm"].describe())

print("\nMaximum rainfall:")
print(df["chirps_rainfall_mm"].max())

# -----------------------------------------
# Save
# -----------------------------------------

output_file = (
    output_folder /
    "CHIRPS_Rainfall_Ernakulam_2015_2025.csv"
)

df.to_csv(output_file, index=False)

print("\nSaved to:")
print(output_file)