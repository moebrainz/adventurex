import React from "react";
import "./App.css";
import Login from "./pages/Login";
import { Routes, Route, useRoutes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import OverviewPackages from "./pages/OverviewPackages";
import BookedPackages from "./pages/BookedPackages";
import PackageContent from "./components/overview-packages/PackageContent";
import ViewTrip from "./components/overview-packages/ViewTrip";
import EditPackage from "./components/overview-packages/EditPackage";
import BookedPackagesReview from "./components/booked-packages/BookedPackagesReview";
import BookedPackageHome from "./components/booked-packages/BookedPackageHome";
import BookedReviewEach from "./components/booked-packages/BookedReviewEach";
// import Input from "./components/Input";
const appRouter = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/overview",
    element: <OverviewPackages />,
    children: [
      {
        path: "",
        element: <PackageContent />,
      },
      {
        path: "viewtrip",
        element: <ViewTrip />,
      },
      {
        path: "/overview/editpackage",
        element: <EditPackage />,
      },
    ],
  },
  {
    path: "/booked",
    element: <BookedPackages />,
    children: [
      {
        path: "",
        element: <BookedPackageHome />,
      },
      {
        path: "bookedreview",
        children: [
          {
            path: "",
            element: <BookedPackagesReview />,
          },
          {
            path: "reviewdetails",
            element: <BookedReviewEach />,
          },
        ],
      },
    ],
  },
];

function App() {
  let appRoute = useRoutes(appRouter);

  return <React.Fragment>{appRoute}</React.Fragment>;
}

export default App;
