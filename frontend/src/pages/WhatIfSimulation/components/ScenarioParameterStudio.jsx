// frontend/src/pages/WhatIfSimulation/components/ScenarioParameterStudio.jsx
//
// SCENARIO PARAMETER STUDIO
//
// SCIENTIFIC INTEGRITY NOTICE:
// This component provides controls for a PARAMETRIC SENSITIVITY ANALYSIS only.
// It does NOT present any output as an operational forecast, official warning,
// or hydrodynamic model result.
//
// Controls exposed:
//   1. Baseline selection   — choose from verified project-recorded baselines
//   2. Rainfall slider      — percentage change applied to baseline rainfall
//   3. Temperature slider   — °C delta applied to Tmax, Tmin, and LST
//   4. Preset buttons       — illustrative named perturbation sets
//   5. Reset button         — returns all parameters to neutral (0, 0)
//   6. Scenario summary     — compact read-back of current parameter state
//   7. Provenance block     — transparent labelling of data origins
//
// Props:
//   baselineId            {string}   – currently selected baseline id
//   onBaselineChange      {function} – called with new baselineId
//   temperatureIncrease   {number}   – current temperature delta (°C)
//   onTemperatureChange   {function} – called with new temperature value
//   rainfallChangePercent {number}   – current rainfall delta (%)
//   onRainfallChange      {function} – called with new rainfall value
//   isRecalculating       {boolean}  – true while the simulation is computing
//   selectedBaseline      {object}   – the full resolved baseline object

import React from 'react';
import {
  IconRainfall,
  IconTemperature,
  IconActivity,
  IconInfo,
} from '../../../components/common/Icons';
import {
  SIMULATION_BASELINES,
  SCENARIO_PARAMS,
  SIMULATION_PRESETS,
  DATA_PROVENANCE,
  SIMULATION_DISCLAIMER,
} from '../../../constants/simulationConstants';

// ---------------------------------------------------------------------------
// Helper: format a signed number for display
// ---------------------------------------------------------------------------
function fmtSigned(value, decimals) {
  const v = Number(Number(value).toFixed(decimals));
  if (isNaN(v)) return '—';
  return v >= 0 ? `+${v.toFixed(decimals)}` : `${v.toFixed(decimals)}`;
}

// ---------------------------------------------------------------------------
// BaselineSelector
// ---------------------------------------------------------------------------
function BaselineSelector({ baselineId, onBaselineChange, selectedBaseline }) {
  const prov = DATA_PROVENANCE[selectedBaseline?.dataType] || DATA_PROVENANCE.unavailable;

  return (
    <div>
      <div className="sim-section-label">Observed Baseline</div>

      <select
        id="sim-baseline-select"
        className="sim-baseline-select"
        value={baselineId}
        onChange={(e) => onBaselineChange(e.target.value)}
        aria-label="Select observed climate baseline for scenario calculation"
      >
        {SIMULATION_BASELINES.map((b) => (
          <option key={b.id} value={b.id}>
            {b.label}
          </option>
        ))}
      </select>

      {selectedBaseline && (
        <>
          {/* Provenance tag */}
          <div className={`sim-provenance-tag ${selectedBaseline.dataType}`}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: prov.color, display: 'inline-block', flexShrink: 0 }} />
            {prov.label} — project baseline snapshot (mock record)
          </div>

          {/* Description */}
          <p className="sim-baseline-desc">{selectedBaseline.description}</p>

          {/* Source */}
          <p className="sim-baseline-source">Source: {selectedBaseline.source}</p>
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// TemperatureSlider
// ---------------------------------------------------------------------------
function TemperatureSlider({ value, onChange }) {
  const cfg = SCENARIO_PARAMS.temperatureIncrease;
  const displayClass = value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral';

  return (
    <div className="sim-slider-block">
      <div className="sim-slider-header">
        <label htmlFor="sim-temp-slider" className="sim-slider-label">
          <IconTemperature size={15} color="#f59e0b" aria-hidden="true" />
          Temperature adjustment
        </label>
        <span
          className={`sim-slider-value ${displayClass}`}
          aria-live="polite"
          aria-label={`Temperature adjustment: ${fmtSigned(value, 1)} degrees Celsius`}
        >
          {fmtSigned(value, 1)} °C
        </span>
      </div>

      <input
        id="sim-temp-slider"
        type="range"
        className="sim-range-input"
        min={cfg.min}
        max={cfg.max}
        step={cfg.step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        aria-label={`Temperature adjustment from ${cfg.min} to ${cfg.max} degrees Celsius`}
        aria-valuemin={cfg.min}
        aria-valuemax={cfg.max}
        aria-valuenow={value}
        aria-valuetext={`${fmtSigned(value, 1)} degrees Celsius`}
        style={{ accentColor: '#f43f5e' }}
      />

      <div className="sim-slider-ticks" aria-hidden="true">
        <span>{cfg.min} °C (cooling)</span>
        <span>0 °C</span>
        <span>+{cfg.max} °C (warming)</span>
      </div>

      {/* Number input for precise / keyboard entry */}
      <div className="sim-number-input-row">
        <label htmlFor="sim-temp-number">Precise entry:</label>
        <input
          id="sim-temp-number"
          type="number"
          className="sim-number-input"
          min={cfg.min}
          max={cfg.max}
          step={cfg.step}
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v) && v >= cfg.min && v <= cfg.max) onChange(v);
          }}
          aria-label="Enter temperature adjustment in degrees Celsius"
        />
        <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)' }}>°C</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// RainfallSlider
