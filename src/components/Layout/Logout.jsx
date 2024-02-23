import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/features/authSlice";

function LogoutWrapper({ children }, ref) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div ref={ref} onClick={userLogout}>
      {children}
    </div>
  );
}

export default React.forwardRef(LogoutWrapper);
