import React, { useEffect, useState } from 'react';
import { MetricCard } from '../../components/cards/MetricCard';
import { TrendChart } from '../../components/charts/TrendChart';
import { getCurrentClimate, getHistoricalClimate } from '../../services/climateService';
import { getPredictions } from '../../services/predictionService';
import { formatDate } from '../../utils/formatters';
import {
  IconDashboard,
  IconRainfall,
  IconTemperature,
  IconLST,
  IconNDVI,
  IconPressure,
  IconAI,
  IconGlobe,
  IconActivity,
  IconCheck,
  IconWarning
} from '../../components/common/Icons';

/**
 * Calculates percentage trend relative to the historical baseline mean.
 */
function calculateBaselineTrend(currentVal, historyArray) {
  if (currentVal === null || currentVal === undefined || !historyArray || historyArray.length === 0) {
    return 0;
  }
  const validVals = historyArray.filter((v) => typeof v === 'number' && !isNaN(v));
  if (validVals.length === 0) return 0;
  const avg = validVals.reduce((acc, v) => acc + v, 0) / validVals.length;
  if (avg === 0) return 0;
  const diff = ((currentVal - avg) / avg) * 100;
  return parseFloat(diff.toFixed(1));
}

export function OverviewPage() {
  const [climate, setClimate] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [history, setHistory] = useState([]);
  const [activeTrendVar, setActiveTrendVar] = useState('rainfall');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  async function loadOverviewData(isRefresh = false) {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const [climateData, predData, histData] = await Promise.all([
        getCurrentClimate(),
        getPredictions('rainfall'),
        getHistoricalClimate()
      ]);
      setClimate(climateData);
      setPrediction(predData);
      setHistory(histData || []);
    } catch (err) {
      console.error('Error loading overview telemetry:', err);
      setError(err?.message || 'Failed to connect to climate telemetry services');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadOverviewData();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="overview-loading-state">
        <div className="status-pulse" style={{ margin: '0 auto 1.25rem', width: '14px', height: '14px' }}></div>
        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.01em' }}>
          Loading Climate Telemetry Pipeline...
        </div>
        <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.4rem', maxWidth: '420px', lineHeight: 1.5 }}>
          Establishing handshake with Ernakulam District telemetry feeds, ERA5 reanalysis layers, and XGBoost inference models.
        </div>
      </div>
    );
  }

  // Error State
  if (error && !climate) {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">
            <IconDashboard size={24} color="var(--accent-cyan)" />
            Climate Intelligence Overview
          </h1>
          <p className="page-description">
            Real-time climate telemetry, AI predictions and digital-twin insights for Ernakulam District.
          </p>
        </div>

        <div className="overview-error-state">
          <div style={{ color: 'var(--status-alert)', marginBottom: '1rem' }}>
            <IconWarning size={36} />
          </div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Telemetry Ingestion Offline
          </h3>
          <p style={{ fontSize: '0.845rem', color: 'var(--text-secondary)', maxWidth: '460px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            {error}. The climate digital twin state controller was unable to stream current sensor observations.
          </p>
          <button
            className="telemetry-refresh-btn"
            onClick={() => loadOverviewData(false)}
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.8125rem' }}
          >
            <IconActivity size={15} />
            <span>Retry Connection</span>
          </button>
        </div>
      </div>
    );
  }

  const m = climate?.metrics;

  // Extract sparkline historical arrays safely
  const sparkRainfall = history.map((h) => h.rainfall).filter((v) => typeof v === 'number');
  const sparkMaxTemp = history.map((h) => h.maxTemp).filter((v) => typeof v === 'number');
  const sparkLst = history.map((h) => h.lst).filter((v) => typeof v === 'number');
  const sparkNdvi = history.map((h) => h.ndvi).filter((v) => typeof v === 'number');
  const sparkPressure = history.map((h) => h.pressure).filter((v) => typeof v === 'number');

  // Dynamically compute baseline trends vs 7-day observational history
  const trendRainfall = calculateBaselineTrend(m?.rainfall?.value, sparkRainfall);
  const trendMaxTemp = calculateBaselineTrend(m?.maxTemp?.value, sparkMaxTemp);
  const trendLst = calculateBaselineTrend(m?.lst?.value, sparkLst);
  const trendNdvi = calculateBaselineTrend(m?.ndvi?.value, sparkNdvi);
  const trendPressure = calculateBaselineTrend(m?.surfacePressure?.value, sparkPressure);

  // Derive status states dynamically based on scientific thresholds
  const rainfallStatus = m?.rainfall?.status || (m?.rainfall?.value > 35 ? 'alert' : m?.rainfall?.value > 15 ? 'warning' : 'normal');
  const rainfallStatusLabel = rainfallStatus === 'alert' ? 'Heavy Rain' : rainfallStatus === 'warning' ? 'Moderate' : 'Light / Trace';

  const maxTempStatus = m?.maxTemp?.status || (m?.maxTemp?.value > 35 ? 'alert' : m?.maxTemp?.value > 32 ? 'warning' : 'normal');
  const maxTempStatusLabel = maxTempStatus === 'alert' ? 'High Heat' : maxTempStatus === 'warning' ? 'Elevated' : 'Normal';

  const lstStatus = m?.lst?.status || (m?.lst?.value > 36 ? 'alert' : m?.lst?.value > 32 ? 'warning' : 'normal');
  const lstStatusLabel = lstStatus === 'alert' ? 'Critical Thermal' : lstStatus === 'warning' ? 'Elevated' : 'Optimal';

  const ndviStatus = m?.ndvi?.status || (m?.ndvi?.value < 0.35 ? 'alert' : m?.ndvi?.value < 0.5 ? 'warning' : 'normal');
  const ndviStatusLabel = m?.ndvi?.value >= 0.65 ? 'Healthy Canopy' : m?.ndvi?.value >= 0.45 ? 'Moderate Cover' : 'Sparse';

  const pressureStatus = m?.surfacePressure?.status || 'normal';
  const pressureStatusLabel = 'Standard';

  const trendConfig = {
    rainfall: { label: 'Daily Rainfall', unit: 'mm/day', color: '#06b6d4' },
    maxTemp: { label: 'Max Temperature', unit: '°C', color: '#f59e0b' },
    lst: { label: 'Land Surface Temp (LST)', unit: '°C', color: '#f43f5e' },
    ndvi: { label: 'Vegetation Index (NDVI)', unit: 'Index', color: '#10b981' },
    pressure: { label: 'Surface Pressure', unit: 'hPa', color: '#6366f1' }
  };

  const currentTrend = trendConfig[activeTrendVar] || trendConfig.rainfall;

  // Format sync timestamp nicely
  const lastSyncTime = climate?.timestamp
    ? new Date(climate.timestamp).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }) + ' UTC'
    : 'Synchronized';

  return (
    <div>
      {/* Page Heading & Top Level Telemetry Actions */}
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">
            <IconDashboard size={24} color="var(--accent-cyan)" />
            Climate Intelligence Overview
          </h1>
          <p className="page-description">
            Real-time climate telemetry, AI predictions and digital-twin insights for Ernakulam District.
          </p>
        </div>

        <button
          className="telemetry-refresh-btn"
          onClick={() => loadOverviewData(true)}
          disabled={refreshing}
          title="Sync latest climate telemetry"
        >
          <IconActivity size={14} className={refreshing ? 'spin-animation' : ''} color="var(--accent-cyan)" />
          <span>{refreshing ? 'Syncing Feeds...' : 'Sync Telemetry'}</span>
        </button>
      </div>

      {/* 1. CURRENT CLIMATE STATE - 5 INTERACTIVE METRIC CARDS */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)' }}>
            CURRENT CLIMATE STATE TELEMETRY (SELECT TO VIEW TRAJECTORY)
          </span>
          <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Updated: {lastSyncTime}
          </span>
        </div>

        <div className="overview-metrics-grid">
          <MetricCard
            title="Daily Rainfall"
            value={m?.rainfall?.value}
            unit={m?.rainfall?.unit}
            status={rainfallStatus}
            statusLabel={rainfallStatusLabel}
            source={m?.rainfall?.source || 'IMD Station'}
            icon={IconRainfall}
            trendPercent={trendRainfall}
            sparkData={sparkRainfall}
            color="#06b6d4"
            isActive={activeTrendVar === 'rainfall'}
            onClick={() => setActiveTrendVar('rainfall')}
          />
          <MetricCard
            title="Max Temperature"
            value={m?.maxTemp?.value}
            unit={m?.maxTemp?.unit}
            status={maxTempStatus}
            statusLabel={maxTempStatusLabel}
            source={m?.maxTemp?.source || 'IMD / ERA5'}
            icon={IconTemperature}
            trendPercent={trendMaxTemp}
            sparkData={sparkMaxTemp}
            color="#f59e0b"
            isActive={activeTrendVar === 'maxTemp'}
            onClick={() => setActiveTrendVar('maxTemp')}
          />
          <MetricCard
            title="Surface Temp (LST)"
            value={m?.lst?.value}
            unit={m?.lst?.unit}
            status={lstStatus}
            statusLabel={lstStatusLabel}
            source={m?.lst?.source || 'MODIS LST'}
            icon={IconLST}
            trendPercent={trendLst}
            sparkData={sparkLst}
            color="#f43f5e"
            isActive={activeTrendVar === 'lst'}
            onClick={() => setActiveTrendVar('lst')}
          />
          <MetricCard
            title="Vegetation (NDVI)"
            value={m?.ndvi?.value}
            unit={m?.ndvi?.unit}
            status={ndviStatus}
            statusLabel={ndviStatusLabel}
            source={m?.ndvi?.source || 'MODIS NDVI'}
            icon={IconNDVI}
            trendPercent={trendNdvi}
            sparkData={sparkNdvi}
            color="#10b981"
            isActive={activeTrendVar === 'ndvi'}
            onClick={() => setActiveTrendVar('ndvi')}
          />
          <MetricCard
            title="Surface Pressure"
            value={m?.surfacePressure?.value}
            unit={m?.surfacePressure?.unit}
            status={pressureStatus}
            statusLabel={pressureStatusLabel}
            source={m?.surfacePressure?.source || 'ERA5'}
            icon={IconPressure}
            trendPercent={trendPressure}
            sparkData={sparkPressure}
            color="#6366f1"
            isActive={activeTrendVar === 'pressure'}
            onClick={() => setActiveTrendVar('pressure')}
          />
        </div>
      </div>

      {/* 2. TWO-COLUMN: AI FORECAST & DIGITAL TWIN STATUS */}
      <div className="overview-forecast-grid">
        {/* Left Column: AI Forecast */}
        <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconAI size={18} color="var(--accent-cyan)" />
                  AI Rainfall Forecast — Next 24 Hours
                </h2>
                <p className="card-subtitle">
                  Inference Pipeline: {prediction?.model || 'XGBoost Regressor'} • Target: {prediction?.targetDate ? `${formatDate(prediction.targetDate)} 06:00 UTC` : 'Tomorrow 06:00 UTC'}
                </p>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '0.3rem 0.75rem',
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  color: '#fb7185',
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  borderRadius: 'var(--border-radius-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                {prediction?.riskCategory || 'Moderate Rainfall'}
              </span>
            </div>

            {/* Projection Numbers */}
            <div className="overview-projection-stats">
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Projected Accumulation
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '0.2rem' }}>
                  {prediction?.predictedValue ?? '--'}{' '}
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>mm</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>Next-day quantitative estimate</div>
              </div>

              <div className="overview-projection-col">
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Confidence Interval (95%)
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.35rem' }}>
                  {prediction?.confidenceInterval?.low ?? '--'} – {prediction?.confidenceInterval?.high ?? '--'}{' '}
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>mm</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--status-normal)', marginTop: '0.35rem' }}>
                  MAE: {prediction?.metrics?.mae ?? '--'} mm • RMSE: {prediction?.metrics?.rmse ?? '--'}
                </div>
              </div>

              <div className="overview-projection-col">
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Model Accuracy (R² Score)
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.35rem' }}>
                  {prediction?.metrics?.r2 ?? '--'}{' '}
                  <span style={{ fontSize: '0.75rem', color: 'var(--status-normal)', fontWeight: 600 }}>(Good Fit)</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '0.35rem' }}>Trained on 2015–2024 records</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <IconCheck size={14} color="var(--status-normal)" />
              Lag features validated across 7 temporal windows
            </span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>Target: Ernakulam AWS</span>
          </div>
        </div>

        {/* Right Column: Digital Twin Status */}
        <div className="card-panel">
          <div className="card-panel-header">
            <div className="card-title-group">
              <h2 className="card-title">
                <IconGlobe size={18} color="var(--accent-cyan)" />
                Digital Twin Status
              </h2>
              <p className="card-subtitle">Node Telemetry & State Controller</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.8125rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.55rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>District Domain:</span>
              <strong style={{ color: 'var(--text-primary)' }}>Ernakulam (8 Taluks)</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.55rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Data Coverage:</span>
              <strong style={{ color: 'var(--text-primary)' }}>2015–2025 Daily NetCDF</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.55rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>AI Model:</span>
              <strong style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>XGBoost + LSTM (Hybrid)</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.55rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Prediction Status:</span>
              <strong style={{ color: 'var(--status-normal)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <span className="status-pulse" style={{ width: '6px', height: '6px' }}></span> Real-Time Ready
              </strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.55rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Simulation Engine:</span>
              <strong style={{ color: 'var(--text-primary)' }}>ScenarioEngine Active</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Last Telemetry Sync:</span>
              <strong style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{lastSyncTime}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CLIMATE TRENDS MULTI-VARIABLE CHART */}
      <div className="card-panel">
        <div className="card-panel-header" style={{ flexWrap: 'wrap', gap: '1rem' }}>
          <div className="card-title-group">
            <h2 className="card-title">
              <IconActivity size={18} color="var(--accent-cyan)" />
              Climate Trends & Multi-Variable Historical Dynamics
            </h2>
            <p className="card-subtitle">
              7-Day observational baseline for {currentTrend.label} ({currentTrend.unit})
            </p>
          </div>

          {/* Variable Selector Tabs */}
          <div className="tab-group" role="tablist" aria-label="Climate Variable Trajectories">
            <button
              className={`tab-btn ${activeTrendVar === 'rainfall' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('rainfall')}
              role="tab"
              aria-selected={activeTrendVar === 'rainfall'}
            >
              Rainfall
            </button>
            <button
              className={`tab-btn ${activeTrendVar === 'maxTemp' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('maxTemp')}
              role="tab"
              aria-selected={activeTrendVar === 'maxTemp'}
            >
              Temperature
            </button>
            <button
              className={`tab-btn ${activeTrendVar === 'lst' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('lst')}
              role="tab"
              aria-selected={activeTrendVar === 'lst'}
            >
              LST
            </button>
            <button
              className={`tab-btn ${activeTrendVar === 'ndvi' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('ndvi')}
              role="tab"
              aria-selected={activeTrendVar === 'ndvi'}
            >
              NDVI
            </button>
            <button
              className={`tab-btn ${activeTrendVar === 'pressure' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('pressure')}
              role="tab"
              aria-selected={activeTrendVar === 'pressure'}
            >
              Pressure
            </button>
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <TrendChart
            data={history}
            variable={activeTrendVar}
            unit={currentTrend.unit}
            color={currentTrend.color}
            height={220}
          />
        </div>
      </div>
    </div>
  );
}
export default OverviewPage;
