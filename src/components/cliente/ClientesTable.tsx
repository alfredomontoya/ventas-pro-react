// src/components/cliente/ClientesTable.tsx
import React from 'react';
import { Cliente } from '../../types/cliente';

interface ClientesTableProps {
  clientes: Cliente[];
  onSelect: (cliente: Cliente) => void;
}

const ClientesTable: React.FC<ClientesTableProps> = ({ clientes, onSelect }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-4 py-2 border">CI</th>
          <th className="px-4 py-2 border">Nombre</th>
          <th className="px-4 py-2 border">Estado</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr
            key={cliente.id}
            onClick={() => onSelect(cliente)}
            className="cursor-pointer hover:bg-gray-100"
          >
            <td className="px-4 py-2 border">{cliente.ci}</td>
            <td className="px-4 py-2 border">{cliente.nombres} {cliente.apellido_paterno}</td>
            <td className="px-4 py-2 border">{cliente.estado ? 'Activo' : 'Inactivo'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientesTable;