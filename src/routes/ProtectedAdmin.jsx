import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

export function ProtectedAdmin({ children }) {
    const { user } = useContext(UsersContext);
    if (user?.role === "Admin") return children
    return <Navigate to="/" replace />
};

