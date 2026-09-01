/**
 * MOCK SIMULATION DATA
 * 
 * INTERNAL NOTICE:
 * Represents What-If scenario simulations based on the engine logic:
 * - Temperature shifts (+Δ°C applied to max_temp, min_temp, lst)
 * - Rainfall variation (±% change applied to rainfall)
 */

export const mockDefaultScenario = {
  name: "Moderate Heat & Monsoon Surge",
  parameters: {
    tempIncrease: 2.0, // °C
    rainfallChangePercent: 25.0 // %
  },
  baselineState: {
    rainfall: 14.8,
    maxTemp: 32.4,
    minTemp: 24.6,
    lst: 33.8,
    sst: 29.1
  },
  scenarioState: {
    rainfall: 18.5,
    maxTemp: 34.4,
    minTemp: 26.6,
    lst: 35.8,
    sst: 29.1
  },
  calculatedDeltas: {
    rainfallDelta: "+3.7 mm/day (+25%)",
    tempDelta: "+2.0 °C",
    lstDelta: "+2.0 °C"
  },
  impactAssessment: {
    heatRiskLevel: "Elevated",
    urbanThermalIndex: "High Vulnerability",
    waterLoggingRisk: "Moderate",
    impactSummary: "A 2°C temperature rise coupled with +25% precipitation increases local urban heat stress and drainage load across Kochi metropolitan zone."
  },
  isMock: true
};
