// src/pages/ClientesPage.tsx
import React, { useState, useEffect } from 'react';
import { useClientes } from '../hooks/useClientes';
import ClientesTable from '../components/cliente/ClientesTable';
import ClienteDetails from '../components/cliente/ClienteDetails';
import ClientesSearch from '../components/cliente/ClientesSearch';
import ClientesPagination from '../components/cliente/ClientesPagination';
import { Cliente } from '../types/cliente';
import { useNavigate } from 'react-router-dom';

const ClientesPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    clientes,
    currentPage,
    lastPage,
    loading,
    fetchClientes,
    setSearchTerm,
    searchTerm
  } = useClientes();

  const [selected, setSelected] = useState<Cliente | null>(null);

  // Ejecutar búsqueda cada vez que cambia el término
  useEffect(() => {
    fetchClientes(1, searchTerm);
    // console.log(selected)
  }, [searchTerm]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => navigate('/clientes/nuevo')}
>
  Nuevo
</button>
      </div>

      <ClientesSearch onSearch={setSearchTerm} />

      {loading ? (
          <p>Cargando...</p>
        ) : (
          <>
            

            {selected ? (
              <>
                <button
                  onClick={() => setSelected(null)}
                  className="mb-2 px-4 py-1 bg-gray-300 rounded"
                >
                  Volver al listado
                </button>
                <ClienteDetails cliente={selected} />
              </>
            ) : (
              <>
                <ClientesTable clientes={clientes} onSelect={setSelected} />
                <ClientesPagination
                  currentPage={currentPage}
                  totalPages={lastPage}
                  onPageChange={(page) => fetchClientes(page, searchTerm)}
                />
              </>
            )}

          </>
      )}
    </div>
  );
};

export default ClientesPage;
