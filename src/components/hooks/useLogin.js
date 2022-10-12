import { useContext } from "react";
import useLoginContext from "../helper/LoginContext";

const useLogin = () => {
  return useContext(useLoginContext);
};

export default useLogin;
