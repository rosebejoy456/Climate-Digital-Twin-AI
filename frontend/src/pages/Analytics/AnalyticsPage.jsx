import React, { useEffect, useState } from 'react';
import { getShapExplanation } from '../../services/explainabilityService';
import { getMultiVariablePrediction } from '../../services/predictionService';
import {
  IconAnalytics,
  IconAI,
  IconInfo,
  IconCheck,
  IconRainfall,
  IconTemperature,
  IconLST,
  IconNDVI
} from '../../components/common/Icons';

export function AnalyticsPage() {
  const [shapData, setShapData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [activeVar, setActiveVar] = useState('rainfall');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [shap, multiPred] = await Promise.all([
          getShapExplanation(),
          getMultiVariablePrediction()
        ]);
        setShapData(shap);
        setForecast(multiPred);
      } catch (err) {
        console.error('Error loading analytics telemetry:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{ color: 'var(--text-secondary)', padding: '3rem', textAlign: 'center' }}>
        <div className="status-pulse" style={{ margin: '0 auto 1rem', width: '12px', height: '12px' }}></div>
        <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>Loading Analytics & AI Models...</div>
      </div>
    );
  }

  // Max absolute contribution for scaling bars
  const maxContribution = Math.max(...(shapData?.features?.map((f) => Math.abs(f.contribution)) || [5]));

  const varInfo = {
    rainfall: { name: 'Rainfall', unit: 'mm/day', color: '#06b6d4', icon: IconRainfall },
    maxTemp: { name: 'Max Temp', unit: '°C', color: '#f59e0b', icon: IconTemperature },
    lst: { name: 'Land Surface Temp', unit: '°C', color: '#f43f5e', icon: IconLST },
    ndvi: { name: 'NDVI Vegetation', unit: 'Index', color: '#10b981', icon: IconNDVI }
  };

  return (
    <div>
      {/* Page Heading */}
      <div className="page-header">
        <h1 className="page-title">
          <IconAnalytics size={24} color="var(--accent-cyan)" />
          Climate Analytics & AI Forecast
        </h1>
        <p className="page-description">
          Multi-variable time-series forecasting models and SHAP-based Explainable AI attribution for Ernakulam District.
        </p>
      </div>

      {/* 1. MULTI-VARIABLE 5-DAY HORIZON FORECAST */}
      <div className="card-panel" style={{ marginBottom: '1.75rem' }}>
        <div className="card-panel-header" style={{ flexWrap: 'wrap', gap: '1rem' }}>
          <div className="card-title-group">
            <h2 className="card-title">
              <IconAI size={18} color="var(--accent-cyan)" />
              5-Day Multi-Variable Climate Horizon
            </h2>
            <p className="card-subtitle">
              Coupled time-series projection derived from meteorological lag features
            </p>
          </div>

          <div className="tab-group">
            <button
              className={`tab-btn ${activeVar === 'rainfall' ? 'active' : ''}`}
              onClick={() => setActiveVar('rainfall')}
            >
              Rainfall
            </button>
            <button
              className={`tab-btn ${activeVar === 'maxTemp' ? 'active' : ''}`}
              onClick={() => setActiveVar('maxTemp')}
            >
              Max Temp
            </button>
            <button
              className={`tab-btn ${activeVar === 'lst' ? 'active' : ''}`}
              onClick={() => setActiveVar('lst')}
            >
              LST
            </button>
            <button
              className={`tab-btn ${activeVar === 'ndvi' ? 'active' : ''}`}
              onClick={() => setActiveVar('ndvi')}
            >
              NDVI
            </button>
          </div>
        </div>

        {/* 5-Day Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {forecast.map((day, idx) => {
            const isTomorrow = idx === 0;
            const val = day[activeVar];
            const info = varInfo[activeVar];
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: isTomorrow ? 'rgba(6, 182, 212, 0.08)' : 'var(--bg-surface-elevated)',
                  border: isTomorrow ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--border-radius-sm)',
                  padding: '1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  position: 'relative'
                }}
              >
                {isTomorrow && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--accent-cyan)',
                      color: '#080d1a',
                      padding: '0.15rem 0.4rem',
                      borderRadius: '3px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Primary Focus
                  </span>
                )}
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: isTomorrow ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}>
                  {day.day}
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {day.date}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '1.625rem', fontWeight: 800, color: info.color }}>
                    {val}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {info.unit}
                  </span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem', marginTop: '0.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-dim)' }}>
                  <span>Press: {day.surfacePressure} hPa</span>
                  <span>NDVI: {day.ndvi}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. SHAP EXPLAINABLE AI SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.75fr 1fr', gap: '1.5rem' }}>
        {/* SHAP Feature Contribution Chart */}
        <div className="card-panel">
          <div className="card-panel-header">
            <div className="card-title-group">
              <h2 className="card-title">
                <IconAI size={18} color="var(--accent-magenta)" />
                Why did the model predict this? — SHAP Feature Attribution
              </h2>
              <p className="card-subtitle">
                Game-theoretic feature attributions (Shapley values) for next-day precipitation forecast
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#34d399' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--status-normal)', borderRadius: '2px' }}></span>
                Increases Prediction
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#fb7185' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-magenta)', borderRadius: '2px' }}></span>
                Decreases Prediction
              </span>
            </div>
          </div>

          {/* Base Value vs Output Value Callout */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--bg-surface-elevated)',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.25rem',
              fontSize: '0.8125rem'
            }}
          >
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Dataset Base Expectation (E[f(x)]): </span>
              <strong style={{ color: 'var(--text-primary)' }}>{shapData?.baseValue} mm</strong>
            </div>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>➔</span>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Final Model Output f(x): </span>
              <strong style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>{shapData?.predictionValue} mm</strong>
            </div>
            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(6, 182, 212, 0.12)', color: 'var(--accent-cyan)', borderRadius: '4px', fontWeight: 600 }}>
              Net Attribution: +6.2 mm
            </span>
          </div>

          {/* Horizontal Waterfall Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {shapData?.features?.map((feat, idx) => {
              const isPositive = feat.contribution > 0;
              const barWidthPct = (Math.abs(feat.contribution) / maxContribution) * 100;
              const barColor = isPositive ? 'var(--status-normal)' : 'var(--accent-magenta)';

              return (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '210px 1fr 90px', alignItems: 'center', gap: '1rem', fontSize: '0.8125rem' }}>
                  {/* Feature Name */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.75rem' }}>
                      {feat.name}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)' }}>
                      sample value: {feat.value}
                    </span>
                  </div>

                  {/* Visual Bar */}
                  <div style={{ height: '22px', backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '4px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                    {/* Centered reference guideline */}
                    <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.15)', zIndex: 1 }}></div>

                    {isPositive ? (
                      <div
                        style={{
                          position: 'absolute',
                          left: '50%',
                          width: `${barWidthPct / 2}%`,
                          height: '100%',
                          backgroundColor: barColor,
                          borderRadius: '0 3px 3px 0',
                          opacity: 0.85,
                          transition: 'width 0.4s ease'
                        }}
                      ></div>
                    ) : (
                      <div
                        style={{
                          position: 'absolute',
                          right: '50%',
                          width: `${barWidthPct / 2}%`,
                          height: '100%',
                          backgroundColor: barColor,
                          borderRadius: '3px 0 0 3px',
                          opacity: 0.85,
                          transition: 'width 0.4s ease'
                        }}
                      ></div>
                    )}
                  </div>

                  {/* Value */}
                  <div style={{ textAlign: 'right', fontWeight: 700, fontFamily: 'var(--font-mono)', color: isPositive ? '#34d399' : '#fb7185', fontSize: '0.8125rem' }}>
                    {isPositive ? `+${feat.contribution.toFixed(1)}` : feat.contribution.toFixed(1)} mm
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <strong>Inference Insight:</strong> {shapData?.topFeaturesSummary}
          </div>
        </div>

        {/* Right Column: Model Architecture & XAI Explanation Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Explainability Explanation Box */}
          <div className="card-panel">
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconInfo size={18} color="var(--accent-cyan)" />
                  Model Explanation
                </h2>
                <p className="card-subtitle">Shapley Additive exPlanations</p>
              </div>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              SHAP assigns each climate feature an importance value representing its marginal contribution to shifting the model prediction away from the historical base mean.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                <IconCheck size={14} color="var(--status-normal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Prevents "black-box" decisions for emergency flood/heat alerts.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                <IconCheck size={14} color="var(--status-normal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Quantifies synergy between lag rainfall & monsoon phase.</span>
              </div>
            </div>
          </div>

          {/* Model Metrics Card */}
          <div className="card-panel">
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">XGBoost Model Specs</h2>
                <p className="card-subtitle">Best Hyperparameters</p>
              </div>
              <span style={{ fontSize: '0.6875rem', color: 'var(--status-normal)', fontWeight: 600 }}>Tuned & Saved</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Model Weights:</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>xgboost_rainfall_best.json</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Estimators:</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>500 trees</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Max Depth:</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>5</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Learning Rate:</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>0.03</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Test MAE:</span>
                <span style={{ fontWeight: 700, color: 'var(--status-normal)' }}>4.82 mm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Test R² Score:</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>0.68</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
