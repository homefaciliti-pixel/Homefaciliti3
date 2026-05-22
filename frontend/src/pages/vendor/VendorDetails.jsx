import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

function VendorDetails() {
  const [form, setForm] = useState({
    businessName: "",
    serviceType: "",
    experience: "",
    city: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vendor Data:", form);
    // API CALL HERE
  };

  return (
    <MainLayout>
      <div style={container}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2>Vendor Registration</h2>

          <input
            name="businessName"
            placeholder="Business Name"
            onChange={handleChange}
            style={input}
            required
          />

          <select
            name="serviceType"
            onChange={handleChange}
            style={input}
            required
          >
            <option value="">Select Service</option>
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Cleaning</option>
            <option>AC Repair</option>
          </select>

          <input
            name="experience"
            placeholder="Experience (Years)"
            onChange={handleChange}
            style={input}
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            style={input}
          />

          <textarea
            name="description"
            placeholder="Service Description"
            onChange={handleChange}
            style={textarea}
          />

          <button style={button}>Submit Application</button>
        </form>
      </div>
    </MainLayout>
  );
}

const container = {
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  width: "420px",
  padding: "30px",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const input = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const textarea = {
  ...input,
  minHeight: "80px",
};

const button = {
  padding: "12px",
  background: "#16a34a",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default VendorDetails;