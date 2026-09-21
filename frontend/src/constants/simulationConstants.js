// frontend/src/constants/simulationConstants.js
//
// WHAT-IF SIMULATION CONSTANTS
//
// SCIENTIFIC INTEGRITY NOTICE:
// All baseline values in this file are derived from the project's own mock/observed
// data snapshots (mockCurrentClimate, mockHistoricalClimate, mockDefaultScenario).
// No official IMD thresholds, hydrodynamic model outputs, or flood-risk values are
// included. This tool performs parametric sensitivity analysis ONLY.
//
// Data provenance labels used throughout this project:
//   'observation'      – real observed or project-recorded data point
//   'scenario_calc'    – mathematically derived from an observed baseline
//   'model_prediction' – existing XGBoost / AI model forecast data
//   'unavailable'      – data the project does not actually have

// ---------------------------------------------------------------------------
// PROJECT REGION METADATA
// ---------------------------------------------------------------------------
export const SIMULATION_REGION = {
  name: 'Ernakulam District',
  state: 'Kerala',
  country: 'India',
  coordinates: {
    latitude: 9.9816,
    longitude: 76.2999,
  },
  // Bounding box used in project map service (approximate district extent)
  boundingBox: {
    north: 10.35,
    south: 9.65,
    east: 76.75,
    west: 76.10,
  },
};

// ---------------------------------------------------------------------------
// BASELINE SNAPSHOTS
//
// Each entry corresponds to a verifiable date in mockHistoricalClimate or
// mockCurrentClimate. Values are NOT invented – they come directly from the
// project's own data files (frontend/src/mock/climateData.js,
// frontend/src/mock/simulationData.js).
//
// 'dataType' field documents what kind of data each baseline represents:
//   'observation' = value from project climate records (IMD/MODIS/ERA5 sourced mock)
// ---------------------------------------------------------------------------
export const SIMULATION_BASELINES = [
  {
    id: 'latest_obs',
    label: 'Latest Snapshot (2026-08-31)',
    description: 'Most recent project climate snapshot for Ernakulam District (mock dataset record).',
    dataType: 'observation',
    source: 'IMD (rainfall, temp) · MODIS LST · ERA5 reanalysis (project mock snapshot)',
    rainfall: 14.8,   // mm/day
    maxTemp: 32.4,    // °C
    minTemp: 24.6,    // °C
    lst: 33.8,        // °C  (MODIS Land Surface Temperature)
    sst: 29.1,        // °C  (Sea Surface Temperature – not adjusted in scenario)
    lstAvailable: true,
    sstAvailable: true,
    date: '2026-08-31',
  },
  {
    id: 'heavy_rain_obs',
    label: 'Heavy Rain Snapshot (2026-08-27)',
    description: 'High-rainfall snapshot from the project historical mock dataset.',
    dataType: 'observation',
    source: 'IMD (rainfall, temp) · MODIS LST · ERA5 reanalysis (project mock snapshot)',
    rainfall: 22.0,   // mm/day
    maxTemp: 29.8,    // °C
    minTemp: 23.8,    // °C
    lst: 30.2,        // °C
    sst: null,        // SST not available for this date in project data
    lstAvailable: true,
    sstAvailable: false,
    date: '2026-08-27',
  },
  {
    id: 'dry_spell_obs',
    label: 'Dry Spell Snapshot (2026-08-29)',
    description: 'Low-rainfall snapshot from the project historical mock dataset.',
    dataType: 'observation',
    source: 'IMD (rainfall, temp) · MODIS LST · ERA5 reanalysis (project mock snapshot)',
    rainfall: 5.1,    // mm/day
    maxTemp: 32.1,    // °C
    minTemp: 24.4,    // °C
    lst: 33.5,        // °C
    sst: null,
    lstAvailable: true,
    sstAvailable: false,
    date: '2026-08-29',
  },
];

// Default baseline ID used by the simulation on first load
export const DEFAULT_BASELINE_ID = 'latest_obs';

