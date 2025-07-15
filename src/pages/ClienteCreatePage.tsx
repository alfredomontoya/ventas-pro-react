// src/pages/ClienteCreatePage.tsx
import React from 'react';
import ClienteForm from '../components/cliente/ClienteForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClienteCreatePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    try {
      await axios.post('/api/clientes', data);
      navigate('/clientes');
    } catch (error) {
      console.error('Error al crear cliente', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Registrar Cliente</h1>
      <ClienteForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ClienteCreatePage;
