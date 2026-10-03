import React, { useState, useEffect } from 'react';
import { runWhatIfSimulation } from '../../services/simulationService';
import {
  IconSimulation,
  IconTemperature,
  IconRainfall,
  IconLST,
  IconNDVI,
  IconWarning,
  IconCheck,
  IconActivity
} from '../../components/common/Icons';

export function WhatIfSimulationPage() {
  const [tempIncrease, setTempIncrease] = useState(2.0);
  const [rainfallChange, setRainfallChange] = useState(25.0);
  const [simulationResult, setSimulationResult] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    async function updateSim() {
      setIsSimulating(true);
      const result = await runWhatIfSimulation({
        tempIncrease: parseFloat(tempIncrease),
        rainfallChangePercent: parseFloat(rainfallChange)
      });
      setSimulationResult(result);
      setTimeout(() => setIsSimulating(false), 120);
    }
    updateSim();
  }, [tempIncrease, rainfallChange]);

  const base = simulationResult?.baselineState;
  const sim = simulationResult?.scenarioState;
  const deltas = simulationResult?.calculatedDeltas;
  const impact = simulationResult?.impactAssessment;

  // Preset scenarios
  const applyPreset = (temp, rain) => {
    setTempIncrease(temp);
    setRainfallChange(rain);
  };

  // Compute dynamic risk ratings based on slider positions
  const getHeatRisk = () => {
    if (tempIncrease >= 3.0) return { level: 'High Critical', status: 'alert', desc: 'Severe heatwave threshold; elevated urban heat island effect across Kochi.' };
    if (tempIncrease >= 1.5) return { level: 'Elevated Risk', status: 'warning', desc: 'Moderate thermal anomaly; cooling demand and daytime stress increase.' };
    if (tempIncrease < 0) return { level: 'Mitigated / Reduced', status: 'normal', desc: 'Temperatures below seasonal average; diminished heat stress.' };
    return { level: 'Nominal Baseline', status: 'normal', desc: 'Typical baseline thermal distribution.' };
  };

  const getDrainageRisk = () => {
    if (rainfallChange >= 40) return { level: 'Severe Drainage Surcharge', status: 'alert', desc: 'High flash-flood likelihood in low-lying coastal and backwater zones.' };
    if (rainfallChange >= 15) return { level: 'Moderate Waterlogging', status: 'warning', desc: 'Local urban drainage capacity stressed during peak storm events.' };
    if (rainfallChange <= -30) return { level: 'Agricultural Drought Stress', status: 'alert', desc: 'Severe deficit impacting plantation irrigation and groundwater replenishment.' };
    if (rainfallChange < 0) return { level: 'Minor Precipitation Deficit', status: 'warning', desc: 'Sub-average rainfall; soil moisture gradually depleted.' };
    return { level: 'Normal Drainage Flow', status: 'normal', desc: 'Standard runoff profile within canal capacity.' };
  };

  const heatRisk = getHeatRisk();
  const drainageRisk = getDrainageRisk();

  return (
    <div>
      {/* Page Heading */}
      <div className="page-header">
        <h1 className="page-title">
          <IconSimulation size={24} color="var(--accent-cyan)" />
          What-If Climate Scenario Simulation
        </h1>
        <p className="page-description">
          Explore how climate conditions and vulnerability metrics transform under hypothetical temperature and precipitation perturbations.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
        {/* Left Column: Scenario Builder */}
        <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card-panel-header" style={{ marginBottom: '0.5rem' }}>
            <div className="card-title-group">
              <h2 className="card-title">
                <IconActivity size={18} color="var(--accent-cyan)" />
                Scenario Parameter Studio
              </h2>
              <p className="card-subtitle">Digital Twin Perturbation Matrix</p>
            </div>
            {isSimulating && (
              <span style={{ fontSize: '0.6875rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Recalculating...
              </span>
            )}
          </div>

          {/* Preset Buttons */}
          <div>
            <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)', marginBottom: '0.5rem', fontWeight: 700 }}>
              RAPID CLIMATE PRESETS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <button
                className="telemetry-pill"
                style={{ cursor: 'pointer', justifyContent: 'center', fontSize: '0.75rem' }}
                onClick={() => applyPreset(2.5, 30)}
              >
                🔥 Monsoon Surge (+2.5°, +30%)
              </button>
              <button
                className="telemetry-pill"
                style={{ cursor: 'pointer', justifyContent: 'center', fontSize: '0.75rem' }}
                onClick={() => applyPreset(4.0, 50)}
              >
                ⛈️ Severe Flood (+4.0°, +50%)
              </button>
              <button
                className="telemetry-pill"
                style={{ cursor: 'pointer', justifyContent: 'center', fontSize: '0.75rem' }}
                onClick={() => applyPreset(3.5, -40)}
              >
                ☀️ Extreme Heatwave (+3.5°, -40%)
              </button>
              <button
                className="telemetry-pill"
                style={{ cursor: 'pointer', justifyContent: 'center', fontSize: '0.75rem' }}
                onClick={() => applyPreset(0, 0)}
              >
                ↺ Reset Baseline (0.0°, 0%)
              </button>
            </div>
          </div>

          {/* Slider 1: Temperature Delta */}
          <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <label htmlFor="temp-slider" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <IconTemperature size={15} color="#f59e0b" />
                Temperature Shift (Δ°C)
              </label>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: tempIncrease > 0 ? '#f43f5e' : tempIncrease < 0 ? '#06b6d4' : 'var(--text-primary)'
                }}
              >
                {tempIncrease > 0 ? `+${tempIncrease.toFixed(1)}` : tempIncrease.toFixed(1)} °C
              </span>
            </div>
            <input
              id="temp-slider"
              type="range"
              min="-5"
              max="5"
              step="0.5"
              value={tempIncrease}
              onChange={(e) => setTempIncrease(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-magenta)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '0.35rem' }}>
              <span>-5.0 °C (Cooling)</span>
              <span>0.0 °C</span>
              <span>+5.0 °C (Severe Warming)</span>
            </div>
          </div>

          {/* Slider 2: Precipitation Delta */}
          <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <label htmlFor="rain-slider" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <IconRainfall size={15} color="#06b6d4" />
                Precipitation Delta (Δ%)
              </label>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: rainfallChange > 0 ? '#06b6d4' : rainfallChange < 0 ? '#f59e0b' : 'var(--text-primary)'
                }}
              >
                {rainfallChange > 0 ? `+${rainfallChange.toFixed(0)}` : rainfallChange.toFixed(0)} %
              </span>
            </div>
            <input
              id="rain-slider"
              type="range"
              min="-50"
              max="50"
              step="5"
              value={rainfallChange}
              onChange={(e) => setRainfallChange(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '0.35rem' }}>
              <span>-50% (Drought)</span>
              <span>0%</span>
              <span>+50% (Extreme Rain)</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <IconCheck size={14} color="var(--status-normal)" />
            <span>Simulated via <code style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>ScenarioEngine</code> state transforms.</span>
          </div>
        </div>

        {/* Right Column: Comparison & Impact Assessment */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Baseline vs Scenario Cards */}
          <div className="card-panel">
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconSimulation size={18} color="var(--accent-cyan)" />
                  Baseline vs Scenario Comparison
                </h2>
                <p className="card-subtitle">Immediate perturbation impact across key climate variables</p>
              </div>
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Ernakulam Snapshot
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {/* Rainfall Comparison */}
              <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '1.15rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <IconRainfall size={14} color="#06b6d4" />
                  DAILY RAINFALL
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {sim?.rainfall} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>mm</span>
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                    {base?.rainfall} mm
                  </span>
                </div>
                <div style={{ marginTop: '0.4rem', display: 'inline-flex', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(6, 182, 212, 0.12)', color: '#38bdf8', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {deltas?.rainfallDelta}
                </div>
              </div>

              {/* Temperature Comparison */}
              <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '1.15rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <IconTemperature size={14} color="#f59e0b" />
                  MAX TEMPERATURE
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {sim?.maxTemp} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>°C</span>
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                    {base?.maxTemp} °C
                  </span>
                </div>
                <div style={{ marginTop: '0.4rem', display: 'inline-flex', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(245, 158, 11, 0.12)', color: '#fbbf24', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {deltas?.tempDelta}
                </div>
              </div>

              {/* LST Comparison */}
              <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '1.15rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <IconLST size={14} color="#f43f5e" />
                  SURFACE TEMP (LST)
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {sim?.lst} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>°C</span>
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                    {base?.lst} °C
                  </span>
                </div>
                <div style={{ marginTop: '0.4rem', display: 'inline-flex', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(244, 63, 94, 0.12)', color: '#fb7185', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {deltas?.lstDelta}
                </div>
              </div>
            </div>
          </div>

          {/* Impact Assessment Matrix */}
          <div className="card-panel">
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconWarning size={18} color="var(--accent-magenta)" />
                  Municipal & Environmental Impact Assessment
                </h2>
                <p className="card-subtitle">Ernakulam District Vulnerability Vector</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
              {/* Heat Stress Panel */}
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Urban Heat Stress Index</span>
                  <span style={{ fontSize: '0.6875rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700, backgroundColor: heatRisk.status === 'alert' ? 'rgba(239, 68, 68, 0.15)' : heatRisk.status === 'warning' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)', color: heatRisk.status === 'alert' ? '#f87171' : heatRisk.status === 'warning' ? '#fbbf24' : '#34d399' }}>
                    {heatRisk.level}
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {heatRisk.desc}
                </p>
              </div>

              {/* Drainage & Flooding Panel */}
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Drainage & Inundation Load</span>
                  <span style={{ fontSize: '0.6875rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700, backgroundColor: drainageRisk.status === 'alert' ? 'rgba(239, 68, 68, 0.15)' : drainageRisk.status === 'warning' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)', color: drainageRisk.status === 'alert' ? '#f87171' : drainageRisk.status === 'warning' ? '#fbbf24' : '#34d399' }}>
                    {drainageRisk.level}
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {drainageRisk.desc}
                </p>
              </div>
            </div>

            {/* Impact Statement Box */}
            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(17, 28, 53, 0.9)', borderLeft: '3px solid var(--accent-cyan)', borderRadius: '0 var(--border-radius-sm) var(--border-radius-sm) 0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                SCENARIO SUMMARY FOR DECISION SUPPORT
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {impact?.impactSummary} Perturbation yields a delta of <strong>{deltas?.rainfallDelta}</strong> rainfall and <strong>{deltas?.tempDelta}</strong> maximum temperature over Ernakulam's geographic bounding box.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
