// Simula llamada API para login
export const loginApi = async (user: string, pass: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user === 'admin' && pass === '1234');
    }, 500);
  });
};
