import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, roles }) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const hasRequiredRole = roles ? roles.includes(user?.role) : false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (roles && !hasRequiredRole) {
      navigate("/unauthorized");
    }
  }, [navigate, isAuthenticated, hasRequiredRole, roles]);

  return isAuthenticated && hasRequiredRole && children;
}

export default ProtectedRoute;
