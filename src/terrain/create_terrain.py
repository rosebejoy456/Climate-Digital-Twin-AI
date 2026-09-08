import os
import json
import numpy as np


# ============================================================
# Configuration
# ============================================================

DEM_DIR = r"data/raw/dem"
OUTPUT_FILE = r"visualization/data/terrain.json"

# Ernakulam District coverage
MIN_LAT = 9.5
MAX_LAT = 10.3

MIN_LON = 76.0
MAX_LON = 76.8

# Final terrain resolution for Three.js
OUTPUT_ROWS = 200
OUTPUT_COLS = 200


# ============================================================
# Load SRTM HGT file
# ============================================================

def load_hgt(filename):

    path = os.path.join(DEM_DIR, filename)

    print(f"Loading {filename}...")

    if not os.path.exists(path):
        raise FileNotFoundError(
            f"Missing SRTM file: {path}"
        )

    data = np.fromfile(
        path,
        dtype=">i2"
    )

    expected_size = 3601 * 3601

    if data.size != expected_size:
        raise ValueError(
            f"{filename} has {data.size} values, "
            f"expected {expected_size}"
        )

    data = data.reshape(
        (3601, 3601)
    )

    # SRTM missing-data value
    data = data.astype(np.float32)
    data[data == -32768] = np.nan

    print(
        f"{filename} loaded: {data.shape}"
    )

    return data


# ============================================================
# Load both tiles
# ============================================================

print("\nLoading SRTM elevation data...")

north_tile = load_hgt(
    "N10E076.hgt"
)

south_tile = load_hgt(
    "N09E076.hgt"
)


# ============================================================
# Merge tiles
#
# N10E076 = 10°N to 11°N
# N09E076 =  9°N to 10°N
#
# HGT rows are ordered from north to south.
# Therefore N10 comes first, followed by N09.
# ============================================================

print("\nMerging SRTM tiles...")

merged = np.vstack(
    (
        north_tile,
        south_tile
    )
)

print(
    f"Merged elevation grid: {merged.shape}"
)


# ============================================================
# Crop to Ernakulam area
# ============================================================

# The merged grid covers:
#
# Latitude: 11°N -> 9°N
# Longitude: 76°E -> 77°E
#
# Each degree contains 3600 intervals.

resolution = 3600


# Latitude row indices
row_start = int(
    round(
        (11.0 - MAX_LAT) * resolution
    )
)

row_end = int(
    round(
        (11.0 - MIN_LAT) * resolution
    )
) + 1


# Longitude column indices
col_start = int(
    round(
        (MIN_LON - 76.0) * resolution
    )
)

col_end = int(
    round(
        (MAX_LON - 76.0) * resolution
    )
) + 1


cropped = merged[
    row_start:row_end,
    col_start:col_end
]

print(
    f"Cropped elevation grid: {cropped.shape}"
)


# ============================================================
# Downsample to manageable resolution
# ============================================================

print("\nDownsampling terrain...")

row_indices = np.linspace(
    0,
    cropped.shape[0] - 1,
    OUTPUT_ROWS
).astype(int)

col_indices = np.linspace(
    0,
    cropped.shape[1] - 1,
    OUTPUT_COLS
).astype(int)


terrain = cropped[
    np.ix_(
        row_indices,
        col_indices
    )
]


# ============================================================
# Handle missing elevation values
# ============================================================

valid_values = terrain[
    np.isfinite(terrain)
]

if valid_values.size == 0:
    raise ValueError(
        "No valid elevation values found."
    )

min_elevation = float(
    np.min(valid_values)
)

max_elevation = float(
    np.max(valid_values)
)

# Replace missing values with minimum elevation
terrain[
    ~np.isfinite(terrain)
] = min_elevation


print(
    f"Final terrain resolution: "
    f"{OUTPUT_ROWS} x {OUTPUT_COLS}"
)

print(
    f"Elevation range: "
    f"{min_elevation} m - "
    f"{max_elevation} m"
)


# ============================================================
# Convert to JSON-friendly format
# ============================================================

terrain_list = terrain.tolist()


terrain_data = {

    "rows": OUTPUT_ROWS,

    "cols": OUTPUT_COLS,

    "elevation_min": min_elevation,

    "elevation_max": max_elevation,

    "min_lat": MIN_LAT,

    "max_lat": MAX_LAT,

    "min_lon": MIN_LON,

    "max_lon": MAX_LON,

    "elevations": terrain_list
}


# ============================================================
# Create output directory
# ============================================================

output_directory = os.path.dirname(
    OUTPUT_FILE
)

os.makedirs(
    output_directory,
    exist_ok=True
)


# ============================================================
# Save terrain JSON
# ============================================================

with open(
    OUTPUT_FILE,
    "w"
) as file:

    json.dump(
        terrain_data,
        file,
        separators=(",", ":")
    )


print("\nTerrain data created successfully!")

print(
    f"Output: "
    f"{os.path.abspath(OUTPUT_FILE)}"
)