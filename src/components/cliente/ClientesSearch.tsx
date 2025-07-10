// src/components/cliente/ClientesSearch.tsx
import React from 'react';

interface ClientesSearchProps {
  onSearch: (term: string) => void;
}

const ClientesSearch: React.FC<ClientesSearchProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="border p-2 rounded w-full mb-4"
      placeholder="Buscar cliente..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default ClientesSearch;


