import React, { useState, useEffect } from 'react';
import { runWhatIfSimulation } from '../../services/simulationService';
import { DEFAULT_BASELINE_ID } from '../../constants/simulationConstants';
import { ScenarioParameterStudio } from './components/ScenarioParameterStudio';
import { ScenarioDeltaChart } from './components/ScenarioDeltaChart';
import { ScenarioComparisonTable } from './components/ScenarioComparisonTable';
import {
  IconSimulation,
  IconWarning,
} from '../../components/common/Icons';
import '../../styles/simulation.css';

export function WhatIfSimulationPage() {
  const [baselineId, setBaselineId]             = useState(DEFAULT_BASELINE_ID);
  const [tempIncrease, setTempIncrease]         = useState(2.0);
  const [rainfallChange, setRainfallChange]     = useState(25.0);
  const [simulationResult, setSimulationResult] = useState(null);
  const [isSimulating, setIsSimulating]         = useState(false);

  // Re-run the scenario whenever any parameter changes
  useEffect(() => {
    async function updateSim() {
      setIsSimulating(true);
      const result = await runWhatIfSimulation({
        temperatureIncrease:   parseFloat(tempIncrease),
        rainfallChangePercent: parseFloat(rainfallChange),
        baselineId,
      });
      setSimulationResult(result);
      setTimeout(() => setIsSimulating(false), 120);
    }
    updateSim();
  }, [baselineId, tempIncrease, rainfallChange]);

  const deltas = simulationResult?.calculatedDeltas;
  const impact = simulationResult?.impactAssessment;

  // Compute dynamic qualitative descriptions based on slider positions.
  // These are descriptive labels only – NOT official risk classifications.
  const getHeatDesc = () => {
    if (tempIncrease >= 3.0) return { level: 'High Warming', status: 'alert',   desc: 'Large positive temperature perturbation applied to all temperature variables.' };
    if (tempIncrease >= 1.5) return { level: 'Moderate Warming', status: 'warning', desc: 'Positive temperature perturbation applied to Tmax, Tmin, and LST.' };
    if (tempIncrease < 0)    return { level: 'Negative Perturbation', status: 'normal', desc: 'Temperature variables shifted below observed baseline.' };
    return { level: 'No Temperature Shift', status: 'normal', desc: 'Temperature variables equal to observed baseline.' };
  };

  const getRainDesc = () => {
    if (rainfallChange >= 40)  return { level: 'Large Positive', status: 'alert',   desc: 'Rainfall scenario substantially above the observed baseline.' };
    if (rainfallChange >= 15)  return { level: 'Moderate Positive', status: 'warning', desc: 'Rainfall scenario moderately above the observed baseline.' };
    if (rainfallChange <= -30) return { level: 'Large Deficit', status: 'alert',   desc: 'Rainfall scenario substantially below the observed baseline.' };
    if (rainfallChange < 0)    return { level: 'Minor Deficit', status: 'warning', desc: 'Rainfall scenario slightly below the observed baseline.' };
    return { level: 'No Rainfall Change', status: 'normal', desc: 'Rainfall scenario equals observed baseline.' };
  };

  const heatDesc = getHeatDesc();
  const rainDesc = getRainDesc();

  return (
    <div>
      {/* Page Heading */}
      <div className="page-header">
        <h1 className="page-title">
          <IconSimulation size={24} color="var(--accent-cyan)" />
          What-If Climate Scenario Simulation
        </h1>
        <p className="page-description">
          A parametric sensitivity analysis tool. Adjust the controls to explore
          how climate variables change under hypothetical perturbations applied to
          project-recorded baseline observations. This is not an operational forecast.
        </p>
      </div>

      {/* Main two-column layout: controls left, results right */}
      <div className="sim-layout">

        {/* ── Left column: ScenarioParameterStudio ─────────────────────── */}
        <ScenarioParameterStudio
          baselineId={baselineId}
          onBaselineChange={setBaselineId}
          temperatureIncrease={tempIncrease}
          onTemperatureChange={setTempIncrease}
          rainfallChangePercent={rainfallChange}
          onRainfallChange={setRainfallChange}
          isRecalculating={isSimulating}
        />

        {/* ── Right column: Comparison Chart, Table & Summary ───────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* 1. SCENARIO DELTA CHART (Native SVG Grouped Bar Visualization) */}
          <ScenarioDeltaChart
            simulationResult={simulationResult}
            isRecalculating={isSimulating}
          />

          {/* 2. SCENARIO COMPARISON TABLE (Accessible Semantic Data Breakdown) */}
          <ScenarioComparisonTable
            simulationResult={simulationResult}
            isRecalculating={isSimulating}
          />

          {/* 3. PERTURBATION SUMMARY & ATTRIBUTION */}
          <div className="card-panel">
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconWarning size={18} color="var(--accent-magenta)" />
                  Perturbation Summary
                </h2>
                <p className="card-subtitle">
                  Descriptive labels only — not risk classifications or official assessments
                </p>
              </div>
            </div>

            <div className="sim-perturbation-grid">
              {/* Temperature perturbation description */}
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Temperature Perturbation</span>
                  <span style={{ fontSize: '0.6875rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700,
                    backgroundColor: heatDesc.status === 'alert' ? 'rgba(239,68,68,0.15)' : heatDesc.status === 'warning' ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)',
                    color: heatDesc.status === 'alert' ? '#f87171' : heatDesc.status === 'warning' ? '#fbbf24' : '#34d399',
                  }}>
                    {heatDesc.level}
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {heatDesc.desc}
                </p>
              </div>

              {/* Rainfall perturbation description */}
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Rainfall Perturbation</span>
                  <span style={{ fontSize: '0.6875rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700,
                    backgroundColor: rainDesc.status === 'alert' ? 'rgba(239,68,68,0.15)' : rainDesc.status === 'warning' ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)',
                    color: rainDesc.status === 'alert' ? '#f87171' : rainDesc.status === 'warning' ? '#fbbf24' : '#34d399',
                  }}>
                    {rainDesc.level}
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {rainDesc.desc}
                </p>
              </div>
            </div>

            {/* Impact summary from project mock data — clearly attributed */}
            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(17,28,53,0.9)', borderLeft: '3px solid var(--accent-cyan)', borderRadius: '0 var(--border-radius-sm) var(--border-radius-sm) 0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                Scenario Calculation Output
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {impact?.impactSummary ?? 'Select parameters above to generate a scenario.'}{' '}
                Perturbation yields a rainfall delta of{' '}
                <strong>{deltas?.rainfallDelta ?? '—'}</strong> and a temperature delta of{' '}
                <strong>{deltas?.tempDelta ?? '—'}</strong> over the selected baseline for Ernakulam District.
              </p>
              <p style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                Scenario type: mathematical sensitivity calculation — not an operational forecast.
              </p>
            </div>
          </div>

        </div>
        {/* ── end right column ──────────────────────────────────────────── */}

      </div>
    </div>
  );
}
