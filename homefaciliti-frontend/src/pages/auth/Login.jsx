import { useState } from "react";
import { loginUser } from "../../api/auth.api";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const data = await loginUser(form);
      login(data);
      if (data.user.role === "admin") {
        navigate("/admin");
      } else if (data.user.role === "vendor") {
        navigate("/vendor");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="login-box">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Login to your HomeFaciliti account</p>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group-premium">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
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
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-premium btn-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="auth-footer-link">
          Don't have an account? <Link to="/register">Create one for free</Link>
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
        .input-group-premium input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s;
        }
        .input-group-premium input:focus {
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

export default Login;