import numpy as np
import pandas as pd
from pathlib import Path

# --------------------------------------------------
# FOLDERS
# --------------------------------------------------

input_file = Path("data/raw/dem/N10E076.hgt")
output_folder = Path("data/processed")
output_folder.mkdir(parents=True, exist_ok=True)

output_file = output_folder / "DEM_Ernakulam_2015_2025.csv"

# --------------------------------------------------
# SRTM PARAMETERS
# --------------------------------------------------

NROWS = 3601
NCOLS = 3601

# N10E076 means:
# latitude: 10° to 11° N
# longitude: 76° to 77° E

south = 10.0
west = 76.0

resolution = 1 / 3600

# --------------------------------------------------
# ERNAKULAM APPROXIMATE BOUNDING BOX
# --------------------------------------------------

LAT_MIN = 9.9
LAT_MAX = 10.3

LON_MIN = 76.0
LON_MAX = 76.8

# --------------------------------------------------
# READ HGT
# --------------------------------------------------

print("Reading DEM...")

data = np.fromfile(input_file, dtype=">i2")

expected = NROWS * NCOLS

print("Total elevation values:", data.size)
print("Expected:", expected)

if data.size != expected:
    raise ValueError("Unexpected HGT file size!")

data = data.reshape((NROWS, NCOLS))

# --------------------------------------------------
# CREATE COORDINATES
# --------------------------------------------------

latitudes = south + np.arange(NROWS) * resolution
longitudes = west + np.arange(NCOLS) * resolution

# HGT rows are stored north → south,
# so reverse latitude indexing.

latitudes = latitudes[::-1]

# --------------------------------------------------
# SELECT ERNAKULAM AREA
# --------------------------------------------------

lat_mask = (latitudes >= LAT_MIN) & (latitudes <= LAT_MAX)
lon_mask = (longitudes >= LON_MIN) & (longitudes <= LON_MAX)

selected_data = data[np.ix_(lat_mask, lon_mask)]

selected_lats = latitudes[lat_mask]
selected_lons = longitudes[lon_mask]

# --------------------------------------------------
# CONVERT TO TABLE
# --------------------------------------------------

lat_grid, lon_grid = np.meshgrid(
    selected_lats,
    selected_lons,
    indexing="ij"
)

df = pd.DataFrame({
    "latitude": lat_grid.ravel(),
    "longitude": lon_grid.ravel(),
    "elevation_m": selected_data.ravel()
})

# Remove SRTM missing-data value
df = df[df["elevation_m"] != -32768]

# --------------------------------------------------
# STATISTICS
# --------------------------------------------------

print("\nDEM CLEANING COMPLETE")
print("-----------------------------")

print("Shape:", df.shape)

print("\nMissing values:")
print(df.isnull().sum())

print("\nElevation statistics:")
print(df["elevation_m"].describe())

print("\nMinimum elevation:", df["elevation_m"].min())
print("Maximum elevation:", df["elevation_m"].max())

# --------------------------------------------------
# SAVE
# --------------------------------------------------

df.to_csv(output_file, index=False)

print("\nSaved to:")
print(output_file)