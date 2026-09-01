import React, { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { OverviewPage } from './pages/Overview/OverviewPage';
import { ClimateMapPage } from './pages/ClimateMap/ClimateMapPage';
import { DigitalTwinPage } from './pages/DigitalTwin/DigitalTwinPage';
import { AnalyticsPage } from './pages/Analytics/AnalyticsPage';
import { WhatIfSimulationPage } from './pages/WhatIfSimulation/WhatIfSimulationPage';
import { ReportsPage } from './pages/Reports/ReportsPage';
import './styles/global.css';
import './styles/layout.css';

export function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderActivePage = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewPage />;
      case 'climate-map':
        return <ClimateMapPage />;
      case 'digital-twin':
        return <DigitalTwinPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'what-if':
        return <WhatIfSimulationPage />;
      case 'reports':
        return <ReportsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <MainLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderActivePage()}
    </MainLayout>
  );
}

export default App;
