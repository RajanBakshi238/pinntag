import React from "react";
import { useAuthentication } from "../../context/authContext";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ element }) => {
  const { user, isLoadingUser } = useAuthentication();

  if (isLoadingUser) {
    return <>Loading 12345</>;
  }

  if (user) {
    return <Navigate to="/dashboard/business-details" />;
  } else {
    return element;
  }
};

export default GuestRoute;
