"use client";
import React, { useState } from "react";
import Header from "@/app/components/header/index";

const CustomerInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    ghanaCard: null,
    birthCert: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <Header />
      <div className="container py-5 d-flex justify-content-center min-vh-100">
        <div className="card shadow-lg p-4 w-50">
          <h2 className="text-center mb-4">Customer Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Birthdate</label>
              <input
                type="date"
                className="form-control"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Ghana Card</label>
              <input
                type="file"
                className="form-control"
                name="ghanaCard"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Birth Certificate</label>
              <input
                type="file"
                className="form-control"
                name="birthCert"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                required
              />
            </div>

            <button
              type="submit"
              className="nav-link link p-3 fw-bold text-white rounded text-decoration-none w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomerInfoForm;
