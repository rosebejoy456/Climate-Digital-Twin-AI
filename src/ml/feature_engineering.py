import pandas as pd
from pathlib import Path

# -----------------------------
# Paths
# -----------------------------
INPUT_FILE = Path(
    "data/processed/Climate_Ernakulam_ML_Ready_2015_2025.csv"
)

OUTPUT_FILE = Path(
    "data/processed/Climate_Ernakulam_Features_2015_2025.csv"
)

# -----------------------------
# Load dataset
# -----------------------------
df = pd.read_csv(INPUT_FILE, parse_dates=["date"])

# Sort by date
df = df.sort_values("date").reset_index(drop=True)

# -----------------------------
# Time-based features
# -----------------------------
df["year"] = df["date"].dt.year
df["month"] = df["date"].dt.month
df["day"] = df["date"].dt.day
df["day_of_year"] = df["date"].dt.dayofyear
df["week_of_year"] = df["date"].dt.isocalendar().week.astype(int)

# -----------------------------
# Season / monsoon feature
# Kerala monsoon: June–September
# -----------------------------
df["monsoon"] = df["month"].isin([6, 7, 8, 9]).astype(int)

# -----------------------------
# Lag features
# -----------------------------
lag_variables = [
    "imd_rainfall_mm",
    "chirps_rainfall_mm",
    "temperature_2m",
    "surface_pressure",
    "LST_Celsius",
    "NDVI"
]

for column in lag_variables:
    for lag in range(1, 8):
        df[f"{column}_lag_{lag}"] = df[column].shift(lag)

print("\nLag features created:")
for column in lag_variables:
    print(f"{column}: lag 1 to lag 7")

    # -----------------------------
# Rolling features
# -----------------------------

# 7-day rainfall statistics
df["rainfall_7day_sum"] = (
    df["imd_rainfall_mm"]
    .rolling(window=7)
    .sum()
)

df["rainfall_7day_mean"] = (
    df["imd_rainfall_mm"]
    .rolling(window=7)
    .mean()
)

# 7-day temperature average
df["temperature_7day_mean"] = (
    df["temperature_2m"]
    .rolling(window=7)
    .mean()
)

# 7-day LST average
df["LST_7day_mean"] = (
    df["LST_Celsius"]
    .rolling(window=7)
    .mean()
)

# 7-day NDVI average
df["NDVI_7day_mean"] = (
    df["NDVI"]
    .rolling(window=7)
    .mean()
)

print("\nRolling features created:")
print("rainfall_7day_sum")
print("rainfall_7day_mean")
print("temperature_7day_mean")
print("LST_7day_mean")
print("NDVI_7day_mean")

# -----------------------------
# Prediction target
# -----------------------------

# -----------------------------
# Prediction targets
# -----------------------------

# Next-day climate predictions
df["target_rainfall_next_day"] = (
    df["imd_rainfall_mm"].shift(-1)
)

df["target_temperature_next_day"] = (
    df["temperature_2m"].shift(-1)
)

df["target_pressure_next_day"] = (
    df["surface_pressure"].shift(-1)
)

df["target_lst_next_day"] = (
    df["LST_Celsius"].shift(-1)
)

df["target_ndvi_next_day"] = (
    df["NDVI"].shift(-1)
)

print("\nPrediction targets created:")

print("target_rainfall_next_day")
print("target_temperature_next_day")
print("target_pressure_next_day")
print("target_lst_next_day")
print("target_ndvi_next_day")

# -----------------------------
# Save
# -----------------------------
# Remove rows with missing target values
df = df.dropna(
    subset=[
        "target_rainfall_next_day",
        "target_temperature_next_day",
        "target_pressure_next_day",
        "target_lst_next_day",
        "target_ndvi_next_day"
    ]
).reset_index(drop=True)

# -----------------------------
# Save
# -----------------------------
df.to_csv(OUTPUT_FILE, index=False)

print("FEATURE ENGINEERING - STEP 1 COMPLETE")
print("Rows:", len(df))
print("Columns:", len(df.columns))
print("Saved:", OUTPUT_FILE)