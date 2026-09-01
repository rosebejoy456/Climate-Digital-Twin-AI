import { API_CONFIG, apiClient } from './api';
import { mockRainfallPrediction, mockMultiVariableForecast } from '../mock/predictionData';

/**
 * AI PREDICTION SERVICE
 * Handles requests for XGBoost predictions and multi-variable forecasts.
 */

export async function getPredictions(target = 'rainfall') {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockRainfallPrediction);
  }

  try {
    return await apiClient(`/predict/${target}`);
  } catch (error) {
    console.warn('[predictionService] Falling back to mock prediction data');
    return mockRainfallPrediction;
  }
}

export async function getMultiVariablePrediction() {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockMultiVariableForecast);
  }

  try {
    return await apiClient('/predict/multivariable');
  } catch (error) {
    console.warn('[predictionService] Falling back to mock multivariable prediction');
    return mockMultiVariableForecast;
  }
}
