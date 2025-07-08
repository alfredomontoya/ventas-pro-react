import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth >= 640 ? false : true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Opcional: si cambias tamaño ventana, ajusta collapsed para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setCollapsed(false);
        setIsMobileOpen(false);
      } else {
        setCollapsed(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar setIsMobileOpen={() => setIsMobileOpen(!isMobileOpen)} />
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
