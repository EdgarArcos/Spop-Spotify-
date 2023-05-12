import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

export function ProtectedArtist({ children }) {
    const { user } = useContext(UsersContext);
    if (user?.role === "Artist") return children
    return <Navigate to="/" replace />
};