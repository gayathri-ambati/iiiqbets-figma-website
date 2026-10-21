import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = sessionStorage.getItem("admin_logged_in") === "true";
  return isLoggedIn ? <>{children}</> : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;