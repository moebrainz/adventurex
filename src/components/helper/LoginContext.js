import { createContext, useState } from "react";

const useLoginContext = createContext({});

export const LoginContext = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <useLoginContext.Provider value={{ auth, setAuth }}>
      {children}
    </useLoginContext.Provider>
  );
};

export default useLoginContext;
