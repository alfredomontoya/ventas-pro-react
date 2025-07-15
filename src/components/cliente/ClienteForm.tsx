// src/components/cliente/ClienteForm.tsx
import React, { useState } from 'react';
import { Cliente } from '../../types/cliente';
import { useClientes } from '../../hooks/useClientes'
import Input from '../Input';

interface ClienteFormProps {
  onSubmit: (cliente: Partial<Cliente>) => void;
}

const ClienteForm: React.FC<ClienteFormProps> = ({ onSubmit }) => {
  const { guardarCliente } = useClientes();
  const [ci, setCi] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellido_paterno, setApellidoPaterno] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await guardarCliente({ ci, nombres, apellido_paterno });

    if (result.success) {
      alert('Cliente guardado');
      // Limpiar el formulario
      setCi('');
      setNombres('');
      setApellidoPaterno('');
    } else {
      console.log(result)
      alert('Error al guardar cliente');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Nuevo Cliente</h2>
      
      <Input placeholder='CI' value={ci} onChange={(e) => setCi(e.target.value)} />
      <Input placeholder='Nombres' value={nombres} onChange={(e) => setNombres(e.target.value)} />
      <Input placeholder='Apellido paterno...' value={apellido_paterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
      <input
        className="block mb-2 p-2 border rounded w-full"
        placeholder="CI"
        value={ci}
        onChange={(e) => setCi(e.target.value)}
      />
      <input
        className="block mb-2 p-2 border rounded w-full"
        placeholder="Nombres"
        value={nombres}
        onChange={(e) => setNombres(e.target.value)}
      />
      <input
        className="block mb-2 p-2 border rounded w-full"
        placeholder="Apellido Paterno"
        value={apellido_paterno}
        onChange={(e) => setApellidoPaterno(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
    </form>
  );
};

export default ClienteForm;