// ---------------------------------------------------------------------------
function RainfallSlider({ value, onChange }) {
  const cfg = SCENARIO_PARAMS.rainfallChangePercent;
  const displayClass = value > 0 ? 'rain-positive' : value < 0 ? 'rain-negative' : 'neutral';

  return (
    <div className="sim-slider-block">
      <div className="sim-slider-header">
        <label htmlFor="sim-rain-slider" className="sim-slider-label">
          <IconRainfall size={15} color="#06b6d4" aria-hidden="true" />
          Rainfall adjustment
        </label>
        <span
          className={`sim-slider-value ${displayClass}`}
          aria-live="polite"
          aria-label={`Rainfall adjustment: ${fmtSigned(value, 0)} percent`}
        >
          {fmtSigned(value, 0)} %
        </span>
      </div>

      <input
        id="sim-rain-slider"
        type="range"
        className="sim-range-input"
        min={cfg.min}
        max={cfg.max}
        step={cfg.step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        aria-label={`Rainfall change from ${cfg.min} to +${cfg.max} percent`}
        aria-valuemin={cfg.min}
        aria-valuemax={cfg.max}
        aria-valuenow={value}
        aria-valuetext={`${fmtSigned(value, 0)} percent`}
        style={{ accentColor: '#06b6d4' }}
      />

      <div className="sim-slider-ticks" aria-hidden="true">
        <span>{cfg.min}% (deficit)</span>
        <span>0%</span>
        <span>+{cfg.max}% (excess)</span>
      </div>

      {/* Number input for precise / keyboard entry */}
      <div className="sim-number-input-row">
        <label htmlFor="sim-rain-number">Precise entry:</label>
        <input
          id="sim-rain-number"
          type="number"
          className="sim-number-input"
          min={cfg.min}
          max={cfg.max}
          step={cfg.step}
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v) && v >= cfg.min && v <= cfg.max) onChange(v);
          }}
          aria-label="Enter rainfall adjustment percentage"
        />
        <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)' }}>%</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PresetButtons
// ---------------------------------------------------------------------------
function PresetButtons({ onApplyPreset }) {
  return (
    <div>
      <div className="sim-section-label">Illustrative Presets</div>
      <div className="sim-presets-grid">
        {SIMULATION_PRESETS.map((preset) => (
          <button
            key={preset.id}
            className="sim-preset-btn"
            onClick={() => onApplyPreset(preset.temperatureIncrease, preset.rainfallChangePercent)}
            aria-label={`Apply preset: ${preset.label}. Temperature ${fmtSigned(preset.temperatureIncrease, 1)} °C, Rainfall ${fmtSigned(preset.rainfallChangePercent, 0)} percent`}
            title={preset.description}
          >
            <span className="sim-preset-btn-name">{preset.label}</span>
            <span className="sim-preset-btn-params">
              {fmtSigned(preset.temperatureIncrease, 1)}°C, {fmtSigned(preset.rainfallChangePercent, 0)}%
            </span>
          </button>
        ))}
      </div>
      <p style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '0.5rem', lineHeight: 1.45 }}>
        Presets are illustrative scenario configurations only — not operational forecasts.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ScenarioSummary
