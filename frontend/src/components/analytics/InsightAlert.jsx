import React from 'react';

import { IconInfo, IconWarning, IconCheck } from '../common/Icons';

/**
 * InsightAlert – a lightweight, premium‑looking alert component used on the
 * Analytics page to surface screening‑indicator insights.
 *
 * Props
 * -----
 * message   : string – the main alert text (required)
 * type      : 'info' | 'warning' | 'error' | 'success' – visual style (default: 'info')
 * disclaimer: string – optional small print shown beneath the message
 */
export default function InsightAlert({ message, type = 'info', disclaimer }) {
  // Map alert type to colour and icon – keep palette harmonious with existing UI
  const typeMap = {
    info: { bg: 'var(--bg-surface-elevated)', border: 'var(--accent-cyan)', icon: <IconInfo size={18} color="var(--accent-cyan)" /> },
    warning: { bg: 'rgba(255,165,0,0.12)', border: '#fb923c', icon: <IconWarning size={18} color="#fb923c" /> },
    success: { bg: 'rgba(6,182,212,0.12)', border: 'var(--status-normal)', icon: <IconCheck size={18} color="var(--status-normal)" /> },
    error: { bg: 'rgba(255,0,0,0.12)', border: '#f87171', icon: <IconWarning size={18} color="#f87171" /> },
  };
  const { bg, border, icon } = typeMap[type] || typeMap.info;

  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        backgroundColor: bg,
        borderLeft: `4px solid ${border}`,
        padding: '0.75rem 1rem',
        borderRadius: 'var(--border-radius-sm)',
        marginTop: '1rem',
        color: 'var(--text-primary)',
        fontSize: '0.875rem',
      }}
    >
      <div style={{ flexShrink: 0 }}>{icon}</div>
      <div style={{ flexGrow: 1 }}>
        <div>{message}</div>
        {disclaimer && (
          <div style={{ marginTop: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {disclaimer}
          </div>
        )}
      </div>
    </div>
  );
}


