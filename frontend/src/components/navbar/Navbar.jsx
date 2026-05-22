import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <div className="nav-container">
        {/* ===== LOGO ===== */}
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="HomeFaciliti Logo" />
        </Link>

        {/* ===== NAV LINKS ===== */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className={`nav-item ${isActive("/") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/categories" className={`nav-item ${isActive("/categories") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link to="/contact" className={`nav-item ${isActive("/contact") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/About" className={`nav-item ${isActive("/About") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>About</Link>

          <div className="nav-actions">
            <a href="https://play.google.com/store/apps/details?id=com.homefacility" target="_blank" rel="noopener noreferrer" className="btn-premium btn-small" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>User Portal</a>
            <a href="https://play.google.com/store/apps/details?id=com.hf_partner" target="_blank" rel="noopener noreferrer" className="btn-outline-premium btn-small" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>Vendor Portal</a>
          </div>
        </div>

        {/* ===== MOBILE TOGGLE ===== */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 16px 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .navbar.scrolled {
          padding: 8px 0;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .scroll-progress-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: transparent;
        }
        .scroll-progress-bar {
          height: 100%;
          background: var(--grad-main);
          transition: width 0.1s ease;
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo img {
          height: 110px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        .navbar.scrolled .nav-logo img {
          height: 75px;
          border-radius: 12px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-item {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 15px;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.5px;
        }
        .nav-item:hover, .nav-item.active {
          color: var(--primary);
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--grad-main);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-item.active::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-left: 16px;
        }
        .btn-small {
          padding: 10px 20px;
          font-size: 13px;
          border-radius: 100px;
        }
        .cart-link {
          position: relative;
          text-decoration: none;
          font-size: 20px;
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        .cart-link:hover { transform: scale(1.1); }
        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--grad-vivid, #e11d48);
          color: white;
          font-size: 10px;
          font-weight: 700;
          min-width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid white;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text-main);
          position: relative;
          transition: all 0.3s ease;
        }
        .hamburger::before, .hamburger::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--text-main);
          left: 0;
          transition: all 0.3s ease;
        }
        .hamburger::before { top: -8px; }
        .hamburger::after { bottom: -8px; }
        .hamburger.open { background: transparent; }
        .hamburger.open::before { transform: rotate(45deg); top: 0; }
        .hamburger.open::after { transform: rotate(-45deg); bottom: 0; }

        @media (max-width: 1024px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background: white;
            flex-direction: column;
            justify-content: center;
            transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: -20px 0 60px rgba(0,0,0,0.05);
          }
          .nav-links.open {
            right: 0;
          }
          .menu-toggle {
            display: block;
            z-index: 1001;
          }
          .nav-actions {
            flex-direction: column;
            margin-left: 0;
            margin-top: 32px;
          }
        }
        @media (max-width: 768px) {
          .nav-logo img {
            height: 80px;
          }
          .navbar.scrolled .nav-logo img {
            height: 60px;
          }
          .nav-links {
            width: 80%;
          }
        }
        @media (max-width: 480px) {
          .nav-links {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;