// src/components/cliente/ClienteDetails.tsx
import React from 'react';
import { Cliente } from '../../types/cliente';

interface ClienteDetailsProps {
  cliente: Cliente;
}

const ClienteDetails: React.FC<ClienteDetailsProps> = ({ cliente }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Detalle del Cliente</h2>
      <p><strong>CI:</strong> {cliente.ci}</p>
      <p><strong>Nombre:</strong> {cliente.nombres} {cliente.apellido_paterno} {cliente.apellido_materno}</p>
      <p><strong>Estado:</strong> {cliente.estado ? 'Activo' : 'Inactivo'}</p>
      <div className="mt-2">
        <h3 className="font-semibold">Teléfonos:</h3>
        <ul>{cliente.telefonos.map(t => <li key={t.numero}>{t.numero} {t.es_principal && '(Principal)'}</li>)}</ul>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold">Correos:</h3>
        <ul>{cliente.correos.map(c => <li key={c.email}>{c.email} {c.es_principal && '(Principal)'}</li>)}</ul>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold">Direcciones:</h3>
        <ul>{cliente.direcciones.map(d => <li key={d.direccion}>{d.direccion} {d.es_principal && '(Principal)'}</li>)}</ul>
      </div>
    </div>
  );
};

export default ClienteDetails;