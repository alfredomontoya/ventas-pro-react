import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      navigate('/');
    } catch (error) {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-20 space-y-4">
      <h2 className="text-xl font-bold text-center">Iniciar sesión</h2>
      <input
        className="w-full border p-2 rounded"
        type="email"
        placeholder="Correo"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
        Ingresar
      </button>
    </form>
  );
};

export default LoginPage;
