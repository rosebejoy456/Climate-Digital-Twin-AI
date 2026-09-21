// frontend/src/constants/insightConstants.js
//
// EXPLAINABILITY & AI INSIGHTS CONSTANTS
//
// SCIENTIFIC INTEGRITY NOTICE:
// Every explanation and insight in this project must follow a strict 5-part
// transparency structure:
//   1. WHAT: The observed metric, calculated delta, or model prediction
//   2. WHY: The mathematical formula, feature attribution (SHAP), or rate of change
//   3. EVIDENCE: The verified data point, model output, or sensitivity parameter supporting it
//   4. PROVENANCE: Exact dataset origin (IMD Gridded, MODIS, ERA5, XGBoost, Sensitivity Calc)
//   5. LIMITATION: Explicit statement of what the system does NOT know or predict
//
// No unsupported causality (e.g., "will cause flooding"), fake confidence scores,
// or official IMD warnings are permitted.

import {
  IconRainfall,
  IconTemperature,
  IconLST,
  IconNDVI,
  IconAI,
  IconSimulation,
  IconAnalytics,
} from '../components/common/Icons';

// ---------------------------------------------------------------------------
// INSIGHT CATEGORIES
// ---------------------------------------------------------------------------
export const INSIGHT_CATEGORIES = {
  MODEL_ATTRIBUTION: {
    id: 'model_attribution',
    label: 'Model Feature Attribution',
    icon: IconAI,
    badgeColor: '#6366f1',
    badgeBg: 'rgba(99, 102, 241, 0.12)',
    badgeBorder: 'rgba(99, 102, 241, 0.25)',
    description: 'Game-theoretic Shapley feature attributions (SHAP) explaining ML prediction shifts.',
  },
  SCENARIO_SENSITIVITY: {
    id: 'scenario_sensitivity',
    label: 'Scenario Sensitivity',
    icon: IconSimulation,
    badgeColor: '#06b6d4',
    badgeBg: 'rgba(6, 182, 212, 0.12)',
    badgeBorder: 'rgba(6, 182, 212, 0.25)',
    description: 'Mathematical perturbations applied to verified baseline climate snapshots.',
  },
  OBSERVATION_ANOMALY: {
    id: 'observation_anomaly',
    label: 'Observation Departure',
    icon: IconAnalytics,
    badgeColor: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.25)',
    description: 'Statistical comparison of observed values against historical baseline records.',
  },
  HORIZON_TREND: {
    id: 'horizon_trend',
    label: '5-Day Horizon Trajectory',
    icon: IconRainfall,
    badgeColor: '#f59e0b',
    badgeBg: 'rgba(245, 158, 11, 0.12)',
    badgeBorder: 'rgba(245, 158, 11, 0.25)',
    description: 'Time-series trajectory across coupled multi-variable forecast days.',
  },
};

// ---------------------------------------------------------------------------
// DATA PROVENANCE TYPES
// ---------------------------------------------------------------------------
export const EXPLANATION_PROVENANCE = {
  observation: {
    id: 'observation',
    label: 'Observation',
    sourceLabel: 'Project-recorded climate observation',
    badgeColor: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.25)',
    attribution: 'IMD Gridded / MODIS Satellite / ERA5 Reanalysis',
  },
  model_prediction: {
    id: 'model_prediction',
    label: 'Model Prediction',
    sourceLabel: 'Tuned XGBoost Regressor output',
    badgeColor: '#6366f1',
    badgeBg: 'rgba(99, 102, 241, 0.12)',
    badgeBorder: 'rgba(99, 102, 241, 0.25)',
    attribution: 'Machine learning inference on lag meteorological features',
  },
  scenario_calc: {
    id: 'scenario_calc',
    label: 'Scenario Calculation',
    sourceLabel: 'Mathematical sensitivity formula',
    badgeColor: '#06b6d4',
    badgeBg: 'rgba(6, 182, 212, 0.12)',
    badgeBorder: 'rgba(6, 182, 212, 0.25)',
    attribution: 'P_sim = max(0, P_base × (1 + Δ%/100)); T_sim = T_base + Δ°C',
  },
  unavailable: {
    id: 'unavailable',
    label: 'Unavailable',
    sourceLabel: 'Data not recorded in project dataset',
    badgeColor: '#64748b',
    badgeBg: 'rgba(100, 116, 139, 0.12)',
    badgeBorder: 'rgba(100, 116, 139, 0.25)',
    attribution: 'No verified telemetry or sensor data for this dimension',
  },
};

