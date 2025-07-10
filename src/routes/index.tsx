// src/routes/index.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import VentasPage from '../pages/Ventas';
import ClientesPage from '../pages/ClientesPage';
import ProductosPage from '../pages/Productos';
import LoginPage from '../pages/Login/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<div>Bienvenido al Dashboard</div>} />
        <Route path="ventas" element={<VentasPage />} />
        <Route path="clientes" element={<ClientesPage />} />
        <Route path="productos" element={<ProductosPage />} />
        {/* Agrega más rutas hijas aquí según necesites */}
      </Route>
      {/* Puedes agregar otras rutas fuera del layout si quieres */}
    </Routes>
  );
};

export default AppRoutes;
