import React from 'react';
import Input from '../Input';

interface ClientesSearchProps {
  onSearch: (term: string) => void;
}

const ClientesSearch: React.FC<ClientesSearchProps> = ({ onSearch }) => {
  return (
    <Input
      placeholder="Buscar cliente..."
      type="search"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default ClientesSearch;
