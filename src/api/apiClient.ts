import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api',
  // Puedes configurar timeout, headers globales, interceptors, etc.
  timeout: 10000,
});

export default apiClient;
