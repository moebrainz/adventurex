import React from "react";
import "./App.css";
import Login from "./pages/Login";
import { Routes, Route, useRoutes, useNavigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import OverviewPackages from "./pages/OverviewPackages";
import BookedPackages from "./pages/BookedPackages";
import PackageContent from "./components/overview-packages/PackageContent";
import ViewTrip from "./components/overview-packages/ViewTrip";
import EditPackage from "./components/overview-packages/EditPackage";
import BookedPackagesReview from "./components/booked-packages/BookedPackagesReview";
import BookedPackageHome from "./components/booked-packages/BookedPackageHome";
import BookedReviewEach from "./components/booked-packages/BookedReviewEach";
import ViewBookedTrip from "./components/booked-packages/ViewBookedTrip";
import Admins from "./pages/Admins";
import AdminHome from "./components/admin-components/AdminHome";
import EditAdminProfile from "./components/admin-components/EditAdminProfile";
import useLogin from "./components/hooks/useLogin";

// import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
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
        path: "viewtrip/:id",
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
        path: "bookedreview/:id",
        children: [
          {
            path: "",
            element: <BookedPackagesReview />,
          },
          {
            path: "reviewdetails",
            children: [
              {
                path: "",
                element: <BookedReviewEach />,
              },
              {
                path: "booked-details",
                element: <ViewBookedTrip />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/admins",
    element: <Admins />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "edit-profile",
        element: <EditAdminProfile />,
      },
    ],
  },
];

function App() {
  let appRoute = useRoutes(appRouter);
  // React.useEffect(() => {
  //   if (!auth.accessToken) {
  //     navigate("/login");
  //   }
  // }, []);

  const navigate = useNavigate();
  const { auth } = useLogin();

  return <React.Fragment>{appRoute}</React.Fragment>;
}

export default App;
