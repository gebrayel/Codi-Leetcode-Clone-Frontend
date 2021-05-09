import React, { useState, useEffect } from 'react';
import AppRouter from './router/AppRouter.js'

function App() {
  const [user, setUser] = useState();

  /**
   * Restaurar usuario si ya se ha iniciado sesión
   */
  const restoreUser = () => {
    const tempUser = localStorage.getItem('user');
    if (tempUser) setUser(JSON.parse(tempUser));
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
      <AppRouter/>
  );
}

export default App;
