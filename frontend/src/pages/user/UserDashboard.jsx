import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getMyBookings, cancelBooking } from "../../api/booking.api";
import MainLayout from "../../layouts/MainLayout";

const STATUS_META = {
  pending:   { label: "Pending",   color: "#f59e0b", bg: "#fffbeb", icon: "⏳" },
  accepted:  { label: "Accepted",  color: "#3b82f6", bg: "#eff6ff", icon: "✅" },
  completed: { label: "Completed", color: "#10b981", bg: "#f0fdf4", icon: "🎉" },
  cancelled: { label: "Cancelled", color: "#ef4444", bg: "#fef2f2", icon: "❌" },
};

function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [toast, setToast] = useState("");

  // Redirect if not logged in
  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    if (user.role === "vendor" || user.role === "partner") {
      navigate("/vendor/dashboard"); return;
    }
    fetchBookings();
  }, [user]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const data = await getMyBookings();
      setBookings(Array.isArray(data) ? data : data.bookings || []);
    } catch {
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    if (!window.confirm("Cancel this booking?")) return;
    setCancelling(id);
    try {
      await cancelBooking(id);
      setBookings(prev =>
        prev.map(b => b._id === id ? { ...b, status: "cancelled" } : b)
      );
      showToast("Booking cancelled successfully.");
    } catch {
      showToast("Failed to cancel. Please try again.");
    } finally {
      setCancelling(null);
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === "pending").length,
    accepted: bookings.filter(b => b.status === "accepted").length,
    completed: bookings.filter(b => b.status === "completed").length,
  };

  const filtered = activeTab === "all"
    ? bookings
    : bookings.filter(b => b.status === activeTab);

  if (!user) return null;

  return (
    <MainLayout>
      <div className="ud-root">

        {/* Toast */}
        {toast && <div className="ud-toast">{toast}</div>}

        {/* Header */}
        <div className="ud-header">
          <div className="ud-header-left">
            <div className="ud-avatar">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <h1 className="ud-greeting">
                Welcome back, <span>{user.name?.split(" ")[0] || "User"}!</span>
              </h1>
              <p className="ud-phone">
                📱 {user.phone || "—"}
                {user.city && <span className="ud-city"> &nbsp;•&nbsp; 📍 {user.city}</span>}
              </p>
            </div>
          </div>
          <div className="ud-header-right">
            <Link to="/categories" className="ud-book-btn">
              + Book a Service
            </Link>
            <button className="ud-logout-btn" onClick={logout}>Logout</button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="ud-stats">
          {[
            { label: "Total Bookings", value: stats.total, icon: "📋", color: "#6366f1" },
            { label: "Pending",        value: stats.pending, icon: "⏳", color: "#f59e0b" },
            { label: "Accepted",       value: stats.accepted, icon: "✅", color: "#3b82f6" },
            { label: "Completed",      value: stats.completed, icon: "🎉", color: "#10b981" },
          ].map(s => (
            <div className="stat-card" key={s.label} style={{ "--c": s.color }}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-val">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bookings Section */}
        <div className="ud-section">
          <div className="ud-section-header">
            <h2>My Bookings</h2>
            <button className="ud-refresh" onClick={fetchBookings} title="Refresh">↻ Refresh</button>
          </div>

          {/* Tabs */}
          <div className="ud-tabs">
            {["all", "pending", "accepted", "completed", "cancelled"].map(tab => (
              <button
                key={tab}
                className={`ud-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab !== "all" && bookings.filter(b => b.status === tab).length > 0 && (
                  <span className="tab-badge">{bookings.filter(b => b.status === tab).length}</span>
                )}
              </button>
            ))}
          </div>

          {/* Bookings List */}
          {loading ? (
            <div className="ud-loading">
              <div className="ud-spinner" />
              <p>Loading your bookings...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="ud-empty">
              <div className="empty-icon">📭</div>
              <p>No {activeTab === "all" ? "" : activeTab} bookings found</p>
              <Link to="/categories" className="ud-book-btn">Book Your First Service →</Link>
            </div>
          ) : (
            <div className="bookings-grid">
              {filtered.map((booking) => {
                const meta = STATUS_META[booking.status] || STATUS_META.pending;
                return (
                  <div className="booking-card" key={booking._id}>
                    <div className="bc-top">
                      <div className="bc-service-name">
                        🔧 {booking.serviceName || booking.serviceId?.name || "Service Booking"}
                      </div>
                      <div
                        className="bc-status"
                        style={{ color: meta.color, background: meta.bg }}
                      >
                        {meta.icon} {meta.label}
                      </div>
                    </div>

                    <div className="bc-details">
                      {booking.totalAmount && (
                        <div className="bc-detail">
                          <span className="bc-detail-label">Amount</span>
                          <span className="bc-detail-val">₹{booking.totalAmount}</span>
                        </div>
                      )}
                      {booking.createdAt && (
                        <div className="bc-detail">
                          <span className="bc-detail-label">Booked On</span>
                          <span className="bc-detail-val">
                            {new Date(booking.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric", month: "short", year: "numeric"
                            })}
                          </span>
                        </div>
                      )}
                      {(booking.vendorId?.name || booking.partnerName) && (
                        <div className="bc-detail">
                          <span className="bc-detail-label">Partner</span>
                          <span className="bc-detail-val">
                            {booking.vendorId?.name || booking.partnerName}
                          </span>
                        </div>
                      )}
                    </div>

                    {(booking.status === "pending" || booking.status === "accepted") && (
                      <button
                        className="bc-cancel-btn"
                        onClick={() => handleCancel(booking._id)}
                        disabled={cancelling === booking._id}
                      >
                        {cancelling === booking._id ? "Cancelling..." : "Cancel Booking"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .ud-root {
          max-width: 1100px; margin: 0 auto; padding: 0 0 60px;
          position: relative;
        }

        /* Toast */
        .ud-toast {
          position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
          background: #0f172a; color: white; padding: 12px 24px;
          border-radius: 100px; font-size: 14px; font-weight: 500;
          z-index: 9999; box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp { from { opacity:0; transform: translate(-50%,10px); } to { opacity:1; transform: translate(-50%,0); } }

        /* Header */
        .ud-header {
          display: flex; align-items: center; justify-content: space-between;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          border-radius: 24px; padding: 28px 32px; margin-bottom: 28px;
          color: white; gap: 16px; flex-wrap: wrap;
        }
        .ud-header-left { display: flex; align-items: center; gap: 18px; }
        .ud-avatar {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(255,255,255,0.2); border: 3px solid rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; font-weight: 800; color: white; flex-shrink: 0;
        }
        .ud-greeting { font-size: 22px; font-weight: 800; margin: 0 0 4px; }
        .ud-greeting span { color: #fde68a; }
        .ud-phone { font-size: 13px; opacity: 0.85; margin: 0; }
        .ud-city { opacity: 0.7; }
        .ud-header-right { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .ud-book-btn {
          padding: 10px 20px; background: white; color: #6366f1;
          border-radius: 100px; font-size: 13px; font-weight: 700;
          text-decoration: none; transition: all 0.2s; white-space: nowrap;
        }
        .ud-book-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .ud-logout-btn {
          padding: 10px 20px; background: rgba(255,255,255,0.15);
          color: white; border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 100px; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .ud-logout-btn:hover { background: rgba(255,255,255,0.25); }

        /* Stats */
        .ud-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 16px; margin-bottom: 28px;
        }
        .stat-card {
          background: white; border-radius: 18px; padding: 22px 20px;
          text-align: center; border: 1.5px solid #f1f5f9;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04); transition: all 0.2s;
        }
        .stat-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        .stat-icon { font-size: 28px; margin-bottom: 8px; }
        .stat-val { font-size: 32px; font-weight: 800; color: var(--c); margin-bottom: 4px; }
        .stat-label { font-size: 13px; color: #64748b; font-weight: 500; }

        /* Section */
        .ud-section { background: white; border-radius: 20px; padding: 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.05); }
        .ud-section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .ud-section-header h2 { font-size: 20px; font-weight: 800; color: #0f172a; margin: 0; }
        .ud-refresh {
          padding: 7px 14px; background: #f8fafc; border: 1.5px solid #e2e8f0;
          border-radius: 100px; font-size: 13px; color: #64748b;
          cursor: pointer; font-weight: 600; transition: all 0.2s;
        }
        .ud-refresh:hover { border-color: #6366f1; color: #6366f1; }

        /* Tabs */
        .ud-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
        .ud-tab {
          padding: 7px 16px; border: 1.5px solid #e2e8f0; border-radius: 100px;
          background: white; font-size: 13px; font-weight: 600; color: #64748b;
          cursor: pointer; transition: all 0.2s; position: relative;
        }
        .ud-tab.active { border-color: #6366f1; background: #ede9fe; color: #4f46e5; }
        .tab-badge {
          display: inline-flex; align-items: center; justify-content: center;
          background: #6366f1; color: white; border-radius: 50%;
          width: 18px; height: 18px; font-size: 10px; font-weight: 700;
          margin-left: 6px;
        }

        /* Loading / Empty */
        .ud-loading { text-align: center; padding: 60px 0; color: #64748b; }
        .ud-spinner {
          width: 40px; height: 40px; border: 4px solid #e2e8f0;
          border-top-color: #6366f1; border-radius: 50%;
          animation: spin 0.8s linear infinite; margin: 0 auto 12px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .ud-empty { text-align: center; padding: 60px 0; }
        .empty-icon { font-size: 48px; margin-bottom: 12px; }
        .ud-empty p { color: #64748b; margin-bottom: 20px; }

        /* Booking Cards */
        .bookings-grid { display: flex; flex-direction: column; gap: 14px; }
        .booking-card {
          border: 1.5px solid #f1f5f9; border-radius: 16px; padding: 20px 22px;
          transition: all 0.2s;
        }
        .booking-card:hover { border-color: #c7d2fe; box-shadow: 0 4px 16px rgba(99,102,241,0.08); }
        .bc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 8px; }
        .bc-service-name { font-size: 16px; font-weight: 700; color: #0f172a; }
        .bc-status {
          padding: 5px 12px; border-radius: 100px; font-size: 12px;
          font-weight: 700; white-space: nowrap;
        }
        .bc-details { display: flex; gap: 24px; flex-wrap: wrap; margin-bottom: 14px; }
        .bc-detail { display: flex; flex-direction: column; gap: 2px; }
        .bc-detail-label { font-size: 11px; color: #94a3b8; font-weight: 500; text-transform: uppercase; }
        .bc-detail-val { font-size: 14px; font-weight: 600; color: #374151; }
        .bc-cancel-btn {
          padding: 8px 18px; background: #fef2f2; color: #ef4444;
          border: 1.5px solid #fca5a5; border-radius: 100px;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: all 0.2s;
        }
        .bc-cancel-btn:hover { background: #fee2e2; }
        .bc-cancel-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 768px) {
          .ud-stats { grid-template-columns: 1fr 1fr; }
          .ud-header { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .ud-stats { grid-template-columns: 1fr 1fr; }
          .ud-section { padding: 18px; }
        }
      `}</style>
    </MainLayout>
  );
}

export default UserDashboard;