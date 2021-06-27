import React, { useState, useEffect } from 'react';
import AppContext from './helpers/context/context';

import AppRouter from './router/AppRouter.js';
function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

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
    <AppContext.Provider value={{
      user, setUser,
      isLoading, setIsLoading,
      connectionError, setConnectionError
    }}>
      <AppRouter/>
    </AppContext.Provider>
  );
}

export default App;
