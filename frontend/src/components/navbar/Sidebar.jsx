import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">
        {user?.role} Panel
      </h2>

      <ul className="sidebar-menu">
        {user?.role === "user" && (
          <>
            <li className="sidebar-item">
              <Link to="/user/dashboard" className={`sidebar-link ${isActive("/user/dashboard") ? "active" : ""}`}>
                Dashboard
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/user/bookings" className={`sidebar-link ${isActive("/user/bookings") ? "active" : ""}`}>
                My Bookings
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/user-details" className={`sidebar-link ${isActive("/user-details") ? "active" : ""}`}>
                Profile
              </Link>
            </li>
          </>
        )}

        {user?.role === "vendor" && (
          <>
            <li className="sidebar-item">
              <Link to="/vendor/dashboard" className={`sidebar-link ${isActive("/vendor/dashboard") ? "active" : ""}`}>
                Dashboard
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/vendor/requests" className={`sidebar-link ${isActive("/vendor/requests") ? "active" : ""}`}>
                Booking Requests
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/vendor-details" className={`sidebar-link ${isActive("/vendor-details") ? "active" : ""}`}>
                Profile
              </Link>
            </li>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <li className="sidebar-item">
              <Link to="/admin/dashboard" className={`sidebar-link ${isActive("/admin/dashboard") ? "active" : ""}`}>
                Dashboard
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admin/users" className={`sidebar-link ${isActive("/admin/users") ? "active" : ""}`}>
                Manage Users
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admin/vendors" className={`sidebar-link ${isActive("/admin/vendors") ? "active" : ""}`}>
                Manage Vendors
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admin/reports" className={`sidebar-link ${isActive("/admin/reports") ? "active" : ""}`}>
                Reports
              </Link>
            </li>
          </>
        )}
      </ul>

      <style jsx>{`
        .sidebar-container {
          width: 260px;
          background: #ffffff;
          min-height: 100vh;
          padding: 32px 24px;
          border-right: 1px solid rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          position: sticky;
          top: 0;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.01);
        }
        .sidebar-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 32px;
          text-transform: capitalize;
          color: var(--text-main);
          letter-spacing: -0.5px;
        }
        .sidebar-menu {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 0;
          margin: 0;
        }
        .sidebar-item {
          width: 100%;
        }
        .sidebar-link {
          display: block;
          padding: 12px 16px;
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 15px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .sidebar-link:hover {
          background: rgba(37, 99, 235, 0.05);
          color: var(--primary);
          padding-left: 20px;
        }
        .sidebar-link.active {
          background: var(--grad-main);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }
        
        @media (max-width: 768px) {
          .sidebar-container {
            width: 100%;
            min-height: auto;
            padding: 16px 20px;
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            position: relative;
            top: 0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
          }
          .sidebar-title {
            margin-bottom: 16px;
            text-align: center;
          }
          .sidebar-menu {
            flex-direction: row;
            overflow-x: auto;
            gap: 12px;
            padding-bottom: 8px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Hide standard scrollbar */
          }
          .sidebar-menu::-webkit-scrollbar {
            display: none; /* Hide Webkit scrollbar */
          }
          .sidebar-item {
            width: auto;
            flex-shrink: 0;
          }
          .sidebar-link {
            padding: 8px 16px;
            white-space: nowrap;
          }
          .sidebar-link:hover {
            padding-left: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;