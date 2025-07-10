// src/hooks/useClientes.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cliente } from '../types/cliente';

interface PaginatedClientes {
  data: Cliente[];
  current_page: number;
  last_page: number;
  total: number;
}

export const useClientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchClientes = async (page = 1, search = '') => {
    setLoading(true);
    const res = await axios.get('http://127.0.0.1:8000/api/clientes', {
      params: {
        page,
        search,
      },
    });
    const paginated: PaginatedClientes = res.data.data;
    console.log('paginated')
    console.log(paginated)


    setClientes(paginated.data);
    setCurrentPage(paginated.current_page);
    setLastPage(paginated.last_page);
    setLoading(false);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return {
    clientes,
    loading,
    currentPage,
    lastPage,
    searchTerm,
    setSearchTerm,
    fetchClientes,
  };
};
