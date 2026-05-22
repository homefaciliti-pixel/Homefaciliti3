import Navbar from "../components/navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="layout-root">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= PAGE CONTENT ================= */}
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="main-footer">
        <div className="container footer-grid">
          {/* Brand & Logo */}
          <div className="footer-brand">
            <h2>HomeFaciliti</h2>
            <p>Your one-stop destination for all home services. Professionally verified experts at your doorstep.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Super Home Technology Pvt Ltd. All Rights Reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .layout-root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
          margin-top: 142px; /* Offset for fixed navbar */
          padding: 40px 0;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .main-footer {
          background-color: #0f172a;
          color: white;
          padding: 80px 0 40px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 48px;
        }
        .footer-brand h2 {
          color: white;
          margin-bottom: 24px;
          font-size: 28px;
        }
        .footer-brand p {
          color: #94a3b8;
          max-width: 300px;
        }
        .footer-links h3, .footer-social h3 {
          color: white;
          margin-bottom: 24px;
          font-size: 18px;
        }
        .footer-links ul {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: var(--primary);
        }
        .footer-social .social-icons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-social a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-social a:hover {
          color: var(--primary);
        }
        .footer-bottom {
          margin-top: 60px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          color: #64748b;
          font-size: 14px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand {
            grid-column: span 2;
          }
        }
      `}</style>
    </div>
  );
}

export default MainLayout;