// ---------------------------------------------------------------------------
// SCENARIO PARAMETER BOUNDS
//
// These are the UI slider constraints. They define the plausible perturbation
// space for this sensitivity analysis tool. They are NOT official thresholds.
// ---------------------------------------------------------------------------
export const SCENARIO_PARAMS = {
  temperatureIncrease: {
    label: 'Temperature Shift (ΔC)',
    unit: 'C',
    min: -5.0,
    max: 5.0,
    step: 0.5,
    default: 2.0,
    // Variables that receive the temperature delta
    appliesTo: ['maxTemp', 'minTemp', 'lst'],
  },
  rainfallChangePercent: {
    label: 'Precipitation Delta (%)',
    unit: '%',
    min: -50,
    max: 50,
    step: 5,
    default: 25,
    // Formula: P_sim = max(0, P_base x (1 + rainfallChangePercent / 100))
    appliesTo: ['rainfall'],
  },
};

// ---------------------------------------------------------------------------
// PRESET SCENARIOS
//
// Named perturbation combinations for quick selection. These are illustrative
// hypothetical scenarios only – NOT operational forecasts or official warnings.
// ---------------------------------------------------------------------------
export const SIMULATION_PRESETS = [
  {
    id: 'monsoon_surge',
    label: 'Monsoon Surge',
    emoji: 'Surge',
    description: 'Moderate warming with elevated monsoon precipitation.',
    temperatureIncrease: 2.5,
    rainfallChangePercent: 30,
  },
  {
    id: 'severe_wet',
    label: 'Severe Wet Event',
    emoji: 'Wet',
    description: 'Strong warming with very high precipitation increase.',
    temperatureIncrease: 4.0,
    rainfallChangePercent: 50,
  },
  {
    id: 'extreme_heat_dry',
    label: 'Extreme Heat & Drought',
    emoji: 'Hot',
    description: 'Extreme warming paired with large precipitation deficit.',
    temperatureIncrease: 3.5,
    rainfallChangePercent: -40,
  },
  {
    id: 'baseline_reset',
    label: 'Reset to Baseline',
    emoji: 'Reset',
    description: 'No perturbation applied – equivalent to the observed baseline.',
    temperatureIncrease: 0,
    rainfallChangePercent: 0,
  },
];

// ---------------------------------------------------------------------------
// DATA PROVENANCE LABELS
//
// Used in UI to clearly distinguish how each displayed value was derived.
// ---------------------------------------------------------------------------
export const DATA_PROVENANCE = {
  observation: {
    label: 'Observation',
    description: 'Project baseline snapshot (mock dataset calibrated with IMD, MODIS, ERA5 records).',
    color: '#10b981',   // matches --status-normal
  },
  scenario_calc: {
    label: 'Scenario Calculation',
    description: 'Mathematically derived from an observed baseline via the scenario formula.',
    color: '#06b6d4',   // matches --accent-cyan
  },
  model_prediction: {
    label: 'Model Prediction',
    description: 'Existing XGBoost AI model forecast, not a what-if derivation.',
    color: '#6366f1',   // matches --accent-indigo
  },
  unavailable: {
    label: 'Unavailable',
    description: 'Data the project does not actually have for this baseline or variable.',
    color: '#64748b',   // matches --text-muted
  },
};

// ---------------------------------------------------------------------------
// DISPLAY ROUNDING
//
// Number of decimal places for each variable in UI display.
// ---------------------------------------------------------------------------
export const DISPLAY_PRECISION = {
  rainfall: 1,         // e.g. 14.8 mm/day
  maxTemp: 1,          // e.g. 32.4 °C
  minTemp: 1,          // e.g. 24.6 °C
  lst: 1,              // e.g. 33.8 °C
  sst: 1,              // e.g. 29.1 °C
  rainfallDeltaMm: 1,  // absolute delta in mm/day
  rainfallDeltaPct: 0, // percentage delta (integer display)
  tempDelta: 1,        // e.g. +2.0 °C
};

// ---------------------------------------------------------------------------
// TOOL DISCLAIMER (shown in UI)
// ---------------------------------------------------------------------------
export const SIMULATION_DISCLAIMER =
  'This is a parametric sensitivity analysis tool. It applies mathematical ' +
  'perturbations to observed baseline values. It is NOT an operational flood ' +
  'forecast, official IMD warning, hydrodynamic model, or coupled atmospheric ' +
  'simulation. All scenario results are for educational and planning exploration only.';
