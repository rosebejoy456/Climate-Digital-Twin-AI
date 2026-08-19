import pandas as pd
from pathlib import Path

# Folder containing the raw ERA5 files
raw_folder = Path("data/raw/era5")

# Folder where the merged dataset will be saved
output_folder = Path("data/processed")

# Create processed folder if it does not exist
output_folder.mkdir(parents=True, exist_ok=True)

# Select only the main ERA5 files
files = sorted(
    raw_folder.glob("Ernakulam_ERA5_*.csv")
)

# Remove the Additional ERA5 files
files = [
    file for file in files
    if "Additional" not in file.name
]

print("Files found:")

for file in files:
    print(" -", file.name)

# Read each yearly file
dataframes = []

for file in files:
    print(f"\nReading {file.name}...")

    df = pd.read_csv(file)

    # Store the year based on the filename
    year = file.stem.split("_")[-1]
    df["year"] = int(year)

    dataframes.append(df)

# Combine all years
merged = pd.concat(dataframes, ignore_index=True)

# Sort by date
if "date" in merged.columns:
    merged["date"] = pd.to_datetime(merged["date"])
    merged = merged.sort_values("date")
    merged = merged.reset_index(drop=True)

# Save the merged dataset
output_file = output_folder / "ERA5_2015_2025.csv"

merged.to_csv(output_file, index=False)

print("\n--------------------------------")
print("ERA5 MERGE COMPLETED")
print("--------------------------------")
print(f"Rows: {len(merged)}")
print(f"Columns: {len(merged.columns)}")
print(f"Saved to: {output_file}")