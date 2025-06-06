import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>loading</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
