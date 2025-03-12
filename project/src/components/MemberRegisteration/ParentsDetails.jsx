import { useState, useEffect } from "react";
// import "../index.css";
import { motion, AnimatePresence } from "framer-motion";

const ParentsDetails = ({ nextStep, prevStep, formData, setFormData }) => {
  const [parentsData, setParentsData] = useState({
    fatherName: "",
    motherName: "",
    contactNumber: "",
    fatherOccupation: "",
    motherOccupation: "",
  });

  useEffect(() => {
    if (formData) {
      setParentsData({
        fatherName: formData.fatherName || "",
        motherName: formData.motherName || "",
        contactNumber: formData.contactNumber || "",
        fatherOccupation: formData.fatherOccupation || "",
        motherOccupation: formData.motherOccupation || "",
      });
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParentsData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
  
    setFormData((prevFormData) => ({ ...prevFormData, ...parentsData }));
    nextStep();
  };

  return (
    <AnimatePresence>
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
          className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gray-950 mb-8"
        >
          Parents Details
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "fatherName",
            "motherName",
            "contactNumber",
            "fatherOccupation",
            "motherOccupation",
          ].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-950 mb-1">
                {field === "fatherName"
                  ? "Father's Name"
                  : field === "motherName"
                  ? "Mother's Name"
                  : field === "contactNumber"
                  ? "Contact Number"
                  : field === "fatherOccupation"
                  ? "Father's Occupation"
                  : "Mother's Occupation"}
              </label>
              <input
                type={field === "contactNumber" ? "tel" : "text"}
                name={field}
                value={parentsData[field]}
                onChange={handleChange}
                className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "300",
                }}
                placeholder={
                  field === "fatherName"
                    ? "Enter Father's Name"
                    : field === "motherName"
                    ? "Enter Mother's Name"
                    : field === "contactNumber"
                    ? "+91 (123) 456-7890"
                    : field === "fatherOccupation"
                    ? "Enter Father's Occupation"
                    : "Enter Mother's Occupation"
                }
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevStep}
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-300"
          >
            Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300"
          >
            Save and Next
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ParentsDetails;