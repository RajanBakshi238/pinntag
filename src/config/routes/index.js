import React from "react";
// import Layout from "./common/layout";
// import Layout from "./../../common/layout";

const Layout = React.lazy(() => import("./../../common/layout"));
const BuisnessDetails = React.lazy(() => import("../../page/buisnessdetails"));
const Content = React.lazy(() => import("../../page/content"));
const Imagegallery = React.lazy(() => import("../../page/imagegallery"));
const Buisnessuser = React.lazy(() => import("../../page/buisnessuser"));

export const PATHS = {
  buisnessDetails: "/buisness-details",
  content: "/content",
  imageGallery: "/image-gallery",
  buisnessUser: "/buisness-users",
};

export const routeslist = [
  {
    path: "/",
    // element: <>{<Outlet />}</>,
    element: <Layout />,
    children: [
      {
        path: PATHS.buisnessDetails,
        element: <BuisnessDetails />,
      },
      {
        path: PATHS.content,
        element: <Content />,
      },
      {
        path: PATHS.imageGallery,
        element: <Imagegallery />,
      },
      {
        path: PATHS.buisnessUser,
        element: <Buisnessuser />,
      }
    ],
  },
];
