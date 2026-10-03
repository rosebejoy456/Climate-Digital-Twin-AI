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
      <div className="header-left">
        <div className="telemetry-pill">
          <IconLocation size={15} color="var(--accent-cyan)" />
          <span>Domain: <strong className="pill-accent">Ernakulam District</strong>, Kerala</span>
        </div>

        <div className="telemetry-pill" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
          <span>9.9816° N, 76.2999° E</span>
        </div>
      </div>

      <div className="header-right">
        <div className="live-indicator">
          <div className="status-pulse"></div>
          <span>Digital Twin Engine: <strong>Synchronized</strong></span>
        </div>

        <div className="telemetry-pill" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
          <span>{timeString || '12:00:00 UTC'}</span>
        </div>

        <div className="mode-badge">
          <IconAI size={13} color="var(--accent-cyan)" />
          <span>MOCK ADAPTER (SAFE)</span>
        </div>
      </div>
    </header>
  );
}
