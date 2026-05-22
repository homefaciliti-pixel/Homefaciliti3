import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

function UserDetails() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", form);
    // API CALL HERE
  };

  return (
    <MainLayout>
      <div style={container}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2>User Details</h2>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={input}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            style={input}
            required
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            style={input}
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            style={textarea}
          />

          <button style={button}>Save Details</button>
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
  padding: "20px",
  boxSizing: "border-box",
};

const formStyle = {
  width: "100%",
  maxWidth: "400px",
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
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default UserDetails;