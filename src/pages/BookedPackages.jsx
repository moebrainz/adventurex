import React from "react";
// import BookedReviewEach from "../components/booked-packages/BookedReviewEach";
// import BookedPackageHome from "../components/booked-packages/BookedPackageHome";
// import BookedPackagesReview from "../components/BookedPackagesReview";
// import EditPackage from "../components/EditPackage";
// import ViewTrip from "../components/ViewTrip";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";
// import PackageContent from "../components/PackageContent";

const BookedPackages = () => {
  return (
    <Layout pageTitle="Packages">
      <Outlet />
    </Layout>
  );
};

export default BookedPackages;
