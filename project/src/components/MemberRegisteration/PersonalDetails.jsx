import React, { useState } from "react";
import { motion } from "framer-motion";

const PersonalDetails = ({ nextStep, prevStep, formData, setFormData }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.qualification ||
      !formData.gender ||
      !formData.dob
    ) {
      setError("All fields are required!");
      return;
    }
    setError("");
    setFormData({ ...formData }); 
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-3xl font-sans"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gray-800 mb-8"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Personal Details
      </motion.h2>

      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "Enter Full Name" },
          { label: "Email", name: "email", type: "email", placeholder: "Enter Email" },
          { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter Phone Number" },
          { label: "Date of Birth", name: "dob", type: "date" },
        ].map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1 ml-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder || ""}
              className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative"
        >
          <label
            className="block text-sm font-medium text-gray-700 mb-1 ml-2"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
          >
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
            className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </motion.div>

        
        {[
          { label: "Address", name: "address", type: "text", placeholder: "Enter Address" },
          { label: "Highest Qualification", name: "qualification", type: "text", placeholder: "Enter Qualification" },
        ].map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index + 4) * 0.1, duration: 0.5 }}
            className="relative col-span-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1 ml-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder || ""}
              className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </motion.div>
        ))}
      </form>

      <div className="w-full bg-gray-100 py-4 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevStep}
          className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
        >
          ← Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
        >
          Save and Next →
        </motion.button>
      </div>
    </motion.div>
  );
};
export default PersonalDetails;