import { useEffect, useRef, useState } from 'react';
import Plotly from 'plotly.js-dist-min';
import { createRealErnakulamMap } from './ErnakulamPlotlyMap';

/** The GIS/Plotly climate map originally created in visualization/src. */
export function ErnakulamGisMap() {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const container = containerRef.current;

    createRealErnakulamMap(container).catch((reason) => {
      console.error('Unable to load Ernakulam GIS map:', reason);
      if (active) setError('Unable to load the Ernakulam GIS layers.');
    });

    return () => {
      active = false;
      if (container) Plotly.purge(container);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#e8eef1' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      {error && (
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', padding: '2rem', color: '#b91c1c', background: 'rgba(255,255,255,0.9)', textAlign: 'center' }}>
          {error}
        </div>
      )}
    </div>
  );
}
