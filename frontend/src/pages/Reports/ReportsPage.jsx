import React, { useState, useEffect } from 'react';
import { IconReports, IconDownload, IconCheck, IconAI, IconLayers } from '../../components/common/Icons';
import { MetricCard } from '../../components/cards/MetricCard';
import { TrendChart } from '../../components/charts/TrendChart';
import { getHistoricalClimate, getCurrentClimate } from '../../services/climateService';
import { getPredictions, getMultiVariablePrediction } from '../../services/predictionService';

// Utility to format dates as YYYY-MM-DD for input value
const formatDate = (date) => date.toISOString().split('T')[0];

export function ReportsPage() {
  // Date range state – default to last 7 days
  const today = new Date();
  const defaultEnd = formatDate(today);
  const defaultStart = formatDate(new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000));

  const [startDate, setStartDate] = useState(defaultStart);
  const [endDate, setEndDate] = useState(defaultEnd);
  const [historical, setHistorical] = useState([]);
  const [forecast, setForecast] = useState(null);
  const [multiForecast, setMultiForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingBrief, setIsGeneratingBrief] = useState(false);
  const [briefText, setBriefText] = useState('');
  const [showBrief, setShowBrief] = useState(false);
  const [showDisclosure, setShowDisclosure] = useState(false);
  const [dataSourceNotice, setDataSourceNotice] = useState('');
  const [unavailable, setUnavailable] = useState(false);

  // Convert selected dates to number of days for service API
  const computeDiffDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffMs = end - start + 24 * 60 * 60 * 1000; // inclusive
    return Math.max(1, Math.round(diffMs / (1000 * 60 * 60 * 24)));
  };

  // Load data whenever date range changes
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setUnavailable(false);
      setDataSourceNotice('');
      const days = computeDiffDays();
      try {
        const hist = await getHistoricalClimate(days);
        if (Array.isArray(hist) && hist.length > 0) {
          setHistorical(hist);
        } else {
          setHistorical([]);
        }
        const pred = await getPredictions();
        setForecast(pred);
        const multi = await getMultiVariablePrediction();
        setMultiForecast(multi);
        if (!hist || hist.length === 0) {
          setUnavailable(true);
        }
      } catch (e) {
        console.error(e);
        setUnavailable(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (new Date(startDate) <= new Date(endDate)) {
      loadData();
    } else {
      setUnavailable(true);
    }
  }, [startDate, endDate]);

  // Derive metric aggregates from historical data (if available)
  const aggregates = React.useMemo(() => {
    if (!historical || historical.length === 0) return null;
    const sum = (field) => historical.reduce((a, b) => a + (b.metrics?.[field]?.value || 0), 0);
    const avg = (field) => sum(field) / historical.length;
    const first = historical[0];
    const last = historical[historical.length - 1];
    return {
      avgRainfall: avg('rainfall'),
      totalRainfall: sum('rainfall'),
      startMaxTemp: first.metrics?.maxTemp?.value,
      endMaxTemp: last.metrics?.maxTemp?.value,
      startMinTemp: first.metrics?.minTemp?.value,
      endMinTemp: last.metrics?.minTemp?.value,
      startLST: first.metrics?.lst?.value,
      endLST: last.metrics?.lst?.value,
      startSST: first.metrics?.sst?.value,
      endSST: last.metrics?.sst?.value,
    };
  }, [historical]);

  // Generate insights strings based on available aggregates
  const insights = React.useMemo(() => {
    if (!aggregates) return [];
    const arr = [];
    if (aggregates.totalRainfall !== undefined) {
      arr.push(`Total rainfall over selected period: ${aggregates.totalRainfall.toFixed(1)} mm.`);
    }
    if (aggregates.avgRainfall !== undefined) {
      arr.push(`Average daily rainfall: ${aggregates.avgRainfall.toFixed(1)} mm.`);
    }
    if (aggregates.startMaxTemp !== undefined && aggregates.endMaxTemp !== undefined) {
      const diff = aggregates.endMaxTemp - aggregates.startMaxTemp;
      arr.push(`Maximum temperature changed by ${diff.toFixed(1)}°C (${diff >= 0 ? 'increase' : 'decrease'}).`);
    }
    if (aggregates.startMinTemp !== undefined && aggregates.endMinTemp !== undefined) {
      const diff = aggregates.endMinTemp - aggregates.startMinTemp;
      arr.push(`Minimum temperature changed by ${diff.toFixed(1)}°C (${diff >= 0 ? 'increase' : 'decrease'}).`);
    }
    if (aggregates.startLST !== undefined && aggregates.endLST !== undefined) {
      const diff = aggregates.endLST - aggregates.startLST;
      arr.push(`Land‑surface temperature variation: ${diff.toFixed(1)}°C.`);
    }
    return arr;
  }, [aggregates]);

  const handleGenerateBrief = () => {
    setIsGeneratingBrief(true);
    setTimeout(() => {
      const lines = [];
      lines.push('--- Climate Intelligence Brief ---');
      if (aggregates) {
        lines.push(`Period: ${startDate} to ${endDate}`);
        lines.push(`Average Rainfall: ${aggregates.avgRainfall?.toFixed(1)} mm/day`);
        lines.push(`Total Rainfall: ${aggregates.totalRainfall?.toFixed(1)} mm`);
        lines.push(`Max Temp Change: ${(aggregates.endMaxTemp - aggregates.startMaxTemp).toFixed(1)}°C`);
        lines.push(`Min Temp Change: ${(aggregates.endMinTemp - aggregates.startMinTemp).toFixed(1)}°C`);
      }
      if (forecast) {
        lines.push(`Model Forecast (rainfall): ${forecast?.value ?? '--'} mm/day`);
      }
      if (multiForecast) {
        lines.push('Model Multi‑Variable Forecast:');
        Object.entries(multiForecast).forEach(([k, v]) => {
          lines.push(`  ${k}: ${v?.value ?? v} ${v?.unit ?? ''}`);
        });
      }
      if (insights.length) {
        lines.push('Key Insights:');
        insights.forEach((i) => lines.push(`- ${i}`));
      }
      lines.push('--- End of Brief ---');
      setBriefText(lines.join('\n'));
      setIsGeneratingBrief(false);
      setShowBrief(true);
    }, 800);
  };

  const renderMetricCard = (label, value, unit, trend) => (
    <MetricCard
      title={label}
      value={value !== undefined ? value.toFixed(1) : '--'}
      unit={unit}
      trendPercent={trend}
      icon={IconLayers}
      color='var(--accent-cyan)'
    />
  );

  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-dark)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Header */}
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
          <IconReports size={28} /> Climate Intelligence Reports & Decision Brief
        </h1>
        <p className="page-description" style={{ color: 'var(--text-muted)' }}>
          Verified observations, model forecasts and actionable insights.
        </p>
      </div>

      {/* Date Range Selector */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <label>
          Start Date:{' '}
          <input type="date" value={startDate} max={endDate} onChange={(e) => setStartDate(e.target.value)} style={{ marginLeft: '0.5rem' }} />
        </label>
        <label>
          End Date:{' '}
          <input type="date" value={endDate} min={startDate} max={defaultEnd} onChange={(e) => setEndDate(e.target.value)} style={{ marginLeft: '0.5rem' }} />
        </label>
        {unavailable && (
          <span style={{ color: 'var(--status-warning)', fontWeight: 600 }}>
            Data unavailable for selected dates.
          </span>
        )}
        {dataSourceNotice && (
          <span style={{ color: 'var(--text-muted)' }}>{dataSourceNotice}</span>
        )}
        <button
          onClick={handleGenerateBrief}
          disabled={isGeneratingBrief || unavailable}
          style={{
            marginLeft: 'auto',
            backgroundColor: 'var(--accent-cyan-soft)',
            border: '1px solid rgba(6,182,212,0.4)',
            color: '#f8fafc',
            padding: '0.45rem 1rem',
            fontWeight: 600,
            cursor: isGeneratingBrief ? 'wait' : 'pointer',
          }}
        >
          {isGeneratingBrief ? 'Generating Brief...' : 'Generate Climate Brief'}
        </button>
      </div>

      {/* Metric Cards */}
      {aggregates && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {renderMetricCard('Average Rainfall', aggregates.avgRainfall, 'mm/day')}
          {renderMetricCard('Total Rainfall', aggregates.totalRainfall, 'mm')}
          {renderMetricCard('Max Temp', aggregates.endMaxTemp, '°C', ((aggregates.endMaxTemp - aggregates.startMaxTemp) / (aggregates.startMaxTemp || 1)) * 100)}
          {renderMetricCard('Min Temp', aggregates.endMinTemp, '°C', ((aggregates.endMinTemp - aggregates.startMinTemp) / (aggregates.startMinTemp || 1)) * 100)}
          {renderMetricCard('LST', aggregates.endLST, '°C', ((aggregates.endLST - aggregates.startLST) / (aggregates.startLST || 1)) * 100)}
          {renderMetricCard('SST', aggregates.endSST, '°C', ((aggregates.endSST - aggregates.startSST) / (aggregates.startSST || 1)) * 100)}
        </div>
      )}

      {/* Historical Chart */}
      {historical && historical.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <TrendChart data={historical.map((d) => ({ date: d.date, rainfall: d.metrics?.rainfall?.value, maxTemp: d.metrics?.maxTemp?.value, minTemp: d.metrics?.minTemp?.value, lst: d.metrics?.lst?.value, sst: d.metrics?.sst?.value }))} variable="rainfall" title="Rainfall Trajectory" unit="mm/day" color="var(--accent-cyan)" height={260} />
        </div>
      )}

      {/* Model Forecast Section */}
      {multiForecast && (
        <div className="card-panel" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--accent-magenta)', marginBottom: '0.5rem' }}>Model Forecast</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Model output — not observed telemetry.</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Variable</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Prediction</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(multiForecast).map(([varName, val], idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '0.4rem' }}>{varName}</td>
                  <td style={{ padding: '0.4rem' }}>{typeof val === 'object' ? `${val.value ?? '--'} ${val.unit ?? ''}` : val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Insights Panel */}
      {insights.length > 0 && (
        <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderLeft: `4px solid var(--accent-cyan)`, marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>Key Insights</h3>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-primary)' }}>
            {insights.map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Scientific Data Table */}
      {historical && historical.length > 0 && (
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '0.5rem' }}>Date</th>
                <th style={{ padding: '0.5rem' }}>Rainfall (mm)</th>
                <th style={{ padding: '0.5rem' }}>Max Temp (°C)</th>
                <th style={{ padding: '0.5rem' }}>Min Temp (°C)</th>
                <th style={{ padding: '0.5rem' }}>LST (°C)</th>
                <th style={{ padding: '0.5rem' }}>SST (°C)</th>
              </tr>
            </thead>
            <tbody>
              {historical.map((rec, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '0.4rem' }}>{rec.date}</td>
                  <td style={{ padding: '0.4rem' }}>{rec.metrics?.rainfall?.value ?? '--'}</td>
                  <td style={{ padding: '0.4rem' }}>{rec.metrics?.maxTemp?.value ?? '--'}</td>
                  <td style={{ padding: '0.4rem' }}>{rec.metrics?.minTemp?.value ?? '--'}</td>
                  <td style={{ padding: '0.4rem' }}>{rec.metrics?.lst?.value ?? '--'}</td>
                  <td style={{ padding: '0.4rem' }}>{rec.metrics?.sst?.value ?? '--'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Disclosure Panel */}
      <div style={{ marginBottom: '2rem' }}>
        <button onClick={() => setShowDisclosure(!showDisclosure)} style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '0.9rem' }}>
          {showDisclosure ? 'Hide' : 'Show'} Data Provenance & Disclosure
        </button>
        {showDisclosure && (
          <div style={{ marginTop: '0.5rem', padding: '0.75rem', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', color: 'var(--text-muted)' }}>
            <p>• Verified observations are district‑level where available.</p>
            <p>• Satellite‑derived variables (LST, SST) may be unavailable on cloudy days – shown as ‘—’.</p>
            <p>• Model forecasts are predictions, not observed telemetry.</p>
            <p>• If the backend is unreachable, data shown may come from a development mock dataset – not verified observations.</p>
          </div>
        )}
      </div>

      {/* Brief Modal */}
      {showBrief && (
        <div
          onClick={() => setShowBrief(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--bg-surface)',
              padding: '1.5rem',
              maxWidth: '90%',
              maxHeight: '80%',
              overflowY: 'auto',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-lg)',
              color: 'var(--text-primary)',
            }}
          >
            <h2 style={{ marginTop: 0, color: 'var(--accent-cyan)' }}>Climate Brief</h2>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{briefText}</pre>
            <button
              onClick={() => setShowBrief(false)}
              style={{
                marginTop: '1rem',
                backgroundColor: 'var(--accent-cyan-soft)',
                border: '1px solid rgba(6,182,212,0.4)',
                color: '#f8fafc',
                padding: '0.4rem 0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

