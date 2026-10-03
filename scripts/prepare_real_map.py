import geopandas as gpd
import os

# ============================================================
# INPUT
# ============================================================

input_file = "visualization/data/district.geojson"

# Output file
output_file = "visualization/data/ernakulam_district.geojson"

print("Loading Kerala district GeoJSON...")

# ============================================================
# LOAD DATA
# ============================================================

districts = gpd.read_file(input_file)

print("Loaded successfully.")
print("Available districts:")
print(districts["DISTRICT"].tolist())

# ============================================================
# FILTER ERNAKULAM
# ============================================================

ernakulam = districts[
    districts["DISTRICT"].str.strip().str.lower() == "ernakulam"
].copy()

if ernakulam.empty:
    raise ValueError("Ernakulam district was not found.")

print("\nErnakulam district found.")
print("Number of features:", len(ernakulam))

# ============================================================
# CONVERT TO WGS84
# ============================================================

# Plotly/OpenStreetMap uses longitude/latitude
ernakulam = ernakulam.to_crs(epsg=4326)

print("CRS:", ernakulam.crs)

# ============================================================
# SAVE REAL ERNAKULAM GEOJSON
# ============================================================

ernakulam.to_file(
    output_file,
    driver="GeoJSON"
)

print("\nReal Ernakulam GeoJSON created successfully:")
print(output_file)

# ============================================================
# BASIC INFORMATION
# ============================================================

print("\nGeometry:")
print(ernakulam.geometry.iloc[0])

print("\nBounds:")
print(ernakulam.total_bounds)

print("\nDONE.")