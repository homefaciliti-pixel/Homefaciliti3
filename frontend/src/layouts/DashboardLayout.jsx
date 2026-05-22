import Sidebar from "../components/navbar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 bg-gray-50 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;