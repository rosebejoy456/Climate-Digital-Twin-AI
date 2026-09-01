/**
 * MOCK PREDICTION DATA
 * 
 * INTERNAL NOTICE:
 * Represents AI forecast structures for XGBoost rainfall and future multivariable predictions.
 */

export const mockRainfallPrediction = {
  model: "XGBoost Regressor (Tuned)",
  targetVariable: "target_rainfall_next_day",
  targetDate: "2026-09-02",
  predictedValue: 18.6,
  unit: "mm/day",
  confidenceInterval: {
    low: 14.2,
    high: 23.0
  },
  metrics: {
    mae: 4.82,
    rmse: 8.14,
    r2: 0.68
  },
  riskCategory: "Moderate Rainfall",
  isMock: true
};

export const mockMultiVariableForecast = [
  {
    day: "Day +1 (Tomorrow)",
    date: "2026-09-02",
    rainfall: 18.6,
    maxTemp: 31.5,
    minTemp: 24.2,
    lst: 32.8,
    surfacePressure: 1007.8,
    ndvi: 0.68
  },
  {
    day: "Day +2",
    date: "2026-09-03",
    rainfall: 24.2,
    maxTemp: 30.8,
    minTemp: 23.9,
    lst: 31.9,
    surfacePressure: 1006.9,
    ndvi: 0.69
  },
  {
    day: "Day +3",
    date: "2026-09-04",
    rainfall: 15.0,
    maxTemp: 31.2,
    minTemp: 24.1,
    lst: 32.4,
    surfacePressure: 1007.5,
    ndvi: 0.69
  },
  {
    day: "Day +4",
    date: "2026-09-05",
    rainfall: 7.5,
    maxTemp: 32.6,
    minTemp: 24.8,
    lst: 33.9,
    surfacePressure: 1008.8,
    ndvi: 0.68
  },
  {
    day: "Day +5",
    date: "2026-09-06",
    rainfall: 4.2,
    maxTemp: 33.1,
    minTemp: 25.0,
    lst: 34.5,
    surfacePressure: 1009.2,
    ndvi: 0.68
  }
];
