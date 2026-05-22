import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-64 bg-gray-100 h-screen p-5">
      <h2 className="text-lg font-bold mb-6 capitalize">
        {user?.role} Panel
      </h2>

      <ul className="space-y-3">
        {user?.role === "user" && (
          <>
            <li><Link to="/user">Dashboard</Link></li>
            <li><Link to="/user/bookings">My Bookings</Link></li>
            <li><Link to="/user/profile">Profile</Link></li>
          </>
        )}

        {user?.role === "vendor" && (
          <>
            <li><Link to="/vendor">Dashboard</Link></li>
            <li><Link to="/vendor/requests">Booking Requests</Link></li>
            <li><Link to="/vendor/profile">Profile</Link></li>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/admin/users">Manage Users</Link></li>
            <li><Link to="/admin/vendors">Manage Vendors</Link></li>
            <li><Link to="/admin/reports">Reports</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;