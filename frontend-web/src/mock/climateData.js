/**
 * MOCK CLIMATE DATA
 * 
 * INTERNAL NOTICE:
 * This data is realistic mock data for UI scaffolding and layout testing.
 * All values align with Ernakulam District climate parameters (IMD, MODIS, ERA5).
 */

export const mockCurrentClimate = {
  region: "Ernakulam District, Kerala",
  coordinates: {
    latitude: 9.9816,
    longitude: 76.2999
  },
  timestamp: new Date().toISOString(),
  metrics: {
    rainfall: {
      value: 14.8,
      unit: "mm/day",
      status: "moderate",
      source: "IMD Station (Estimated)"
    },
    maxTemp: {
      value: 32.4,
      unit: "°C",
      status: "normal",
      source: "IMD / ERA5"
    },
    minTemp: {
      value: 24.6,
      unit: "°C",
      status: "normal",
      source: "IMD / ERA5"
    },
    lst: {
      value: 33.8,
      unit: "°C",
      status: "elevated",
      source: "MODIS LST"
    },
    ndvi: {
      value: 0.68,
      unit: "Index (-1 to 1)",
      status: "healthy",
      source: "MODIS NDVI"
    },
    surfacePressure: {
      value: 1008.4,
      unit: "hPa",
      status: "normal",
      source: "ERA5"
    },
    sst: {
      value: 29.1,
      unit: "°C",
      status: "normal",
      source: "INSAT / Satellite"
    },
    soilMoisture: {
      value: 0.38,
      unit: "m³/m³",
      status: "adequate",
      source: "ERA5 Reanalysis"
    }
  },
  isMock: true
};

export const mockHistoricalClimate = [
  { date: "2026-08-25", rainfall: 8.2, maxTemp: 31.8, minTemp: 24.2, lst: 33.1, ndvi: 0.67, pressure: 1009.1 },
  { date: "2026-08-26", rainfall: 12.4, maxTemp: 31.2, minTemp: 24.0, lst: 32.5, ndvi: 0.67, pressure: 1008.5 },
  { date: "2026-08-27", rainfall: 22.0, maxTemp: 29.8, minTemp: 23.8, lst: 30.2, ndvi: 0.68, pressure: 1006.8 },
  { date: "2026-08-28", rainfall: 18.5, maxTemp: 30.5, minTemp: 23.9, lst: 31.4, ndvi: 0.68, pressure: 1007.2 },
  { date: "2026-08-29", rainfall: 5.1, maxTemp: 32.1, minTemp: 24.4, lst: 33.5, ndvi: 0.68, pressure: 1008.9 },
  { date: "2026-08-30", rainfall: 9.3, maxTemp: 32.0, minTemp: 24.5, lst: 33.2, ndvi: 0.68, pressure: 1008.6 },
  { date: "2026-08-31", rainfall: 14.8, maxTemp: 32.4, minTemp: 24.6, lst: 33.8, ndvi: 0.68, pressure: 1008.4 }
];
