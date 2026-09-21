// frontend/src/services/simulationService.js
//
// WHAT-IF SIMULATION SERVICE
//
// SCIENTIFIC INTEGRITY NOTICE:
// This service performs PARAMETRIC SENSITIVITY ANALYSIS only.
// It applies mathematical perturbations to verified observed baseline values.
// It is NOT an operational flood forecast, official IMD warning system,
// hydrodynamic model, urban drainage model, or coupled atmospheric simulation.
//
// Calculation formulas used:
//   Rainfall:   P_sim = max(0, P_base x (1 + rainfallChangePercent / 100))
//   Tmax_sim  = Tmax_base + temperatureIncrease
//   Tmin_sim  = Tmin_base + temperatureIncrease
//   LST_sim   = LST_base  + temperatureIncrease  (when LST is available)
//
// SST is NOT adjusted — the project has no SST perturbation model.

import { API_CONFIG, apiClient } from './api';
import { mockDefaultScenario } from '../mock/simulationData';
import {
  SIMULATION_BASELINES,
  DEFAULT_BASELINE_ID,
  DISPLAY_PRECISION,
} from '../constants/simulationConstants';

// ---------------------------------------------------------------------------
// HELPER: find a baseline by id (falls back to the default)
// ---------------------------------------------------------------------------
function resolveBaseline(baselineId) {
  const found = SIMULATION_BASELINES.find((b) => b.id === baselineId);
  if (!found) {
    console.warn(
      `[simulationService] Unknown baselineId "${baselineId}". Falling back to "${DEFAULT_BASELINE_ID}".`
    );
    return SIMULATION_BASELINES.find((b) => b.id === DEFAULT_BASELINE_ID);
  }
  return found;
}

// ---------------------------------------------------------------------------
// HELPER: format a signed numeric value for display
// ---------------------------------------------------------------------------
function fmtSigned(value, decimals) {
  const rounded = Number(value.toFixed(decimals));
  return rounded >= 0 ? `+${rounded.toFixed(decimals)}` : `${rounded.toFixed(decimals)}`;
}

// ---------------------------------------------------------------------------
// CORE: calculateScenario
//
// Pure calculation function – no API calls, no mock flags.
// Accepts a baseline object and perturbation parameters.
// Returns a fully transparent scenario result object.
//
// @param {object} baseline   – one entry from SIMULATION_BASELINES
// @param {number} temperatureIncrease      – Δ°C to apply
// @param {number} rainfallChangePercent    – Δ% to apply to rainfall
// @returns {object} scenarioResult
// ---------------------------------------------------------------------------
export function calculateScenario(baseline, temperatureIncrease, rainfallChangePercent) {
  const tempInc  = Number(temperatureIncrease)  || 0;
  const rainPct  = Number(rainfallChangePercent) || 0;

  // --- Rainfall scenario ---
  // Formula: P_sim = max(0, P_base x (1 + rainPct / 100))
  const P_base = baseline.rainfall;
  const P_sim  = Math.max(0, P_base * (1 + rainPct / 100));
  const P_delta_mm  = P_sim - P_base;          // absolute delta (mm/day)
  const P_delta_pct = rainPct;                 // percentage delta (as specified)

  // --- Temperature scenario ---
  const Tmax_base = baseline.maxTemp;
  const Tmin_base = baseline.minTemp;
  const Tmax_sim  = Tmax_base + tempInc;
  const Tmin_sim  = Tmin_base + tempInc;

  // --- LST scenario (only when available) ---
  const lstAvailable = baseline.lstAvailable === true;
  const LST_base = lstAvailable ? baseline.lst : null;
  const LST_sim  = lstAvailable ? LST_base + tempInc : null;

  // --- SST: NOT adjusted (no SST perturbation model in this project) ---
  const sst = baseline.sstAvailable ? baseline.sst : null;

  return {
    // Metadata
    baselineId: baseline.id,
    baselineLabel: baseline.label,
    baselineDate: baseline.date,
    baselineDataType: baseline.dataType,   // 'observation'
    baselineSource: baseline.source,

    // Applied parameters
    parameters: {
      temperatureIncrease: tempInc,
      rainfallChangePercent: rainPct,
    },

    // Observed baseline values (dataType: 'observation')
    baselineState: {
      rainfall: Number(P_base.toFixed(DISPLAY_PRECISION.rainfall)),
      maxTemp: Number(Tmax_base.toFixed(DISPLAY_PRECISION.maxTemp)),
      minTemp: Number(Tmin_base.toFixed(DISPLAY_PRECISION.minTemp)),
      lst: lstAvailable ? Number(LST_base.toFixed(DISPLAY_PRECISION.lst)) : null,
      sst: baseline.sstAvailable ? Number(sst.toFixed(DISPLAY_PRECISION.sst)) : null,
    },

    // Scenario-calculated values (dataType: 'scenario_calc')
    // All derived mathematically from baselineState – NOT model forecasts
    scenarioState: {
      dataType: 'scenario_calc',
      rainfall: Number(P_sim.toFixed(DISPLAY_PRECISION.rainfall)),
      maxTemp: Number(Tmax_sim.toFixed(DISPLAY_PRECISION.maxTemp)),
      minTemp: Number(Tmin_sim.toFixed(DISPLAY_PRECISION.minTemp)),
      lst: lstAvailable ? Number(LST_sim.toFixed(DISPLAY_PRECISION.lst)) : null,
      sst: sst,  // unchanged – project has no SST perturbation model
    },

    // Structured deltas – both absolute and percentage where applicable
    deltas: {
      // Rainfall: absolute (mm/day) AND percentage
      rainfall: {
        absoluteMm: Number(P_delta_mm.toFixed(DISPLAY_PRECISION.rainfallDeltaMm)),
        percent: Number(P_delta_pct.toFixed(DISPLAY_PRECISION.rainfallDeltaPct)),
        display: `${fmtSigned(P_delta_pct, DISPLAY_PRECISION.rainfallDeltaPct)}% (${fmtSigned(P_delta_mm, DISPLAY_PRECISION.rainfallDeltaMm)} mm/day)`,
      },
      // Tmax: absolute °C only (percent delta not meaningful for temperature)
      maxTemp: {
        absoluteC: Number(tempInc.toFixed(DISPLAY_PRECISION.tempDelta)),
        display: `${fmtSigned(tempInc, DISPLAY_PRECISION.tempDelta)} °C`,
      },
      // Tmin: absolute °C
      minTemp: {
        absoluteC: Number(tempInc.toFixed(DISPLAY_PRECISION.tempDelta)),
        display: `${fmtSigned(tempInc, DISPLAY_PRECISION.tempDelta)} °C`,
      },
      // LST: absolute °C (when available)
      lst: lstAvailable
        ? {
            absoluteC: Number(tempInc.toFixed(DISPLAY_PRECISION.tempDelta)),
            display: `${fmtSigned(tempInc, DISPLAY_PRECISION.tempDelta)} °C`,
          }
        : { absoluteC: null, display: 'Unavailable' },
      // SST: not adjusted
      sst: { absoluteC: null, display: 'Not adjusted (no SST model)' },
    },

    // Availability flags (for transparent UI rendering)
    availability: {
      lst: lstAvailable,
      sst: baseline.sstAvailable,
    },

    isMock: true,
  };
}

