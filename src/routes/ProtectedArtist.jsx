import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { useAuth0 } from "@auth0/auth0-react";

export function ProtectedArtist({ children }) {
  const { user } = useContext(UsersContext);
  const { isLoading } = useAuth0();
  if (!isLoading && user?.role !== "Artist") return <Navigate to="/" replace />;
  return children;
}
