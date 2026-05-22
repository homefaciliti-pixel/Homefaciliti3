import React, { useState } from "react";
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
import halwaiImg from "../../assets/images/Halwai services.jpg";
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
    { name: "Halwai", image: halwaiImg, count: 3 },
    { name: "Car Washing", image: carWashImg, count: 16 },
    { name: "Mechanic", image: mechanicImg, count: 22 },
    { name: "Tax Consultancy", image: taxImg, count: 5 },
    { name: "Painter", image: painterImg, count: 10 },
    { name: "Repairing", image: repairingImg, count: 13 },
    { name: "Solar", image: solarImg, count: 8 },
    { name: "Advocates", image: advocatesImg, count: 4 },
    { name: "Interior Design", image: interiorDesignImg, count: 11 },
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <section className="categories-page section">
        <div className="container">
          {/* Header & Search */}
          <div className="categories-header animate-fade-in">
            <span className="section-tag">Explore Services</span>
            <h1 className="section-title">Broad Range of Categories</h1>
            <p className="text-secondary">Choose the service you need from our verified professional network.</p>
            
            <div className="search-bar-premium glass">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search for a service category..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="category-explorer-grid">
            {filteredCategories.map((cat, index) => (
              <div
                key={index}
                className="premium-card explorer-card reveal"
                style={{ transitionDelay: `${index * 0.05}s` }}
                onClick={() => navigate(`/category/${cat.name}`)}
              >
                <div className="explorer-img-box">
                  <img src={cat.image} alt={cat.name} />
                  <div className="overlay-premium"></div>
                </div>
                <div className="explorer-content">
                  <h3>{cat.name}</h3>
                  <p>{cat.count} Experts Available</p>
                  <span className="explore-link">Explore →</span>
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="no-results">
              <p>No categories found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .categories-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .text-secondary {
          color: var(--text-muted);
          margin-bottom: 40px;
        }
        .search-bar-premium {
          display: flex;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 8px 16px;
          border-radius: 16px;
        }
        .search-icon { font-size: 20px; margin-right: 12px; }
        .search-bar-premium input {
          width: 100%;
          border: none;
          background: transparent;
          padding: 12px;
          font-size: 16px;
          color: var(--text-main);
          outline: none;
        }

        .category-explorer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 32px;
        }
        .explorer-card {
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .explorer-img-box {
          height: 180px;
          position: relative;
          overflow: hidden;
        }
        .explorer-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .explorer-card:hover .explorer-img-box img {
          transform: scale(1.1);
        }
        .overlay-premium {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .explorer-card:hover .overlay-premium { opacity: 1; }

        .explorer-content {
          padding: 24px;
          flex: 1;
        }
        .explorer-content h3 {
          font-size: 20px;
          margin-bottom: 8px;
          transition: color 0.3s;
        }
        .explorer-content p {
          color: var(--text-muted);
          font-size: 14px;
          margin-bottom: 20px;
        }
        .explorer-card:hover h3 { color: var(--primary); }
        .explore-link {
          font-weight: 700;
          color: var(--primary);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .no-results {
          text-align: center;
          padding: 100px 0;
          color: var(--text-muted);
          font-size: 18px;
        }

        @media (max-width: 640px) {
          .category-explorer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </MainLayout>
  );
}

export default Categories;