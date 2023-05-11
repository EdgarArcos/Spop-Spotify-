import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
export const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UsersContext);
    if (!user) return <Navigate to="/login" replace />
    return children;
}
