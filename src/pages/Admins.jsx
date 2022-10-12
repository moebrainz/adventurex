import React from "react";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";

const Admins = () => {
  return (
    <Layout pageTitle="Admins">
      <Outlet />
    </Layout>
  );
};

export default Admins;
