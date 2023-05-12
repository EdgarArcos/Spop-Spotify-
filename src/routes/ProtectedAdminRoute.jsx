import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { useAuth0 } from "@auth0/auth0-react";
export function ProtectedAdminRoute({ children }) {
    const { isLoading } = useAuth0();
    const { user } = useContext(UsersContext);
    if (!isLoading && user?.role === "Admin") return <Navigate to="/admin" replace />
    return children
};