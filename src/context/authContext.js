import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../utils/api";
import { enqueueSnackbar } from "notistack";

export const AuthContext = createContext();
// export const AuthContext = createContext({
//   user: {},
//   isLoadingUser: false,
// });

export const useAuthentication = () => {
  const context = useContext(AuthContext);

  //   if (!context) {
  //     throw new Error(
  //       "useAuthContext .. must be used with in a AuthContextProvider."
  //     );
  //   }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const fetchUserDetails = async () => {
    const res = await getData("user/profile");
    if (res.data) {
      setUser(res.data);
    } else if (res.error) {
      enqueueSnackbar(res.error?.message ?? "Something went wrong", {
        variant: "error",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: user, setUser: setUser, isLoadingUser: loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