// ---------------------------------------------------------------------------
function ScenarioSummary({ baselineId, temperatureIncrease, rainfallChangePercent, selectedBaseline }) {
  return (
    <div className="sim-summary-block" role="region" aria-label="Scenario parameter summary">
      <div className="sim-summary-title">Scenario Calculation Summary</div>

      <div className="sim-summary-row">
        <span className="sim-summary-key">Baseline</span>
        <span className="sim-summary-val" style={{ fontSize: '0.75rem', maxWidth: '60%', textAlign: 'right', fontFamily: 'var(--font-sans)' }}>
          {selectedBaseline?.label ?? baselineId}
        </span>
      </div>

      <div className="sim-summary-row">
        <span className="sim-summary-key">Rainfall adjustment</span>
        <span className={`sim-summary-val ${rainfallChangePercent > 0 ? 'rain-positive' : rainfallChangePercent < 0 ? 'rain-negative' : ''}`}
          style={{ color: rainfallChangePercent > 0 ? '#06b6d4' : rainfallChangePercent < 0 ? '#f59e0b' : 'var(--text-primary)' }}>
          {fmtSigned(rainfallChangePercent, 0)} %
        </span>
      </div>

      <div className="sim-summary-row">
        <span className="sim-summary-key">Temperature adjustment</span>
        <span className="sim-summary-val"
          style={{ color: temperatureIncrease > 0 ? '#f43f5e' : temperatureIncrease < 0 ? '#06b6d4' : 'var(--text-primary)' }}>
          {fmtSigned(temperatureIncrease, 1)} °C
        </span>
      </div>

      <div className="sim-summary-row" style={{ marginTop: '0.25rem' }}>
        <span className="sim-summary-key">Output type</span>
        <span className="sim-summary-val calc-label">Scenario Calculation</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ProvenanceBlock
// ---------------------------------------------------------------------------
function ProvenanceBlock() {
  const rows = [
    {
      key: 'Baseline',
      desc: 'Project-recorded climate snapshot (mock dataset calibrated with IMD, MODIS, ERA5 records)',
      color: DATA_PROVENANCE.observation.color,
    },
    {
      key: 'Scenario output',
      desc: 'Mathematical sensitivity calculation — P_sim = max(0, P_base × (1 + Δ%/100)); T_sim = T_base + Δ°C',
      color: DATA_PROVENANCE.scenario_calc.color,
    },
    {
      key: 'Forecast',
      desc: 'Not an operational forecast — no hydrodynamic, flood, or IMD warning system is used',
      color: DATA_PROVENANCE.unavailable.color,
    },
  ];

  return (
    <div className="sim-provenance-block" role="note" aria-label="Data provenance and disclaimer">
      <div className="sim-provenance-title">Data Provenance</div>
      {rows.map(({ key, desc, color }) => (
        <div key={key} className="sim-provenance-row">
          <span
            className="sim-provenance-dot"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
          <div className="sim-provenance-row-text">
            <span className="sim-provenance-row-key">{key}</span>
            <span className="sim-provenance-row-desc">{desc}</span>
          </div>
        </div>
      ))}
      <p style={{
        marginTop: '0.65rem',
        fontSize: '0.6875rem',
        color: 'var(--text-dim)',
        lineHeight: 1.5,
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '0.6rem',
      }}>
        {SIMULATION_DISCLAIMER}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ScenarioParameterStudio — main export
// ---------------------------------------------------------------------------
export function ScenarioParameterStudio({
  baselineId,
  onBaselineChange,
  temperatureIncrease,
  onTemperatureChange,
  rainfallChangePercent,
  onRainfallChange,
  isRecalculating,
}) {
  // Resolve the selected baseline object from the id
  const selectedBaseline = SIMULATION_BASELINES.find((b) => b.id === baselineId) ?? null;

  // Apply a preset: sets both temperature and rainfall
  function handlePreset(tempInc, rainPct) {
    onTemperatureChange(tempInc);
    onRainfallChange(rainPct);
  }

  // Reset all parameters to neutral (no perturbation)
  function handleReset() {
    onTemperatureChange(0);
    onRainfallChange(0);
  }

  return (
    <div className="card-panel sim-studio" role="region" aria-label="Scenario parameter controls">
      {/* Card header */}
      <div className="card-panel-header" style={{ marginBottom: 0 }}>
        <div className="card-title-group">
          <h2 className="card-title">
            <IconActivity size={18} color="var(--accent-cyan)" aria-hidden="true" />
            Scenario Parameter Studio
          </h2>
          <p className="card-subtitle">
            Parametric sensitivity analysis — Ernakulam District
          </p>
        </div>
        {isRecalculating && (
          <span className="sim-recalc-indicator" aria-live="polite" aria-atomic="true">
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              backgroundColor: 'var(--accent-cyan)',
              display: 'inline-block',
            }} />
            Recalculating
          </span>
        )}
      </div>

      {/* 1. Baseline selection */}
      <BaselineSelector
        baselineId={baselineId}
        onBaselineChange={onBaselineChange}
        selectedBaseline={selectedBaseline}
      />

      {/* 2. Rainfall slider */}
      <RainfallSlider
        value={rainfallChangePercent}
        onChange={onRainfallChange}
      />

      {/* 3. Temperature slider */}
      <TemperatureSlider
        value={temperatureIncrease}
        onChange={onTemperatureChange}
      />

      {/* 4. Preset buttons */}
      <PresetButtons onApplyPreset={handlePreset} />

      {/* 5. Reset control */}
      <button
        className="sim-reset-btn"
        onClick={handleReset}
        aria-label="Reset all scenario parameters to neutral: 0% rainfall change, 0°C temperature change"
      >
        <IconInfo size={14} aria-hidden="true" />
        Reset Scenario
      </button>

      {/* 6. Scenario summary */}
      <ScenarioSummary
        baselineId={baselineId}
        temperatureIncrease={temperatureIncrease}
        rainfallChangePercent={rainfallChangePercent}
        selectedBaseline={selectedBaseline}
      />

      {/* 7. Data provenance */}
      <ProvenanceBlock />
    </div>
  );
}
