import pandas as pd
import matplotlib.pyplot as plt
import os

# --------------------------------------------------
# MODEL PERFORMANCE RESULTS
# --------------------------------------------------

results = {
    "Model": [
        "Linear Regression",
        "Random Forest",
        "XGBoost",
        "Tuned XGBoost",
        "LSTM"
    ],
    "MAE": [
        5.301,
        4.919,
        4.833,
        4.822,
        7.793
    ],
    "RMSE": [
        9.360,
        9.317,
        8.956,
        8.833,
        14.123
    ],
    "R2": [
        0.685,
        0.688,
        0.712,
        0.719,
        0.283
    ]
}

df = pd.DataFrame(results)

# --------------------------------------------------
# DISPLAY RESULTS
# --------------------------------------------------

print("\n======================================")
print("       MODEL COMPARISON RESULTS")
print("======================================\n")

print(df.to_string(index=False))

# --------------------------------------------------
# IDENTIFY BEST MODEL
# --------------------------------------------------

best_mae = df.loc[df["MAE"].idxmin()]
best_rmse = df.loc[df["RMSE"].idxmin()]
best_r2 = df.loc[df["R2"].idxmax()]

print("\n======================================")
print("             BEST RESULTS")
print("======================================")

print(f"\nLowest MAE  : {best_mae['Model']} ({best_mae['MAE']:.3f})")
print(f"Lowest RMSE : {best_rmse['Model']} ({best_rmse['RMSE']:.3f})")
print(f"Highest R²  : {best_r2['Model']} ({best_r2['R2']:.3f})")

# --------------------------------------------------
# FINAL MODEL
# --------------------------------------------------

final_model = df.loc[df["R2"].idxmax(), "Model"]

print("\n======================================")
print(f"FINAL MODEL : {final_model}")
print("======================================\n")

# --------------------------------------------------
# CREATE OUTPUT DIRECTORY
# --------------------------------------------------

output_dir = "outputs"
os.makedirs(output_dir, exist_ok=True)

# Save comparison table
df.to_csv(
    os.path.join(output_dir, "model_comparison.csv"),
    index=False
)

# --------------------------------------------------
# MAE COMPARISON
# --------------------------------------------------

plt.figure(figsize=(10, 6))

plt.bar(df["Model"], df["MAE"])

plt.title("Model Comparison - MAE")
plt.xlabel("Model")
plt.ylabel("MAE")
plt.xticks(rotation=20)
plt.tight_layout()

plt.savefig(
    os.path.join(output_dir, "mae_comparison.png"),
    dpi=300
)

plt.show()

# --------------------------------------------------
# RMSE COMPARISON
# --------------------------------------------------

plt.figure(figsize=(10, 6))

plt.bar(df["Model"], df["RMSE"])

plt.title("Model Comparison - RMSE")
plt.xlabel("Model")
plt.ylabel("RMSE")
plt.xticks(rotation=20)
plt.tight_layout()

plt.savefig(
    os.path.join(output_dir, "rmse_comparison.png"),
    dpi=300
)

plt.show()

# --------------------------------------------------
# R2 COMPARISON
# --------------------------------------------------

plt.figure(figsize=(10, 6))

plt.bar(df["Model"], df["R2"])

plt.title("Model Comparison - R²")
plt.xlabel("Model")
plt.ylabel("R²")
plt.xticks(rotation=20)
plt.tight_layout()

plt.savefig(
    os.path.join(output_dir, "r2_comparison.png"),
    dpi=300
)

plt.show()

print("Comparison files saved successfully in the outputs folder.")