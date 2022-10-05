import React from "react";
import DashboardContent from "../components/DashboardContent";
import Layout from "./Layout";

const AdminDashboard = () => {
  return (
    <Layout pageTitle="Dashboard">
      <DashboardContent />
    </Layout>
  );
};

export default AdminDashboard;
