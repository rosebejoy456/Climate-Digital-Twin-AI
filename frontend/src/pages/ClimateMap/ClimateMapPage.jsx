import React, { useState, useEffect, useRef } from 'react';
import {
  IconMap,
  IconLayers,
  IconLocation,
  IconRainfall,
  IconTemperature,
  IconLST,
  IconNDVI,
  IconPressure,
  IconCheck,
  IconInfo,
  IconWarning,
  IconActivity
} from '../../components/common/Icons';
import {
  TALUK_PROFILES,
  WEATHER_STATIONS,
  MAP_LAYERS,
  VERIFIED_OBSERVATION_DATES,
  getMapClimateState,
  getStationInspection
} from '../../services/mapService';

export function ClimateMapPage() {
  // Layer & Selection States
  const [activeLayerId, setActiveLayerId] = useState('rainfall');
  const [selectedTalukKey, setSelectedTalukKey] = useState('Kochi');
  const [selectedStationId, setSelectedStationId] = useState(null);
  const [showStations, setShowStations] = useState(true);
  const [selectedDate, setSelectedDate] = useState('2026-07-16');

  // Async Fetch Lifecycle States
  const [mapData, setMapData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pan & Zoom Engine States (Native Zero-Dependency SVG)
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Hover & Tooltip States
  const [hoveredTalukKey, setHoveredTalukKey] = useState(null);
  const [hoveredStationId, setHoveredStationId] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, title: '', subtitle: '', metricText: '', note: '' });

  const mapContainerRef = useRef(null);

  // Fetch climate data on date change
  const loadData = async (dateStr) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMapClimateState(dateStr);
      setMapData(data);
    } catch (err) {
      setError(err.message || 'Failed to load map climate telemetry.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(selectedDate);
  }, [selectedDate]);

  // Active layer configuration
  const activeLayer = MAP_LAYERS.find((l) => l.id === activeLayerId) || MAP_LAYERS[0];

  // Current metric value from verified district data
  const getMetricValueForLayer = (layerId, data) => {
    if (!data) return null;
    switch (layerId) {
      case 'rainfall':
        return data.rainfall_imd;
      case 'lst':
        return data.lst;
      case 'ndvi':
        return data.ndvi;
      case 'pressure':
        return data.surface_pressure;
      default:
        return null;
    }
  };

  const currentDistrictMetric = getMetricValueForLayer(activeLayerId, mapData);
  const layerFillColor = activeLayer.legend.getFill(currentDistrictMetric);

  // Zoom handlers
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Wheel zoom handler
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.15 : -0.15;
    setZoom((prev) => Math.min(Math.max(prev + zoomFactor, 0.75), 3.5));
  };

  // Drag-to-pan handlers
  const handleMouseDown = (e) => {
    // Only start pan if clicking directly on the SVG or background canvas (not on interactive controls)
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }

    // Update floating tooltip position
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      setTooltip((prev) => ({
        ...prev,
        x: e.clientX - rect.left + 16,
        y: e.clientY - rect.top + 16
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Taluk hover handlers
  const handleTalukMouseEnter = (talukKey) => {
    const profile = TALUK_PROFILES[talukKey];
    setHoveredTalukKey(talukKey);
    setTooltip({
      visible: true,
      x: tooltip.x,
      y: tooltip.y,
      title: profile ? profile.name : talukKey,
      subtitle: profile ? `Centroid: ${profile.coordinates} • Area: ${profile.area}` : '',
      metricText: `${activeLayer.name}: ${currentDistrictMetric !== null ? `${currentDistrictMetric} ${activeLayer.unit}` : 'N/A'} (District Reference)`,
      note: 'Taluk-specific measurement unavailable — showing District Reference'
    });
  };

  const handleTalukMouseLeave = () => {
    setHoveredTalukKey(null);
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  // Station hover handlers
  const handleStationMouseEnter = (station) => {
    setHoveredStationId(station.id);
    setTooltip({
      visible: true,
      x: tooltip.x,
      y: tooltip.y,
      title: station.name,
      subtitle: `${station.type} • Elev: ${station.elevation}`,
      metricText: `Status: ${station.telemetryStatus}`,
      note: 'Direct sensor stream offline — readings are not fabricated'
    });
  };

  const handleStationMouseLeave = () => {
    setHoveredStationId(null);
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  // Selection handlers
  const handleTalukClick = (talukKey) => {
    setSelectedTalukKey(talukKey);
    setSelectedStationId(null);
  };

  const handleStationClick = (stationId) => {
    setSelectedStationId(stationId);
  };

  // Selected entities for Inspector
  const selectedTaluk = TALUK_PROFILES[selectedTalukKey] || TALUK_PROFILES.Kochi;
  const selectedStation = WEATHER_STATIONS.find((s) => s.id === selectedStationId);

  return (
    <div>
      {/* Page Heading & Temporal Selector HUD */}
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">
            <IconMap size={24} color="var(--accent-cyan)" />
            Geospatial Climate Intelligence Map
          </h1>
          <p className="page-description">
            Spatial distribution and verified district reference telemetry across Ernakulam District's 7 administrative taluks.
          </p>
        </div>

        {/* Observation Date Selector */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: 'var(--bg-surface)',
            padding: '0.45rem 0.8rem',
            borderRadius: 'var(--border-radius-sm)',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <IconActivity size={14} color="var(--accent-cyan)" />
            OBSERVATION:
          </span>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--border-radius-xs)',
              padding: '0.3rem 0.6rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {VERIFIED_OBSERVATION_DATES.map((d) => (
              <option key={d.date} value={d.date}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Map Viewport Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 370px', gap: '1.5rem', minHeight: '660px' }}>
        {/* Left Map Viewport Panel */}
        <div
          ref={mapContainerRef}
          className="card-panel"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            padding: '0',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#050914',
            border: '1px solid var(--border-medium)',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none'
          }}
        >
          {/* Top Layer Selector HUD */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(8, 13, 26, 0.92)',
              backdropFilter: 'blur(10px)',
              padding: '0.4rem 0.6rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', marginRight: '0.25rem' }}>
              <IconLayers size={14} color="var(--accent-cyan)" />
              <span>LAYER:</span>
            </div>

            {MAP_LAYERS.map((layer) => {
              const isActive = activeLayerId === layer.id;
              return (
                <button
                  key={layer.id}
                  className={`tab-btn ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLayerId(layer.id);
                  }}
                  style={{ fontSize: '0.6875rem', padding: '0.3rem 0.65rem' }}
                  type="button"
                >
                  {layer.name}
                </button>
              );
            })}
          </div>

          {/* Top-Right Controls: Station Toggle & Zoom Controls */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            {/* Station Checkbox Toggle */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'rgba(8, 13, 26, 0.92)',
                backdropFilter: 'blur(10px)',
                padding: '0.4rem 0.75rem',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-secondary)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <input
                type="checkbox"
                id="station-toggle"
                checked={showStations}
                onChange={(e) => setShowStations(e.target.checked)}
                style={{ accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
              />
              <label htmlFor="station-toggle" style={{ cursor: 'pointer', fontWeight: 500, fontSize: '0.7rem' }}>
                Weather Stations
              </label>
            </div>

            {/* Zero-Dependency SVG Zoom & Reset Controls */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(8, 13, 26, 0.92)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={handleZoomIn}
                title="Zoom In"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  padding: '0.4rem 0.65rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  borderRight: '1px solid var(--border-subtle)'
                }}
              >
                +
              </button>
              <button
                onClick={handleZoomOut}
                title="Zoom Out"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  padding: '0.4rem 0.65rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  borderRight: '1px solid var(--border-subtle)'
                }}
              >
                −
              </button>
              <button
                onClick={handleResetView}
                title="Reset Map View"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  padding: '0.4rem 0.65rem',
                  cursor: 'pointer',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)'
                }}
              >
                RESET
              </button>
            </div>
          </div>

          {/* Data Integrity Status Pill (HUD) */}
          <div
            style={{
              position: 'absolute',
              top: '58px',
              left: '16px',
              zIndex: 9,
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid var(--status-normal-border)',
              borderRadius: 'var(--border-radius-xs)',
              padding: '0.25rem 0.6rem',
              fontSize: '0.65rem',
              color: 'var(--status-normal)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span className="status-pulse" style={{ width: '5px', height: '5px', backgroundColor: 'var(--status-normal)' }}></span>
            <span>SPATIAL RESOLUTION: DISTRICT REFERENCE (Uniform aggregation across taluks)</span>
          </div>

          {/* Interactive SVG Canvas */}
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {loading ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                <span className="status-pulse" style={{ width: '12px', height: '12px' }}></span>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Loading verified geospatial climate observation...</span>
              </div>
            ) : error ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', color: 'var(--status-alert)', padding: '2rem', textAlign: 'center' }}>
                <IconWarning size={32} color="var(--status-alert)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{error}</span>
                <button
                  onClick={() => loadData(selectedDate)}
                  className="tab-btn active"
                  style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}
                >
                  Retry Ingestion
                </button>
              </div>
            ) : (
              <svg
                viewBox="0 0 800 520"
                style={{ width: '96%', height: '96%', filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.6))' }}
              >
                {/* Background Grid Pattern */}
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="800" height="520" fill="url(#map-grid)" />

                {/* Transformable SVG Group controlled by Pan & Zoom */}
                <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`} style={{ transformOrigin: '400px 260px', transition: isDragging ? 'none' : 'transform 0.1s ease-out' }}>
                  {/* Arabian Sea Coastline Backdrop */}
                  <path
                    d="M 60 40 Q 90 200, 110 380 Q 140 480, 180 500"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.25)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                  />
                  <text x="65" y="490" fill="rgba(6, 182, 212, 0.45)" fontSize="10" fontFamily="var(--font-mono)">
                    Arabian Sea Coastline
                  </text>

                  {/* 1. North Paravur */}
                  <g
                    onClick={() => handleTalukClick('Paravur')}
                    onMouseEnter={() => handleTalukMouseEnter('Paravur')}
                    onMouseLeave={handleTalukMouseLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 160 90 L 260 70 L 290 140 L 210 170 L 150 140 Z"
                      fill={selectedTalukKey === 'Paravur' ? 'rgba(6, 182, 212, 0.35)' : hoveredTalukKey === 'Paravur' ? 'rgba(6, 182, 212, 0.2)' : layerFillColor}
                      stroke={selectedTalukKey === 'Paravur' ? 'var(--accent-cyan)' : hoveredTalukKey === 'Paravur' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
                      strokeWidth={selectedTalukKey === 'Paravur' ? '2.5' : '1.2'}
                      style={{ transition: 'fill 0.25s, stroke 0.25s' }}
                    />
                    <text x="210" y="125" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                      N. Paravur
                    </text>
                  </g>

                  {/* 2. Aluva */}
                  <g
                    onClick={() => handleTalukClick('Aluva')}
                    onMouseEnter={() => handleTalukMouseEnter('Aluva')}
                    onMouseLeave={handleTalukMouseLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 260 70 L 410 60 L 430 160 L 290 140 Z"
                      fill={selectedTalukKey === 'Aluva' ? 'rgba(6, 182, 212, 0.35)' : hoveredTalukKey === 'Aluva' ? 'rgba(6, 182, 212, 0.2)' : layerFillColor}
                      stroke={selectedTalukKey === 'Aluva' ? 'var(--accent-cyan)' : hoveredTalukKey === 'Aluva' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
                      strokeWidth={selectedTalukKey === 'Aluva' ? '2.5' : '1.2'}
                      style={{ transition: 'fill 0.25s, stroke 0.25s' }}
                    />
                    <text x="350" y="115" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                      Aluva (Periyar)
                    </text>
                  </g>

                  {/* 3. Kochi Metropolitan Zone */}
                  <g
                    onClick={() => handleTalukClick('Kochi')}
                    onMouseEnter={() => handleTalukMouseEnter('Kochi')}
                    onMouseLeave={handleTalukMouseLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 150 140 L 210 170 L 230 290 L 160 320 L 120 220 Z"
                      fill={selectedTalukKey === 'Kochi' ? 'rgba(6, 182, 212, 0.4)' : hoveredTalukKey === 'Kochi' ? 'rgba(6, 182, 212, 0.2)' : layerFillColor}
                      stroke={selectedTalukKey === 'Kochi' ? 'var(--accent-cyan)' : hoveredTalukKey === 'Kochi' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
                      strokeWidth={selectedTalukKey === 'Kochi' ? '2.5' : '1.2'}
                      style={{ transition: 'fill 0.25s, stroke 0.25s' }}
                    />
                    <text x="175" y="235" fill="#f8fafc" fontSize="11" fontWeight="700" textAnchor="middle">
                      Kochi City
                    </text>
                  </g>

                  {/* 4. Kanayannur */}
                  <g
                    onClick={() => handleTalukClick('Kanayannur')}
                    onMouseEnter={() => handleTalukMouseEnter('Kanayannur')}
                    onMouseLeave={handleTalukMouseLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 210 170 L 330 160 L 360 270 L 230 290 Z"
                      fill={selectedTalukKey === 'Kanayannur' ? 'rgba(6, 182, 212, 0.35)' : hoveredTalukKey === 'Kanayannur' ? 'rgba(6, 182, 212, 0.2)' : layerFillColor}
                      stroke={selectedTalukKey === 'Kanayannur' ? 'var(--accent-cyan)' : hoveredTalukKey === 'Kanayannur' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
                      strokeWidth={selectedTalukKey === 'Kanayannur' ? '2.5' : '1.2'}
                      style={{ transition: 'fill 0.25s, stroke 0.25s' }}
                    />
                    <text x="280" y="225" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                      Kanayannur
                    </text>
                  </g>

                  {/* 5. Kunnathunad */}
                  <g
                    onClick={() => handleTalukClick('Kunnathunad')}
                    onMouseEnter={() => handleTalukMouseEnter('Kunnathunad')}
                    onMouseLeave={handleTalukMouseLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 430 160 L 560 130 L 570 260 L 360 270 L 330 160 Z"
                      fill={selectedTalukKey === 'Kunnathunad' ? 'rgba(6, 182, 212, 0.35)' : hoveredTalukKey === 'Kunnathunad' ? 'rgba(6, 182, 212, 0.2)' : layerFillColor}
                      stroke={selectedTalukKey === 'Kunnathunad' ? 'var(--accent-cyan)' : hoveredTalukKey === 'Kunnathunad' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
                      strokeWidth={selectedTalukKey === 'Kunnathunad' ? '2.5' : '1.2'}
                      style={{ transition: 'fill 0.25s, stroke 0.25s' }}
                    />
                    <text x="450" y="210" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                      Kunnathunad
                    </text>
                  </g>

                  {/* 6. Muvattupuzha */}
                  <g
                    onClick={() => handleTalukClick('Muvattupuzha')}
                    onMouseEnter={() => handleTalukMouseEnter('Muvattupuzha')}
                    onMouseLeave={handleTalukMouseLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 360 270 L 570 260 L 590 400 L 410 420 L 230 290 Z"
                      fill={selectedTalukKey === 'Muvattupuzha' ? 'rgba(6, 182, 212, 0.35)' : hoveredTalukKey === 'Muvattupuzha' ? 'rgba(6, 182, 212, 0.2)' : layerFillColor}
                      stroke={selectedTalukKey === 'Muvattupuzha' ? 'var(--accent-cyan)' : hoveredTalukKey === 'Muvattupuzha' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
                      strokeWidth={selectedTalukKey === 'Muvattupuzha' ? '2.5' : '1.2'}
                      style={{ transition: 'fill 0.25s, stroke 0.25s' }}
                    />
                    <text x="440" y="345" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                      Muvattupuzha
                    </text>
                  </g>

                  {/* 7. Kothamangalam */}
                  <g
                    onClick={() => handleTalukClick('Kothamangalam')}
                    onMouseEnter={() => handleTalukMouseEnter('Kothamangalam')}
                    onMouseLeave={handleTalukMouseLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 560 130 L 730 110 L 750 350 L 590 400 L 570 260 Z"
                      fill={selectedTalukKey === 'Kothamangalam' ? 'rgba(6, 182, 212, 0.35)' : hoveredTalukKey === 'Kothamangalam' ? 'rgba(6, 182, 212, 0.2)' : layerFillColor}
                      stroke={selectedTalukKey === 'Kothamangalam' ? 'var(--accent-cyan)' : hoveredTalukKey === 'Kothamangalam' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
                      strokeWidth={selectedTalukKey === 'Kothamangalam' ? '2.5' : '1.2'}
                      style={{ transition: 'fill 0.25s, stroke 0.25s' }}
                    />
                    <text x="650" y="245" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
                      Kothamangalam (Foothills)
                    </text>
                  </g>

                  {/* Weather Stations Overlay Points (Clickable & Interactive) */}
                  {showStations && (
                    <g>
                      {WEATHER_STATIONS.map((station) => {
                        const isStationSelected = selectedStationId === station.id;
                        const isStationHovered = hoveredStationId === station.id;
                        return (
                          <g
                            key={station.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStationClick(station.id);
                            }}
                            onMouseEnter={() => handleStationMouseEnter(station)}
                            onMouseLeave={handleStationMouseLeave}
                            style={{ cursor: 'pointer' }}
                          >
                            <circle
                              cx={station.svgPos.x}
                              cy={station.svgPos.y}
                              r={isStationSelected ? '7' : isStationHovered ? '6' : '4.5'}
                              fill={isStationSelected ? '#f43f5e' : '#38bdf8'}
                              stroke="#080d1a"
                              strokeWidth="1.5"
                              style={{ transition: 'r 0.15s, fill 0.15s' }}
                            />
                            {isStationSelected && (
                              <circle
                                cx={station.svgPos.x}
                                cy={station.svgPos.y}
                                r="12"
                                fill="none"
                                stroke="#f43f5e"
                                strokeWidth="1.2"
                                strokeDasharray="2 2"
                              />
                            )}
                            <text
                              x={station.svgPos.x + 8}
                              y={station.svgPos.y - 2}
                              fill={isStationSelected ? '#f43f5e' : '#38bdf8'}
                              fontSize="8.5"
                              fontWeight={isStationSelected ? '700' : '500'}
                              fontFamily="var(--font-mono)"
                            >
                              {station.name.split(' ')[0]} {station.name.split(' ')[1]}
                            </text>
                          </g>
                        );
                      })}
                    </g>
                  )}
                </g>
              </svg>
            )}

            {/* Hover Floating Tooltip */}
            {tooltip.visible && (
              <div
                style={{
                  position: 'absolute',
                  top: `${tooltip.y}px`,
                  left: `${tooltip.x}px`,
                  zIndex: 20,
                  pointerEvents: 'none',
                  backgroundColor: 'rgba(8, 13, 26, 0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 'var(--border-radius-sm)',
                  padding: '0.6rem 0.85rem',
                  boxShadow: 'var(--shadow-lg)',
                  maxWidth: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {tooltip.title}
                </div>
                {tooltip.subtitle && (
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {tooltip.subtitle}
                  </div>
                )}
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>
                  {tooltip.metricText}
                </div>
                {tooltip.note && (
                  <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', fontStyle: 'italic', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.3rem', marginTop: '0.2rem' }}>
                    {tooltip.note}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Floating Bottom Legend HUD */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              backgroundColor: 'rgba(8, 13, 26, 0.92)',
              backdropFilter: 'blur(10px)',
              padding: '0.6rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              boxShadow: 'var(--shadow-md)',
              maxWidth: '380px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>
                {activeLayer.name} ({activeLayer.unit})
              </span>
              <span style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Ref: {currentDistrictMetric !== null ? `${currentDistrictMetric} ${activeLayer.unit}` : 'N/A'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem' }}>
                {activeLayer.legend.min}
              </span>
              <div
                style={{
                  width: '140px',
                  height: '8px',
                  borderRadius: '4px',
                  background: activeLayer.legend.gradient
                }}
              ></div>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem' }}>
                {activeLayer.legend.max}
              </span>
            </div>

            <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', lineHeight: 1.3, marginTop: '0.1rem' }}>
              Source: {activeLayer.source}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Dual Telemetry Inspector */}
        <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem', overflowY: 'auto' }}>
          <div>
            {/* Header */}
            <div className="card-panel-header" style={{ marginBottom: '1rem' }}>
              <div className="card-title-group">
                <h2 className="card-title">
                  <IconLocation size={18} color="var(--accent-cyan)" />
                  Geospatial Telemetry Inspector
                </h2>
                <p className="card-subtitle">
                  {selectedStation ? 'Meteorological Station Node' : 'Administrative Taluk Profile'}
                </p>
              </div>
            </div>

            {/* If a Station is Selected */}
            {selectedStation ? (
              <div>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-accent)', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Weather Station Node
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {selectedStation.name}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {selectedStation.agency} • {selectedStation.type}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.35rem' }}>
                    {selectedStation.coordinates} • Elevation {selectedStation.elevation}
                  </div>
                </div>

                {/* Explicit Telemetry Unavailable Status Banner */}
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(245, 158, 11, 0.08)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--status-warning-border)', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--status-warning)', fontSize: '0.75rem', fontWeight: 700 }}>
                    <IconWarning size={14} color="var(--status-warning)" />
                    LIVE TELEMETRY UNAVAILABLE
                  </div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.45 }}>
                    {selectedStation.telemetryMessage} Real-time hourly ground sensor telemetry is offline in this build. Readings are not fabricated.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedStationId(null)}
                  className="tab-btn active"
                  style={{ width: '100%', fontSize: '0.75rem', padding: '0.45rem' }}
                >
                  Return to Taluk View
                </button>
              </div>
            ) : (
              /* If a Taluk is Selected */
              <div>
                {/* 1. TALUK ADMINISTRATIVE PROFILE */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    TALUK ADMINISTRATIVE PROFILE
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                    {selectedTaluk.name}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Headquarters: <strong style={{ color: 'var(--text-primary)' }}>{selectedTaluk.headquarters}</strong> • Area: {selectedTaluk.area}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.15rem' }}>
                    Centroid: {selectedTaluk.coordinates}
                  </div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.45 }}>
                    {selectedTaluk.description}
                  </div>
                </div>

                {/* 2. DISTRICT REFERENCE CLIMATE OBSERVATION */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      DISTRICT REFERENCE OBSERVATION
                    </div>
                    <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {mapData?.date || selectedDate}
                    </span>
                  </div>

                  {/* Verified Metrics Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                    {/* Metric 1: Rainfall */}
                    <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '0.65rem', borderRadius: 'var(--border-radius-sm)', border: activeLayerId === 'rainfall' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <IconRainfall size={12} color="#06b6d4" /> IMD Rainfall
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#06b6d4', marginTop: '0.2rem' }}>
                        {mapData?.rainfall_imd !== null && mapData?.rainfall_imd !== undefined ? `${mapData.rainfall_imd} mm` : 'Unavailable'}
                      </div>
                      <div style={{ fontSize: '0.58rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                        District Ref (0.25° Gridded)
                      </div>
                    </div>

                    {/* Metric 2: Max / Min Temp */}
                    <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '0.65rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <IconTemperature size={12} color="#f59e0b" /> Max / Min Temp
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f59e0b', marginTop: '0.2rem' }}>
                        {mapData?.max_temp !== null && mapData?.max_temp !== undefined ? `${mapData.max_temp}° / ${mapData.min_temp}°` : 'Unavailable'}
                      </div>
                      <div style={{ fontSize: '0.58rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                        IMD Station Baseline
                      </div>
                    </div>

                    {/* Metric 3: LST Thermal */}
                    <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '0.65rem', borderRadius: 'var(--border-radius-sm)', border: activeLayerId === 'lst' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <IconLST size={12} color="#f43f5e" /> MODIS LST
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f43f5e', marginTop: '0.2rem' }}>
                        {mapData?.lst !== null && mapData?.lst !== undefined ? `${mapData.lst} °C` : 'Cloud-Obscured'}
                      </div>
                      <div style={{ fontSize: '0.58rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                        NASA Thermal Infrared (1km)
                      </div>
                    </div>

                    {/* Metric 4: NDVI Canopy */}
                    <div style={{ backgroundColor: 'var(--bg-surface-elevated)', padding: '0.65rem', borderRadius: 'var(--border-radius-sm)', border: activeLayerId === 'ndvi' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <IconNDVI size={12} color="#10b981" /> MODIS NDVI
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#10b981', marginTop: '0.2rem' }}>
                        {mapData?.ndvi !== null && mapData?.ndvi !== undefined ? mapData.ndvi : 'Cloud-Obscured'}
                      </div>
                      <div style={{ fontSize: '0.58rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                        NASA MOD13Q1 Vegetation
                      </div>
                    </div>

                    {/* Metric 5: Surface Pressure */}
                    <div style={{ gridColumn: 'span 2', backgroundColor: 'var(--bg-surface-elevated)', padding: '0.65rem', borderRadius: 'var(--border-radius-sm)', border: activeLayerId === 'pressure' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <IconPressure size={12} color="#6366f1" /> ERA5 Surface Pressure
                        </div>
                        <div style={{ fontSize: '0.58rem', color: 'var(--text-dim)' }}>
                          ECMWF Atmospheric Reanalysis
                        </div>
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#6366f1', marginTop: '0.2rem' }}>
                        {mapData?.surface_pressure !== null && mapData?.surface_pressure !== undefined ? `${mapData.surface_pressure} hPa` : 'Not Monitored in Snapshot'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. TALUK SENSOR TELEMETRY STATUS (DATA INTEGRITY PILL) */}
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--status-warning)' }}>
                    <IconInfo size={14} color="var(--status-warning)" />
                    Taluk-specific measurement unavailable
                  </div>
                  <p style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', marginTop: '0.3rem', lineHeight: 1.45 }}>
                    Sub-district sensor disaggregation is not present in the digital twin repository. The metrics shown above represent verified district-wide observations for Ernakulam.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Help Tip */}
          <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Click any taluk polygon or station marker.</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>{zoom.toFixed(1)}x Zoom</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClimateMapPage;
