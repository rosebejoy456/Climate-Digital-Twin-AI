import React from 'react';

export function StatusBadge({ status = 'normal', label }) {
  const statusStyles = {
    normal: { 
      bg: 'rgba(16, 185, 129, 0.1)', 
      color: '#34d399', 
      border: 'rgba(16, 185, 129, 0.25)',
      dot: '#10b981'
    },
    warning: { 
      bg: 'rgba(245, 158, 11, 0.1)', 
      color: '#fbbf24', 
      border: 'rgba(245, 158, 11, 0.25)',
      dot: '#f59e0b'
    },
    alert: { 
      bg: 'rgba(239, 68, 68, 0.1)', 
      color: '#f87171', 
      border: 'rgba(239, 68, 68, 0.25)',
      dot: '#ef4444'
    },
    info: { 
      bg: 'rgba(6, 182, 212, 0.1)', 
      color: '#38bdf8', 
      border: 'rgba(6, 182, 212, 0.25)',
      dot: '#06b6d4'
    }
  };

  const style = statusStyles[status] || statusStyles.normal;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.2rem 0.55rem',
        borderRadius: 'var(--border-radius-xs)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        backgroundColor: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
        letterSpacing: '0.03em',
        textTransform: 'uppercase'
      }}
    >
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: style.dot }}></span>
      {label || status}
    </span>
  );
}
