// frontend/src/pages/WhatIfSimulation/components/ScenarioComparisonTable.jsx
//
// SCENARIO COMPARISON TABLE
//
// SCIENTIFIC INTEGRITY NOTICE:
// Displays a structured, accessible comparison of observed baseline climate variables
// against mathematically perturbed scenario calculation outputs.
//
// Source of truth: simulationService.
// Unavailable data points are explicitly marked as "Unavailable" without inventing fake numbers.
// Relative delta is marked "—" for variables where relative percentage is physically meaningless (e.g. °C).

import React from 'react';
import {
  IconSimulation,
  IconRainfall,
  IconTemperature,
  IconLST,
  IconGlobe,
  IconWarning,
} from '../../../components/common/Icons';

/**
 * ScenarioComparisonTable Component
 */
export function ScenarioComparisonTable({ simulationResult, isRecalculating = false }) {
  if (!simulationResult) {
    return null;
  }

  const base = simulationResult.baselineState || {};
  const sim = simulationResult.scenarioState || {};
  const deltas = simulationResult.deltas || {};
  const lstAvailable = simulationResult.availability?.lst !== false && base.lst != null;
  const sstAvailable = simulationResult.availability?.sst !== false && base.sst != null;

  // Format signed absolute delta
  const fmtDelta = (val, unit = '') => {
    if (val == null) return '—';
    const num = Number(val);
    const sign = num > 0 ? '+' : '';
    return `${sign}${num.toFixed(1)}${unit ? ` ${unit}` : ''}`;
  };

  // Format percentage delta
  const fmtPercent = (val) => {
    if (val == null) return '—';
    const num = Number(val);
    const sign = num > 0 ? '+' : '';
    return `${sign}${num.toFixed(1)}%`;
  };

  const rows = [
    {
      id: 'rainfall',
      name: 'Daily Rainfall',
      icon: IconRainfall,
      iconColor: '#06b6d4',
      unit: 'mm/day',
      baseline: base.rainfall != null ? `${base.rainfall.toFixed(1)} mm/day` : 'Unavailable',
      scenario: sim.rainfall != null ? `${sim.rainfall.toFixed(1)} mm/day` : 'Unavailable',
      absDelta: deltas.rainfall?.absoluteMm != null ? fmtDelta(deltas.rainfall.absoluteMm, 'mm/day') : '—',
      relDelta: deltas.rainfall?.percent != null ? fmtPercent(deltas.rainfall.percent) : '—',
      isPos: (deltas.rainfall?.absoluteMm ?? 0) > 0,
      isNeg: (deltas.rainfall?.absoluteMm ?? 0) < 0,
      isZero: (deltas.rainfall?.absoluteMm ?? 0) === 0,
      available: true,
      note: 'Formula: max(0, P_base × (1 + Δ%/100))',
    },
    {
      id: 'maxTemp',
      name: 'Maximum Temperature',
      icon: IconTemperature,
      iconColor: '#f59e0b',
      unit: '°C',
      baseline: base.maxTemp != null ? `${base.maxTemp.toFixed(1)} °C` : 'Unavailable',
      scenario: sim.maxTemp != null ? `${sim.maxTemp.toFixed(1)} °C` : 'Unavailable',
      absDelta: deltas.maxTemp?.absoluteC != null ? fmtDelta(deltas.maxTemp.absoluteC, '°C') : '—',
      relDelta: '—', // Not physically meaningful on Celsius scale
      isPos: (deltas.maxTemp?.absoluteC ?? 0) > 0,
      isNeg: (deltas.maxTemp?.absoluteC ?? 0) < 0,
      isZero: (deltas.maxTemp?.absoluteC ?? 0) === 0,
      available: true,
      note: 'Formula: Tmax_base + ΔT',
    },
    {
      id: 'minTemp',
      name: 'Minimum Temperature',
      icon: IconTemperature,
      iconColor: '#fb923c',
      unit: '°C',
      baseline: base.minTemp != null ? `${base.minTemp.toFixed(1)} °C` : 'Unavailable',
      scenario: sim.minTemp != null ? `${sim.minTemp.toFixed(1)} °C` : 'Unavailable',
      absDelta: deltas.minTemp?.absoluteC != null ? fmtDelta(deltas.minTemp.absoluteC, '°C') : '—',
      relDelta: '—', // Not physically meaningful on Celsius scale
      isPos: (deltas.minTemp?.absoluteC ?? 0) > 0,
      isNeg: (deltas.minTemp?.absoluteC ?? 0) < 0,
      isZero: (deltas.minTemp?.absoluteC ?? 0) === 0,
      available: true,
      note: 'Formula: Tmin_base + ΔT',
    },
    {
      id: 'lst',
      name: 'Land Surface Temp (LST)',
      icon: IconLST,
      iconColor: '#f43f5e',
      unit: '°C',
      baseline: lstAvailable ? `${base.lst.toFixed(1)} °C` : 'Unavailable',
      scenario: lstAvailable && sim.lst != null ? `${sim.lst.toFixed(1)} °C` : 'Unavailable',
      absDelta: lstAvailable && deltas.lst?.absoluteC != null ? fmtDelta(deltas.lst.absoluteC, '°C') : '—',
      relDelta: '—',
      isPos: lstAvailable && (deltas.lst?.absoluteC ?? 0) > 0,
      isNeg: lstAvailable && (deltas.lst?.absoluteC ?? 0) < 0,
      isZero: lstAvailable && (deltas.lst?.absoluteC ?? 0) === 0,
      available: lstAvailable,
      note: lstAvailable ? 'Formula: LST_base + ΔT' : 'MODIS observation missing in baseline snapshot',
    },
    {
      id: 'sst',
      name: 'Sea Surface Temp (SST)',
      icon: IconGlobe,
      iconColor: '#38bdf8',
      unit: '°C',
      baseline: sstAvailable ? `${base.sst.toFixed(1)} °C` : 'Unavailable',
      scenario: sstAvailable ? `${base.sst.toFixed(1)} °C` : 'Unavailable',
      absDelta: sstAvailable ? '0.0 °C' : '—',
      relDelta: '—',
      isPos: false,
      isNeg: false,
      isZero: true,
      available: sstAvailable,
      note: 'Not adjusted (project has no SST perturbation model)',
    },
  ];

  return (
    <div className={`card-panel sim-table-panel ${isRecalculating ? 'sim-updating' : ''}`}>
      {/* Header */}
      <div className="card-panel-header">
        <div className="card-title-group">
          <h2 className="card-title">
            <IconSimulation size={18} color="var(--accent-cyan)" />
            Scenario Comparison Table
          </h2>
          <p className="card-subtitle">
            Quantitative breakdown across all observed and calculated variables
          </p>
        </div>
        <div className="sim-table-legend">
          <span className="sim-tag-obs">Observed Baseline</span>
          <span className="sim-tag-calc">Scenario Calculation</span>
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="sim-table-wrapper" tabIndex="0" role="region" aria-label="Scenario comparison data table">
        <table className="sim-comparison-table">
          <thead>
            <tr>
              <th scope="col" className="sim-th-var">Variable</th>
              <th scope="col" className="sim-th-val">
                Baseline
                <span className="sim-th-sub">Observation</span>
              </th>
              <th scope="col" className="sim-th-val">
                Scenario
                <span className="sim-th-sub">Calculation</span>
              </th>
              <th scope="col" className="sim-th-delta">
                Absolute Delta
                <span className="sim-th-sub">Δ = Scen − Base</span>
              </th>
              <th scope="col" className="sim-th-delta">
                Relative Delta
                <span className="sim-th-sub">% change</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const RowIcon = row.icon;
              return (
                <tr key={row.id} className={!row.available ? 'sim-row-unavailable' : ''}>
                  {/* Variable Name */}
                  <th scope="row" className="sim-td-var">
                    <div className="sim-var-cell">
                      <span
                        className="sim-var-icon-wrap"
                        style={{ backgroundColor: `${row.iconColor}1a`, borderColor: `${row.iconColor}33` }}
                      >
                        <RowIcon size={15} color={row.iconColor} />
                      </span>
                      <div className="sim-var-text">
                        <span className="sim-var-name">{row.name}</span>
                        <span className="sim-var-note">{row.note}</span>
                      </div>
                    </div>
                  </th>

                  {/* Baseline Column */}
                  <td className="sim-td-val">
                    {row.available ? (
                      <span className="sim-val-text baseline-val">{row.baseline}</span>
                    ) : (
                      <span className="sim-val-unavailable">
                        <IconWarning size={12} color="var(--text-dim)" />
                        Unavailable
                      </span>
                    )}
                  </td>

                  {/* Scenario Column */}
                  <td className="sim-td-val">
                    {row.available ? (
                      <span className="sim-val-text scenario-val">{row.scenario}</span>
                    ) : (
                      <span className="sim-val-unavailable">
                        <IconWarning size={12} color="var(--text-dim)" />
                        Unavailable
                      </span>
                    )}
                  </td>

                  {/* Absolute Delta */}
                  <td className="sim-td-delta">
                    {row.available ? (
                      <span
                        className={`sim-delta-chip ${
                          row.isPos ? 'chip-pos' : row.isNeg ? 'chip-neg' : 'chip-zero'
                        }`}
                      >
                        {row.absDelta}
                      </span>
                    ) : (
                      <span className="sim-chip-na">—</span>
                    )}
                  </td>

                  {/* Relative Delta */}
                  <td className="sim-td-delta">
                    {row.available && row.relDelta !== '—' ? (
                      <span
                        className={`sim-delta-chip ${
                          row.isPos ? 'chip-pos' : row.isNeg ? 'chip-neg' : 'chip-zero'
                        }`}
                      >
                        {row.relDelta}
                      </span>
                    ) : (
                      <span className="sim-chip-na" title="Not applicable / interval scale">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table Footer / Integrity Footnotes */}
      <div className="sim-table-footer">
        <p className="sim-table-disclosure">
          <strong>Transparency Notice:</strong> All scenario figures are derived mathematically from baseline observations.
          Relative percentage changes are not computed for temperature metrics as Celsius is an interval scale.
          This table is not an official IMD weather forecast.
        </p>
      </div>
    </div>
  );
}
