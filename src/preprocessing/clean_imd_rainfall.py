import xarray as xr
import pandas as pd
from pathlib import Path

# -----------------------------------------
# Folders
# -----------------------------------------

input_folder = Path("data/raw/imd_rainfall")
output_folder = Path("data/processed")

output_folder.mkdir(parents=True, exist_ok=True)

# -----------------------------------------
# Ernakulam approximate bounding box
# -----------------------------------------

LAT_MIN = 9.5
LAT_MAX = 10.5

LON_MIN = 76.0
LON_MAX = 77.0

# -----------------------------------------
# Find all IMD rainfall files
# -----------------------------------------

files = sorted(input_folder.glob("RF25_ind*_rfp25.nc"))

print("Files found:", len(files))

# -----------------------------------------
# Process each year
# -----------------------------------------

datasets = []

for file in files:

    print("\nProcessing:", file.name)

    ds = xr.open_dataset(file)

    # Select Ernakulam region
    ds_region = ds.sel(
        LATITUDE=slice(LAT_MIN, LAT_MAX),
        LONGITUDE=slice(LON_MIN, LON_MAX)
    )

    print("Selected dimensions:", ds_region.dims)

    # Keep only rainfall
    rainfall = ds_region["RAINFALL"]

    # Convert to dataframe
    df = rainfall.to_dataframe().reset_index()

    datasets.append(df)

    ds.close()

# -----------------------------------------
# Merge all years
# -----------------------------------------

df = pd.concat(datasets, ignore_index=True)

# -----------------------------------------
# Rename columns
# -----------------------------------------

df = df.rename(columns={
    "TIME": "date",
    "LATITUDE": "latitude",
    "LONGITUDE": "longitude",
    "RAINFALL": "rainfall"
})

# -----------------------------------------
# Convert date
# -----------------------------------------

df["date"] = pd.to_datetime(df["date"])

# -----------------------------------------
# Remove invalid rainfall values
# -----------------------------------------

df.loc[df["rainfall"] < 0, "rainfall"] = pd.NA

# -----------------------------------------
# Sort data
# -----------------------------------------

df = df.sort_values(
    ["date", "latitude", "longitude"]
).reset_index(drop=True)

# -----------------------------------------
# Check data
# -----------------------------------------

print("\nFinal shape:", df.shape)

print("\nMissing values:")
print(df.isnull().sum())

print("\nDate range:")
print(df["date"].min(), "to", df["date"].max())

print("\nLatitude range:")
print(df["latitude"].min(), "to", df["latitude"].max())

print("\nLongitude range:")
print(df["longitude"].min(), "to", df["longitude"].max())

# -----------------------------------------
# Save
# -----------------------------------------

output_file = output_folder / "IMD_rainfall_Ernakulam_2015_2025.csv"

df.to_csv(output_file, index=False)

print("\nSaved to:", output_file)