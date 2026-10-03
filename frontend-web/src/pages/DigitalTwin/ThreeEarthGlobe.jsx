/**
 * The original Ernakulam terrain engine is loaded unchanged so the dashboard
 * keeps its real terrain, building footprints, infrastructure layers, and
 * What-If interactions instead of substituting a simplified Earth sphere.
 */
export function ThreeEarthGlobe() {
  return (
    <iframe
      title="Ernakulam 3D terrain digital twin"
      src="/ernakulam-terrain/index.html"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 0,
        display: 'block',
        background: '#030712'
      }}
      allow="fullscreen"
    />
  );
}
