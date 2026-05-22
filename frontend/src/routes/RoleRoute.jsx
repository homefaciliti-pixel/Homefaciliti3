import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../utils/storage";

const RoleRoute = ({ role }) => {
  const user = getUser();

  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default RoleRoute;