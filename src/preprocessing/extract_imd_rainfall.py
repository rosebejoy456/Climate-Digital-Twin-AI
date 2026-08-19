import xarray as xr
import pandas as pd
import glob
import os

# Ernakulam approximate bounding box
LAT_MIN = 9.7
LAT_MAX = 10.3
LON_MIN = 75.9
LON_MAX = 77.0

input_files = sorted(
    glob.glob("data/raw/imd_rainfall/RF25_ind20*_rfp25.nc")
)

print("Files found:", len(input_files))

all_data = []

for file in input_files:
    print("Reading:", os.path.basename(file))

    ds = xr.open_dataset(file)

    # Select Ernakulam region
    rainfall = ds["RAINFALL"].sel(
        LATITUDE=slice(LAT_MIN, LAT_MAX),
        LONGITUDE=slice(LON_MIN, LON_MAX)
    )

    # Average rainfall over Ernakulam bounding box
    daily_rainfall = rainfall.mean(
        dim=["LATITUDE", "LONGITUDE"],
        skipna=True
    )

    df = daily_rainfall.to_dataframe(
        name="imd_rainfall_mm"
    ).reset_index()

    all_data.append(df)

    ds.close()

# Combine all years
result = pd.concat(all_data, ignore_index=True)

# Clean
result["date"] = pd.to_datetime(result["TIME"])
result = result[["date", "imd_rainfall_mm"]]

result = (
    result
    .drop_duplicates("date")
    .sort_values("date")
    .reset_index(drop=True)
)

# Save
os.makedirs("data/processed", exist_ok=True)

output = "data/processed/IMD_Ernakulam_Rainfall_2015_2025.csv"
result.to_csv(output, index=False)

# Verification
print("\n------------------------------")
print("IMD RAINFALL EXTRACTION DONE")
print("------------------------------")
print("Rows:", len(result))
print("Columns:", result.columns.tolist())
print("Date:", result["date"].min(), "to", result["date"].max())
print("Missing:", result.isnull().sum().sum())
print("Duplicates:", result["date"].duplicated().sum())
print("Saved:", output)
print("\nFirst 5 rows:")
print(result.head())