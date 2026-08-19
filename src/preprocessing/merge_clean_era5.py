import pandas as pd
from pathlib import Path

# Input files
main_file = Path("data/processed/ERA5_clean_2015_2025.csv")
additional_file = Path("data/processed/ERA5_Additional_clean_2015_2025.csv")

# Output file
output_file = Path("data/processed/ERA5_complete_2015_2025.csv")

# Read datasets
main = pd.read_csv(main_file)
additional = pd.read_csv(additional_file)

# Convert date columns
main["date"] = pd.to_datetime(main["date"])
additional["date"] = pd.to_datetime(additional["date"])

# Merge using only dates present in BOTH datasets
merged = pd.merge(
    main,
    additional,
    on="date",
    how="inner",
    suffixes=("", "_additional")
)

# Remove duplicate columns if any
duplicate_columns = [
    col for col in merged.columns
    if col.endswith("_additional")
]

merged = merged.drop(columns=duplicate_columns)

# Sort chronologically
merged = merged.sort_values("date").reset_index(drop=True)

# Check missing values
print("\nMissing values:")
print(merged.isnull().sum())

# Check duplicate dates
print("\nDuplicate dates:", merged["date"].duplicated().sum())

# Dataset information
print("\nFinal shape:", merged.shape)
print("Date range:", merged["date"].min(), "to", merged["date"].max())
print("\nFinal columns:")
print(merged.columns.tolist())

# Save
merged.to_csv(output_file, index=False)

print("\nSaved to:", output_file)