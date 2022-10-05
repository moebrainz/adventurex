import React from "react";
// import EditPackage from "../components/EditPackage";
// import ViewTrip from "../components/overview-packages/ViewTrip";
import Layout from "./Layout";
// import PackageContent from "../components/PackageContent";
import { Outlet } from "react-router-dom";

const OverviewPackages = () => {
  return (
    <Layout pageTitle="Packages">
      {/* <PackageContent /> */}
      <Outlet />
      {/*  */}
      {/* */}
    </Layout>
  );
};

export default OverviewPackages;
