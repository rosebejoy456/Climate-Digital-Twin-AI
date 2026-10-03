import { apiClient } from './api';

/**
 * WHAT-IF SIMULATION SERVICE
 * Bridges the frontend to the Digital Twin scenario simulation engine.
 */

export async function runWhatIfSimulation(params = { tempIncrease: 2.0, rainfallChangePercent: 25.0 }) {
  const data = await apiClient('/simulation/what-if', {
    method: 'POST',
    body: JSON.stringify({
      temperature_change_c: Number(params.tempIncrease) || 0,
      rainfall_change_percent: Number(params.rainfallChangePercent) || 0,
      pressure_change_hpa: Number(params.pressureChange) || 0,
      lst_change_c: Number(params.lstChange ?? params.tempIncrease) || 0,
      ndvi_change_percent: Number(params.ndviChange) || 0
    })
  });
  const signed = (value, unit) => `${value >= 0 ? '+' : ''}${value.toFixed(unit === '%' ? 1 : 2)}${unit}`;
  return {
    baselineState: {
      rainfall: data.baseline.rainfall_mm,
      maxTemp: data.baseline.temperature_celsius,
      lst: data.baseline.lst_celsius,
      ndvi: data.baseline.ndvi,
      pressure: data.baseline.pressure_hpa
    },
    scenarioState: {
      rainfall: data.scenario.rainfall_mm,
      maxTemp: data.scenario.temperature_celsius,
      lst: data.scenario.lst_celsius,
      ndvi: data.scenario.ndvi,
      pressure: data.scenario.pressure_hpa
    },
    calculatedDeltas: {
      rainfallDelta: signed(data.impact.rainfall_mm, ' mm'),
      tempDelta: signed(data.impact.temperature_celsius, ' °C'),
      lstDelta: signed(data.impact.lst_celsius, ' °C')
    },
    impactAssessment: { impactSummary: data.interpretation, note: data.note },
    date: data.date
  };
}

export async function getScenarioComparison() {
  return runWhatIfSimulation();
}

export async function getImpactCalculation(scenarioData) {
  const result = await runWhatIfSimulation(scenarioData);
  return result.impactAssessment;
}
