import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";

// Import Assets
import heroBg from "../../assets/images/hero-bg.png";
import mechanicImg from "../../assets/images/mechanic.jpg";
import plumberImg from "../../assets/images/plumbing.jpg";
import electricianImg from "../../assets/images/electrician.png";
import salonImg from "../../assets/images/Salon.jpg";
import spaImg from "../../assets/images/spa-service.png";
import cleaningImg from "../../assets/images/deep-cleaning.png";
import architectureImg from "../../assets/images/architecture.jpg";
import tapRepairImg from "../../assets/images/tap-repair.png";
import carpenterImg from "../../assets/images/carpenter.jpg";
import panditImg from "../../assets/images/Pandit ji.jpg";
import driverImg from "../../assets/images/Driver services.png";
import photographerImg from "../../assets/images/Photographer.jpg";
import doctorImg from "../../assets/images/Doctor.jpg";
import compounderImg from "../../assets/images/Compounder.jpg";
import halwaiImg from "../../assets/images/Halwai services.jpg";
import carWashImg from "../../assets/images/Car Washing.jpg";
import taxImg from "../../assets/images/tax.jpg";
import painterImg from "../../assets/images/Painter.jpg";
import repairingImg from "../../assets/images/Repairing.jpg";
import acImg from "../../assets/images/ac.png";
import event1 from "../../assets/images/event1.jpeg";
import event2 from "../../assets/images/event2.jpeg";
import event3 from "../../assets/images/event3.jpeg";
import event4 from "../../assets/images/event4.jpeg";
import event5 from "../../assets/images/event5.jpeg";
import pestControlImg from "../../assets/images/pest-control.jpg";

