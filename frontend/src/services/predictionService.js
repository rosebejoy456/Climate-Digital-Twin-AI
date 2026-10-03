import { apiClient } from './api';

/**
 * AI PREDICTION SERVICE
 * Handles requests for XGBoost predictions and multi-variable forecasts.
 */

export async function getPredictions(target = 'rainfall') {
  if (target !== 'rainfall') throw new Error(`Unsupported prediction target: ${target}`);
  const data = await apiClient('/prediction/rainfall');
  return {
    model: data.model,
    targetDate: data.date,
    predictedValue: data.predicted_rainfall_mm,
    riskCategory: data.predicted_rainfall_mm >= 35 ? 'Heavy rainfall' : data.predicted_rainfall_mm >= 15 ? 'Moderate rainfall' : 'Light rainfall'
  };
}

export async function getMultiVariablePrediction() {
  const data = await apiClient('/prediction/multiple');
  return [{
    date: data.date,
    rainfall: data.predictions.rainfall_mm,
    temperature: data.predictions.temperature_celsius,
    pressure: data.predictions.pressure_hpa,
    lst: data.predictions.lst_celsius,
    ndvi: data.predictions.ndvi
  }];
}
