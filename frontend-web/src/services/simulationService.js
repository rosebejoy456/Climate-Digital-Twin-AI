import { API_CONFIG, apiClient } from './api';
import { mockDefaultScenario } from '../mock/simulationData';

/**
 * WHAT-IF SIMULATION SERVICE
 * Bridges the frontend to the Digital Twin scenario simulation engine.
 */

export async function runWhatIfSimulation(params = { tempIncrease: 2.0, rainfallChangePercent: 25.0 }) {
  if (API_CONFIG.USE_MOCK) {
    // Calculates custom scenario deltas locally in mock mode
    const base = mockDefaultScenario.baselineState;
    const tempInc = Number(params.tempIncrease) || 0;
    const rainPct = Number(params.rainfallChangePercent) || 0;

    const simulated = {
      ...mockDefaultScenario,
      parameters: params,
      scenarioState: {
        rainfall: Number((base.rainfall * (1 + rainPct / 100)).toFixed(1)),
        maxTemp: Number((base.maxTemp + tempInc).toFixed(1)),
        minTemp: Number((base.minTemp + tempInc).toFixed(1)),
        lst: Number((base.lst + tempInc).toFixed(1)),
        sst: base.sst
      },
      calculatedDeltas: {
        rainfallDelta: `${rainPct >= 0 ? '+' : ''}${rainPct}% (${(base.rainfall * (rainPct / 100)).toFixed(1)} mm)`,
        tempDelta: `${tempInc >= 0 ? '+' : ''}${tempInc.toFixed(1)} °C`,
        lstDelta: `${tempInc >= 0 ? '+' : ''}${tempInc.toFixed(1)} °C`
      }
    };
    return Promise.resolve(simulated);
  }

  try {
    return await apiClient('/simulation/run', {
      method: 'POST',
      body: JSON.stringify(params)
    });
  } catch (error) {
    console.warn('[simulationService] Falling back to mock simulation response');
    return mockDefaultScenario;
  }
}

export async function getScenarioComparison() {
  return runWhatIfSimulation();
}

export async function getImpactCalculation(scenarioData) {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockDefaultScenario.impactAssessment);
  }

  try {
    return await apiClient('/simulation/impact', {
      method: 'POST',
      body: JSON.stringify(scenarioData)
    });
  } catch (error) {
    console.warn('[simulationService] Falling back to mock impact assessment');
    return mockDefaultScenario.impactAssessment;
  }
}
