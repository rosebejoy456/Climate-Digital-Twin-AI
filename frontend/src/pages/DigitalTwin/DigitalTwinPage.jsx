import React from 'react';
import { ThreeEarthGlobe } from './ThreeEarthGlobe';

/**
 * The Digital Twin tab deliberately hosts the original visualization as a full
 * workspace. Its terrain engine has its own controls, interaction model,
 * climate display and What-If panel, so no React overlays are placed above it.
 */
export function DigitalTwinPage() {
  return (
    <section
      aria-label="Ernakulam Climate Digital Twin"
      style={{
        position: 'relative',
        height: 'calc(100vh - var(--header-height) - 4rem)',
        minHeight: '620px',
        overflow: 'hidden',
        borderRadius: 'var(--border-radius-md)',
        border: '1px solid var(--border-subtle)',
        background: '#030712',
        boxShadow: '0 18px 48px rgba(0, 0, 0, 0.3)'
      }}
    >
      <ThreeEarthGlobe />
    </section>
  );
}
