import React, { useState } from 'react';

export function TrendChart({
  data = [],
  variable = 'rainfall',
  title = '7-Day Climate Trajectory',
  unit = 'mm/day',
  color = '#06b6d4',
  height = 240
}) {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  if (!data || data.length === 0) {
    return (
      <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
        No trajectory data available.
      </div>
    );
  }

  const values = data.map((d) => d[variable] ?? 0);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const range = maxVal - minVal === 0 ? 1 : maxVal - minVal;

  const paddingLeft = 45;
  const paddingRight = 20;
  const paddingTop = 25;
  const paddingBottom = 35;
  const svgWidth = 700;
  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const points = data.map((d, i) => {
    const x = paddingLeft + (i / (data.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (((d[variable] ?? 0) - minVal) / range) * chartHeight;
    return { x, y, date: d.date, value: d[variable] };
  });

  const pathD = points.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = points[i - 1];
    const cx1 = prev.x + (p.x - prev.x) / 2;
    const cy1 = prev.y;
    const cx2 = prev.x + (p.x - prev.x) / 2;
    const cy2 = p.y;
    return `${acc} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p.x} ${p.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`;

  const gradientId = `trend-area-grad-${variable}`;

  // Y-axis ticks
  const yTicks = [
    { label: maxVal.toFixed(1), y: paddingTop },
    { label: ((maxVal + minVal) / 2).toFixed(1), y: paddingTop + chartHeight / 2 },
    { label: minVal.toFixed(1), y: height - paddingBottom }
  ];

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <svg
        viewBox={`0 0 ${svgWidth} ${height}`}
        style={{ width: '100%', height: 'auto', overflow: 'visible', display: 'block' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines & Y labels */}
        {yTicks.map((tick, i) => (
          <g key={i}>
            <line
              x1={paddingLeft}
              y1={tick.y}
              x2={svgWidth - paddingRight}
              y2={tick.y}
              stroke="rgba(255, 255, 255, 0.06)"
              strokeDasharray="4 4"
            />
            <text
              x={paddingLeft - 8}
              y={tick.y + 4}
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-mono)"
              textAnchor="end"
            >
              {tick.label}
            </text>
          </g>
        ))}

        {/* Gradient Area */}
        <path d={areaD} fill={`url(#${gradientId})`} />

        {/* Main Line */}
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points & X labels */}
        {points.map((p, i) => {
          const isHovered = hoveredPoint === i;
          return (
            <g key={i}>
              <text
                x={p.x}
                y={height - paddingBottom + 18}
                fill={isHovered ? 'var(--text-primary)' : 'var(--text-dim)'}
                fontSize="10"
                fontFamily="var(--font-mono)"
                textAnchor="middle"
                style={{ transition: 'fill 0.15s' }}
              >
                {p.date.slice(5)}
              </text>
              <circle
                cx={p.x}
                cy={p.y}
                r={isHovered ? 5.5 : 3.5}
                fill={isHovered ? '#ffffff' : color}
                stroke="var(--bg-surface)"
                strokeWidth="2"
                style={{ cursor: 'pointer', transition: 'all 0.15s' }}
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            </g>
          );
        })}
      </svg>

      {/* Floating Tooltip */}
      {hoveredPoint !== null && points[hoveredPoint] && (
        <div
          style={{
            position: 'absolute',
            top: `${(points[hoveredPoint].y / height) * 100}%`,
            left: `${(points[hoveredPoint].x / svgWidth) * 100}%`,
            transform: 'translate(-50%, -130%)',
            backgroundColor: 'var(--bg-surface-elevated)',
            border: `1px solid ${color}`,
            borderRadius: 'var(--border-radius-xs)',
            padding: '0.35rem 0.65rem',
            boxShadow: 'var(--shadow-md)',
            pointerEvents: 'none',
            zIndex: 10,
            whiteSpace: 'nowrap'
          }}
        >
          <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            {points[hoveredPoint].date}
          </div>
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            {points[hoveredPoint].value} <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{unit}</span>
          </div>
        </div>
      )}
    </div>
  );
}
