import Sidebar from "../components/navbar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard-content">
          {children}
        </div>
      </div>

      <style jsx>{`
        .dashboard-layout {
          display: flex;
          min-height: 100vh;
          background: #f8fafc;
        }
        .dashboard-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .dashboard-content {
          padding: 140px 40px 40px 40px;
          background: #f8fafc;
          min-height: 100vh;
        }

        @media (max-width: 768px) {
          .dashboard-layout {
            flex-direction: column;
          }
          .dashboard-content {
            padding: 110px 20px 40px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;