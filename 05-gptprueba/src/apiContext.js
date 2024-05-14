// apiContext.js
import { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiUrl, setApiUrl] = useState('');

  return (
    <ApiContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
