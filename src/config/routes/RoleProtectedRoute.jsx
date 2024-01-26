import { Navigate } from "react-router-dom";
import { useAuthentication } from "../../context/authContext";
export const PINNTAG_USER = "pinntag-user";

const RoleProtectedRoute = ({ element }) => {
  const { user, isLoadingUser } = useAuthentication();

  if (isLoadingUser) {
    return <>Loading....</>;
  }

  if (user) {
    return element;
  } else {
    // return element;
    return <Navigate to={"/login"} />
  }
};

export default RoleProtectedRoute;
