import React, { useState } from 'react';
import {
  IconMap,
  IconLayers,
  IconLocation,
  IconRainfall,
  IconTemperature,
  IconLST,
  IconNDVI,
  IconCheck
} from '../../components/common/Icons';

export function ClimateMapPage() {
  const [activeLayer, setActiveLayer] = useState('rainfall');
  const [selectedTaluk, setSelectedTaluk] = useState('Kochi');
  const [showStations, setShowStations] = useState(true);

  // Ernakulam District Taluk regions and localized climate statistics
  const talukData = {
    Kochi: {
      name: 'Kochi (Coastal Urban)',
      coordinates: '9.9312° N, 76.2673° E',
      area: '95 km²',
      rainfall: 16.4,
      maxTemp: 32.8,
      lst: 34.6,
      ndvi: 0.52,
      riskLevel: 'Moderate Waterlogging',
      riskColor: 'var(--status-warning)',
      summary: 'High coastal vulnerability and urban heat island density around Fort Kochi and Marine Drive corridors.'
    },
    Kanayannur: {
      name: 'Kanayannur (Ernakulam Central)',
      coordinates: '9.9715° N, 76.3188° E',
      area: '142 km²',
      rainfall: 15.2,
      maxTemp: 32.5,
      lst: 34.1,
      ndvi: 0.58,
      riskLevel: 'Normal Flow',
      riskColor: 'var(--status-normal)',
      summary: 'Core administrative and transit zone with moderate impermeable surface fraction.'
    },
    Aluva: {
      name: 'Aluva (Periyar Basin)',
      coordinates: '10.1076° N, 76.3516° E',
      area: '168 km²',
      rainfall: 18.0,
      maxTemp: 31.9,
      lst: 32.9,
      ndvi: 0.69,
      riskLevel: 'Periyar Riverine Watch',
      riskColor: 'var(--status-warning)',
      summary: 'Periyar river corridor sensitive to upstream dam discharge and localized monsoon precipitation spikes.'
    },
    Paravur: {
      name: 'North Paravur (Coastal Backwaters)',
      coordinates: '10.1472° N, 76.2308° E',
      area: '112 km²',
      rainfall: 14.1,
      maxTemp: 31.6,
      lst: 31.8,
      ndvi: 0.64,
      riskLevel: 'Tidal Inundation',
      riskColor: 'var(--status-warning)',
      summary: 'Low-lying estuarine wetlands with direct saline tidal influence.'
    },
    Kunnathunad: {
      name: 'Kunnathunad (Perumbavoor Plains)',
      coordinates: '10.0528° N, 76.4682° E',
      area: '246 km²',
      rainfall: 13.9,
      maxTemp: 32.1,
      lst: 33.2,
      ndvi: 0.74,
      riskLevel: 'Low Risk',
      riskColor: 'var(--status-normal)',
      summary: 'Agricultural midland plains with robust agro-forestry canopy cover.'
    },
    Muvattupuzha: {
      name: 'Muvattupuzha (Riverine Midland)',
      coordinates: '9.9842° N, 76.5816° E',
      area: '298 km²',
      rainfall: 12.8,
      maxTemp: 31.4,
      lst: 32.0,
      ndvi: 0.79,
      riskLevel: 'Stable Agricultural',
      riskColor: 'var(--status-normal)',
      summary: 'Tri-river confluence zone characterized by high biomass and rubber plantations.'
    },
    Kothamangalam: {
      name: 'Kothamangalam (Eastern Foothills)',
      coordinates: '10.0612° N, 76.6288° E',
      area: '382 km²',
      rainfall: 19.5,
      maxTemp: 29.8,
      lst: 28.9,
      ndvi: 0.88,
      riskLevel: 'Terrain Runoff',
      riskColor: 'var(--status-normal)',
      summary: 'Western Ghats foothills with dense evergreen canopy and higher orographic rainfall rates.'
    }
  };

  const currentTaluk = talukData[selectedTaluk] || talukData.Kochi;

  const layerLegends = {
    rainfall: { title: 'Precipitation Isohyets (mm/day)', min: '0 mm', max: '35 mm', gradient: 'linear-gradient(90deg, #1e293b, #0284c7, #06b6d4, #38bdf8)' },
    lst: { title: 'Land Surface Temp - LST (°C)', min: '26 °C', max: '38 °C', gradient: 'linear-gradient(90deg, #1e293b, #f59e0b, #f43f5e, #e11d48)' },
    ndvi: { title: 'Vegetation Canopy (NDVI)', min: '0.2', max: '0.9', gradient: 'linear-gradient(90deg, #ca8a04, #84cc16, #22c55e, #15803d)' }
  };

  return (
    <div>
      {/* Page Heading */}
      <div className="page-header">
        <h1 className="page-title">
          <IconMap size={24} color="var(--accent-cyan)" />
          Geospatial Climate Intelligence Map
        </h1>
        <p className="page-description">
          Spatial distribution of precipitation, thermal patterns, and NDVI canopy indices across Ernakulam District's administrative taluks.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem', height: '620px' }}>
        {/* Main Map Canvas Area */}
        <div
          className="card-panel"
          style={{
            padding: '0',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#070b16',
            border: '1px solid var(--border-medium)'
          }}
        >
          {/* Floating Top Layer Selector HUD */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(12, 20, 39, 0.9)',
              backdropFilter: 'blur(8px)',
              padding: '0.4rem 0.6rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', marginRight: '0.5rem' }}>
              <IconLayers size={14} color="var(--accent-cyan)" />
              <span>LAYER:</span>
            </div>

            <button
              className={`tab-btn ${activeLayer === 'rainfall' ? 'active' : ''}`}
              onClick={() => setActiveLayer('rainfall')}
              style={{ fontSize: '0.6875rem' }}
            >
              Rainfall (IMD)
            </button>
            <button
              className={`tab-btn ${activeLayer === 'lst' ? 'active' : ''}`}
              onClick={() => setActiveLayer('lst')}
              style={{ fontSize: '0.6875rem' }}
            >
              LST Thermal
            </button>
            <button
              className={`tab-btn ${activeLayer === 'ndvi' ? 'active' : ''}`}
              onClick={() => setActiveLayer('ndvi')}
              style={{ fontSize: '0.6875rem' }}
            >
              NDVI Canopy
            </button>
          </div>

          {/* Floating Station Toggle Button */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 10,
              backgroundColor: 'rgba(12, 20, 39, 0.9)',
              backdropFilter: 'blur(8px)',
              padding: '0.4rem 0.75rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)'
            }}
          >
            <input
              type="checkbox"
              id="station-toggle"
              checked={showStations}
              onChange={(e) => setShowStations(e.target.checked)}
              style={{ accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
            />
            <label htmlFor="station-toggle" style={{ cursor: 'pointer', fontWeight: 500 }}>
              IMD & Automatic Stations
            </label>
          </div>

          {/* Interactive SVG Geospatial Map of Ernakulam */}
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg
              viewBox="0 0 800 520"
              style={{ width: '92%', height: '92%', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))' }}
            >
              {/* Background Grid Lines & Coordinates */}
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="800" height="520" fill="url(#map-grid)" />

              {/* District Outline / Coastline Backdrop */}
              <path
                d="M 60 40 Q 90 200, 110 380 Q 140 480, 180 500"
                fill="none"
                stroke="rgba(6, 182, 212, 0.2)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text x="65" y="490" fill="rgba(6, 182, 212, 0.4)" fontSize="10" fontFamily="var(--font-mono)">
                Arabian Sea Coastline
              </text>

              {/* 1. North Paravur */}
              <g
                onClick={() => setSelectedTaluk('Paravur')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M 160 90 L 260 70 L 290 140 L 210 170 L 150 140 Z"
                  fill={selectedTaluk === 'Paravur' ? 'rgba(6, 182, 212, 0.35)' : activeLayer === 'rainfall' ? '#0d3257' : activeLayer === 'lst' ? '#3b1c24' : '#143823'}
                  stroke={selectedTaluk === 'Paravur' ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth={selectedTaluk === 'Paravur' ? '2.5' : '1.2'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text x="210" y="125" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                  N. Paravur
                </text>
              </g>

              {/* 2. Aluva */}
              <g
                onClick={() => setSelectedTaluk('Aluva')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M 260 70 L 410 60 L 430 160 L 290 140 Z"
                  fill={selectedTaluk === 'Aluva' ? 'rgba(6, 182, 212, 0.35)' : activeLayer === 'rainfall' ? '#0e4175' : activeLayer === 'lst' ? '#4a1e28' : '#1b4a2c'}
                  stroke={selectedTaluk === 'Aluva' ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth={selectedTaluk === 'Aluva' ? '2.5' : '1.2'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text x="350" y="115" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                  Aluva (Periyar)
                </text>
              </g>

              {/* 3. Kochi Metropolitan Zone */}
              <g
                onClick={() => setSelectedTaluk('Kochi')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M 150 140 L 210 170 L 230 290 L 160 320 L 120 220 Z"
                  fill={selectedTaluk === 'Kochi' ? 'rgba(244, 63, 94, 0.4)' : activeLayer === 'rainfall' ? '#124d85' : activeLayer === 'lst' ? '#6b1d2c' : '#143823'}
                  stroke={selectedTaluk === 'Kochi' ? 'var(--accent-magenta)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth={selectedTaluk === 'Kochi' ? '2.5' : '1.2'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text x="175" y="235" fill="#f8fafc" fontSize="11" fontWeight="700" textAnchor="middle">
                  Kochi City
                </text>
              </g>

              {/* 4. Kanayannur */}
              <g
                onClick={() => setSelectedTaluk('Kanayannur')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M 210 170 L 330 160 L 360 270 L 230 290 Z"
                  fill={selectedTaluk === 'Kanayannur' ? 'rgba(6, 182, 212, 0.35)' : activeLayer === 'rainfall' ? '#0f3c6e' : activeLayer === 'lst' ? '#5a1f2c' : '#174026'}
                  stroke={selectedTaluk === 'Kanayannur' ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth={selectedTaluk === 'Kanayannur' ? '2.5' : '1.2'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text x="280" y="225" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                  Kanayannur
                </text>
              </g>

              {/* 5. Kunnathunad */}
              <g
                onClick={() => setSelectedTaluk('Kunnathunad')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M 430 160 L 560 130 L 570 260 L 360 270 L 330 160 Z"
                  fill={selectedTaluk === 'Kunnathunad' ? 'rgba(6, 182, 212, 0.35)' : activeLayer === 'rainfall' ? '#0c3059' : activeLayer === 'lst' ? '#3d1c25' : '#225e36'}
                  stroke={selectedTaluk === 'Kunnathunad' ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth={selectedTaluk === 'Kunnathunad' ? '2.5' : '1.2'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text x="450" y="210" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                  Kunnathunad
                </text>
              </g>

              {/* 6. Muvattupuzha */}
              <g
                onClick={() => setSelectedTaluk('Muvattupuzha')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M 360 270 L 570 260 L 590 400 L 410 420 L 230 290 Z"
                  fill={selectedTaluk === 'Muvattupuzha' ? 'rgba(6, 182, 212, 0.35)' : activeLayer === 'rainfall' ? '#0b2b4f' : activeLayer === 'lst' ? '#311922' : '#286e3f'}
                  stroke={selectedTaluk === 'Muvattupuzha' ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth={selectedTaluk === 'Muvattupuzha' ? '2.5' : '1.2'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text x="440" y="345" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                  Muvattupuzha
                </text>
              </g>

              {/* 7. Kothamangalam */}
              <g
                onClick={() => setSelectedTaluk('Kothamangalam')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M 560 130 L 730 110 L 750 350 L 590 400 L 570 260 Z"
                  fill={selectedTaluk === 'Kothamangalam' ? 'rgba(6, 182, 212, 0.35)' : activeLayer === 'rainfall' ? '#14518c' : activeLayer === 'lst' ? '#21151b' : '#30854d'}
                  stroke={selectedTaluk === 'Kothamangalam' ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth={selectedTaluk === 'Kothamangalam' ? '2.5' : '1.2'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text x="650" y="245" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                  Kothamangalam (Foothills)
                </text>
              </g>

              {/* Weather Stations Overlay Points */}
              {showStations && (
                <g>
                  {/* Station 1: Kochi Port */}
                  <circle cx="170" cy="220" r="4" fill="#38bdf8" stroke="#080d1a" strokeWidth="1.5" />
                  <text x="178" y="218" fill="#38bdf8" fontSize="8" fontFamily="var(--font-mono)">AWS Kochi</text>

                  {/* Station 2: Aluva UC */}
                  <circle cx="340" cy="130" r="4" fill="#38bdf8" stroke="#080d1a" strokeWidth="1.5" />
                  <text x="348" y="128" fill="#38bdf8" fontSize="8" fontFamily="var(--font-mono)">AWS Aluva</text>

                  {/* Station 3: CIAL Airport */}
                  <circle cx="410" cy="110" r="4" fill="#38bdf8" stroke="#080d1a" strokeWidth="1.5" />
                  <text x="418" y="108" fill="#38bdf8" fontSize="8" fontFamily="var(--font-mono)">IMD Airport</text>

                  {/* Station 4: Kothamangalam MA */}
                  <circle cx="640" cy="220" r="4" fill="#38bdf8" stroke="#080d1a" strokeWidth="1.5" />
                  <text x="648" y="218" fill="#38bdf8" fontSize="8" fontFamily="var(--font-mono)">AWS Kothamangalam</text>
                </g>
              )}
            </svg>
          </div>

          {/* Floating Bottom Legend */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              backgroundColor: 'rgba(12, 20, 39, 0.9)',
              backdropFilter: 'blur(8px)',
              padding: '0.6rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}
          >
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
              {layerLegends[activeLayer]?.title}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem' }}>
                {layerLegends[activeLayer]?.min}
              </span>
              <div
                style={{
                  width: '130px',
                  height: '8px',
                  borderRadius: '4px',
                  background: layerLegends[activeLayer]?.gradient
                }}
              ></div>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem' }}>
                {layerLegends[activeLayer]?.max}
              </span>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Selected Taluk Telemetry Inspector */}
        <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-panel-header">
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconLocation size={18} color="var(--accent-cyan)" />
                  Region Inspector
                </h2>
                <p className="card-subtitle">Spatial Node Telemetry</p>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {currentTaluk.name}
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.15rem' }}>
                {currentTaluk.coordinates} • {currentTaluk.area}
              </div>
            </div>

            {/* Micro Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '0.75rem', borderRadius: 'var(--border-radius-sm)' }}>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <IconRainfall size={12} color="#06b6d4" /> Rainfall
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#06b6d4', marginTop: '0.2rem' }}>
                  {currentTaluk.rainfall} mm
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '0.75rem', borderRadius: 'var(--border-radius-sm)' }}>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <IconTemperature size={12} color="#f59e0b" /> Max Temp
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f59e0b', marginTop: '0.2rem' }}>
                  {currentTaluk.maxTemp} °C
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '0.75rem', borderRadius: 'var(--border-radius-sm)' }}>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <IconLST size={12} color="#f43f5e" /> LST Thermal
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f43f5e', marginTop: '0.2rem' }}>
                  {currentTaluk.lst} °C
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '0.75rem', borderRadius: 'var(--border-radius-sm)' }}>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <IconNDVI size={12} color="#10b981" /> NDVI
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#10b981', marginTop: '0.2rem' }}>
                  {currentTaluk.ndvi}
                </div>
              </div>
            </div>

            {/* Risk Status Pill */}
            <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Vulnerability Risk Status
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: currentTaluk.riskColor, marginTop: '0.2rem' }}>
                {currentTaluk.riskLevel}
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.5 }}>
                {currentTaluk.summary}
              </p>
            </div>
          </div>

          <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
            Click any taluk polygon to focus telemetry inspector.
          </div>
        </div>
      </div>
    </div>
  );
}
