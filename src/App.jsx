import React, { Suspense, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATHS, routeslist } from "./config/routes";

const router = createBrowserRouter(routeslist);

const App = () => {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = PATHS.buisnessDetails;
    }
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
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
