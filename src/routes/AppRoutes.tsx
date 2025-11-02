import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoute } from "./AppRoutesConfig";

import ProtectedRoutes from "./ProtectedRoutes";
import LayoutPage from "../modules/layout/LayoutPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          {PublicRoute.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {/* protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route element={<LayoutPage />}>
              {PrivateRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
