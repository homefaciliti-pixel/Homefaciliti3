import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReveal from "../../hooks/useReveal";
import MainLayout from "../../layouts/MainLayout";

// Import images
import plumbingImg from "../../assets/images/plumbing.jpg";
import electricianImg from "../../assets/images/electrician.png";
import cleaningImg from "../../assets/images/deep-cleaning.png";
import acImg from "../../assets/images/ac.png";
import salonImg from "../../assets/images/Salon.jpg";
import spaImg from "../../assets/images/spa-service.png";
import architectureImg from "../../assets/images/architecture.jpg";
import carpenterImg from "../../assets/images/carpenter.jpg";
import panditImg from "../../assets/images/Pandit ji.jpg";
import driverImg from "../../assets/images/Driver services.png";
import photographerImg from "../../assets/images/Photographer.jpg";
import doctorImg from "../../assets/images/Doctor.jpg";
import compounderImg from "../../assets/images/Compounder.jpg";
import caterImg from "../../assets/images/Halwai services.jpg";
import carWashImg from "../../assets/images/Car Washing.jpg";
import mechanicImg from "../../assets/images/mechanic.jpg";
import taxImg from "../../assets/images/tax.jpg";
import painterImg from "../../assets/images/Painter.jpg";
import repairingImg from "../../assets/images/Repairing.jpg";
import pestControlImg from "../../assets/images/pest-control.jpg";
import solarImg from "../../assets/images/solar.png";
import advocatesImg from "../../assets/images/advocates.png";
import interiorDesignImg from "../../assets/images/interior-design.png";

