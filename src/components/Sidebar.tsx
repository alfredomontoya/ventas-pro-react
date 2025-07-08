import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Home, ShoppingCart, Users, Package, BarChart, Settings,
  Warehouse, Truck, List, ClipboardList, FileText, Percent,
  History, DollarSign, TrendingUp, TrendingDown, Store,
  Bell, HelpCircle, BookOpen, Info, Shield, ChevronLeft, ChevronRight
} from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
  { name: 'Inicio', icon: Home, path: '/' },
  { name: 'Ventas', icon: ShoppingCart, path: '/ventas' },
  { name: 'Clientes', icon: Users, path: '/clientes' },
  { name: 'Productos', icon: Package, path: '/productos' },
  { name: 'Reportes', icon: BarChart, path: '/reportes' },
  { name: 'Usuarios', icon: Users, path: '/usuarios' },
  { name: 'Configuración', icon: Settings, path: '/configuracion' },
  { name: 'Almacén', icon: Warehouse, path: '/almacen' },
  { name: 'Proveedores', icon: Truck, path: '/proveedores' },
  { name: 'Categorías', icon: List, path: '/categorias' },
  { name: 'Inventario', icon: ClipboardList, path: '/inventario' },
  { name: 'Facturación', icon: FileText, path: '/facturacion' },
  { name: 'Descuentos', icon: Percent, path: '/descuentos' },
  { name: 'Historial', icon: History, path: '/historial' },
  { name: 'Caja', icon: DollarSign, path: '/caja' },
  { name: 'Ingresos', icon: TrendingUp, path: '/ingresos' },
  { name: 'Egresos', icon: TrendingDown, path: '/egresos' },
  { name: 'Sucursales', icon: Store, path: '/sucursales' },
  { name: 'Notificaciones', icon: Bell, path: '/notificaciones' },
  { name: 'Soporte', icon: HelpCircle, path: '/soporte' },
  { name: 'Documentación', icon: BookOpen, path: '/documentacion' },
  { name: 'Ayuda', icon: HelpCircle, path: '/ayuda' },
  { name: 'Términos', icon: Shield, path: '/terminos' },
  { name: 'Acerca de', icon: Info, path: '/acerca' }
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
  isMobileOpen,
  setIsMobileOpen
}) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('Inicio');

  const isMobile = window.innerWidth < 640;
  const visible = isMobile ? isMobileOpen : true;
  const sidebarWidth = isMobile ? 'w-64' : collapsed ? 'w-16' : 'w-64';

  // Agrega overlay al abrir en móvil
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileOpen]);

  return (
    <>
      {/* Overlay para móviles */}
      {/* {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )} */}

      <aside
        className={clsx(
          'bg-gray-800 text-white overflow-y-auto transition-all duration-300 z-50',
          sidebarWidth,
          visible ? 'translate-x-0' : '-translate-x-full',
          'fixed top-0 left-0 h-full sm:static sm:translate-x-0'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!collapsed && <span className="font-bold text-xl">VentasPro</span>}
          <button
            onClick={() => {
              if (isMobile) {
                setIsMobileOpen(false);
              } else {
                setCollapsed(!collapsed);
              }
            }}
            className="text-white hover:bg-gray-700 rounded p-1"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="flex flex-col p-1">
          {menuItems.map(({ name, icon: Icon, path }) => (
            <button
              key={name}
              onClick={() => {
                setActiveItem(name);
                navigate(path);
                if (isMobile) setIsMobileOpen(false);
              }}
              className={clsx(
                'flex items-center py-2 px-2 rounded transition text-left',
                activeItem === name ? 'bg-gray-700' : 'hover:bg-gray-700',
                collapsed && !isMobile ? 'justify-center' : 'gap-3'
              )}
            >
              <Icon className="w-6 h-6" />
              {(!collapsed || isMobile) && (
                <span className="text-sm truncate">{name}</span>
              )}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};
