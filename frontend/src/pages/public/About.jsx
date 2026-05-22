import MainLayout from "../../layouts/MainLayout";
import useReveal from "../../hooks/useReveal";

// Import Assets
import cleaningImg from "../../assets/images/cleaning.jpg";
import architectureImg from "../../assets/images/architecture.jpg";
import bannerImg from "../../assets/images/banner.png";

function About() {
  useReveal();

  return (
    <MainLayout>
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)), url(${bannerImg})` }}>
        <div className="container animate-fade-in">
          <span className="section-tag" style={{ color: "white", opacity: 0.9 }}>Our Story</span>
          <h1 className="hero-title white text-shadow-premium">Redefining Home Services</h1>
          <p className="hero-subtitle white text-shadow-soft">At HomeFaciliti, we're on a mission to bring world-class professional services to every doorstep, combining technology with human expertise.</p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="section about-who">
        <div className="container grid-2">
          <div className="about-image-stack reveal-left">
            <div className="image-main">
              <img src={cleaningImg} alt="Home Cleaning" />
            </div>
            <div className="image-sub glass">
              <img src={architectureImg} alt="Home Architecture" />
            </div>
          </div>
          <div className="about-text reveal">
            <span className="section-tag">Who we are</span>
            <h2 className="section-title">Built on Trust and Quality</h2>
            <p className="text-secondary">HomeFaciliti is a modern home service platform providing reliable, fast, and affordable services including plumbing, electrical, cleaning, and maintenance.</p>
            <p className="text-secondary">Our goal is to connect customers with verified professionals anytime, anywhere. We believe that home maintenance should be a seamless experience, not a chore.</p>
            
            <div className="features-mini">
              <div className="feature-item">
                <span className="icon">✓</span>
                <span>Verified Professionals</span>
              </div>
              <div className="feature-item">
                <span className="icon">✓</span>
                <span>Transparent Pricing</span>
              </div>
              <div className="feature-item">
                <span className="icon">✓</span>
                <span>24/7 Quality Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section about-vision bg-alt">
        <div className="container">
          <div className="grid-2">
            <div className="premium-card vision-card reveal">
              <div className="icon-badge">🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver trusted home services within minutes through technology-driven solutions and skilled professionals, empowering both customers and service partners.</p>
            </div>
            <div className="premium-card vision-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="icon-badge">✨</div>
              <h3>Our Vision</h3>
              <p>To become India’s most trusted 24/7 home services ecosystem, creating a new standard for home comfort and professional reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section about-stats reveal">
        <div className="container">
          <div className="stats-grid glass">
            <div className="stat-item">
              <h2>10K+</h2>
              <p>Customers Served</p>
            </div>
            <div className="stat-item">
              <h2>500+</h2>
              <p>Verified Vendors</p>
            </div>
            <div className="stat-item">
              <h2>24/7</h2>
              <p>Service Availability</p>
            </div>
            <div className="stat-item">
              <h2>4.8/5</h2>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JOIN US ===== */}
      <section className="section about-cta reveal">
        <div className="container text-center">
          <h2 className="section-title">Be Part of Our Journey</h2>
          <p className="hero-subtitle" style={{ margin: "24px auto" }}>Whether you're looking for expert help or want to grow your business as a partner, HomeFaciliti is here for you.</p>
          <div className="hero-btns" style={{ justifyContent: "center" }}>
            <a href="https://play.google.com/store/apps/details?id=com.homefacility" target="_blank" rel="noopener noreferrer" className="btn-premium" style={{ textDecoration: 'none' }}>Book a Service</a>
            <a href="https://play.google.com/store/apps/details?id=com.hf_partner" target="_blank" rel="noopener noreferrer" className="btn-outline-premium" style={{ textDecoration: 'none' }}>Become a Partner</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .white { color: white !important; }
        .text-center { text-align: center; }
        .bg-alt { background: #f1f5f9; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        
        .about-hero {
          height: 60vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          text-align: center;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-image-stack {
          position: relative;
          padding-bottom: 40px;
        }
        .image-main {
          width: 85%;
          aspect-ratio: 1;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .image-main img { width: 100%; height: 100%; object-fit: cover; }
        .image-sub {
          position: absolute;
          width: 50%;
          aspect-ratio: 1;
          bottom: 0;
          right: 0;
          border-radius: 20px;
          overflow: hidden;
          padding: 8px;
        }
        .image-sub img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }

        .text-secondary {
          color: var(--text-muted);
          font-size: 17px;
          margin-bottom: 24px;
          line-height: 1.8;
        }

        .features-mini {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 32px;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          color: var(--text-main);
        }
        .feature-item .icon {
          width: 24px;
          height: 24px;
          background: var(--grad-main);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .vision-card {
          text-align: left;
          padding: 40px;
        }
        .icon-badge {
          font-size: 32px;
          margin-bottom: 20px;
        }
        .vision-card h3 {
          font-size: 24px;
          margin-bottom: 16px;
        }
        .vision-card p {
          color: var(--text-muted);
          line-height: 1.7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          padding: 60px;
          border-radius: 32px;
          text-align: center;
        }
        .stat-item h2 {
          font-size: 48px;
          margin-bottom: 8px;
          color: black;
        }
        .stat-item p {
          color: var(--text-muted);
          font-weight: 600;
        }
        .hero-btns {
          display: flex;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; gap: 40px; }
          .stats-grid { grid-template-columns: 1fr 1fr; padding: 40px; }
          .about-hero { height: 40vh; }
        }
        @media (max-width: 480px) {
          .features-mini {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            padding: 24px;
            gap: 24px;
          }
          .stat-item h2 {
            font-size: 32px;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .hero-btns a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </MainLayout>
  );
}

export default About;