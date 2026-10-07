import React, { useEffect, useState } from 'react';
import {
  IconActivity,
  IconInfo,
  IconLayers,
  IconMap,
  IconPressure,
  IconRainfall,
  IconTemperature,
  IconLST,
  IconNDVI,
  IconWarning
} from '../../components/common/Icons';
import { VERIFIED_OBSERVATION_DATES, getMapClimateState } from '../../services/mapService';
import { ErnakulamGisMap } from '../../components/maps/ErnakulamGisMap';

const metrics = [
  { key: 'rainfall_imd', label: 'IMD rainfall', unit: 'mm', Icon: IconRainfall, color: '#06b6d4' },
  { key: 'max_temp', label: 'Maximum temperature', unit: '°C', Icon: IconTemperature, color: '#f59e0b' },
  { key: 'lst', label: 'Land-surface temperature', unit: '°C', Icon: IconLST, color: '#f43f5e' },
  { key: 'ndvi', label: 'MODIS NDVI', unit: '', Icon: IconNDVI, color: '#10b981' },
  { key: 'surface_pressure', label: 'ERA5 surface pressure', unit: 'hPa', Icon: IconPressure, color: '#818cf8' }
];

/** React host for the GIS map from visualization/src/climate-map.js. */
export function ClimateMapPage() {
  const [selectedDate, setSelectedDate] = useState('2025-12-18');
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    getMapClimateState(selectedDate)
      .then((data) => active && setMapData(data))
      .catch((reason) => active && setError(reason.message || 'Unable to load climate observation.'))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [selectedDate]);

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title"><IconMap size={24} color="var(--accent-cyan)" />Geospatial Climate Intelligence Map</h1>
          <p className="page-description">Actual Ernakulam GIS boundary, roads, waterways, hospitals, railway stations and airport reference layers.</p>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.5rem .75rem', border: '1px solid var(--border-medium)', borderRadius: 'var(--border-radius-sm)', color: 'var(--text-secondary)', fontSize: '.75rem' }}>
          <IconActivity size={14} color="var(--accent-cyan)" /> OBSERVATION
          <select value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} style={{ background: 'var(--bg-surface-elevated)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '.3rem .45rem' }}>
            {VERIFIED_OBSERVATION_DATES.map((date) => <option key={date.date} value={date.date}>{date.label}</option>)}
          </select>
        </label>
      </div>

      <div className="climate-map-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '1.5rem', minHeight: '660px' }}>
        <section className="card-panel" style={{ padding: 0, position: 'relative', overflow: 'hidden', minHeight: '660px', background: '#e8eef1' }}>
          <div style={{ position: 'absolute', zIndex: 2, top: '14px', left: '14px', padding: '.45rem .7rem', borderRadius: '6px', background: 'rgba(8,13,26,.92)', color: '#e2e8f0', fontSize: '.72rem', display: 'flex', alignItems: 'center', gap: '.4rem', pointerEvents: 'none' }}>
            <IconLayers size={14} color="#22d3ee" /> GIS LAYERS · scroll to zoom · drag to pan
          </div>
          <ErnakulamGisMap />
        </section>

        <aside className="card-panel" style={{ overflowY: 'auto' }}>
          <div className="card-panel-header">
            <div className="card-title-group">
              <h2 className="card-title"><IconMap size={18} color="var(--accent-cyan)" />District reference observation</h2>
              <p className="card-subtitle">{mapData?.date || selectedDate} · Ernakulam District</p>
            </div>
          </div>

          {loading && <p style={{ color: 'var(--text-muted)', fontSize: '.8rem' }}>Loading verified climate observation…</p>}
          {error && <div style={{ color: 'var(--status-alert)', fontSize: '.8rem', lineHeight: 1.5 }}><IconWarning size={16} color="var(--status-alert)" /> {error}</div>}
          {!loading && !error && <div style={{ display: 'grid', gap: '.65rem' }}>
            {metrics.map(({ key, label, unit, Icon, color }) => {
              const value = mapData?.[key];
              return <div key={key} style={{ padding: '.7rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--border-radius-sm)', background: 'var(--bg-surface-elevated)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', color: 'var(--text-muted)', fontSize: '.68rem' }}><Icon size={13} color={color} />{label}</div>
                <strong style={{ display: 'block', marginTop: '.28rem', color, fontSize: '1.12rem' }}>{value ?? 'Unavailable'}{value !== null && value !== undefined && unit ? ` ${unit}` : ''}</strong>
              </div>;
            })}
          </div>}

          <div style={{ marginTop: '1rem', paddingTop: '.85rem', borderTop: '1px solid var(--border-subtle)', color: 'var(--text-secondary)', fontSize: '.7rem', lineHeight: 1.5, display: 'flex', gap: '.4rem' }}>
            <IconInfo size={15} color="var(--accent-cyan)" /> The climate values are district-level processed observations. They are not fabricated as taluk-level readings.
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ClimateMapPage;
