import MainLayout from "../../layouts/MainLayout";
import ServiceCard from "../../components/cards/ServiceCard";
import useReveal from "../../hooks/useReveal";

// Assets
import plumbing from "../../assets/images/plumbing.jpg";
import cleaning from "../../assets/images/deep-cleaning.png";
import electrician from "../../assets/images/electrician.png";
import tapRepair from "../../assets/images/tap-repair.png";
import spaImg from "../../assets/images/spa-service.png";
import architecture from "../../assets/images/architecture.jpg";

const Services = () => {
  useReveal();

  const services = [
    {
      _id: 1,
      name: "Expert Tap & Faucet Repair",
      description: "Fixing leaks, replacing old faucets, and mixer installation.",
      price: 249,
      image: tapRepair,
      category: "Plumbing",
      time: "45 mins"
    },
    {
      _id: 2,
      name: "Full Home Deep Cleaning",
      description: "Intensive cleaning for every corner of your house.",
      price: 2999,
      image: cleaning,
      category: "Cleaning",
      time: "5 hours"
    },
    {
      _id: 3,
      name: "Electrical Fuse Box Maintenance",
      description: "Critical safety checks and fuse/MCB repairs.",
      price: 1299,
      image: electrician,
      category: "Electrician",
      time: "1 hour"
    },
    {
      _id: 4,
      name: "Premium Swedish Home Spa",
      description: "Professional relaxing massage in your own bedroom.",
      price: 1799,
      image: spaImg,
      category: "SPA",
      time: "90 mins"
    },
    {
      _id: 5,
      name: "Architecture Consultation",
      description: "High-end design planning and blueprint review.",
      price: 4999,
      image: architecture,
      category: "Architecture",
      time: "2 hours"
    }
  ];

  const handleBook = (service) => {
    alert(`Redirecting to booking for: ${service.name}`);
  };

  return (
    <MainLayout>
      <section className="all-services-page section">
        <div className="container">
          <div className="section-header animate-fade-in">
            <span className="section-tag">Direct Catalog</span>
            <h1 className="section-title">HomeFaciliti Quality Services</h1>
            <p className="text-secondary">Directly book our most requested professional services.</p>
          </div>

          <div className="catalog-grid">
            {services.map((service, idx) => (
              <div key={service._id} className="reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <ServiceCard
                  service={service}
                  onBook={handleBook}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .section-header { text-align: center; margin-bottom: 80px; }
        .text-secondary { color: var(--text-muted); font-size: 18px; }
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 40px;
        }
        @media (max-width: 480px) {
          .catalog-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .section-header {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Services;