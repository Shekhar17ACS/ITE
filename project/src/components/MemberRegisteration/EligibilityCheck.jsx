import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import "../../../src/index.css";

const EligibilityCheck = ({ nextStep, prevStep, formData }) => {
  const [eligible, setEligible] = useState(null);

  const checkEligibility = () => {
    if (formData.qualification === "B.Sc. Computer Science" || formData.qualification === "B.Tech") {
      setEligible(true);
    } else {
      setEligible(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-3xl "
    >
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 mb-4"
      >
        {/* Eligibility Check */}
      </motion.h2>

      
      <p className="text-lg text-gray-600 text-center mb-6">
        Check if you qualify for this course based on your qualifications.
      </p>

      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={checkEligibility}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
        >
          Click Here Check Eligibility
        </motion.button>
      </div>

    
      {eligible !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`mt-5 flex items-center justify-center gap-3 p-4 text-sm font-semibold rounded-lg shadow-md ${
            eligible ? "bg-green-500 text-white shadow-green-400/40" : "bg-red-500 text-white shadow-red-400/40"
          }`}
        >
          {eligible ? (
            <FaCheckCircle className="text-xl" />
          ) : (
            <FaTimesCircle className="text-xl" />
          )}
          <span>
            {eligible ? "You are eligible!" : "You are not eligible."}
          </span>
        </motion.div>
      )}

    
      <div className="flex justify-between mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevStep}
          className="px-5 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
        >
          ← Back
        </motion.button>

        {eligible && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextStep}
            className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
          >
            Proceed to Payment →
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default EligibilityCheck;