// ---------------------------------------------------------------------------
// ML PIPELINE FEATURE LABELS & DESCRIPTIONS
// Translates raw machine learning dataset column names into human-readable definitions.
// ---------------------------------------------------------------------------
export const ML_FEATURE_DEFINITIONS = {
  imd_rainfall_mm_lag_1: {
    name: 'Prior-Day Rainfall',
    rawName: 'imd_rainfall_mm_lag_1',
    unit: 'mm',
    source: 'IMD 0.25° Daily Gridded',
    description: 'Measured 24-hour rainfall recorded on the preceding day.',
    physicalRole: 'Establishes current antecedent precipitation and soil saturation state.',
  },
  rainfall_7day_sum: {
    name: '7-Day Cumulative Rainfall',
    rawName: 'rainfall_7day_sum',
    unit: 'mm',
    source: 'IMD Gridded Accumulation',
    description: 'Sum of daily rainfall over the previous 7 consecutive days.',
    physicalRole: 'Captures multi-day atmospheric moisture buildup and cumulative hydrological load.',
  },
  surface_pressure_lag_1: {
    name: 'Surface Pressure (Lag 1)',
    rawName: 'surface_pressure_lag_1',
    unit: 'hPa',
    source: 'ERA5 Atmospheric Reanalysis',
    description: 'Barometric surface pressure recorded 24 hours prior.',
    physicalRole: 'Low pressure anomalies correlate with convective instability and convergence.',
  },
  monsoon: {
    name: 'Monsoon Season State',
    rawName: 'monsoon',
    unit: 'Binary (0/1)',
    source: 'Calendar Season Classification',
    description: 'Indicator for active Southwest / Northeast monsoon seasons in Kerala.',
    physicalRole: 'Shifts seasonal prior probability of deep convective cloud formation.',
  },
  LST_Celsius_lag_1: {
    name: 'Land Surface Temp (Lag 1)',
    rawName: 'LST_Celsius_lag_1',
    unit: '°C',
    source: 'MODIS (Terra/Aqua) Thermal Infrared',
    description: 'Radiative skin temperature of the land surface from previous day.',
    physicalRole: 'High surface thermal energy drives localized convective boundary layer lift.',
  },
  volumetric_soil_water: {
    name: 'Volumetric Soil Moisture',
    rawName: 'volumetric_soil_water',
    unit: 'm³/m³',
    source: 'ERA5 Layer 1 (0-7cm)',
    description: 'Soil moisture content in the top 7 cm of soil profile.',
    physicalRole: 'Influences surface latent heat flux and local evapotranspiration feedback.',
  },
  u_component_of_wind_10m: {
    name: '10m Zonal Wind (U-Wind)',
    rawName: 'u_component_of_wind_10m',
    unit: 'm/s',
    source: 'ERA5 Reanalysis at 10m',
    description: 'East-west atmospheric wind vector at 10 meters above ground.',
    physicalRole: 'Westerly onshore winds drive moisture transport from the Arabian Sea across Kochi.',
  },
};

// ---------------------------------------------------------------------------
// GLOBAL EXPLAINABILITY DISCLAIMERS
// ---------------------------------------------------------------------------
export const EXPLAINABILITY_DISCLAIMER =
  'Explainability statements describe mathematical feature attributions (SHAP) ' +
  'and parametric calculations. They quantify mathematical model behavior and data ' +
  'relationships. They do NOT represent physical flood inundation forecasts, drainage ' +
  'failure certainties, or official IMD emergency warnings.';

export const UNCERTAINTY_LIMITATIONS = {
  spatial: 'Analysis represents district-wide aggregated statistics for Ernakulam District; sub-taluk or localized micro-climate variation is not resolved.',
  temporal: 'Projections are 24-hour next-day or 5-day horizon estimates; sub-hourly convective storm spikes are not modeled.',
  hydrology: 'No hydrodynamic runoff or drainage routing models are integrated; high rainfall metrics must not be interpreted as validated flood depths.',
};
