import { API_CONFIG, apiClient } from './api';
import { mockCurrentClimate, mockHistoricalClimate } from '../mock/climateData';

/**
 * CLIMATE DATA SERVICE
 * Handles fetching current climate state and historical climate records.
 */

export async function getCurrentClimate() {
  if (API_CONFIG.USE_MOCK) {
    // Return mock data for UI development
    return Promise.resolve(mockCurrentClimate);
  }

  try {
    // Connects to FastAPI endpoint GET /state/current
    const data = await apiClient('/state/current');
    return {
      region: "Ernakulam District, Kerala",
      timestamp: data.timestamp,
      metrics: {
        rainfall: { value: data.rainfall, unit: "mm/day" },
        maxTemp: { value: data.max_temp, unit: "°C" },
        minTemp: { value: data.min_temp, unit: "°C" },
        lst: { value: data.lst, unit: "°C" },
        sst: { value: data.sst, unit: "°C" }
      },
      isMock: false
    };
  } catch (error) {
    console.warn('[climateService] Falling back to mock current climate data');
    return mockCurrentClimate;
  }
}

export async function getHistoricalClimate(days = 7) {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockHistoricalClimate);
  }

  try {
    return await apiClient(`/state/history?days=${days}`);
  } catch (error) {
    console.warn('[climateService] Falling back to mock historical climate data');
    return mockHistoricalClimate;
  }
}
