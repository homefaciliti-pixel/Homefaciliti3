import MainLayout from "../../layouts/MainLayout";
import useReveal from "../../hooks/useReveal";
import contactBg from "../../assets/images/contact-bg.jpg";
import emailIcon from "../../assets/images/email-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import locationIcon from "../../assets/images/location-icon.png";
function Contact() {
  useReveal();

  return (
    <MainLayout>
      <section className="contact-page">
        {/* Background Hero */}
        <div className="contact-hero" style={{ backgroundImage: `url(${contactBg})` }}>
          <div className="overlay-dark"></div>

          <div className="container">
            <div className="contact-card glass reveal">
              <span className="section-tag">Get in Touch</span>
              <h1 className="auth-title">Contact HomeFaciliti</h1>
              <p className="auth-subtitle">We're available 24/7 to help you with your home service needs.</p>

              <div className="contact-grid">
                <div className="contact-info-card">
                  <img src={emailIcon} alt="Email" className="info-icon-img" />
                  <div className="info-text">
                    <h3>Email Us</h3>
                    <p>homefaciliti@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <img src={phoneIcon} alt="Phone" className="info-icon-img" />
                  <div className="info-text">
                    <h3>Call Us</h3>
                    <p>+91 9462661184<br />+91 9054628864</p>
                  </div>
                </div>

                <a href="https://wa.me/919512392301" target="_blank" rel="noopener noreferrer" className="contact-info-card full-width whatsapp-card">
                  <svg className="info-icon-img" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div className="info-text">
                    <h3>WhatsApp Us</h3>
                    <p>+91 9512392301</p>
                  </div>
                </a>

                <div className="contact-info-card full-width">
                  <img src={locationIcon} alt="Location" className="info-icon-img" />
                  <div className="info-text">
                    <h3>Corporate Office</h3>
                    <p>
                      Super Home Technology Pvt Ltd<br />
                      208 2nd Floor, Shayona Arcade, Opposite Dinesh Chamber,<br />
                      India Colony, Bapunagar, Ahmedabad, 380024, India
                    </p>
                  </div>
                </div>
              </div>

              
                <div className="social-mini">
                  <a href="https://www.facebook.com/share/17V5MXQqN1/" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <svg className="social-icon fb-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/homefaciliti/" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <svg className="social-icon ig-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/superhome-technologies-pvt-ltd-homefaciliti-" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <svg className="social-icon li-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/homefacili29767" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                    <svg className="social-icon x-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/919512392301" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                    <svg className="social-icon wa-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
      
      </section>

      <style jsx>{`
        .contact-hero {
          min-height: 90vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          position: relative;
          padding: 80px 0;
        }
        .overlay-dark {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          z-index: 1;
        }
        .container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .contact-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px;
          border-radius: 40px;
          background: rgba(255, 255, 255, 0.95);
          text-align: center;
        }
        .auth-title { font-size: 42px; margin-bottom: 12px; }
        .auth-subtitle { color: var(--text-muted); margin-bottom: 48px; }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 48px;
        }
        .contact-info-card {
          background: #f1f5f9;
          padding: 32px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          border: 1px solid transparent;
        }
        .contact-info-card:hover { transform: translateY(-5px); background: white; box-shadow: var(--shadow-md); }
        .whatsapp-card:hover {
          border-color: #25D366;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.15);
        }
        .info-icon-img { width: 64px; height: 64px; margin-bottom: 16px; border-radius: 12px; object-fit: cover; }
        .info-text h3 { font-size: 18px; margin-bottom: 8px; }
        .info-text p { color: var(--text-muted); font-size: 15px; line-height: 1.6; }
        .full-width { grid-column: span 2; }

        .contact-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .social-mini {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 8px;
        }
        .social-mini a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        .social-mini a:hover {
          transform: scale(1.15);
        }
        .social-icon {
          width: 26px;
          height: 26px;
          color: #64748b;
          transition: color 0.3s ease, filter 0.3s ease;
        }
        .social-mini a:hover .social-icon.fb-icon { color: #1877F2; }
        .social-mini a:hover .social-icon.ig-icon { color: #E1306C; }
        .social-mini a:hover .social-icon.li-icon { color: #0A66C2; }
        .social-mini a:hover .social-icon.x-icon { color: #0F1419; }
        .social-mini a:hover .social-icon.wa-icon { color: #25D366; }

        @media (max-width: 640px) {
          .contact-card { padding: 40px 24px; }
          .contact-grid { grid-template-columns: 1fr; }
          .full-width { grid-column: span 1; }
          .auth-title { font-size: 32px; }
        }
      `}</style>
    </MainLayout>
  );
}

export default Contact;