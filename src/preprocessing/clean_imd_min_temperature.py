from pathlib import Path
import numpy as np
import pandas as pd


# --------------------------------------------------
# Paths
# --------------------------------------------------

INPUT_FOLDER = Path("data/raw/imd_temperature")
OUTPUT_FOLDER = Path("data/processed")

OUTPUT_FOLDER.mkdir(parents=True, exist_ok=True)


# --------------------------------------------------
# IMD 1° Grid
# --------------------------------------------------

LATITUDES = np.arange(6.5, 36.5 + 1, 1.0)
LONGITUDES = np.arange(66.5, 96.5 + 1, 1.0)


# --------------------------------------------------
# Approximate Ernakulam region
# --------------------------------------------------

ERNAKULAM_LAT_MIN = 9.5
ERNAKULAM_LAT_MAX = 10.5

ERNAKULAM_LON_MIN = 75.5
ERNAKULAM_LON_MAX = 77.5


# Find relevant grid cells
lat_indices = np.where(
    (LATITUDES >= ERNAKULAM_LAT_MIN) &
    (LATITUDES <= ERNAKULAM_LAT_MAX)
)[0]

lon_indices = np.where(
    (LONGITUDES >= ERNAKULAM_LON_MIN) &
    (LONGITUDES <= ERNAKULAM_LON_MAX)
)[0]


print("Ernakulam latitude grid points:")
print(LATITUDES[lat_indices])

print("\nErnakulam longitude grid points:")
print(LONGITUDES[lon_indices])


# --------------------------------------------------
# Find minimum-temperature files
# --------------------------------------------------

files = sorted(
    INPUT_FOLDER.glob("Mintemp_MinT_*.GRD")
)

print("\nFiles found:", len(files))

if not files:
    raise FileNotFoundError(
        f"No minimum-temperature GRD files found in {INPUT_FOLDER}"
    )


# --------------------------------------------------
# Process each year
# --------------------------------------------------

all_years = []


for file in files:

    print("\nProcessing:", file.name)

    # Extract year
    year = int(file.stem[-4:])

    # Leap year check
    if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
        days = 366
    else:
        days = 365

    # Read binary file
    data = np.fromfile(
        file,
        dtype="float32"
    )

    expected_values = days * 31 * 31

    print("Year:", year)
    print("Values:", data.size)
    print("Expected:", expected_values)

    if data.size != expected_values:
        raise ValueError(
            f"Unexpected number of values in {file.name}"
        )

    # Reshape:
    # TIME × LATITUDE × LONGITUDE
    data = data.reshape(
        days,
        31,
        31
    )

    # IMD missing-value code
    data[data == 99.9] = np.nan

    # Select Ernakulam-related grid cells
    selected = data[
        :,
        lat_indices.min():lat_indices.max() + 1,
        lon_indices.min():lon_indices.max() + 1
    ]

    # Spatial average
    daily_temperature = np.nanmean(
        selected,
        axis=(1, 2)
    )

    # Dates
    dates = pd.date_range(
        start=f"{year}-01-01",
        periods=days,
        freq="D"
    )

    yearly_df = pd.DataFrame({
        "date": dates,
        "imd_min_temperature": daily_temperature
    })

    all_years.append(yearly_df)

    print(
        "Valid days:",
        yearly_df["imd_min_temperature"].notna().sum()
    )

    print(
        "Temperature range:",
        yearly_df["imd_min_temperature"].min(),
        "to",
        yearly_df["imd_min_temperature"].max()
    )


# --------------------------------------------------
# Combine all years
# --------------------------------------------------

df = pd.concat(
    all_years,
    ignore_index=True
)

df = df.sort_values(
    "date"
).reset_index(drop=True)


# --------------------------------------------------
# Validation
# --------------------------------------------------

print("\n--------------------------------")
print("FINAL DATASET")
print("--------------------------------")

print("Shape:", df.shape)

print(
    "Date range:",
    df["date"].min(),
    "to",
    df["date"].max()
)

print("\nMissing values:")
print(df.isnull().sum())

print("\nDuplicate dates:")
print(df["date"].duplicated().sum())

print("\nStatistics:")
print(df["imd_min_temperature"].describe())


# --------------------------------------------------
# Save
# --------------------------------------------------

output_file = (
    OUTPUT_FOLDER /
    "IMD_MinTemp_Ernakulam_2015_2025.csv"
)

df.to_csv(
    output_file,
    index=False
)

print("\nSaved to:")
print(output_file)