// ---------------------------------------------------------------------------
// runWhatIfSimulation
//
// Primary export consumed by WhatIfSimulationPage.
// Preserves the existing API signature so the page requires no changes.
// Adds optional 'baselineId' param for baseline selection (Stage 2+ UI).
//
// @param {object} params
//   params.tempIncrease          – °C delta (legacy key, kept for compatibility)
//   params.temperatureIncrease   – °C delta (new key)
//   params.rainfallChangePercent – % delta
//   params.baselineId            – which baseline to use (optional)
// ---------------------------------------------------------------------------
export async function runWhatIfSimulation(params = {}) {
  // Resolve parameter keys (support both legacy and new naming)
  const tempInc = Number(params.temperatureIncrease ?? params.tempIncrease) || 0;
  const rainPct = Number(params.rainfallChangePercent) || 0;
  const baselineId = params.baselineId || DEFAULT_BASELINE_ID;

  if (API_CONFIG.USE_MOCK) {
    const baseline = resolveBaseline(baselineId);
    const result   = calculateScenario(baseline, tempInc, rainPct);

    // Maintain backwards-compatible shape expected by the existing page
    // (scenarioState, baselineState, calculatedDeltas, impactAssessment)
    return Promise.resolve({
      ...result,
      // Legacy field aliases so the existing WhatIfSimulationPage still renders
      calculatedDeltas: {
        rainfallDelta: result.deltas.rainfall.display,
        tempDelta:     result.deltas.maxTemp.display,
        lstDelta:      result.deltas.lst.display,
      },
      // Preserve the mock impact assessment from the original mock data
      impactAssessment: mockDefaultScenario.impactAssessment,
    });
  }

  // Live API path
  try {
    return await apiClient('/simulation/run', {
      method: 'POST',
      body: JSON.stringify({ temperatureIncrease: tempInc, rainfallChangePercent: rainPct, baselineId }),
    });
  } catch (error) {
    console.warn('[simulationService] API unreachable. Running local scenario calculation.');
    const baseline = resolveBaseline(baselineId);
    const result   = calculateScenario(baseline, tempInc, rainPct);
    return {
      ...result,
      calculatedDeltas: {
        rainfallDelta: result.deltas.rainfall.display,
        tempDelta:     result.deltas.maxTemp.display,
        lstDelta:      result.deltas.lst.display,
      },
      impactAssessment: mockDefaultScenario.impactAssessment,
    };
  }
}

// ---------------------------------------------------------------------------
// getScenarioComparison
// Convenience wrapper – returns a default scenario result.
// ---------------------------------------------------------------------------
export async function getScenarioComparison(baselineId = DEFAULT_BASELINE_ID) {
  return runWhatIfSimulation({ baselineId });
}

// ---------------------------------------------------------------------------
// getImpactCalculation
// Stub for future backend impact endpoint.
// Currently returns the mock impact assessment without inventing values.
// ---------------------------------------------------------------------------
export async function getImpactCalculation(scenarioData) {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockDefaultScenario.impactAssessment);
  }

  try {
    return await apiClient('/simulation/impact', {
      method: 'POST',
      body: JSON.stringify(scenarioData),
    });
  } catch (error) {
    console.warn('[simulationService] Falling back to mock impact assessment');
    return mockDefaultScenario.impactAssessment;
  }
}

// ---------------------------------------------------------------------------
// getAvailableBaselines
// Returns the list of selectable baselines for the UI.
// ---------------------------------------------------------------------------
export function getAvailableBaselines() {
  return SIMULATION_BASELINES;
}
