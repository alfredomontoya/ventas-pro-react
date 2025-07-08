export const DashboardPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bienvenido al sistema de ventas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">Total Ventas Hoy: $1,200</div>
        <div className="bg-white p-4 rounded shadow">Clientes Registrados: 45</div>
        <div className="bg-white p-4 rounded shadow">Productos en Stock: 320</div>
      </div>
    </div>
  );
};
