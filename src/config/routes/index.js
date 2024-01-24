import React from "react";
const Layout = React.lazy(() => import("./../../common/layout"));
const BuisnessDetails = React.lazy(() => import("../../page/buisnessdetails"));
const Content = React.lazy(() => import("../../page/content"));
const Imagegallery = React.lazy(() => import("../../page/imagegallery"));
const Buisnessuser = React.lazy(() => import("../../page/buisnessuser"));
const Login = React.lazy(() => import("../../page/login"));
const RoleProtectedRoute = React.lazy(() => import("./RoleProtectedRoute") );

export const PATHS = {
  buisnessDetails: "/dashboard/buisness-details",
  content: "/dashboard/content",
  imageGallery: "/dashboard/image-gallery",
  businessUser: "/dashboard/buisness-users",
  login: "/login",
  dashboard: "/dashboard"
};

export const routeslist = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />
      }
    ]
    
  },
  {
    path: "/dashboard",
    element: <RoleProtectedRoute element={<Layout />}/>,
    children: [
      {
        path: "business-details",
        element: <BuisnessDetails />,
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
      }
    ],
  },
];
