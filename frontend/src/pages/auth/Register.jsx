import { useState } from "react";
import { registerUser } from "../../api/auth.api";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please try a different email or check your connection.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="register-box">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join HomeFaciliti to book verified services</p>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group-premium">
            <label>Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group-premium">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group-premium">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Minimum 6 characters"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <div className="input-group-premium">
            <label>I want to join as a</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="select-premium"
            >
              <option value="user">Customer (I want to book services)</option>
              <option value="vendor">Service Partner (I want to provide services)</option>
            </select>
          </div>

          <button type="submit" className="btn-premium btn-full" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="auth-footer-link">
          Already have an account? <Link to="/login">Sign in here</Link>
        </div>
      </div>

      <style jsx>{`
        .auth-title { font-size: 32px; margin-bottom: 8px; text-align: center; }
        .auth-subtitle { color: var(--text-muted); text-align: center; margin-bottom: 32px; }
        .error-alert {
          background: #fef2f2;
          border: 1px solid #fee2e2;
          color: #b91c1c;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
          margin-bottom: 24px;
          text-align: center;
        }
        .input-group-premium { margin-bottom: 20px; }
        .input-group-premium label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .input-group-premium input, .select-premium {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s;
          background: white;
        }
        .input-group-premium input:focus, .select-premium:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
        .btn-full { width: 100%; margin-top: 12px; }
        .auth-footer-link {
          margin-top: 32px;
          text-align: center;
          font-size: 14px;
          color: var(--text-muted);
        }
        .auth-footer-link a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 700;
        }
      `}</style>
    </AuthLayout>
  );
};

export default Register;