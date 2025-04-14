// components/RoleBasedRoute.jsx
import { Navigate } from "react-router-dom";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Nếu chưa đăng nhập
  if (!user) return <Navigate to="/tdtk/login" />;

  // Nếu role không được phép
  if (!allowedRoles.includes(user.role)) return <Navigate to="/tdtk/unauthorized" />;

  // Được phép
  return children;
};

export default RoleBasedRoute;
