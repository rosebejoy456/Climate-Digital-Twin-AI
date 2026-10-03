import geopandas as gpd
from pathlib import Path

# ==========================================
# PATHS
# ==========================================

DATA_DIR = Path("visualization/data")

district_file = DATA_DIR / "ernakulam.geojson"

layers = {
    "roads": DATA_DIR / "roads.geojson",
    "waterways": DATA_DIR / "waterways.geojson",
    "hospitals": DATA_DIR / "hospitals.geojson",
    "railway_stations": DATA_DIR / "railway_stations.geojson",
    "airports": DATA_DIR / "airports.geojson",
}

# ==========================================
# LOAD ERNAKULAM DISTRICT
# ==========================================

print("Loading Ernakulam district...")

district = gpd.read_file(district_file)

print("District CRS:", district.crs)
print("District features:", len(district))

# Make sure everything uses WGS84
if district.crs != "EPSG:4326":
    district = district.to_crs("EPSG:4326")

# ==========================================
# CLIP EACH LAYER
# ==========================================

for name, filepath in layers.items():

    print("\n----------------------------------------")
    print(f"Processing: {name}")
    print("----------------------------------------")

    if not filepath.exists():
        print(f"WARNING: File not found: {filepath}")
        continue

    layer = gpd.read_file(filepath)

    print("Original features:", len(layer))
    print("Original CRS:", layer.crs)

    # Make sure CRS exists
    if layer.crs is None:
        print("CRS missing. Assuming EPSG:4326.")
        layer = layer.set_crs("EPSG:4326")

    # Convert to WGS84
    if layer.crs != "EPSG:4326":
        layer = layer.to_crs("EPSG:4326")

    # Remove invalid/empty geometries
    layer = layer[
        layer.geometry.notna() &
        ~layer.geometry.is_empty
    ].copy()

    # ==========================================
    # CLIP TO ERNAKULAM DISTRICT
    # ==========================================

    clipped = gpd.clip(layer, district)

    # Remove empty geometries after clipping
    clipped = clipped[
        clipped.geometry.notna() &
        ~clipped.geometry.is_empty
    ].copy()

    # ==========================================
    # SAVE
    # ==========================================

    output_file = DATA_DIR / f"{name}_ernakulam.geojson"

    clipped.to_file(
        output_file,
        driver="GeoJSON"
    )

    print("Clipped features:", len(clipped))
    print("Saved:", output_file)

# ==========================================
# COMPLETE
# ==========================================

print("\n========================================")
print("ERNAKULAM GIS CLIPPING COMPLETE")
print("========================================")