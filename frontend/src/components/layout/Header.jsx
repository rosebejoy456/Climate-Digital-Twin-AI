import React, { useState, useEffect } from 'react';
import { IconLocation, IconAI } from '../common/Icons';

export function Header({ activeTab }) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="dashboard-header">
      {/* Single unified pill row — all 5 items share the same gap */}
      <div className="header-pill-row">
        {/* Left cluster */}
        <div className="header-pill-cluster">
          <div className="telemetry-pill">
            <IconLocation size={15} color="var(--accent-cyan)" />
            <span>Domain: <strong className="pill-accent">Ernakulam District</strong>, Kerala</span>
          </div>

          <div className="telemetry-pill header-pill--mono">
            <span>9.9816° N, 76.2999° E</span>
          </div>
        </div>

        {/* Spacer pushes right cluster to the end */}
        <div className="header-pill-spacer" aria-hidden="true" />

        {/* Right cluster */}
        <div className="header-pill-cluster">
          <div className="telemetry-pill header-pill--engine">
            <div className="status-pulse" />
            <span>Digital Twin Engine: <strong className="pill-accent-dim">Synchronized</strong></span>
          </div>

          <div className="telemetry-pill header-pill--mono">
            <span>{timeString || '12:00:00 UTC'}</span>
          </div>

          <div className="telemetry-pill header-pill--mode">
            <IconAI size={13} color="var(--accent-cyan)" />
            <span>MOCK ADAPTER (SAFE)</span>
          </div>
        </div>
      </div>
    </header>
  );
}
