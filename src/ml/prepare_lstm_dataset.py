import pandas as pd
import numpy as np
from pathlib import Path

# --------------------------------
# File paths
# --------------------------------

INPUT_FILE = Path(
    "data/processed/Climate_Ernakulam_Train.csv"
)

OUTPUT_X = Path(
    "data/processed/LSTM_X_train.npy"
)

OUTPUT_Y = Path(
    "data/processed/LSTM_y_train.npy"
)

# --------------------------------
# Settings
# --------------------------------

SEQUENCE_LENGTH = 7

TARGET = "target_rainfall_next_day"

# --------------------------------
# Load dataset
# --------------------------------

df = pd.read_csv(INPUT_FILE, parse_dates=["date"])

df = df.sort_values("date").reset_index(drop=True)

print("Original dataset shape:", df.shape)

# --------------------------------
# Select input features
# --------------------------------

FEATURE_COLUMNS = [
    column
    for column in df.columns
    if column not in [TARGET, "date"]
]

X_data = df[FEATURE_COLUMNS].values
y_data = df[TARGET].values

print("Number of features:", len(FEATURE_COLUMNS))

# --------------------------------
# Create sequences
# --------------------------------

X_sequences = []
y_sequences = []

for i in range(SEQUENCE_LENGTH, len(df)):

    X_sequence = X_data[
        i - SEQUENCE_LENGTH:i
    ]

    y_target = y_data[i]

    X_sequences.append(X_sequence)
    y_sequences.append(y_target)

# Convert to NumPy arrays

X_sequences = np.array(X_sequences)
y_sequences = np.array(y_sequences)

# --------------------------------
# Save datasets
# --------------------------------

np.save(OUTPUT_X, X_sequences)
np.save(OUTPUT_Y, y_sequences)

# --------------------------------
# Results
# --------------------------------

print("\nLSTM DATASET READY")
print("------------------")

print("X shape:", X_sequences.shape)
print("y shape:", y_sequences.shape)

print("\nSequence length:", SEQUENCE_LENGTH)
print("Features per day:", X_sequences.shape[2])

print("\nSaved:")
print(OUTPUT_X)
print(OUTPUT_Y)