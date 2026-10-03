import { apiClient } from './api';

/**
 * CLIMATE DATA SERVICE
 * Handles fetching current climate state and historical climate records.
 */

export async function getCurrentClimate() {
  const data = await apiClient('/state/current');
  return {
    region: 'Ernakulam District, Kerala',
    timestamp: data.timestamp,
    metrics: {
      rainfall: { value: data.rainfall, unit: 'mm/day', source: 'IMD gridded rainfall' },
      maxTemp: { value: data.max_temp, unit: '°C', source: 'IMD maximum temperature' },
      minTemp: { value: data.min_temp, unit: '°C', source: 'IMD minimum temperature' },
      lst: { value: data.lst, unit: '°C', source: 'MODIS LST' },
      ndvi: { value: data.ndvi, unit: 'Index', source: 'MODIS NDVI' },
      surfacePressure: { value: data.surface_pressure, unit: 'hPa', source: 'ERA5 reanalysis' }
    },
    source: data.source
  };
}

export async function getHistoricalClimate(days = 7) {
  return apiClient(`/state/history?days=${days}`);
}
