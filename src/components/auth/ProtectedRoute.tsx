import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="text-amber-500 font-medium">Verifying member access...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
