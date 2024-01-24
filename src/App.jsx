import React, { Suspense, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routeslist } from "./config/routes";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter(routeslist);

const App = () => {
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
      {/* <Routes>
        {routeslist.map(({ path, Element }) => {
          return (
            <Route
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Layout>{Element}</Layout>
                </Suspense>
              }
            />
          );
        })}
      </Routes> */}
    </div>
  );
};

export default App;
