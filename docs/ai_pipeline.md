# AI Pipeline

## Objective

Develop an AI model to predict future climate conditions for Ernakulam using historical climate data and integrate the predictions into a Climate Digital Twin.

---

## Pipeline Overview

```
Historical Climate Data
        │
        ▼
Data Preprocessing
(Cleaning, Missing Values, Normalization)
        │
        ▼
Feature Engineering
(Lag Features, Time Features)
        │
        ▼
Dataset Preparation
(Input-Output Sequences)
        │
        ▼
Baseline Models
(Linear Regression, Random Forest)
        │
        ▼
Deep Learning Models
(CNN-LSTM, ConvLSTM)
        │
        ▼
Model Evaluation
(RMSE, MAE, R²)
        │
        ▼
Rainfall Prediction
        │
        ▼
Digital Twin Dashboard
```

---

## Input Data

- Rainfall
- Maximum Temperature
- Minimum Temperature
- Land Surface Temperature (LST)
- Other climate variables (if available)

---

## Model Input

Previous 7 days of climate data.

Example:

Day 1 → Day 2 → Day 3 → Day 4 → Day 5 → Day 6 → Day 7

↓

Predict Day 8

---

## Models

### Baseline Models

- Linear Regression
- Random Forest

### Deep Learning Models

- CNN-LSTM
- ConvLSTM

---

## Evaluation Metrics

- RMSE (Root Mean Square Error)
- MAE (Mean Absolute Error)
- R² Score

---

## Final Output

- Predicted rainfall map
- Performance metrics
- Predictions integrated into the Climate Digital Twin dashboard