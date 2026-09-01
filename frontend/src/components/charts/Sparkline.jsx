import React from 'react';

export function Sparkline({ data = [], color = 'var(--accent-cyan)', height = 36, width = 110 }) {
  if (!data || data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min === 0 ? 1 : max - min;
  const padding = 4;
  const graphHeight = height - padding * 2;
  const graphWidth = width - padding * 2;

  const points = data.map((val, idx) => {
    const x = padding + (idx / (data.length - 1)) * graphWidth;
    const y = padding + graphHeight - ((val - min) / range) * graphHeight;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `${padding},${height} ${points} ${width - padding},${height}`;

  const gradientId = `spark-grad-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradientId})`} />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}
