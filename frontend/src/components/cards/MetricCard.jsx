import React from 'react';
import { StatusBadge } from '../common/StatusBadge';
import { Sparkline } from '../charts/Sparkline';
import { IconTrendUp, IconTrendDown } from '../common/Icons';

export function MetricCard({
  title,
  value,
  unit,
  status = 'normal',
  statusLabel,
  source,
  icon: IconComponent,
  trendPercent,
  sparkData,
  color = 'var(--accent-cyan)',
  isActive = false,
  onClick
}) {
  const isPositiveTrend = trendPercent && trendPercent > 0;
  const isNegativeTrend = trendPercent && trendPercent < 0;

  return (
    <div
      className={`card-panel ${onClick ? 'interactive' : ''} ${isActive ? 'active-telemetry' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      title={onClick ? `Click to view ${title} 7-day trajectory` : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '170px',
        padding: '1.25rem 1.35rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {IconComponent && (
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '6px',
                backgroundColor: 'var(--bg-surface-elevated)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color,
                border: '1px solid var(--border-subtle)'
              }}
            >
              <IconComponent size={15} />
            </div>
          )}
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {title}
          </span>
        </div>
        {statusLabel && <StatusBadge status={status} label={statusLabel} />}
      </div>

      {/* Value & Sparkline Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', margin: '0.4rem 0' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {value ?? '--'}
            </span>
            {unit && (
              <span style={{ fontSize: '0.845rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {unit}
              </span>
            )}
          </div>

          {trendPercent !== undefined && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.35rem', fontSize: '0.75rem', fontWeight: 600 }}>
              {isPositiveTrend && (
                <span style={{ color: 'var(--status-alert)', display: 'inline-flex', alignItems: 'center', gap: '0.15rem' }}>
                  <IconTrendUp size={13} /> +{trendPercent}%
                </span>
              )}
              {isNegativeTrend && (
                <span style={{ color: 'var(--status-normal)', display: 'inline-flex', alignItems: 'center', gap: '0.15rem' }}>
                  <IconTrendDown size={13} /> {trendPercent}%
                </span>
              )}
              {trendPercent === 0 && (
                <span style={{ color: 'var(--text-muted)' }}>0.0% (Stable)</span>
              )}
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', fontWeight: 400 }}>vs 7d baseline</span>
            </div>
          )}
        </div>

        {sparkData && (
          <div style={{ marginBottom: '4px' }}>
            <Sparkline data={sparkData} color={color} width={90} height={32} />
          </div>
        )}
      </div>

      {/* Source Footer */}
      {source && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem', marginTop: '0.35rem', fontSize: '0.6875rem', color: 'var(--text-dim)' }}>
          <span>Telemetry Source</span>
          <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{source}</span>
        </div>
      )}
    </div>
  );
}
