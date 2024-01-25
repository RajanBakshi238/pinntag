import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../utils/api";

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
    try{
      const res = await getData("aaaaasddd");
    if (res.data) {
      setUser(res.data);
    } else {
      console.log(res.error, ".......... eroooo orororororororororo");
    }
    setLoading(false);
    } catch(err){
      console.log(err, ".12222")
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider value={{user: user, isLoadingUser:loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;