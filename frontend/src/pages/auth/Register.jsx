import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../api/auth.api";
import { registerPartner } from "../../api/partner.api";
import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [step, setStep] = useState(1); // step 1 = role select, step 2 = form
  const [form, setForm] = useState({
    name: "", phone: "", password: "", city: "", confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const payload = {
        name: form.name,
        phone: form.phone,
        password: form.password,
        city: form.city,
        role,
      };
      if (role === "partner") {
        await registerPartner(payload);
      } else {
        await registerUser(payload);
      }
      setSuccess("Account created! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1800);
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="register-wrap">
        <div className="auth-brand">
          <span className="brand-icon">🏠</span>
          <h2>HomeFaciliti</h2>
        </div>

        <h1 className="auth-heading">Create Account</h1>
        <p className="auth-sub">Join thousands of users & partners</p>

        {/* Role Selector Cards */}
        <div className="role-cards">
          <div
            className={`role-card ${role === "user" ? "active user-card" : ""}`}
            onClick={() => setRole("user")}
          >
            <div className="card-icon">👤</div>
            <div className="card-title">User</div>
            <div className="card-desc">Book services at home</div>
          </div>
          <div
            className={`role-card ${role === "partner" ? "active partner-card" : ""}`}
            onClick={() => setRole("partner")}
          >
            <div className="card-icon">🔧</div>
            <div className="card-title">Partner</div>
            <div className="card-desc">Provide services & earn</div>
          </div>
        </div>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="fields-row">
            <div className="field-group">
              <label>Full Name</label>
              <input
                name="name" type="text" placeholder="e.g. Ravi Sharma"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="field-group">
              <label>City</label>
              <input
                name="city" type="text" placeholder="e.g. Jaipur"
                value={form.city} onChange={handleChange} required
              />
            </div>
          </div>

          <div className="field-group">
            <label>📱 Phone Number</label>
            <input
              name="phone" type="tel" placeholder="10-digit mobile number"
              value={form.phone} onChange={handleChange} required
            />
          </div>

          <div className="fields-row">
            <div className="field-group">
              <label>🔒 Password</label>
              <input
                name="password" type="password" placeholder="Min 6 characters"
                value={form.password} onChange={handleChange}
                required minLength={6}
              />
            </div>
            <div className="field-group">
              <label>🔒 Confirm Password</label>
              <input
                name="confirmPassword" type="password" placeholder="Re-enter password"
                value={form.confirmPassword} onChange={handleChange}
                required minLength={6}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`auth-submit-btn ${role === "partner" ? "partner-btn" : "user-btn"}`}
            disabled={loading}
          >
            {loading ? "Creating Account..." : `Create ${role === "partner" ? "Partner" : "User"} Account →`}
          </button>
        </form>

        <div className="auth-divider"><span>Already have an account?</span></div>
        <Link to="/login" className="auth-login-link">Sign In →</Link>
      </div>

      <style jsx>{`
        .register-wrap { display: flex; flex-direction: column; align-items: center; }

        .auth-brand { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
        .brand-icon { font-size: 26px; }
        .auth-brand h2 {
          font-size: 18px; font-weight: 800;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .auth-heading { font-size: 26px; font-weight: 800; color: #0f172a; margin: 4px 0; text-align: center; }
        .auth-sub { color: #64748b; font-size: 13px; margin-bottom: 22px; text-align: center; }

        /* Role Cards */
        .role-cards { display: flex; gap: 12px; width: 100%; margin-bottom: 22px; }
        .role-card {
          flex: 1; padding: 16px 12px; border: 2px solid #e2e8f0;
          border-radius: 16px; cursor: pointer; text-align: center;
          transition: all 0.25s; background: #f8fafc;
        }
        .role-card:hover { border-color: #c7d2fe; }
        .role-card.active.user-card {
          border-color: #6366f1; background: linear-gradient(135deg, #ede9fe, #e0e7ff);
          box-shadow: 0 4px 14px rgba(99,102,241,0.2);
        }
        .role-card.active.partner-card {
          border-color: #f97316; background: linear-gradient(135deg, #fff7ed, #ffedd5);
          box-shadow: 0 4px 14px rgba(249,115,22,0.2);
        }
        .card-icon { font-size: 28px; margin-bottom: 6px; }
        .card-title { font-size: 14px; font-weight: 700; color: #0f172a; }
        .card-desc { font-size: 11px; color: #64748b; margin-top: 2px; }

        /* Error / Success */
        .auth-error {
          width: 100%; background: #fef2f2; border: 1px solid #fecaca;
          color: #b91c1c; padding: 11px 14px; border-radius: 10px;
          font-size: 13px; margin-bottom: 16px; text-align: center;
        }
        .auth-success {
          width: 100%; background: #f0fdf4; border: 1px solid #bbf7d0;
          color: #166534; padding: 11px 14px; border-radius: 10px;
          font-size: 13px; margin-bottom: 16px; text-align: center;
        }

        /* Form */
        .auth-form { width: 100%; }
        .fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .field-group { margin-bottom: 14px; }
        .field-group label {
          display: block; font-size: 12px; font-weight: 600;
          color: #374151; margin-bottom: 6px;
        }
        .field-group input {
          width: 100%; padding: 11px 14px; border: 2px solid #e2e8f0;
          border-radius: 10px; font-size: 14px; color: #0f172a;
          background: #f8fafc; transition: all 0.25s; box-sizing: border-box;
        }
        .field-group input:focus {
          border-color: #6366f1; outline: none; background: white;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }

        .auth-submit-btn {
          width: 100%; padding: 13px; border: none; border-radius: 12px;
          font-size: 15px; font-weight: 700; cursor: pointer;
          margin-top: 6px; transition: all 0.3s;
        }
        .user-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white; box-shadow: 0 6px 18px rgba(99,102,241,0.35);
        }
        .user-btn:hover { transform: translateY(-1px); }
        .partner-btn {
          background: linear-gradient(135deg, #f97316, #ef4444);
          color: white; box-shadow: 0 6px 18px rgba(249,115,22,0.35);
        }
        .partner-btn:hover { transform: translateY(-1px); }
        .auth-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

        .auth-divider {
          width: 100%; text-align: center; margin: 20px 0 14px;
          position: relative;
        }
        .auth-divider::before {
          content: ''; position: absolute; top: 50%; left: 0;
          width: 100%; height: 1px; background: #e2e8f0;
        }
        .auth-divider span {
          background: rgba(255,255,255,0.95); padding: 0 12px;
          position: relative; color: #94a3b8; font-size: 12px;
        }
        .auth-login-link {
          display: block; text-align: center; padding: 12px;
          border: 2px solid #6366f1; border-radius: 12px;
          color: #6366f1; font-weight: 700; font-size: 14px;
          text-decoration: none; width: 100%; box-sizing: border-box;
          transition: all 0.25s;
        }
        .auth-login-link:hover { background: #ede9fe; }

        @media (max-width: 480px) {
          .fields-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </AuthLayout>
  );
};

export default Register;