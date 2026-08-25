import os
import numpy as np
import pandas as pd

from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping, ReduceLROnPlateau


# ============================================================
# PATHS
# ============================================================

TRAIN_FILE = "data/processed/Climate_Ernakulam_Train.csv"
TEST_FILE = "data/processed/Climate_Ernakulam_Test.csv"

MODEL_FILE = "models/lstm_rainfall_scaled.keras"
SCALER_FILE = "models/lstm_feature_scaler.pkl"

SEQUENCE_LENGTH = 7


# ============================================================
# LOAD DATA
# ============================================================

train_df = pd.read_csv(TRAIN_FILE)
test_df = pd.read_csv(TEST_FILE)

train_df["date"] = pd.to_datetime(train_df["date"])
test_df["date"] = pd.to_datetime(test_df["date"])

train_df = train_df.sort_values("date").reset_index(drop=True)
test_df = test_df.sort_values("date").reset_index(drop=True)

print("TRAIN DATA:", train_df.shape)
print("TEST DATA :", test_df.shape)


# ============================================================
# TARGET
# ============================================================

TARGET = "target_rainfall_next_day"


# ============================================================
# SELECT FEATURES
# ============================================================

# Remove date and target from input features
feature_columns = [
    col for col in train_df.columns
    if col not in ["date", TARGET]
]

print("\nNumber of features:", len(feature_columns))

X_train_raw = train_df[feature_columns].values
y_train_raw = train_df[TARGET].values

X_test_raw = test_df[feature_columns].values
y_test_raw = test_df[TARGET].values


# ============================================================
# HANDLE MISSING / INFINITE VALUES
# ============================================================

X_train_raw = np.nan_to_num(
    X_train_raw,
    nan=0.0,
    posinf=0.0,
    neginf=0.0
)

X_test_raw = np.nan_to_num(
    X_test_raw,
    nan=0.0,
    posinf=0.0,
    neginf=0.0
)


# ============================================================
# FEATURE SCALING
# ============================================================

print("\nScaling features...")

scaler = StandardScaler()

# IMPORTANT:
# Fit scaler ONLY on training data
X_train_scaled = scaler.fit_transform(X_train_raw)

# Transform test using the training scaler
X_test_scaled = scaler.transform(X_test_raw)

os.makedirs("models", exist_ok=True)

joblib.dump(scaler, SCALER_FILE)

print("Scaler saved:", SCALER_FILE)


# ============================================================
# CREATE SEQUENCES
# ============================================================

def create_train_sequences(X, y, sequence_length):
    X_seq = []
    y_seq = []

    for i in range(sequence_length, len(X)):
        X_seq.append(X[i-sequence_length:i])
        y_seq.append(y[i])

    return np.array(X_seq), np.array(y_seq)


# Training sequences
X_train, y_train = create_train_sequences(
    X_train_scaled,
    y_train_raw,
    SEQUENCE_LENGTH
)


# ============================================================
# TEST SEQUENCES
# ============================================================

# Use the last 7 training days as history for the first test day
history_X = X_train_scaled[-SEQUENCE_LENGTH:]

combined_X = np.vstack([
    history_X,
    X_test_scaled
])

X_test = []
y_test = []

for i in range(SEQUENCE_LENGTH, len(combined_X)):
    X_test.append(combined_X[i-SEQUENCE_LENGTH:i])
    y_test.append(y_test_raw[i-SEQUENCE_LENGTH])

X_test = np.array(X_test)
y_test = np.array(y_test)


# ============================================================
# DISPLAY SHAPES
# ============================================================

print("\nLSTM DATASET READY")
print("-------------------")

print("X_train shape:", X_train.shape)
print("y_train shape:", y_train.shape)

print("X_test shape :", X_test.shape)
print("y_test shape :", y_test.shape)

print("Sequence length:", SEQUENCE_LENGTH)
print("Features per day:", len(feature_columns))


# ============================================================
# BUILD LSTM MODEL
# ============================================================

print("\nBuilding LSTM model...")

model = Sequential([
    LSTM(
        64,
        return_sequences=True,
        input_shape=(SEQUENCE_LENGTH, len(feature_columns))
    ),

    Dropout(0.2),

    LSTM(32),

    Dropout(0.2),

    Dense(16, activation="relu"),

    Dense(1)
])


# ============================================================
# COMPILE
# ============================================================

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss="mse",
    metrics=["mae"]
)


model.summary()


# ============================================================
# CALLBACKS
# ============================================================

early_stopping = EarlyStopping(
    monitor="val_loss",
    patience=8,
    restore_best_weights=True
)

reduce_lr = ReduceLROnPlateau(
    monitor="val_loss",
    factor=0.5,
    patience=4,
    min_lr=0.00001
)


# ============================================================
# TRAIN
# ============================================================

print("\nTraining LSTM...")

history = model.fit(
    X_train,
    y_train,
    validation_split=0.2,
    epochs=50,
    batch_size=32,
    callbacks=[
        early_stopping,
        reduce_lr
    ],
    verbose=1
)


# ============================================================
# PREDICTION
# ============================================================

print("\nMaking predictions...")

y_pred = model.predict(X_test).flatten()


# ============================================================
# EVALUATION
# ============================================================

mae = mean_absolute_error(y_test, y_pred)

rmse = np.sqrt(
    mean_squared_error(y_test, y_pred)
)

r2 = r2_score(y_test, y_pred)


print("\n")
print("LSTM SCALED RESULTS")
print("===================")

print(f"MAE  : {mae:.4f}")
print(f"RMSE : {rmse:.4f}")
print(f"R²   : {r2:.4f}")


# ============================================================
# SAVE MODEL
# ============================================================

model.save(MODEL_FILE)

print("\nModel saved:")
print(MODEL_FILE)

print("\nLSTM TRAINING COMPLETE")