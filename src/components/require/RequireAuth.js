import { Outlet, Navigate, useLocation } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const RequireAuth = () => {
  const { auth } = useLogin();
  const location = useLocation();

  return auth?.getEmail ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
