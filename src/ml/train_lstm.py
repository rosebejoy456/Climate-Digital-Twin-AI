import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


# -----------------------------
# Load LSTM dataset
# -----------------------------

X = np.load("data/processed/LSTM_X_train.npy")
y = np.load("data/processed/LSTM_y_train.npy")

print("Dataset loaded")
print("X shape:", X.shape)
print("y shape:", y.shape)


# -----------------------------
# Time-series train/test split
# -----------------------------

split = int(len(X) * 0.8)

X_train = X[:split]
X_test = X[split:]

y_train = y[:split]
y_test = y[split:]

print("\nTRAIN / TEST SPLIT")
print("X_train:", X_train.shape)
print("X_test :", X_test.shape)
print("y_train:", y_train.shape)
print("y_test :", y_test.shape)


# -----------------------------
# Build LSTM model
# -----------------------------

model = Sequential([
    LSTM(
        64,
        input_shape=(X_train.shape[1], X_train.shape[2]),
        return_sequences=False
    ),

    Dropout(0.2),

    Dense(32, activation="relu"),

    Dense(1)
])


# -----------------------------
# Compile
# -----------------------------

model.compile(
    optimizer="adam",
    loss="mse",
    metrics=["mae"]
)

model.summary()


# -----------------------------
# Early stopping
# -----------------------------

early_stopping = EarlyStopping(
    monitor="val_loss",
    patience=10,
    restore_best_weights=True
)


# -----------------------------
# Train
# -----------------------------

print("\nTRAINING LSTM...")

history = model.fit(
    X_train,
    y_train,
    validation_split=0.1,
    epochs=50,
    batch_size=32,
    callbacks=[early_stopping],
    verbose=1
)


# -----------------------------
# Prediction
# -----------------------------

y_pred = model.predict(X_test).flatten()


# -----------------------------
# Evaluation
# -----------------------------

mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print("\n")
print("LSTM RESULTS")
print("----------------------")
print(f"MAE  : {mae:.4f}")
print(f"RMSE : {rmse:.4f}")
print(f"R²   : {r2:.4f}")


# -----------------------------
# Save model
# -----------------------------

model.save("models/lstm_rainfall.keras")

print("\nModel saved:")
print("models/lstm_rainfall.keras")