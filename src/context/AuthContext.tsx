import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  // agrega más campos según tu API
}

interface AuthContextType {
  usuario: Usuario | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('usuario');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      try {
        setUsuario(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (error) {
        console.error("Error al parsear el usuario desde localStorage", error);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      });

      const { usuario, token } = res.data;
      setUsuario(usuario);
      setToken(token);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error; // para que el componente que llama pueda manejarlo
    }
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
