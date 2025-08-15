import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    company: "",
    reason: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    for (let key in formData) {
      submitData.append(key, formData[key]);
    }
    if (file) {
      submitData.append("cv", file);
    }

    try {
      const res = await axios.post("http://localhost:5000/submit-form", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Form submitted successfully!");
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-12 flex flex-col lg:flex-row justify-center items-center">
      {/* Form Section */}
      <div className="w-full max-w-xl p-6 bg-white shadow-lg rounded-xl">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full border border-blue-800 p-2 rounded"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full border border-blue-800 p-2 rounded"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-blue-800 p-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="flex items-center border border-blue-800 rounded overflow-hidden">
            <span className="px-2">🇮🇳</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full p-2"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="title"
            placeholder="Your Title"
            className="w-full border border-blue-800 p-2 rounded"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Your Company"
            className="w-full border border-blue-800 p-2 rounded"
            value={formData.company}
            onChange={handleChange}
          />
          <textarea
            name="reason"
            placeholder="Please add a reason for this form submission"
            rows="4"
            className="w-full border border-blue-800 p-2 rounded"
            value={formData.reason}
            onChange={handleChange}
          />

          {/* File Upload */}
          <div className="w-full border border-dashed border-gray-400 p-4 text-center text-sm text-gray-600 rounded">
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full cursor-pointer"
            />
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Please upload your CV if you have enquired regarding a job
          </p>

          <p className="text-[10px] text-gray-500">
            By providing your phone number, you agree to receive SMS messages from +1 307-303-0233. Standard message and data rates may apply. You can unsubscribe from these messages at any time by replying "STOP" to the number +1 307-303-0233
          </p>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Illustration Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center text-center px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-900">
          WE WOULD LOVE TO ANSWER YOUR QUESTIONS.
        </h2>
        <p className="text-sm text-gray-600 max-w-md mb-6">
          Start by selecting your region to speak with one of our talent experts or completing the form below.
        </p>
        <img
          src="https://kit8.net/wp-content/uploads/2020/12/Guy_and_computer@2x.png"
          alt="Customer Support Illustration"
          className="max-w-3xl w-full h-auto"
        />
      </div>
    </div>
  );
}
