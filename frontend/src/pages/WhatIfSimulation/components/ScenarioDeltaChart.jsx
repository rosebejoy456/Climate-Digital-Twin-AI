// frontend/src/pages/WhatIfSimulation/components/ScenarioDeltaChart.jsx
//
// SCENARIO DELTA CHART
//
// SCIENTIFIC INTEGRITY NOTICE:
// This component provides a native SVG visualization comparing baseline observations
// with mathematically calculated hypothetical scenario outputs.
//
// All calculations come strictly from simulationService.
// This is NOT an operational flood forecast, official IMD warning, or predictive AI model.

import React from 'react';
import {
  IconSimulation,
  IconRainfall,
  IconTemperature,
  IconLST,
  IconWarning,
} from '../../../components/common/Icons';

/**
 * Single SVG grouped bar for comparing baseline vs scenario values.
 */
function MetricBarChart({
  title,
  unit,
  icon: Icon,
  accentColor,
  baselineValue,
  scenarioValue,
  deltaDisplay,
  relativeDeltaDisplay,
  isUnavailable = false,
  unavailableReason = 'Data unavailable in baseline record',
}) {
  if (isUnavailable || baselineValue == null || scenarioValue == null) {
    return (
      <div className="sim-chart-metric-card sim-card-unavailable">
        <div className="sim-chart-metric-header">
          <div className="sim-chart-metric-title">
            {Icon && <Icon size={16} color="var(--text-dim)" />}
            <span>{title}</span>
          </div>
          <span className="sim-chart-unit">{unit}</span>
        </div>
        <div className="sim-unavailable-box" role="note">
          <IconWarning size={14} color="var(--status-warning)" />
          <span>{unavailableReason}</span>
        </div>
      </div>
    );
  }

  // Calculate dynamic bar scale relative to maximum possible extent with headroom
  const maxVal = Math.max(baselineValue, scenarioValue, 1);
  // Give 15% headroom for clean visual presentation
  const domainMax = maxVal * 1.15;
  const basePercent = Math.min(100, Math.max(4, (baselineValue / domainMax) * 100));
  const scenPercent = Math.min(100, Math.max(4, (scenarioValue / domainMax) * 100));
  const isDiff = baselineValue !== scenarioValue;
  const isPositive = scenarioValue > baselineValue;

  return (
    <div className="sim-chart-metric-card" role="group" aria-label={`${title} comparison`}>
      <div className="sim-chart-metric-header">
        <div className="sim-chart-metric-title">
          {Icon && <Icon size={16} color={accentColor} />}
          <span>{title}</span>
        </div>
        <div className="sim-chart-header-right">
          <span className="sim-chart-unit">{unit}</span>
          {deltaDisplay && (
            <span
              className={`sim-chart-delta-badge ${
                isPositive ? 'delta-pos' : isDiff ? 'delta-neg' : 'delta-zero'
              }`}
              title="Mathematical delta from baseline"
            >
              {deltaDisplay}
              {relativeDeltaDisplay ? ` (${relativeDeltaDisplay})` : ''}
            </span>
          )}
        </div>
      </div>

      {/* Visual SVG Grouped Horizontal Bars */}
      <div className="sim-svg-bars-container">
        <svg
          viewBox="0 0 340 70"
          className="sim-grouped-bars-svg"
          preserveAspectRatio="none"
          role="img"
          aria-label={`Baseline: ${baselineValue} ${unit}, Scenario: ${scenarioValue} ${unit}`}
        >
          {/* Subtle background grid ticks */}
          <line x1="0" y1="65" x2="340" y2="65" stroke="var(--border-subtle)" strokeWidth="1" />
          <line x1="85" y1="0" x2="85" y2="65" stroke="rgba(255,255,255,0.03)" strokeDasharray="2 2" />
          <line x1="170" y1="0" x2="170" y2="65" stroke="rgba(255,255,255,0.03)" strokeDasharray="2 2" />
          <line x1="255" y1="0" x2="255" y2="65" stroke="rgba(255,255,255,0.03)" strokeDasharray="2 2" />

          {/* BASELINE BAR */}
          <g className="sim-bar-group baseline">
            <rect
              x="0"
              y="10"
              width={`${(basePercent / 100) * 340}`}
              height="18"
              rx="3"
              fill="rgba(100, 116, 139, 0.35)"
              stroke="rgba(148, 163, 184, 0.4)"
              strokeWidth="1"
            />
            {/* Value text */}
            <text
              x={Math.max(10, Math.min(330, ((basePercent / 100) * 340) - 8))}
              y="23"
              fill="#cbd5e1"
              fontSize="10.5"
              fontFamily="var(--font-mono)"
              fontWeight="600"
              textAnchor={((basePercent / 100) * 340) < 55 ? 'start' : 'end'}
            >
              {baselineValue} {unit}
            </text>
          </g>

          {/* SCENARIO BAR */}
          <g className="sim-bar-group scenario">
            <rect
              x="0"
              y="36"
              width={`${(scenPercent / 100) * 340}`}
              height="18"
              rx="3"
              fill={accentColor}
              fillOpacity="0.82"
            />
            {/* Value text */}
            <text
              x={Math.max(10, Math.min(330, ((scenPercent / 100) * 340) - 8))}
              y="49"
              fill="#ffffff"
              fontSize="10.5"
              fontFamily="var(--font-mono)"
              fontWeight="700"
              textAnchor={((scenPercent / 100) * 340) < 55 ? 'start' : 'end'}
            >
              {scenarioValue} {unit}
            </text>
          </g>
        </svg>

        {/* Bar Labels Legend Row */}
        <div className="sim-bar-labels-legend">
          <div className="sim-legend-item">
            <span className="sim-legend-dot baseline-dot" />
            <span className="sim-legend-name">Baseline (Observed)</span>
          </div>
          <div className="sim-legend-item">
            <span className="sim-legend-dot scenario-dot" style={{ backgroundColor: accentColor }} />
            <span className="sim-legend-name">Scenario (Calculated)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ScenarioDeltaChart Component
 * Visualizes baseline vs scenario calculations across climate metrics.
 */
export function ScenarioDeltaChart({ simulationResult, isRecalculating = false }) {
  if (!simulationResult) {
    return (
      <div className="card-panel">
        <div className="sim-empty-state">
          <IconSimulation size={28} color="var(--text-dim)" />
          <p>Select a baseline and configure parameters to view the scenario visualization.</p>
        </div>
      </div>
    );
  }

  const base = simulationResult.baselineState || {};
  const sim = simulationResult.scenarioState || {};
  const deltas = simulationResult.deltas || {};
  const lstAvailable = simulationResult.availability?.lst !== false && base.lst != null;

  return (
    <div className={`card-panel sim-delta-chart-panel ${isRecalculating ? 'sim-updating' : ''}`}>
      {/* Header */}
      <div className="card-panel-header">
        <div className="card-title-group">
          <h2 className="card-title">
            <IconSimulation size={18} color="var(--accent-cyan)" />
            Baseline vs Scenario Calculation
          </h2>
          <p className="card-subtitle">
            Mathematical sensitivity analysis — not an operational forecast
          </p>
        </div>
        <div className="sim-chart-baseline-tag">
          <span className="sim-tag-label">Baseline Snapshot:</span>
          <span className="sim-tag-value">{simulationResult.baselineLabel || 'Ernakulam District'}</span>
        </div>
      </div>

      {/* Grid of Metric Comparison Cards */}
      <div className="sim-chart-grid">
        {/* Rainfall */}
        <MetricBarChart
          title="Daily Rainfall"
          unit="mm/day"
          icon={IconRainfall}
          accentColor="#06b6d4"
          baselineValue={base.rainfall}
          scenarioValue={sim.rainfall}
          deltaDisplay={
            deltas.rainfall?.absoluteMm != null
              ? `${deltas.rainfall.absoluteMm >= 0 ? '+' : ''}${deltas.rainfall.absoluteMm.toFixed(1)} mm/day`
              : null
          }
          relativeDeltaDisplay={
            deltas.rainfall?.percent != null
              ? `${deltas.rainfall.percent >= 0 ? '+' : ''}${deltas.rainfall.percent.toFixed(1)}%`
              : null
          }
        />

        {/* Max Temperature */}
        <MetricBarChart
          title="Maximum Temperature"
          unit="°C"
          icon={IconTemperature}
          accentColor="#f59e0b"
          baselineValue={base.maxTemp}
          scenarioValue={sim.maxTemp}
          deltaDisplay={
            deltas.maxTemp?.absoluteC != null
              ? `${deltas.maxTemp.absoluteC >= 0 ? '+' : ''}${deltas.maxTemp.absoluteC.toFixed(1)} °C`
              : null
          }
        />

        {/* Min Temperature */}
        <MetricBarChart
          title="Minimum Temperature"
          unit="°C"
          icon={IconTemperature}
          accentColor="#fb923c"
          baselineValue={base.minTemp}
          scenarioValue={sim.minTemp}
          deltaDisplay={
            deltas.minTemp?.absoluteC != null
              ? `${deltas.minTemp.absoluteC >= 0 ? '+' : ''}${deltas.minTemp.absoluteC.toFixed(1)} °C`
              : null
          }
        />

        {/* LST */}
        <MetricBarChart
          title="Land Surface Temp (LST)"
          unit="°C"
          icon={IconLST}
          accentColor="#f43f5e"
          baselineValue={base.lst}
          scenarioValue={sim.lst}
          deltaDisplay={
            deltas.lst?.absoluteC != null
              ? `${deltas.lst.absoluteC >= 0 ? '+' : ''}${deltas.lst.absoluteC.toFixed(1)} °C`
              : null
          }
          isUnavailable={!lstAvailable}
          unavailableReason="MODIS LST observation not recorded for this snapshot"
        />
      </div>

      {/* Visual Footnote / Disclosure */}
      <div className="sim-chart-footer">
        <span className="sim-footer-note">
          Formula basis: P_sim = max(0, P_base × (1 + Δ%/100)) · T_sim = T_base + Δ°C
        </span>
        <span className="sim-footer-provenance">
          Observation: IMD / MODIS · Calculation: Sensitivity Perturbation
        </span>
      </div>
    </div>
  );
}
