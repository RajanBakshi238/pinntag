import React from "react";
import { Link } from "react-router-dom";
import GuestRoute from "./GuestRoute";
import BusinessDetailEdit from "../../page/businessDetailEdit";
const Layout = React.lazy(() => import("./../../common/layout"));
const BuisnessDetails = React.lazy(() => import("../../page/buisnessdetails"));
const Content = React.lazy(() => import("../../page/content"));
const Imagegallery = React.lazy(() => import("../../page/imagegallery"));
const Buisnessuser = React.lazy(() => import("../../page/buisnessuser"));
const Login = React.lazy(() => import("../../page/login"));
const RoleProtectedRoute = React.lazy(() => import("./RoleProtectedRoute"));

export const PATHS = {
  buisnessDetails: "/dashboard/buisness-details",
  content: "/dashboard/content",
  imageGallery: "/dashboard/image-gallery",
  businessUser: "/dashboard/buisness-users",
  login: "/login",
  dashboard: "/dashboard",
};

export const routeslist = [
  {
    path: "/",
    element: <GuestRoute element={<Layout />} />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <RoleProtectedRoute element={<Layout />} />,
    children: [
      {
        path: "business-details",
        element: <BuisnessDetails />,
      },
      {
        path: "edit-business-details/:id",
        element: <BusinessDetailEdit />,
      },
      {
        path: "content",
        element: <Content />,
      },
      {
        path: "image-gallery",
        element: <Imagegallery />,
      },
      {
        path: "business-user",
        element: <Buisnessuser />,
      },
    ],
  },
  // @fixme new 404 page must be there
  {
    path: "*",
    element: (
      <>
        404, Page not found
        <Link to="/login">Go Home</Link>
      </>
    ),
  },
];
