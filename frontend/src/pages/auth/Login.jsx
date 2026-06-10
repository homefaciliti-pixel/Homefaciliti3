import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../api/auth.api";
import { loginPartner } from "../../api/partner.api";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("user"); // "user" | "partner"
  const [form, setForm] = useState({ phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let data;
      if (role === "partner") {
        data = await loginPartner(form.phone, form.password);
        // Normalize partner response
        const partnerUser = data.partner || data.user || data;
        login({ token: data.token, user: { ...partnerUser, role: "vendor" } });
        navigate("/vendor/dashboard");
      } else {
        data = await loginUser(form.phone, form.password);
        const userObj = data.user || data;
        login({ token: data.token, user: { ...userObj, role: "user" } });
        if (userObj.role === "admin") navigate("/admin/dashboard");
        else navigate("/user/dashboard");
      }
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Invalid phone or password. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="login-wrap">
        {/* Logo / Brand */}
        <div className="auth-brand">
          <span className="brand-icon">🏠</span>
          <h2>HomeFaciliti</h2>
        </div>

        <h1 className="auth-heading">Welcome Back</h1>
        <p className="auth-sub">Sign in to your account to continue</p>

        {/* Role Toggle */}
        <div className="role-toggle">
          <button
            type="button"
            className={`role-btn ${role === "user" ? "active" : ""}`}
            onClick={() => { setRole("user"); setError(""); }}
          >
            <span className="role-icon">👤</span> I'm a User
          </button>
          <button
            type="button"
            className={`role-btn ${role === "partner" ? "active" : ""}`}
            onClick={() => { setRole("partner"); setError(""); }}
          >
            <span className="role-icon">🔧</span> I'm a Partner
          </button>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="field-group">
            <label>
              <span className="field-icon">📱</span> Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Enter your 10-digit phone number"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </div>

          <div className="field-group">
            <label>
              <span className="field-icon">🔒</span> Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className={`auth-submit-btn ${role === "partner" ? "partner-btn" : "user-btn"}`}
            disabled={loading}
          >
            {loading ? (
              <span className="btn-spinner">⏳ Signing in...</span>
            ) : (
              `Sign In as ${role === "partner" ? "Partner" : "User"} →`
            )}
          </button>
        </form>

        <div className="auth-divider"><span>Don't have an account?</span></div>

        <Link
          to="/register"
          className={`auth-register-link ${role === "partner" ? "partner-register" : ""}`}
        >
          Create {role === "partner" ? "Partner" : "User"} Account →
        </Link>
      </div>

      <style jsx>{`
        .login-wrap { display: flex; flex-direction: column; align-items: center; }

        .auth-brand {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 8px;
        }
        .brand-icon { font-size: 28px; }
        .auth-brand h2 {
          font-size: 20px; font-weight: 800;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .auth-heading {
          font-size: 28px; font-weight: 800; color: #0f172a;
          margin: 4px 0; text-align: center;
        }
        .auth-sub {
          color: #64748b; font-size: 14px; margin-bottom: 28px;
          text-align: center;
        }

        /* Role Toggle */
        .role-toggle {
          display: flex; gap: 10px; width: 100%; margin-bottom: 24px;
        }
        .role-btn {
          flex: 1; padding: 12px 8px; border: 2px solid #e2e8f0;
          border-radius: 14px; background: #f8fafc; cursor: pointer;
          font-size: 14px; font-weight: 600; color: #64748b;
          transition: all 0.25s; display: flex; align-items: center;
          justify-content: center; gap: 6px;
        }
        .role-btn.active {
          border-color: #6366f1; background: linear-gradient(135deg, #ede9fe, #fce7f3);
          color: #4f46e5; box-shadow: 0 4px 12px rgba(99,102,241,0.2);
        }
        .role-btn:hover:not(.active) {
          border-color: #c7d2fe; background: #f1f5f9;
        }
        .role-icon { font-size: 18px; }

        /* Error */
        .auth-error {
          width: 100%; background: #fef2f2; border: 1px solid #fecaca;
          color: #b91c1c; padding: 12px 16px; border-radius: 12px;
          font-size: 13px; margin-bottom: 20px; text-align: center;
        }

        /* Form */
        .auth-form { width: 100%; }
        .field-group { margin-bottom: 18px; }
        .field-group label {
          display: block; font-size: 13px; font-weight: 600;
          color: #374151; margin-bottom: 8px;
        }
        .field-icon { margin-right: 4px; }
        .field-group input {
          width: 100%; padding: 13px 16px;
          border: 2px solid #e2e8f0; border-radius: 12px;
          font-size: 15px; color: #0f172a;
          transition: all 0.25s; background: #f8fafc;
          box-sizing: border-box;
        }
        .field-group input:focus {
          border-color: #6366f1; outline: none; background: white;
          box-shadow: 0 0 0 4px rgba(99,102,241,0.1);
        }

        /* Submit Button */
        .auth-submit-btn {
          width: 100%; padding: 14px; border: none; border-radius: 14px;
          font-size: 15px; font-weight: 700; cursor: pointer;
          margin-top: 8px; transition: all 0.3s; letter-spacing: 0.3px;
        }
        .user-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white; box-shadow: 0 6px 20px rgba(99,102,241,0.35);
        }
        .user-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(99,102,241,0.45); }
        .partner-btn {
          background: linear-gradient(135deg, #f97316, #ef4444);
          color: white; box-shadow: 0 6px 20px rgba(249,115,22,0.35);
        }
        .partner-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(249,115,22,0.45); }
        .auth-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

        /* Divider */
        .auth-divider {
          width: 100%; text-align: center; margin: 24px 0 16px;
          position: relative;
        }
        .auth-divider::before {
          content: ''; position: absolute; top: 50%; left: 0;
          width: 100%; height: 1px; background: #e2e8f0;
        }
        .auth-divider span {
          background: rgba(255,255,255,0.95); padding: 0 12px;
          position: relative; color: #94a3b8; font-size: 13px;
        }

        /* Register Link */
        .auth-register-link {
          display: block; text-align: center; padding: 13px;
          border: 2px solid #6366f1; border-radius: 14px;
          color: #6366f1; font-weight: 700; font-size: 14px;
          text-decoration: none; width: 100%;
          transition: all 0.25s; box-sizing: border-box;
        }
        .auth-register-link:hover { background: #ede9fe; }
        .partner-register { border-color: #f97316; color: #f97316; }
        .partner-register:hover { background: #fff7ed; }
      `}</style>
    </AuthLayout>
  );
};

export default Login;