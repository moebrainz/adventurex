import React from "react";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";
import useLogin from "../components/hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Admins = () => {
  React.useEffect(() => {
    if (auth?.accessToken === "" && MsgError === 401) {
      navigate("/login");
    }
  }, []);

  const navigate = useNavigate();
  const { auth } = useLogin();
  const MsgError = JSON.parse(localStorage.getItem("err"));

  // console.log(auth?.success, "success");

  return (
    <Layout pageTitle="Admins">
      <Outlet />
    </Layout>
  );
};

export default Admins;
