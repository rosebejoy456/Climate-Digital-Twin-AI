import { API_CONFIG, apiClient } from './api';
import { mockShapExplanation } from '../mock/shapData';

/**
 * EXPLAINABLE AI (XAI) SERVICE
 * Fetches SHAP values and feature attribution metrics for model transparency.
 */

export async function getShapExplanation(modelName = 'xgboost_rainfall') {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockShapExplanation);
  }

  try {
    return await apiClient(`/explainability/shap?model=${modelName}`);
  } catch (error) {
    console.warn('[explainabilityService] Falling back to mock SHAP data');
    return mockShapExplanation;
  }
}
