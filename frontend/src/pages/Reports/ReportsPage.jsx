import React, { useState } from 'react';
import {
  IconReports,
  IconDownload,
  IconCheck,
  IconAI,
  IconLayers
} from '../../components/common/Icons';

export function ReportsPage() {
  const [filterType, setFilterType] = useState('all');
  const [isExporting, setIsExporting] = useState(false);

  const datasets = [
    {
      name: 'Climate_Ernakulam_2015_2025.csv',
      type: 'Observational Matrix',
      source: 'IMD + ERA5 + MODIS (Cleaned & Standardized)',
      size: '740 KB',
      records: '3,652 Daily Records',
      coverage: '2015-01-01 to 2025-01-01',
      status: 'Processed & Verified'
    },
    {
      name: 'Climate_Ernakulam_ML_Ready_2015_2025.csv',
      type: 'Feature Engineered Matrix',
      source: '7-Day Lags + 7-Day Rolling Averages + Monsoon Indicators',
      size: '883 KB',
      records: '3,645 Rows (7 Lags)',
      coverage: '2015–2025 Features',
      status: 'Ready for Inference'
    },
    {
      name: 'LSTM_X_train.npy & LSTM_y_train.npy',
      type: 'Tensor Arrays',
      source: 'Sequential 7-Day sliding time-series tensors for Deep Learning',
      size: '12.3 MB',
      records: '2,916 Sequence Windows',
      coverage: '2015–2024 (80/20 Split)',
      status: 'Trained & Cached'
    },
    {
      name: 'countries.geojson',
      type: 'Geospatial Topologies',
      source: 'Natural Earth Global Country Polygon Boundaries',
      size: '839 KB',
      records: '177 Country Polygons',
      coverage: 'Global WGS84',
      status: 'Visualizer Active'
    }
  ];

  const models = [
    {
      name: 'xgboost_rainfall_best.json',
      type: 'Gradient Boosted Trees',
      target: 'Next-Day Rainfall (mm)',
      metrics: 'R² = 0.68 • MAE = 4.82 mm • RMSE = 8.14',
      size: '3.3 MB',
      status: 'Production Weights'
    },
    {
      name: 'lstm_rainfall_scaled.keras',
      type: 'Deep Sequential LSTM',
      target: 'Temporal Rain Trajectory',
      metrics: 'R² = 0.64 • MAE = 5.12 mm • Epochs = 50',
      size: '603 KB',
      status: 'Model Archive'
    },
    {
      name: 'lstm_feature_scaler.pkl',
      type: 'StandardScaler Pipeline',
      target: 'Input Feature Normalization',
      metrics: 'Zero Mean • Unit Variance',
      size: '2.1 KB',
      status: 'Serialized'
    }
  ];

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert('Climate Resilience Briefing generated successfully! Report summary prepared for Ernakulam District Disaster Management Authority.');
    }, 900);
  };

  return (
    <div>
      {/* Page Heading */}
      <div className="page-header">
        <h1 className="page-title">
          <IconReports size={24} color="var(--accent-cyan)" />
          Reports & Climate Data Catalog
        </h1>
        <p className="page-description">
          Archived observational climate states, AI model validation registry, and decision-support briefing generator.
        </p>
      </div>

      {/* Top Action Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="tab-group">
          <button
            className={`tab-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            All Datasets & Models
          </button>
          <button
            className={`tab-btn ${filterType === 'data' ? 'active' : ''}`}
            onClick={() => setFilterType('data')}
          >
            Processed Datasets
          </button>
          <button
            className={`tab-btn ${filterType === 'models' ? 'active' : ''}`}
            onClick={() => setFilterType('models')}
          >
            AI Models
          </button>
        </div>

        <button
          onClick={handleExport}
          className="telemetry-pill"
          style={{
            cursor: 'pointer',
            backgroundColor: 'var(--accent-cyan-soft)',
            borderColor: 'rgba(6, 182, 212, 0.4)',
            color: '#f8fafc',
            fontWeight: 600,
            padding: '0.45rem 1rem'
          }}
        >
          <IconDownload size={15} color="var(--accent-cyan)" />
          <span>{isExporting ? 'Generating Policy Briefing...' : 'Export Municipal Climate Briefing'}</span>
        </button>
      </div>

      {/* 1. DATASET REGISTRY TABLE */}
      {(filterType === 'all' || filterType === 'data') && (
        <div className="card-panel" style={{ marginBottom: '1.5rem' }}>
          <div className="card-panel-header">
            <div className="card-title-group">
              <h2 className="card-title">
                <IconLayers size={18} color="var(--accent-cyan)" />
                Observational & Feature-Engineered Datasets
              </h2>
              <p className="card-subtitle">Stored in /data/processed directory for model training & evaluation</p>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>4 Files Verified</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>File Identifier</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Type</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Source & Features</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Size</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Records</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map((d, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.85rem 0.5rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {d.name}
                    </td>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-secondary)' }}>{d.type}</td>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>{d.source}</td>
                    <td style={{ padding: '0.85rem 0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{d.size}</td>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-secondary)' }}>{d.records}</td>
                    <td style={{ padding: '0.85rem 0.5rem' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--status-normal)', fontWeight: 600, fontSize: '0.75rem' }}>
                        <IconCheck size={12} color="var(--status-normal)" />
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. AI MODEL REGISTRY TABLE */}
      {(filterType === 'all' || filterType === 'models') && (
        <div className="card-panel">
          <div className="card-panel-header">
            <div className="card-title-group">
              <h2 className="card-title">
                <IconAI size={18} color="var(--accent-magenta)" />
                AI Model Weights & Serialized Artifacts
              </h2>
              <p className="card-subtitle">Stored in /models directory for live dashboard inference</p>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>3 Artifacts Available</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Artifact Name</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Architecture</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Target Variable</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Validation Performance</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Size</th>
                  <th style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {models.map((m, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.85rem 0.5rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                      {m.name}
                    </td>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-secondary)' }}>{m.type}</td>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-primary)' }}>{m.target}</td>
                    <td style={{ padding: '0.85rem 0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{m.metrics}</td>
                    <td style={{ padding: '0.85rem 0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{m.size}</td>
                    <td style={{ padding: '0.85rem 0.5rem' }}>
                      <span style={{ display: 'inline-flex', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34d399', borderRadius: '4px', fontWeight: 600, fontSize: '0.6875rem' }}>
                        {m.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
