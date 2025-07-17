// src/components/cliente/ClienteForm.tsx
import React, { useState } from 'react';
import { Cliente } from '../../types/cliente';
import { useClientes } from '../../hooks/useClientes'
import Input from '../Input';
import ButtonPrimary from '../Button';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

interface ClienteFormProps {
  onSubmit: (cliente: Partial<Cliente>) => void;
}

interface BackendErrors {
  errors: {
    [key: string]: string[];
  };
}



const ClienteForm: React.FC<ClienteFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { guardarCliente } = useClientes();
  const [ci, setCi] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellido_paterno, setApellidoPaterno] = useState('');
  const [errores, setErrores] = useState<{ [key: string]: string }>({});
  const [switch_theme, setSwitchTheme] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrores({});

    const result = await guardarCliente({ ci, nombres, apellido_paterno });
    console.log(result)

    if (result.success) {
      toast.success('Cliente guardado correctamente');
      // Limpiar el formulario
      setCi('');
      setNombres('');
      setApellidoPaterno('');
    } else {
      // Manejo errores backend
      toast.error('Error al guardar cliente');
      const axiosError = result.error as AxiosError;
      if (axiosError.response?.data) {
        const backendErrors = axiosError.response.data as BackendErrors;
        const formattedErrors: { [key: string]: string } = {};

        Object.keys(backendErrors.errors).forEach((key) => {
          formattedErrors[key] = backendErrors.errors[key][0];
        });

        setErrores(formattedErrors);
      } else {
        alert('Error al guardar cliente');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Nuevo Cliente</h2>
      
      <Input placeholder='CI' value={ci} onChange={(e) => setCi(e.target.value)} hasError={!!errores.ci} errorMessage={errores.ci}/>
      <Input placeholder='Nombres' value={nombres} onChange={(e) => setNombres(e.target.value)} hasError={!!errores.nombres} errorMessage={errores.nombres}/>
      <Input placeholder='Apellido paterno...' value={apellido_paterno} onChange={(e) => setApellidoPaterno(e.target.value)} hasError={!!errores.apellido_paterno} errorMessage={errores.apellido_paterno}/>
      
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button> */}
      <Button type='submit' variant='primary'>Guardar</Button>
      <Button variant='success' onClick={() => navigate('/clientes')}>Cancelar</Button>
    </form>
  );
};

export default ClienteForm;

