import React, { useState } from "react";
import { motion } from "framer-motion";

const CourseSelection = ({ nextStep, prevStep, formData, setFormData }) => {
  const courses = [
    "B.Sc. Computer Science",
    "B.Com",
    "BBA",
    "B.Tech",
    "B.A",
    "B.Sc. Mathematics",
    "B.Sc. Physics",
  ];

  const [selectedCourse, setSelectedCourse] = useState(formData.course || "");

  const handleSubmit = () => {
    
    if (!selectedCourse) {
      alert("Please select a course before proceeding!");
      return;
    }
    setFormData({ ...formData, course: selectedCourse });
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-10 bg-gray-100 rounded-3xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8"
      >
        Select Your Course
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedCourse(course)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer p-5 text-center rounded-xl font-semibold transition-all duration-300 border-2 shadow-md hover:shadow-lg ${
              selectedCourse === course
                ? "bg-indigo-800 text-white border-transparent"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            {course}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevStep}
          className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
        >
          ← Back
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          disabled={!selectedCourse}
          className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 ${
            selectedCourse
              ? "bg-indigo-600 text-white hover:opacity-90"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Save and Next →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseSelection;