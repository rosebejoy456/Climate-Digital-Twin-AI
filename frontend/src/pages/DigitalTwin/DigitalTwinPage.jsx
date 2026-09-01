import React, { useState } from 'react';
import {
  IconGlobe,
  IconLayers,
  IconLocation,
  IconActivity,
  IconCheck,
  IconInfo
} from '../../components/common/Icons';

export function DigitalTwinPage() {
  const [activeLayer, setActiveLayer] = useState('all');
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div>
      {/* Page Heading */}
      <div className="page-header">
        <h1 className="page-title">
          <IconGlobe size={24} color="var(--accent-cyan)" />
          Digital Twin 3D Environment
        </h1>
        <p className="page-description">
          Interactive 3D WebGL globe representation integrating satellite imagery, atmospheric glow, and telemetry coordinate rays.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem', height: '640px' }}>
        {/* Main 3D Viewport / HUD */}
        <div
          className="card-panel"
          style={{
            padding: '0',
            backgroundColor: '#030712',
            border: '1px solid var(--border-medium)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Top HUD Telemetry Bar */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              right: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 10
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'rgba(12, 20, 39, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.75rem'
              }}
            >
              <span className="status-pulse" style={{ width: '6px', height: '6px' }}></span>
              <span style={{ color: 'var(--text-secondary)' }}>ENGINE: <strong>WebGL 2.0 (Three.js)</strong></span>
              <span style={{ color: 'var(--text-dim)' }}>•</span>
              <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>60 FPS</span>
            </div>

            {/* Viewport Action Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(12, 20, 39, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '0.35rem 0.6rem',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <button
                className={`tab-btn ${isRotating ? 'active' : ''}`}
                onClick={() => setIsRotating(!isRotating)}
                style={{ fontSize: '0.6875rem' }}
              >
                {isRotating ? '⏸ Pause Orbit' : '▶ Auto-Rotate'}
              </button>
              <button
                className="tab-btn"
                style={{ fontSize: '0.6875rem' }}
                onClick={() => alert('Focusing camera coordinates on Ernakulam District (9.98° N, 76.30° E)...')}
              >
                🎯 Target Ernakulam
              </button>
            </div>
          </div>

          {/* Center 3D Digital Twin Visual Representation */}
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg
              viewBox="0 0 500 500"
              style={{
                width: '380px',
                height: '380px',
                filter: 'drop-shadow(0 0 35px rgba(6, 182, 212, 0.25))'
              }}
            >
              {/* Outer Atmosphere Glow */}
              <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="6" />
              <circle cx="250" cy="250" r="170" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" strokeDasharray="6 4" />

              {/* Sphere Shading */}
              <defs>
                <radialGradient id="earth-shading" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="45%" stopColor="#0f172a" />
                  <stop offset="85%" stopColor="#020617" />
                </radialGradient>
                <linearGradient id="orbit-ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Globe Base */}
              <circle cx="250" cy="250" r="160" fill="url(#earth-shading)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

              {/* Latitude Rings */}
              <ellipse cx="250" cy="250" rx="160" ry="50" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <ellipse cx="250" cy="200" rx="150" ry="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="250" cy="300" rx="150" ry="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Longitude Rings */}
              <ellipse cx="250" cy="250" rx="60" ry="160" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <ellipse cx="250" cy="250" rx="120" ry="160" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Digital Twin Target Ray on Ernakulam (Lat 9.98° N, Lon 76.30° E) */}
              <g transform="translate(275, 235)">
                <circle cx="0" cy="0" r="6" fill="#f43f5e" />
                <circle cx="0" cy="0" r="14" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" className="status-pulse" />
                <line x1="0" y1="0" x2="65" y2="-45" stroke="#f43f5e" strokeWidth="1.5" />
                <circle cx="65" cy="-45" r="3" fill="#f43f5e" />
                <rect x="70" y="-60" width="130" height="32" rx="4" fill="rgba(12, 20, 39, 0.95)" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1" />
                <text x="78" y="-45" fill="#f8fafc" fontSize="10" fontWeight="700">Ernakulam Node</text>
                <text x="78" y="-34" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)">9.98° N, 76.30° E</text>
              </g>

              {/* Outer Orbit Satellite Track */}
              <ellipse cx="250" cy="250" rx="200" ry="85" fill="none" stroke="url(#orbit-ring)" strokeWidth="1.5" strokeDasharray="5 5" transform="rotate(-25 250 250)" />
              <circle cx="390" cy="165" r="4" fill="#06b6d4" />
              <text x="400" y="162" fill="#38bdf8" fontSize="9" fontFamily="var(--font-mono)">INSAT-3D</text>
            </svg>
          </div>

          {/* Bottom Telemetry Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(12, 20, 39, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '0.6rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Target: <strong style={{ color: 'var(--text-primary)' }}>Ernakulam District Bounding Box</strong></span>
              <span style={{ color: 'var(--text-muted)' }}>Projection: <strong style={{ color: 'var(--text-primary)' }}>WGS-84 Sphere</strong></span>
            </div>
            <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem' }}>
              Sub-module: /visualization (Standalone Three.js App)
            </span>
          </div>
        </div>

        {/* Right Sidebar: Digital Twin Controls & Parameters */}
        <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconLayers size={18} color="var(--accent-cyan)" />
                  Twin Layers & Shaders
                </h2>
                <p className="card-subtitle">Render Pipeline Toggles</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>High-Res Day Texture</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--status-normal)', fontWeight: 700 }}>ACTIVE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>Normal & Specular Map</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--status-normal)', fontWeight: 700 }}>ACTIVE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>Atmosphere Light Shader</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--status-normal)', fontWeight: 700 }}>ACTIVE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>GeoJSON Country Borders</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--status-normal)', fontWeight: 700 }}>ACTIVE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>Lat / Longitude Grid</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>OVERLAY</span>
              </div>
            </div>

            {/* Architecture Integration Note */}
            <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                <IconInfo size={14} color="var(--accent-cyan)" />
                Teammate Sub-Module Isolation
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                The teammate's Three.js Digital Twin viewer runs in <code style={{ color: 'var(--accent-cyan)' }}>/visualization</code>. This dashboard view connects seamlessly via micro-frontend iframe embedding without editing their core 3D files.
              </p>
            </div>
          </div>

          <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
            Ernakulam Climate Coordinates Locked.
          </div>
        </div>
      </div>
    </div>
  );
}