function Categories() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  useReveal();

  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    
    const maxTilt = 10;
    const tiltX = (percentY * maxTilt).toFixed(2);
    const tiltY = (-percentX * maxTilt).toFixed(2);
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    const img = card.querySelector(".explorer-img-box img");
    if (img) {
      const moveX = (percentX * -12).toFixed(2);
      const moveY = (percentY * -12).toFixed(2);
      img.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.15)`;
    }
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCardTiltLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    const img = card.querySelector(".explorer-img-box img");
    if (img) {
      img.style.transform = `translate3d(0, 0, 0) scale(1)`;
    }
  };

  const categories = [
    { name: "Plumbing", image: plumbingImg, count: 12 },
    { name: "Electrician", image: electricianImg, count: 15 },
    { name: "Cleaning", image: cleaningImg, count: 20 },
    { name: "Pest Control", image: pestControlImg, count: 7 },
    { name: "AC Repair", image: acImg, count: 8 },
    { name: "Salon", image: salonImg, count: 10 },
    { name: "SPA", image: spaImg, count: 6 },
    { name: "Architecture", image: architectureImg, count: 4 },
    { name: "Carpenter", image: carpenterImg, count: 9 },
    { name: "Pandit Ji", image: panditImg, count: 5 },
    { name: "Driver", image: driverImg, count: 14 },
    { name: "Photographer", image: photographerImg, count: 7 },
    { name: "Doctor", image: doctorImg, count: 18 },
    { name: "Compounder", image: compounderImg, count: 11 },
    { name: "Cater's", image: caterImg, count: 3 },
    { name: "Car Washing", image: carWashImg, count: 16 },
    { name: "Mechanic", image: mechanicImg, count: 22 },
    { name: "Tax Consultancy", image: taxImg, count: 5 },
    { name: "Painter", image: painterImg, count: 10 },
    { name: "Repairing", image: repairingImg, count: 13 },
    { name: "Solar", image: solarImg, count: 8 },
    { name: "Advocates", image: advocatesImg, count: 4 },
    { name: "Interior Design", image: interiorDesignImg, count: 1 },
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryIcons = {
    "Plumbing": "🔧", "Electrician": "⚡", "Cleaning": "🧹", "Pest Control": "🪲",
    "AC Repair": "❄️", "Salon": "💇", "SPA": "🧖", "Architecture": "🏛️",
    "Carpenter": "🪚", "Pandit Ji": "🙏", "Driver": "🚗", "Photographer": "📸",
    "Doctor": "🩺", "Compounder": "💊", "Cater's": "🍽️", "Car Washing": "🚙",
    "Mechanic": "🔩", "Tax Consultancy": "📊", "Painter": "🖌️", "Repairing": "🛠️",
    "Solar": "☀️", "Advocates": "⚖️", "Interior Design": "🛋️"
  };

  return (
    <MainLayout>
      {/* ===== HERO HEADER ===== */}
      <section className="cat-hero">
        <div className="cat-hero-orb cat-orb-1"></div>
        <div className="cat-hero-orb cat-orb-2"></div>
        <div className="cat-hero-mesh"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cat-hero-inner animate-fade-in">
            <div className="cat-hero-badge">✨ 23 Professional Service Categories</div>
            <h1 className="cat-hero-title">Find the Perfect<br /><span className="cat-hero-accent">Service Expert</span></h1>
            <p className="cat-hero-subtitle">Browse our curated network of verified professionals ready to help you anytime, anywhere.</p>

            {/* Search */}
            <div className="cat-search-wrap">
              <div className="cat-search-box">
                <svg className="cat-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search for plumbing, cleaning, salon..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button className="cat-search-clear" onClick={() => setSearchTerm("")}>✕</button>
                )}
              </div>
              <div className="cat-search-hint">
                Popular: <span onClick={() => setSearchTerm("Cleaning")}>Cleaning</span> · <span onClick={() => setSearchTerm("Plumbing")}>Plumbing</span> · <span onClick={() => setSearchTerm("Salon")}>Salon</span>
              </div>
            </div>

            {/* Stats strip */}
            <div className="cat-stats-strip">
              <div className="cat-stat-pill">🏆 1.2L+ Bookings</div>
              <div className="cat-stat-pill">✅ Verified Pros</div>
              <div className="cat-stat-pill">⚡ 60-sec Booking</div>
              <div className="cat-stat-pill">⭐ 4.8 Rated</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="cat-grid-section">
        <div className="container">
          {searchTerm && (
            <div className="cat-results-label">
              {filteredCategories.length} result{filteredCategories.length !== 1 ? 's' : ''} for "<strong>{searchTerm}</strong>"
            </div>
          )}

          <div className="cat-grid">
            {filteredCategories.map((cat, index) => (
              <div
                key={index}
                className="cat-card staggered-entry"
                style={{ animationDelay: `${index * 0.04}s` }}
                onClick={() => navigate(`/category/${cat.name}`)}
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardTiltLeave}
              >
                {/* Image */}
                <div className="cat-card-img-wrap">
                  <img src={cat.image} alt={cat.name} />
                  <div className="cat-card-overlay"></div>
                  <div className="cat-card-icon-badge">{categoryIcons[cat.name] || "🔧"}</div>
                  <div className="cat-card-count-badge">{cat.count} Services</div>
                </div>

                {/* Content */}
                <div className="cat-card-body">
                  <div className="cat-card-name">{cat.name}</div>
                  <div className="cat-card-footer">
                    <span className="cat-card-explore">Explore →</span>
                    <span className="cat-card-arrow">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="cat-card-glow"></div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="cat-no-results">
              <div className="cat-no-results-icon">🔍</div>
              <h3>No categories found</h3>
              <p>Try searching for something else like "cleaning" or "plumbing"</p>
              <button onClick={() => setSearchTerm("")} className="cat-no-results-btn">Clear Search</button>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        /* ===== HERO ===== */
        .cat-hero {
          background: linear-gradient(135deg, #0f0c29 0%, #1a1363 40%, #24243e 100%);
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cat-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: catOrbFloat 10s ease-in-out infinite;
        }
        .cat-orb-1 { width: 400px; height: 400px; background: rgba(124,58,237,0.35); top: -100px; left: -80px; }
        .cat-orb-2 { width: 300px; height: 300px; background: rgba(37,99,235,0.4); bottom: -80px; right: -60px; animation-delay: 3s; }
        @keyframes catOrbFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-40px) scale(1.08); }
        }
        .cat-hero-mesh {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .cat-hero-inner { display: flex; flex-direction: column; align-items: center; gap: 0; }
        .cat-hero-badge {
          display: inline-block;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.9);
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          letter-spacing: 0.02em;
        }
        .cat-hero-title {
          font-size: 58px;
          font-weight: 900;
          color: white;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .cat-hero-accent {
          background: linear-gradient(90deg, #818cf8, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cat-hero-subtitle {
          color: rgba(255,255,255,0.65);
          font-size: 18px;
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        /* Search */
        .cat-search-wrap { width: 100%; max-width: 580px; }
        .cat-search-box {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          padding: 6px 8px 6px 20px;
          gap: 12px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .cat-search-box:focus-within {
          border-color: rgba(129,140,248,0.8);
          box-shadow: 0 0 0 4px rgba(129,140,248,0.15);
        }
        .cat-search-icon { width: 20px; height: 20px; color: rgba(255,255,255,0.5); flex-shrink: 0; }
        .cat-search-box input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-size: 16px;
          padding: 10px 0;
        }
        .cat-search-box input::placeholder { color: rgba(255,255,255,0.4); }
        .cat-search-clear {
          background: rgba(255,255,255,0.12);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 13px;
          padding: 6px 12px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .cat-search-clear:hover { background: rgba(255,255,255,0.22); }
        .cat-search-hint {
          color: rgba(255,255,255,0.4);
          font-size: 13px;
          margin-top: 12px;
          text-align: left;
        }
        .cat-search-hint span {
          color: rgba(129,140,248,0.9);
          cursor: pointer;
          font-weight: 600;
          transition: color 0.2s;
        }
        .cat-search-hint span:hover { color: white; }

        /* Stats strip */
        .cat-stats-strip {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 32px;
        }
        .cat-stat-pill {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.8);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          transition: background 0.3s;
        }
        .cat-stat-pill:hover { background: rgba(255,255,255,0.14); }

        /* ===== GRID SECTION ===== */
        .cat-grid-section {
          background: #f0f4ff;
          padding: 64px 0 80px;
        }
        .cat-results-label {
          color: #64748b;
          font-size: 15px;
          margin-bottom: 24px;
        }
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 24px;
        }

        /* ===== CARD ===== */
        .cat-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.05);
          transition: box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1);
          will-change: transform;
        }
        .cat-card:hover {
          box-shadow: 0 20px 60px rgba(37,99,235,0.18);
        }
        .cat-card-img-wrap {
          position: relative;
          height: 175px;
          overflow: hidden;
        }
        .cat-card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .cat-card:hover .cat-card-img-wrap img {
          transform: scale(1.1);
        }
        .cat-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.1) 50%, transparent 100%);
          transition: opacity 0.3s;
        }
        .cat-card-icon-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          transition: transform 0.3s;
        }
        .cat-card:hover .cat-card-icon-badge { transform: scale(1.15) rotate(-5deg); }
        .cat-card-count-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(37,99,235,0.85);
          backdrop-filter: blur(8px);
          color: white;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 0.03em;
        }

        .cat-card-body {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cat-card-name {
          font-size: 17px;
          font-weight: 800;
          color: #1e293b;
          transition: color 0.3s;
        }
        .cat-card:hover .cat-card-name { color: #2563eb; }
        .cat-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cat-card-explore {
          font-size: 13px;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: letter-spacing 0.3s;
        }
        .cat-card:hover .cat-card-explore { letter-spacing: 0.1em; }
        .cat-card-arrow {
          width: 32px; height: 32px;
          background: #eff6ff;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #2563eb;
          transition: background 0.3s, transform 0.3s;
        }
        .cat-card:hover .cat-card-arrow {
          background: #2563eb;
          color: white;
          transform: translateX(4px);
        }
        .cat-card-glow {
          position: absolute; inset: 0; border-radius: 20px;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.08), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .cat-card:hover .cat-card-glow { opacity: 1; }

        /* No results */
        .cat-no-results {
          text-align: center;
          padding: 100px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .cat-no-results-icon { font-size: 64px; }
        .cat-no-results h3 { font-size: 24px; font-weight: 700; color: #1e293b; }
        .cat-no-results p { color: #64748b; font-size: 16px; }
        .cat-no-results-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          margin-top: 8px;
        }
        .cat-no-results-btn:hover { background: #1d4ed8; transform: translateY(-2px); }

        @media (max-width: 768px) {
          .cat-hero-title { font-size: 38px; }
          .cat-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .cat-hero { padding: 70px 0 60px; }
        }
        @media (max-width: 480px) {
          .cat-grid { grid-template-columns: 1fr; }
          .cat-hero-title { font-size: 30px; }
          .cat-stats-strip { gap: 8px; }
        }
      `}</style>
    </MainLayout>
  );
}

export default Categories;