import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function MainLayout({ activeTab, onTabChange, children }) {
  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} onTabChange={onTabChange} />
      <div className="main-content-wrapper">
        <Header activeTab={activeTab} />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}
