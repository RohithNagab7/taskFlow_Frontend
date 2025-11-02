import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = document.cookie.includes("token=");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
