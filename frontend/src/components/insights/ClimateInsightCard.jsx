// frontend/src/components/insights/ClimateInsightCard.jsx
//
// CLIMATE INSIGHT CARD — TRACEABILITY & EVIDENCE MODEL
//
// SCIENTIFIC INTEGRITY NOTICE:
// Displays structured explainable climate intelligence with end-to-end traceability:
//   1. WHAT: Primary observation, delta, or model prediction
//   2. WHY: Explanatory mathematical formula, feature contribution, or rate of change
//   3. EVIDENCE: Structured key-value evidence pairs from verified datasets
//   4. METHOD: Mathematical, statistical, or machine learning basis
//   5. PROVENANCE: Source dataset, agency, spatial/temporal resolution, and mock disclosure
//   6. LIMITATION: Explicit boundaries of what the analysis does NOT establish

import React, { useState } from 'react';
import {
  IconInfo,
  IconWarning,
  IconCheck,
  IconAnalytics,
} from '../common/Icons';
import '../../styles/insights.css';

/**
 * ClimateInsightCard Component
 */
export function ClimateInsightCard({
  insight,
  defaultExpanded = false,
  className = '',
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  if (!insight) {
    return (
      <div className="insight-card insight-unavailable-card">
        <div className="insight-card-header">
          <div className="insight-title">
            <IconWarning size={16} color="var(--text-dim)" />
            <span>Insight Unavailable</span>
          </div>
        </div>
        <p className="insight-section-text" style={{ color: 'var(--text-muted)' }}>
          No validated insight telemetry is available for the current selection.
        </p>
      </div>
    );
  }

  const {
    id,
    category,
    title,
    what,
    why,
    evidence = [],
    method,
    provenance,
    limitation,
    disclaimer,
    isMock = true,
  } = insight;

  const CategoryIcon = category?.icon || IconAnalytics;

  return (
    <article
      className={`insight-card ${className}`}
      aria-labelledby={`insight-title-${id || 'card'}`}
    >
      {/* ── Header: Title, Category & Provenance Badges ────────────── */}
      <div className="insight-card-header">
        <div className="insight-title-group">
          <h3 id={`insight-title-${id || 'card'}`} className="insight-title">
            <CategoryIcon size={16} color={category?.badgeColor || 'var(--accent-cyan)'} aria-hidden="true" />
            <span>{title || 'Climate Insight'}</span>
          </h3>
        </div>

        <div className="insight-badge-group">
          {/* Category Chip */}
          {category && (
            <span
              className="insight-badge"
              style={{
                backgroundColor: category.badgeBg,
                color: category.badgeColor,
                border: `1px solid ${category.badgeBorder}`,
              }}
            >
              {category.label}
            </span>
          )}

          {/* Provenance Chip */}
          {provenance && (
            <span
              className="insight-badge insight-provenance-badge"
              style={{
                backgroundColor: provenance.badgeBg,
                color: provenance.badgeColor,
                border: `1px solid ${provenance.badgeBorder}`,
              }}
              title={provenance.attribution || provenance.sourceLabel}
            >
              {provenance.label}
            </span>
          )}

          {/* Development / Mock Flag */}
          {isMock && (
            <span
              className="insight-badge insight-mock-badge"
              title="Displayed value is sourced from the project's development mock dataset"
            >
              Development / Mock Data
            </span>
          )}
        </div>
      </div>

      {/* ── 1. WHAT: Primary Finding ───────────────────────────────── */}
      <div className="insight-section">
        <span className="insight-section-label what">
          <span className="insight-label-dot what-dot" aria-hidden="true" />
          What was observed or projected
        </span>
        <p className="insight-section-text">
          {what}
        </p>
      </div>

      {/* ── 2. WHY: Explanatory Relationship / Attribution ──────────── */}
      <div className="insight-section">
        <span className="insight-section-label why">
          <span className="insight-label-dot why-dot" aria-hidden="true" />
          Why: Mathematical & feature attribution
        </span>
        <p className="insight-section-text">
          {why}
        </p>
      </div>

      {/* ── 3. EVIDENCE: Supporting Quantitative Key-Value Pairs ───── */}
      {evidence && evidence.length > 0 && (
        <div className="insight-section">
          <span className="insight-section-label evidence">
            <span className="insight-label-dot evidence-dot" aria-hidden="true" />
            Supporting Evidence & Values
          </span>
          <div className="insight-evidence-grid">
            {evidence.map((item, idx) => {
              const isObj = typeof item === 'object' && item !== null;
              const label = isObj ? item.label : null;
              const val = isObj ? item.value : item;
              const isUnavailable = String(val).toLowerCase().includes('unavailable');

              return (
                <div
                  key={idx}
                  className={`insight-evidence-card ${isUnavailable ? 'evidence-missing' : ''}`}
                >
                  {label && <span className="insight-evidence-card-label">{label}</span>}
                  <div className="insight-evidence-card-val-row">
                    {!isUnavailable ? (
                      <IconCheck size={12} color="var(--status-normal)" aria-hidden="true" style={{ flexShrink: 0 }} />
                    ) : (
                      <IconWarning size={12} color="var(--status-warning)" aria-hidden="true" style={{ flexShrink: 0 }} />
                    )}
                    <span className="insight-evidence-card-val">{val}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Expandable Traceability Drawer Toggle ──────────────────── */}
      <div className="insight-transparency-toggle-wrap">
        <button
          type="button"
          className="insight-toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`insight-details-${id || 'panel'}`}
        >
          <IconInfo size={13} color="var(--text-muted)" aria-hidden="true" />
          <span>{isExpanded ? 'Hide Traceability & Scientific Boundaries' : 'View Traceability, Method & Scientific Boundaries'}</span>
          <span className="insight-toggle-arrow" aria-hidden="true">
            {isExpanded ? '▲' : '▼'}
          </span>
        </button>
      </div>

      {/* ── Traceability Drawer Content ────────────────────────────── */}
      {isExpanded && (
        <div
          id={`insight-details-${id || 'panel'}`}
          className="insight-expandable-drawer"
        >
          {/* ── 4. METHOD / CALCULATION BASIS ──────────────────────── */}
          {method && (
            <div className="insight-section">
              <span className="insight-section-label method">
                <span className="insight-label-dot method-dot" aria-hidden="true" />
                Calculation & Model Basis
              </span>
              <p className="insight-section-text" style={{ fontSize: '0.75rem' }}>
                {method}
              </p>
            </div>
          )}

          {/* ── 5. PROVENANCE SOURCE DETAILS ───────────────────────── */}
          {provenance && (
            <div className="insight-section">
              <span className="insight-section-label provenance">
                <span className="insight-label-dot provenance-dot" aria-hidden="true" />
                Data Provenance & Source Details
              </span>
              <div className="insight-traceability-details">
                <div className="insight-traceability-row">
                  <span className="insight-traceability-key">Source Type:</span>
                  <span className="insight-traceability-val">{provenance.label}</span>
                </div>
                {provenance.source && (
                  <div className="insight-traceability-row">
                    <span className="insight-traceability-key">Dataset / Model:</span>
                    <span className="insight-traceability-val">{provenance.source}</span>
                  </div>
                )}
                {provenance.agency && (
                  <div className="insight-traceability-row">
                    <span className="insight-traceability-key">Originating Agency:</span>
                    <span className="insight-traceability-val">{provenance.agency}</span>
                  </div>
                )}
                {provenance.resolution && (
                  <div className="insight-traceability-row">
                    <span className="insight-traceability-key">Resolution / Scale:</span>
                    <span className="insight-traceability-val">{provenance.resolution}</span>
                  </div>
                )}
                <div className="insight-traceability-row">
                  <span className="insight-traceability-key">Data Regime:</span>
                  <span className="insight-traceability-val" style={{ color: isMock ? '#fbbf24' : 'var(--status-normal)' }}>
                    {isMock ? 'Development / Mock Record' : 'Live Verified Record'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ── 6. SCIENTIFIC BOUNDARIES & LIMITATIONS ─────────────── */}
          {limitation && (
            <div className="insight-limitation-box" role="note">
              <strong>Boundary of Analysis: </strong>
              {limitation}
            </div>
          )}
        </div>
      )}

      {/* ── Global Disclaimer Footnote ──────────────────────────────── */}
      {disclaimer && (
        <div className="insight-card-footer">
          {disclaimer}
        </div>
      )}
    </article>
  );
}
