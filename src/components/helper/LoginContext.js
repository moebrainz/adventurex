import { createContext, useState } from "react";

const useLoginContext = createContext({});

export const LoginContext = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [thumbImg, setThumbImg] = useState({});
  const [listPackages, setListPackages] = useState([]);
  const [login, setLogin] = useState(false);

  return (
    <useLoginContext.Provider
      value={{
        auth,
        setAuth,
        thumbImg,
        setThumbImg,
        listPackages,
        setListPackages,
        login,
        setLogin,
      }}
    >
      {children}
    </useLoginContext.Provider>
  );
};

export default useLoginContext;
