import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ServiceCard({ service, onBook }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBooking = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (onBook) {
      onBook(service);
    } else {
      navigate(`/booking/${service._id}`);
    }
  };

  return (
    <div className="premium-card service-list-card animate-fade-in">
      <div className="service-img-box">
        <img src={service.image} alt={service.name} />
        <div className="service-price-floating">₹{service.price}</div>
      </div>
      <div className="service-card-content">
        <div className="service-header-row">
          <span className="category-tag">{service.category || "Service"}</span>
          <h3>{service.name}</h3>
        </div>
        <p className="service-desc">{service.description}</p>
        <a href="https://play.google.com/store/apps/details?id=com.homefacility" target="_blank" rel="noopener noreferrer" className="btn-premium btn-full" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
          Book Now
        </a>
      </div>

      <style jsx>{`
        .service-list-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .service-img-box {
          height: 180px;
          position: relative;
        }
        .service-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .service-price-floating {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-weight: 800;
          color: var(--primary);
          box-shadow: var(--shadow-md);
        }
        .service-card-content {
          padding: 20px;
          flex: 1;
        }
        .service-header-row {
          margin-bottom: 12px;
        }
        .category-tag {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          color: var(--primary);
          display: block;
          margin-bottom: 4px;
        }
        .service-card-content h3 {
          font-size: 18px;
          margin: 0;
        }
        .service-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .btn-full {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default ServiceCard;