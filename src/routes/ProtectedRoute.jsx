import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { useAuth0 } from "@auth0/auth0-react";
export const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth0();
  if (!isLoading && !user) return <Navigate to="/login" replace />;
  return children;
};
