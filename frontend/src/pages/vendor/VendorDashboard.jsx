import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  getPartnerDashboard,
  getPartnerBookings,
  acceptBooking,
  completeBooking,
  cancelPartnerBooking,
  updateAvailability,
} from "../../api/partner.api";
import MainLayout from "../../layouts/MainLayout";

const STATUS_META = {
  pending:   { label: "Pending",   color: "#f59e0b", bg: "#fffbeb", icon: "⏳" },
  accepted:  { label: "Accepted",  color: "#3b82f6", bg: "#eff6ff", icon: "🔵" },
  completed: { label: "Completed", color: "#10b981", bg: "#f0fdf4", icon: "🎉" },
  cancelled: { label: "Cancelled", color: "#ef4444", bg: "#fef2f2", icon: "❌" },
};

function VendorDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({ totalBookings: 0, completedBookings: 0, earnings: 0, rating: 5 });
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);
  const [activeTab, setActiveTab] = useState("pending");
  const [isAvailable, setIsAvailable] = useState(true);
  const [toast, setToast] = useState({ msg: "", type: "success" });

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    if (user.role === "user") { navigate("/user/dashboard"); return; }
    fetchAll();
  }, [user]);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [dashData, bookData] = await Promise.allSettled([
        getPartnerDashboard(),
        getPartnerBookings(),
      ]);

      if (dashData.status === "fulfilled") {
        const d = dashData.value;
        setStats({
          totalBookings: d.stats?.totalBookings ?? d.totalBookings ?? 0,
          completedBookings: d.stats?.completedBookings ?? d.completedBookings ?? 0,
          earnings: d.stats?.earnings ?? d.earnings ?? d.vendor?.earnings ?? 0,
          rating: d.vendor?.rating ?? d.rating ?? 5,
        });
        if (d.vendor?.isAvailable !== undefined) setIsAvailable(d.vendor.isAvailable);
      }

      if (bookData.status === "fulfilled") {
        const b = bookData.value;
        setBookings(Array.isArray(b) ? b : b.bookings || []);
      }
    } catch (e) {
      console.error("Dashboard error:", e);
    } finally {
      setLoading(false);
    }
  };

  const doAction = async (id, action) => {
    setActionId(`${id}-${action}`);
    try {
      if (action === "accept") await acceptBooking(id);
      else if (action === "complete") await completeBooking(id);
      else await cancelPartnerBooking(id);
      showToast(
        action === "accept" ? "Booking accepted!" :
        action === "complete" ? "Marked as completed!" : "Booking cancelled.",
        action === "cancel" ? "error" : "success"
      );
      await fetchAll();
    } catch {
      showToast("Action failed. Please try again.", "error");
    } finally {
      setActionId(null);
    }
  };

  const handleAvailability = async () => {
    try {
      await updateAvailability(!isAvailable);
      setIsAvailable(p => !p);
      showToast(`You are now ${!isAvailable ? "available" : "unavailable"}.`);
    } catch {
      showToast("Could not update availability.", "error");
    }
  };

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: "success" }), 3000);
  };

  const filtered = activeTab === "all"
    ? bookings
    : bookings.filter(b => b.status === activeTab);

  if (!user) return null;

  return (
    <MainLayout>
      <div className="vd-root">

        {/* Toast */}
        {toast.msg && (
          <div className={`vd-toast ${toast.type}`}>{toast.msg}</div>
        )}

        {/* Header */}
        <div className="vd-header">
          <div className="vd-header-left">
            <div className="vd-avatar">
              {user.name ? user.name.charAt(0).toUpperCase() : "P"}
            </div>
            <div>
              <h1 className="vd-greeting">
                Partner Dashboard — <span>{user.name?.split(" ")[0] || "Partner"}</span>
              </h1>
              <p className="vd-info">
                📱 {user.phone || "—"}
                {user.city && <span> &nbsp;•&nbsp; 📍 {user.city}</span>}
              </p>
            </div>
          </div>
          <div className="vd-header-right">
            <button
              className={`avail-toggle ${isAvailable ? "avail-on" : "avail-off"}`}
              onClick={handleAvailability}
            >
              {isAvailable ? "🟢 Available" : "🔴 Unavailable"}
            </button>
            <button className="vd-logout-btn" onClick={logout}>Logout</button>
          </div>
        </div>

        {/* Stats */}
        <div className="vd-stats">
          {[
            { label: "Total Bookings",     value: stats.totalBookings,    icon: "📋", color: "#6366f1" },
            { label: "Completed",          value: stats.completedBookings, icon: "✅", color: "#10b981" },
            { label: "Total Earnings",     value: `₹${stats.earnings}`,   icon: "💰", color: "#f59e0b" },
            { label: "Rating",             value: `${stats.rating}⭐`,    icon: "🌟", color: "#ec4899" },
          ].map(s => (
            <div className="vd-stat" key={s.label} style={{ "--c": s.color }}>
              <div className="vs-icon">{s.icon}</div>
              <div className="vs-val">{s.value}</div>
              <div className="vs-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bookings Section */}
        <div className="vd-section">
          <div className="vd-sec-header">
            <h2>Booking Requests</h2>
            <button className="vd-refresh" onClick={fetchAll}>↻ Refresh</button>
          </div>

          {/* Tabs */}
          <div className="vd-tabs">
            {["all", "pending", "accepted", "completed", "cancelled"].map(tab => {
              const cnt = tab === "all" ? bookings.length : bookings.filter(b => b.status === tab).length;
              return (
                <button
                  key={tab}
                  className={`vd-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {cnt > 0 && <span className="vtab-badge">{cnt}</span>}
                </button>
              );
            })}
          </div>

          {loading ? (
            <div className="vd-loading">
              <div className="vd-spinner" />
              <p>Loading bookings...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="vd-empty">
              <div className="ve-icon">📭</div>
              <p>No {activeTab === "all" ? "" : activeTab} bookings</p>
            </div>
          ) : (
            <div className="vd-cards">
              {filtered.map(booking => {
                const meta = STATUS_META[booking.status] || STATUS_META.pending;
                return (
                  <div className="vd-card" key={booking._id}>
                    <div className="vc-top">
                      <div className="vc-service">
                        🔧 {booking.serviceName || booking.serviceId?.name || "Service Booking"}
                      </div>
                      <div className="vc-status" style={{ color: meta.color, background: meta.bg }}>
                        {meta.icon} {meta.label}
                      </div>
                    </div>

                    <div className="vc-details">
                      {(booking.userId?.name || booking.userName) && (
                        <div className="vc-row">
                          <span className="vc-key">👤 Customer</span>
                          <span className="vc-val">{booking.userId?.name || booking.userName}</span>
                        </div>
                      )}
                      {(booking.userId?.phone || booking.userPhone) && (
                        <div className="vc-row">
                          <span className="vc-key">📱 Phone</span>
                          <span className="vc-val vc-phone">
                            {booking.userId?.phone || booking.userPhone}
                          </span>
                        </div>
                      )}
                      {booking.totalAmount && (
                        <div className="vc-row">
                          <span className="vc-key">💰 Amount</span>
                          <span className="vc-val">₹{booking.totalAmount}</span>
                        </div>
                      )}
                      {booking.createdAt && (
                        <div className="vc-row">
                          <span className="vc-key">📅 Date</span>
                          <span className="vc-val">
                            {new Date(booking.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric", month: "short", year: "numeric"
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="vc-actions">
                      {booking.status === "pending" && (
                        <>
                          <button
                            className="vc-btn accept"
                            onClick={() => doAction(booking._id, "accept")}
                            disabled={actionId === `${booking._id}-accept`}
                          >
                            {actionId === `${booking._id}-accept` ? "..." : "✅ Accept"}
                          </button>
                          <button
                            className="vc-btn cancel"
                            onClick={() => doAction(booking._id, "cancel")}
                            disabled={actionId === `${booking._id}-cancel`}
                          >
                            {actionId === `${booking._id}-cancel` ? "..." : "❌ Decline"}
                          </button>
                        </>
                      )}
                      {booking.status === "accepted" && (
                        <button
                          className="vc-btn complete"
                          onClick={() => doAction(booking._id, "complete")}
                          disabled={actionId === `${booking._id}-complete`}
                        >
                          {actionId === `${booking._id}-complete` ? "..." : "🎉 Mark Complete"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .vd-root { max-width: 1100px; margin: 0 auto; padding: 0 0 60px; position: relative; }

        /* Toast */
        .vd-toast {
          position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
          padding: 12px 24px; border-radius: 100px; font-size: 14px; font-weight: 500;
          z-index: 9999; box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          animation: slideUp 0.3s ease;
        }
        .vd-toast.success { background: #0f172a; color: white; }
        .vd-toast.error { background: #ef4444; color: white; }
        @keyframes slideUp { from { opacity:0; transform:translate(-50%,10px); } to { opacity:1; transform:translate(-50%,0); } }

        /* Header */
        .vd-header {
          display: flex; align-items: center; justify-content: space-between;
          background: linear-gradient(135deg, #f97316 0%, #ef4444 50%, #ec4899 100%);
          border-radius: 24px; padding: 28px 32px; margin-bottom: 28px;
          color: white; gap: 16px; flex-wrap: wrap;
        }
        .vd-header-left { display: flex; align-items: center; gap: 18px; }
        .vd-avatar {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(255,255,255,0.2); border: 3px solid rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; font-weight: 800; color: white; flex-shrink: 0;
        }
        .vd-greeting { font-size: 20px; font-weight: 800; margin: 0 0 4px; }
        .vd-greeting span { color: #fde68a; }
        .vd-info { font-size: 13px; opacity: 0.85; margin: 0; }
        .vd-header-right { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .avail-toggle {
          padding: 9px 18px; border-radius: 100px; font-size: 13px; font-weight: 700;
          cursor: pointer; border: none; transition: all 0.25s;
        }
        .avail-on { background: #dcfce7; color: #166534; }
        .avail-off { background: #fee2e2; color: #b91c1c; }
        .vd-logout-btn {
          padding: 9px 18px; background: rgba(255,255,255,0.15);
          color: white; border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 100px; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: all 0.2s;
        }
        .vd-logout-btn:hover { background: rgba(255,255,255,0.25); }

        /* Stats */
        .vd-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
        .vd-stat {
          background: white; border-radius: 18px; padding: 22px 20px;
          text-align: center; border: 1.5px solid #f1f5f9;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04); transition: all 0.2s;
        }
        .vd-stat:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        .vs-icon { font-size: 28px; margin-bottom: 8px; }
        .vs-val { font-size: 28px; font-weight: 800; color: var(--c); margin-bottom: 4px; }
        .vs-label { font-size: 13px; color: #64748b; font-weight: 500; }

        /* Section */
        .vd-section { background: white; border-radius: 20px; padding: 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.05); }
        .vd-sec-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .vd-sec-header h2 { font-size: 20px; font-weight: 800; color: #0f172a; margin: 0; }
        .vd-refresh {
          padding: 7px 14px; background: #f8fafc; border: 1.5px solid #e2e8f0;
          border-radius: 100px; font-size: 13px; color: #64748b;
          cursor: pointer; font-weight: 600; transition: all 0.2s;
        }
        .vd-refresh:hover { border-color: #f97316; color: #f97316; }

        /* Tabs */
        .vd-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
        .vd-tab {
          padding: 7px 16px; border: 1.5px solid #e2e8f0; border-radius: 100px;
          background: white; font-size: 13px; font-weight: 600; color: #64748b;
          cursor: pointer; transition: all 0.2s;
        }
        .vd-tab.active { border-color: #f97316; background: #fff7ed; color: #c2410c; }
        .vtab-badge {
          display: inline-flex; align-items: center; justify-content: center;
          background: #f97316; color: white; border-radius: 50%;
          width: 18px; height: 18px; font-size: 10px; font-weight: 700; margin-left: 6px;
        }

        /* Loading / Empty */
        .vd-loading { text-align: center; padding: 60px 0; color: #64748b; }
        .vd-spinner {
          width: 40px; height: 40px; border: 4px solid #e2e8f0;
          border-top-color: #f97316; border-radius: 50%;
          animation: spin 0.8s linear infinite; margin: 0 auto 12px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .vd-empty { text-align: center; padding: 60px 0; }
        .ve-icon { font-size: 48px; margin-bottom: 12px; }
        .vd-empty p { color: #64748b; }

        /* Cards */
        .vd-cards { display: flex; flex-direction: column; gap: 14px; }
        .vd-card { border: 1.5px solid #f1f5f9; border-radius: 16px; padding: 20px 22px; transition: all 0.2s; }
        .vd-card:hover { border-color: #fed7aa; box-shadow: 0 4px 16px rgba(249,115,22,0.08); }
        .vc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 8px; }
        .vc-service { font-size: 16px; font-weight: 700; color: #0f172a; }
        .vc-status { padding: 5px 12px; border-radius: 100px; font-size: 12px; font-weight: 700; white-space: nowrap; }
        .vc-details { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
        .vc-row { display: flex; align-items: center; gap: 10px; }
        .vc-key { font-size: 12px; color: #94a3b8; font-weight: 600; min-width: 90px; }
        .vc-val { font-size: 14px; font-weight: 600; color: #374151; }
        .vc-phone { color: #2563eb; }
        .vc-actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .vc-btn {
          padding: 9px 20px; border-radius: 100px; border: none;
          font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s;
        }
        .vc-btn.accept { background: #dcfce7; color: #166534; border: 1.5px solid #86efac; }
        .vc-btn.accept:hover { background: #bbf7d0; }
        .vc-btn.complete { background: #eff6ff; color: #1d4ed8; border: 1.5px solid #93c5fd; }
        .vc-btn.complete:hover { background: #dbeafe; }
        .vc-btn.cancel { background: #fef2f2; color: #ef4444; border: 1.5px solid #fca5a5; }
        .vc-btn.cancel:hover { background: #fee2e2; }
        .vc-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 768px) {
          .vd-stats { grid-template-columns: 1fr 1fr; }
          .vd-header { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .vd-stats { grid-template-columns: 1fr 1fr; }
          .vd-section { padding: 18px; }
        }
      `}</style>
    </MainLayout>
  );
}

export default VendorDashboard;