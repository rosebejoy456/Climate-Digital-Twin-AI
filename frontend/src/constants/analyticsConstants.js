// frontend/src/constants/analyticsConstants.js
// Constants for the Analytics page – no external dependencies.

import { IconRainfall, IconTemperature, IconLST, IconNDVI } from '../components/common/Icons';

export const VARIABLES = {
  rainfall: {
    name: 'Rainfall',
    unit: 'mm/day',
    color: '#06b6d4',
    icon: IconRainfall,
    source: 'IMD 0.25° Gridded',
  },
  maxTemp: {
    name: 'Max Temp',
    unit: '°C',
    color: '#f59e0b',
    icon: IconTemperature,
    source: 'MODIS LST (Daily)',
  },
  lst: {
    name: 'Land Surface Temp',
    unit: '°C',
    color: '#f43f5e',
    icon: IconLST,
    source: 'MODIS LST (Daily)',
  },
  ndvi: {
    name: 'NDVI',
    unit: 'Index',
    color: '#10b981',
    icon: IconNDVI,
    source: 'MODIS NDVI (16‑day)',
  },
};

// Illustrative screening indicators – disclaimer will clarify they are not official forecasts.
export const SCREENING_INDICATORS = {
  rainfall: {
    threshold: 100,
    description: 'Illustrative screening: >100 mm may indicate elevated flood risk (educational only).',
  },
};
