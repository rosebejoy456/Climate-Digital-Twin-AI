import React from 'react';
import {
  IconDashboard,
  IconMap,
  IconGlobe,
  IconAnalytics,
  IconSimulation,
  IconReports
} from '../common/Icons';

export const NAVIGATION_ITEMS = [
  { id: 'overview', label: 'Overview Dashboard', icon: IconDashboard, section: 'Core' },
  { id: 'climate-map', label: 'Climate Map', icon: IconMap, section: 'Spatial' },
  { id: 'digital-twin', label: 'Digital Twin 3D', icon: IconGlobe, section: 'Spatial' },
  { id: 'analytics', label: 'Analytics & Forecast', icon: IconAnalytics, section: 'Intelligence' },
  { id: 'what-if', label: 'What-If Simulation', icon: IconSimulation, section: 'Intelligence' },
  { id: 'reports', label: 'Reports & Data', icon: IconReports, section: 'System' }
];

export function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="dashboard-sidebar">
      {/* Brand Header */}
      <div className="sidebar-brand">
        <div className="brand-badge">DT</div>
        <div className="brand-info">
          <span className="brand-title">CLIMATE TWIN</span>
          <span className="brand-subtitle">ERNAKULAM AI HUB</span>
        </div>
      </div>

      {/* Nav List */}
      <div className="sidebar-section-title">COMMAND CENTER</div>
      <nav className="sidebar-nav" aria-label="Main Navigation">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          const IconComp = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item-btn ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(item.id)}
              type="button"
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="nav-icon">
                <IconComp size={17} color={isActive ? 'var(--accent-cyan)' : 'currentColor'} />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer System Status */}
      <div className="sidebar-footer">
        <div className="system-status-indicator">
          <span className="status-pulse" style={{ width: '6px', height: '6px' }}></span>
          <span>System Online</span>
        </div>
        <div className="node-meta">Ernakulam Node v1.0.0</div>
      </div>
    </aside>
  );
}
