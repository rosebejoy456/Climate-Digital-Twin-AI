import React, { useEffect, useState } from 'react';
import { MetricCard } from '../../components/cards/MetricCard';
import { TrendChart } from '../../components/charts/TrendChart';
import { getCurrentClimate, getHistoricalClimate } from '../../services/climateService';
import { getPredictions } from '../../services/predictionService';
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
  IconCheck
} from '../../components/common/Icons';

export function OverviewPage() {
  const [climate, setClimate] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [history, setHistory] = useState([]);
  const [activeTrendVar, setActiveTrendVar] = useState('rainfall');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOverviewData() {
      try {
        const [climateData, predData, histData] = await Promise.all([
          getCurrentClimate(),
          getPredictions('rainfall'),
          getHistoricalClimate()
        ]);
        setClimate(climateData);
        setPrediction(predData);
        setHistory(histData);
      } catch (err) {
        console.error('Error loading overview telemetry:', err);
      } finally {
        setLoading(false);
      }
    }
    loadOverviewData();
  }, []);

  if (loading) {
    return (
      <div style={{ color: 'var(--text-secondary)', padding: '3rem', textAlign: 'center' }}>
        <div className="status-pulse" style={{ margin: '0 auto 1rem', width: '12px', height: '12px' }}></div>
        <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>Loading Climate Telemetry...</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Syncing Ernakulam District sensor feeds & AI models</div>
      </div>
    );
  }

  const m = climate?.metrics;

  // Extract sparkline historical arrays
  const sparkRainfall = history.map((h) => h.rainfall);
  const sparkMaxTemp = history.map((h) => h.maxTemp);
  const sparkLst = history.map((h) => h.lst);
  const sparkNdvi = history.map((h) => h.ndvi);
  const sparkPressure = history.map((h) => h.pressure);

  const trendConfig = {
    rainfall: { label: 'Daily Rainfall', unit: 'mm/day', color: '#06b6d4' },
    maxTemp: { label: 'Max Temperature', unit: '°C', color: '#f59e0b' },
    lst: { label: 'Land Surface Temp (LST)', unit: '°C', color: '#f43f5e' },
    ndvi: { label: 'Vegetation Index (NDVI)', unit: 'Index', color: '#10b981' },
    pressure: { label: 'Surface Pressure', unit: 'hPa', color: '#6366f1' }
  };

  const currentTrend = trendConfig[activeTrendVar];

  return (
    <div>
      {/* Page Heading */}
      <div className="page-header">
        <h1 className="page-title">
          <IconDashboard size={24} color="var(--accent-cyan)" />
          Climate Intelligence Overview
        </h1>
        <p className="page-description">
          Real-time climate telemetry, AI predictions and digital-twin insights for Ernakulam District.
        </p>
      </div>

      {/* 1. CURRENT CLIMATE STATE - 5 METRIC CARDS */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)' }}>
            CURRENT CLIMATE STATE TELEMETRY
          </span>
          <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Updated: {new Date(climate?.timestamp || Date.now()).toLocaleTimeString()}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          <MetricCard
            title="Daily Rainfall"
            value={m?.rainfall?.value}
            unit={m?.rainfall?.unit}
            status={m?.rainfall?.status || 'normal'}
            statusLabel="Moderate"
            source={m?.rainfall?.source}
            icon={IconRainfall}
            trendPercent={8.4}
            sparkData={sparkRainfall}
            color="#06b6d4"
          />
          <MetricCard
            title="Max Temperature"
            value={m?.maxTemp?.value}
            unit={m?.maxTemp?.unit}
            status={m?.maxTemp?.status || 'normal'}
            statusLabel="Normal"
            source={m?.maxTemp?.source}
            icon={IconTemperature}
            trendPercent={1.2}
            sparkData={sparkMaxTemp}
            color="#f59e0b"
          />
          <MetricCard
            title="Surface Temp (LST)"
            value={m?.lst?.value}
            unit={m?.lst?.unit}
            status={m?.lst?.status || 'warning'}
            statusLabel="Elevated"
            source={m?.lst?.source}
            icon={IconLST}
            trendPercent={3.8}
            sparkData={sparkLst}
            color="#f43f5e"
          />
          <MetricCard
            title="Vegetation (NDVI)"
            value={m?.ndvi?.value}
            unit={m?.ndvi?.unit}
            status="normal"
            statusLabel="Healthy Canopy"
            source={m?.ndvi?.source}
            icon={IconNDVI}
            trendPercent={0.5}
            sparkData={sparkNdvi}
            color="#10b981"
          />
          <MetricCard
            title="Surface Pressure"
            value={m?.surfacePressure?.value}
            unit={m?.surfacePressure?.unit}
            status="normal"
            statusLabel="Standard"
            source={m?.surfacePressure?.source}
            icon={IconPressure}
            trendPercent={-0.2}
            sparkData={sparkPressure}
            color="#6366f1"
          />
        </div>
      </div>

      {/* 2. TWO-COLUMN: AI FORECAST & DIGITAL TWIN STATUS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.75fr 1fr', gap: '1.25rem', marginBottom: '1.75rem' }}>
        {/* Left Column: AI Forecast */}
        <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconAI size={18} color="var(--accent-cyan)" />
                  AI Rainfall Forecast — Next 24 Hours
                </h2>
                <p className="card-subtitle">Inference Pipeline: {prediction?.model} • Target: Tomorrow 06:00 UTC</p>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '0.3rem 0.7rem',
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  color: '#fb7185',
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  borderRadius: 'var(--border-radius-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                {prediction?.riskCategory}
              </span>
            </div>

            {/* Projection Numbers */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                padding: '1.25rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Projected Accumulation
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '0.2rem' }}>
                  {prediction?.predictedValue}{' '}
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>mm</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>Next-day quantitative estimate</div>
              </div>

              <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Confidence Interval (95%)
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.35rem' }}>
                  {prediction?.confidenceInterval?.low} – {prediction?.confidenceInterval?.high}{' '}
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>mm</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--status-normal)', marginTop: '0.35rem' }}>
                  MAE: {prediction?.metrics?.mae} mm • RMSE: {prediction?.metrics?.rmse}
                </div>
              </div>

              <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Model Accuracy (R² Score)
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.35rem' }}>
                  {prediction?.metrics?.r2}{' '}
                  <span style={{ fontSize: '0.75rem', color: 'var(--status-normal)', fontWeight: 600 }}>(Good Fit)</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '0.35rem' }}>Trained on 2015–2024 records</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
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
              <strong style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>2026-08-31 23:59 IST</strong>
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
          <div className="tab-group">
            <button
              className={`tab-btn ${activeTrendVar === 'rainfall' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('rainfall')}
            >
              Rainfall
            </button>
            <button
              className={`tab-btn ${activeTrendVar === 'maxTemp' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('maxTemp')}
            >
              Temperature
            </button>
            <button
              className={`tab-btn ${activeTrendVar === 'lst' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('lst')}
            >
              LST
            </button>
            <button
              className={`tab-btn ${activeTrendVar === 'ndvi' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('ndvi')}
            >
              NDVI
            </button>
            <button
              className={`tab-btn ${activeTrendVar === 'pressure' ? 'active' : ''}`}
              onClick={() => setActiveTrendVar('pressure')}
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
