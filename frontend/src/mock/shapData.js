/**
 * MOCK SHAP & EXPLAINABILITY DATA
 * 
 * INTERNAL NOTICE:
 * Represents model explainability structures (SHAP values & Feature Importances)
 * for the XGBoost rainfall prediction pipeline.
 */

export const mockShapExplanation = {
  model: "XGBoost Regressor",
  baseValue: 12.4, // Base expected rainfall value across dataset (mm)
  predictionValue: 18.6,
  features: [
    { name: "imd_rainfall_mm_lag_1", value: 14.8, contribution: +4.2, impact: "positive" },
    { name: "rainfall_7day_sum", value: 90.3, contribution: +2.1, impact: "positive" },
    { name: "surface_pressure_lag_1", value: 1008.4, contribution: -1.3, impact: "negative" },
    { name: "monsoon", value: 1, contribution: +1.8, impact: "positive" },
    { name: "LST_Celsius_lag_1", value: 33.8, contribution: -0.9, impact: "negative" },
    { name: "volumetric_soil_water", value: 0.38, contribution: +0.7, impact: "positive" },
    { name: "u_component_of_wind_10m", value: -1.4, contribution: -0.4, impact: "negative" }
  ],
  topFeaturesSummary: "Prior-day rainfall (lag 1) and 7-day cumulative precipitation contribute most heavily (+6.3 mm combined) to tomorrow's projected rainfall spike.",
  isMock: true
};
