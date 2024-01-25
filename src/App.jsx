import React, { Suspense, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routeslist } from "./config/routes";
import { SnackbarProvider } from "notistack";
import { useNavigate } from "react-router-dom";
import { setNavigate } from "./config/axiosInstance";

const router = createBrowserRouter(routeslist);

const App = () => {
  const navigate = useNavigate();
  setNavigate(navigate);

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <SnackbarProvider
        maxSnack={3}
        preventDuplicate={true}
        variant={"info"}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </SnackbarProvider>
    </div>
  );
};

export default App;