function Home() {
  useReveal();

  const categories = [
    { name: "Mechanic", img: mechanicImg },
    { name: "Plumbing", img: plumberImg },
    { name: "Electrician", img: electricianImg },
    { name: "Salon & Spa", img: salonImg },
    { name: "Cleaning", img: cleaningImg },
    { name: "Pest Control", img: pestControlImg },
    { name: "Architecture", img: architectureImg },
    { name: "Carpenter", img: carpenterImg },
    { name: "Pandit Ji", img: panditImg },
    { name: "Driver", img: driverImg },
    { name: "Photographer", img: photographerImg },
    { name: "Doctor", img: doctorImg },
    { name: "Compounder", img: compounderImg },
    { name: "Halwai", img: halwaiImg },
    { name: "Car Washing", img: carWashImg },
    { name: "Tax Consultancy", img: taxImg },
    { name: "Painter", img: painterImg },
    { name: "Repairing", img: repairingImg },
    { name: "AC Repair", img: acImg },
  ];

  const services = [
    {
      title: "Premium Home Spa (90 min)",
      price: "₹ 1799",
      img: spaImg,
      tag: "Trending",
    },
    {
      title: "Full Home Deep Cleaning",
      price: "₹ 2999",
      img: cleaningImg,
      tag: "Best Seller",
    },
    {
      title: "Expert Tap & Faucet Repair",
      price: "₹ 249",
      img: tapRepairImg,
      tag: "Essential",
    },
    {
      title: "Architecture Consultation",
      price: "₹ 5000",
      img: architectureImg,
      tag: "Premium",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Choose Service",
      desc: "Select from our range of verified home services and professionals.",
      icon: "🔍"
    },
    {
      num: "02",
      title: "Book Expert",
      desc: "Schedule a time that works for you with your preferred professional.",
      icon: "🗓️"
    },
    {
      num: "03",
      title: "Relax & Enjoy",
      desc: "Our expert arrives on time to deliver high-quality service at your door.",
      icon: "✨"
    }
  ];

  return (
    <MainLayout>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-content animate-fade-in">
          <div className="hero-announcement animate-fade-in-left">
            <span>New</span>  our partner will be avalibale in 15 minutes 24/7.
          </div>
          <h1 className="hero-title">Your Home, <br /><span>Perfectly Mastered.</span></h1>
          <p className="hero-subtitle">Experience the next generation of home services with verified experts and seamless booking.</p>
          <div className="hero-btns">
            <Link to="/categories" className="btn-premium">Get Started Now</Link>
            <Link to="/about" className="btn-outline-premium">Why HomeFaciliti?</Link>
          </div>

          <div className="hero-stats animate-fade-in-delay-2">
            <div className="stat">
              <strong>12k+</strong>
              <span>Happy Homeowners</span>
            </div>
            <div className="stat-sep"></div>
            <div className="stat">
              <strong>15min</strong>
              <span>Avg. Booking Time</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-in-right">
          <div className="hero-image-wrapper">
            <img src={heroBg} alt="Premium Home" className="hero-main-img" />

            {/* Parallax-style Floating elements */}
            <div className="floating-card glass card-trust animate-float-slow">
              <div className="trust-icon">🛡️</div>
              <div>
                <h6>100% Secure</h6>
                <p>Verified Professionals</p>
              </div>
            </div>

            <div className="floating-card glass card-rating animate-float-fast">
              <div className="rating-star">⭐ 4.9</div>
              <p>Top Rated Experts</p>
            </div>

            <div className="hero-blob"></div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="section bg-alt overflow-hidden">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Seamless Process</span>
            <h2 className="section-title">How HomeFaciliti Works</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card reveal" style={{ transitionDelay: `${idx * 0.2}s` }}>
                <div className="step-number">{step.num}</div>
                <div className="step-icon-bg">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {idx < 2 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Browse by Specialty</span>
            <h2 className="section-title">Explore Our Wide Network</h2>
          </div>

          <div className="category-grid">
            {categories.map((item, index) => (
              <Link to="/categories" key={index} className="category-card-premium reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="cat-img-box">
                  <img src={item.img} alt={item.name} />
                  <div className="cat-overlay">
                    <span className="cat-btn">Explore</span>
                  </div>
                </div>
                <h4>{item.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES SECTION ===== */}
      <section className="section services-section reveal">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Expertly Selected</span>
            <h2 className="section-title">Featured Professional Services</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="premium-card service-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <span className="service-tag-floating">{service.tag}</span>
                <div className="service-img">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <div className="service-footer">
                    <div className="price-tag">
                      <span className="price-value">{service.price}</span>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.homefacility" target="_blank" rel="noopener noreferrer" className="btn-premium btn-small" style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }}>Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENT EVENTS SECTION ===== */}
      <section className="section events-section reveal">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Our Latest Highlights</span>
            <h2 className="section-title">AIFTP National Tax Conference 2026</h2>
            <p className="text-secondary" style={{ marginTop: '16px' }}>Hotel Clarks Amer, Jaipur</p>
          </div>
          
          <div className="event-gallery-grid">
            <div className="event-photo photo-1 reveal">
              <img src={event1} alt="AIFTP Event 1" />
            </div>
            <div className="event-photo photo-2 reveal" style={{ transitionDelay: '0.1s' }}>
              <img src={event2} alt="AIFTP Event 2" />
            </div>
            <div className="event-photo photo-3 reveal" style={{ transitionDelay: '0.2s' }}>
              <img src={event3} alt="AIFTP Event 3" />
            </div>
            <div className="event-photo photo-4 reveal" style={{ transitionDelay: '0.3s' }}>
              <img src={event4} alt="AIFTP Event 4" />
            </div>
            <div className="event-photo photo-5 reveal" style={{ transitionDelay: '0.4s' }}>
              <img src={event5} alt="AIFTP Event 5" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROMO SECTION ===== */}
      <section className="section promo-banner-section reveal">
        <div className="container">
          <div className="promo-banner glass-vivid">
            <div className="promo-content">
              <h2 className="text-shadow-soft">Ready to transform your home?</h2>
              <p className="text-shadow-soft">Join over 10,000+ families who trust HomeFaciliti for their daily needs.</p>
              <a href="https://play.google.com/store/apps/details?id=com.hf_partner" target="_blank" rel="noopener noreferrer" className="btn-premium white-bg" style={{ textDecoration: 'none', display: 'inline-block' }}>Download our App</a>
            </div>
            <div className="promo-visual">
              <div className="hero-blob small"></div>
            </div>
          </div>
        </div>
      </section>

       <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 120px 0 80px;
          align-items: center;
        }
        .hero-announcement {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 32px;
        }
        .hero-announcement span {
          background: var(--grad-main);
          color: white;
          padding: 2px 8px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
        }
        .hero-title {
          font-size: 72px;
          line-height: 1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }
        .hero-title span {
          background: var(--grad-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 20px;
          color: var(--text-muted);
          max-width: 520px;
          margin-bottom: 48px;
        }
        .hero-btns {
          display: flex;
          gap: 16px;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-top: 60px;
        }
        .stat strong { display: block; font-size: 24px; color: var(--text-main); }
        .stat span { font-size: 14px; color: var(--text-muted); }
        .stat-sep { width: 1px; height: 40px; background: #e2e8f0; }

        .hero-visual { position: relative; }
        .hero-image-wrapper {
          position: relative;
          z-index: 1;
        }
        .hero-main-img {
          width: 100%;
          border-radius: 40px;
          box-shadow: var(--shadow-premium);
          border: 12px solid white;
        }
        .floating-card {
          position: absolute;
          padding: 20px;
          border-radius: 20px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: var(--shadow-lg);
        }
        .card-trust { top: 40px; left: -40px; }
        .card-rating { bottom: 60px; right: -20px; flex-direction: column; text-align: center; gap: 8px; }
        .rating-star { font-weight: 800; font-size: 20px; color: gold; }
        .card-trust h6 { margin: 0; font-size: 16px; font-weight: 700; }
        .card-trust p { margin: 0; font-size: 12px; color: var(--text-muted); }
        
        .hero-blob {
          position: absolute;
          width: 120%;
          height: 120%;
          background: var(--grad-main);
          filter: blur(80px);
          opacity: 0.1;
          top: -10%;
          left: -10%;
          z-index: -1;
          border-radius: 50%;
        }

        .section { padding: 120px 0; position: relative; }
        .bg-alt { background: #f8fafc; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .section-header { text-align: center; margin-bottom: 80px; }
        .section-tag { color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 13px; margin-bottom: 12px; display: block; }
        .section-title { font-size: 48px; letter-spacing: -1px; }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .step-card {
          position: relative;
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 32px;
          box-shadow: var(--shadow-md);
          transition: all 0.4s ease;
        }
        .step-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-lg); }
        .step-number {
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 42px;
          font-weight: 900;
          opacity: 0.05;
        }
        .step-icon-bg {
          width: 80px;
          height: 80px;
          background: #f1f5f9;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto 24px;
          transition: all 0.4s ease;
        }
        .step-card:hover .step-icon-bg { background: var(--primary); color: white; transform: rotate(10deg); }
        .step-card h3 { margin-bottom: 16px; font-size: 24px; }
        .step-card p { color: var(--text-muted); line-height: 1.6; }
        .step-connector {
          position: absolute;
          top: 50%;
          right: -30px;
          width: 40px;
          height: 2px;
          background: #e2e8f0;
          z-index: 1;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .category-card-premium {
          text-decoration: none;
          color: var(--text-main);
        }
        .cat-img-box {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          aspect-ratio: 16/10;
          margin-bottom: 20px;
          box-shadow: var(--shadow-md);
        }
        .cat-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .cat-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .cat-btn {
          background: white;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 700;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }
        .category-card-premium:hover .cat-overlay { opacity: 1; }
        .category-card-premium:hover .cat-btn { transform: translateY(0); }
        .category-card-premium:hover .cat-img-box img { transform: scale(1.1); }
        .category-card-premium h4 { font-size: 20px; text-align: center; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 32px;
        }
        .service-card {
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .service-img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          margin: 12px auto 20px;
          border: 4px solid white;
          box-shadow: var(--shadow-md);
          transition: transform 0.4s ease;
        }
        .service-card:hover .service-img {
          transform: scale(1.05);
        }
        .service-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .service-tag-floating {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--grad-main);
          color: white;
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          z-index: 5;
        }
        .service-content {
          padding: 12px 0 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          width: 100%;
        }
        .service-content h3 {
          font-size: 20px;
          margin-bottom: 20px;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
          width: 100%;
          margin-top: auto;
        }
        .price-tag {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .price-label { font-size: 12px; color: var(--text-muted); }
        .price-value { font-size: 20px; font-weight: 800; color: var(--text-main); }

        .promo-banner {
          background: var(--grad-main);
          border-radius: 48px;
          padding: 80px;
          color: white;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          align-items: center;
          overflow: hidden;
          position: relative;
        }
        .glass-vivid { background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); }
        .promo-content h2 { font-size: 48px; margin-bottom: 24px; color: white; }
        .promo-content p { font-size: 20px; opacity: 0.9; margin-bottom: 40px; }
        .white-bg { background: white; color: black; }
        .white-bg:hover { filter: brightness(0.9); }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-fast { animation: float 4s ease-in-out infinite; }

        .events-section { background: #fff; }
        .event-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 250px);
          gap: 20px;
        }
        .event-photo {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          position: relative;
        }
        .event-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .event-photo:hover img { transform: scale(1.05); }
        .placeholder-bg {
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .placeholder-bg::after {
          content: 'Photo Placeholder';
          color: #94a3b8;
          font-weight: 600;
          font-size: 16px;
        }
        .photo-1 { grid-column: span 2; grid-row: span 2; }
        .photo-2 { grid-column: span 1; grid-row: span 1; }
        .photo-3 { grid-column: span 1; grid-row: span 1; }
        .photo-4 { grid-column: span 1; grid-row: span 1; }
        .photo-5 { grid-column: span 1; grid-row: span 1; }

        @media (max-width: 1024px) {
          .hero-section { grid-template-columns: 1fr; text-align: center; padding-top: 60px; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-title { font-size: 52px; }
          .hero-stats { justify-content: center; margin-bottom: 60px; }
          .steps-grid { grid-template-columns: 1fr; }
          .step-connector { display: none; }
          .category-grid { grid-template-columns: 1fr 1fr; }
          .promo-banner { grid-template-columns: 1fr; padding: 40px; text-align: center; }
          .event-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .photo-1 { grid-column: span 2; grid-row: span 1; height: 300px; }
          .photo-2, .photo-3, .photo-4, .photo-5 { grid-column: span 1; height: 200px; }
        }
        @media (max-width: 768px) {
          .section { padding: 60px 0; }
          .section-title { font-size: 36px; }
          .hero-section { padding: 40px 0 60px; }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 38px; letter-spacing: -1px; }
          .hero-subtitle { font-size: 16px; margin-bottom: 24px; }
          .hero-stats { gap: 16px; margin-top: 32px; }
          .stat strong { font-size: 20px; }
          .stat span { font-size: 12px; }
          .floating-card { display: none; }
          .promo-content h2 { font-size: 30px; }
          .promo-content p { font-size: 16px; margin-bottom: 24px; }
          .promo-banner { padding: 32px 20px; border-radius: 24px; }
          .section-title { font-size: 28px; }
          .event-gallery-grid { grid-template-columns: 1fr; }
          .photo-1, .photo-2, .photo-3, .photo-4, .photo-5 { grid-column: span 1; height: 250px; }
        }
        @media (max-width: 480px) {
          .category-grid { grid-template-columns: 1fr; }
          .hero-btns { flex-direction: column; width: 100%; gap: 12px; }
          .hero-btns a { width: 100%; text-align: center; }
        }
      `}</style>
    </MainLayout>
  );
}

export default Home;