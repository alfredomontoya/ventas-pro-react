import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

interface TopbarProps {
  setIsMobileOpen: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ setIsMobileOpen }) => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white shadow px-4 sm:px-6 flex items-center justify-between w-full z-40">
      <div className="flex items-center gap-3">
         <button onClick={setIsMobileOpen} className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
        
        <span className="text-lg font-semibold text-gray-800">VentasPro</span>
      </div>

      {isAuthenticated ? (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
          >
            <span className="text-gray-800 text-sm">{user?.name}</span>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded z-50">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
        >
          Iniciar sesión
        </button>
      )}
    </header>
  );
};

export default Topbar;
