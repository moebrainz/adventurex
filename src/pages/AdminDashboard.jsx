import React from "react";
import DashboardContent from "../components/DashboardContent";
import Layout from "./Layout";
import useLogin from "../components/hooks/useLogin";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  // React.useEffect(() => {
  //   if (auth.accessToken !== "") {
  //     setLogin(true);
  //   } else {
  //     setAuth("");
  //     setLogin(false);
  //   }
  // }, []);

  const navigate = useNavigate();
  const { auth, setLogin, setAuth } = useLogin();

  return (
    <Layout pageTitle="Dashboard">
      <DashboardContent />
    </Layout>
  );
};

export default AdminDashboard;
