import { apiClient } from './api';

/**
 * EXPLAINABLE AI (XAI) SERVICE
 * Fetches SHAP values and feature attribution metrics for model transparency.
 */

export async function getShapExplanation() {
  const data = await apiClient('/prediction/multiple/explain');
  const rainfall = data.shap_explanations?.rainfall;
  if (!rainfall) throw new Error('Rainfall SHAP explanation is unavailable.');
  return {
    baseValue: rainfall.base_value,
    predictionValue: data.predictions?.rainfall_mm,
    features: rainfall.top_features.map((feature) => ({
      name: feature.feature,
      value: feature.feature_value,
      contribution: feature.shap_value
    })),
    topFeaturesSummary: data.explanation
  };
}
