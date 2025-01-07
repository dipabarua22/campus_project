import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: "",
    level: "",
    term: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, id, level, term, department } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle form submission (e.g., API call)
    console.log("Signup successful:", { name, email, id, level, term, department });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
            Name
          </label>
          <input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  style={{ width: "100%", padding: "0.5rem" }}
  pattern="[A-Za-z\s]+"
  title="Please enter letters only"
/>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="id" style={{ display: "block", marginBottom: "0.5rem" }}>
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="level" style={{ display: "block", marginBottom: "0.5rem" }}>
            Level
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          >
            <option value="" disabled>
              Select Level
            </option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
          </select>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="term" style={{ display: "block", marginBottom: "0.5rem" }}>
            Term
          </label>
          <select
            id="term"
            name="term"
            value={formData.term}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          >
            <option value="" disabled>
              Select Term
            </option>
            <option value="1">Term 1</option>
            <option value="2">Term 2</option>
          </select>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="department" style={{ display: "block", marginBottom: "0.5rem" }}>
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="CSE">Computer Science and Engineering</option>
            <option value="EEE">Electrical and Electronics Engineering</option>
            <option value="ME">English</option>
            <option value="CE">Civil Engineering</option>
          </select>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "0.5rem" }}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup
