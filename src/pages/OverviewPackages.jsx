import React from "react";
// import EditPackage from "../components/EditPackage";
// import ViewTrip from "../components/overview-packages/ViewTrip";
import Layout from "./Layout";
// import PackageContent from "../components/PackageContent";
import { Outlet } from "react-router-dom";
// import useLogin from "../components/hooks/useLogin";
// import { useNavigate } from "react-router-dom";

const OverviewPackages = () => {
  // React.useEffect(() => {
  //   if (auth.accessToken === "") {
  //     navigate("/login");
  //   }
  // }, []);

  // const navigate = useNavigate();
  // const { auth } = useLogin();
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
