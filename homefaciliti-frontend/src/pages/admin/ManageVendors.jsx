import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getAllVendors } from "../../api/vendor.api";

const ManageVendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllVendors();
      setVendors(data.vendors);
    };
    fetch();
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Manage Vendors</h2>
      {vendors.map((vendor) => (
        <div key={vendor._id}>{vendor.name} - {vendor.email}</div>
      ))}
    </DashboardLayout>
  );
};

export default ManageVendors;