// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const CourseSelection = ({ nextStep, prevStep, formData, setFormData }) => {
//   const courses = [
//     // "B.Sc. Computer Science",
//     // "B.Com",
//     // "BBA",
//     // "B.Tech",
//     // "B.A",
//     // "B.Sc. Mathematics",
//     // "B.Sc. Physics",
//     "FELLOW (F)",
//     "MEMBER (M)",
//     "ASSOCIATE MEMBER (AM)",
//     "ASSOCIATE (A)",
//   ];

//   const [selectedCourse, setSelectedCourse] = useState(formData.course || "");

//   const handleSubmit = () => {
    
//     if (!selectedCourse) {
//       alert("Please select a membership before proceeding!");
//       return;
//     }
//     setFormData({ ...formData, course: selectedCourse });
//     nextStep();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-4xl mx-auto p-10 bg-gray-100 rounded-3xl"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8"
//       >
//         Choose Your Membership
//       </motion.h2>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {courses.map((course, index) => (
//           <motion.div
//             key={index}
//             onClick={() => setSelectedCourse(course)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`cursor-pointer p-5 text-center rounded-xl font-semibold transition-all duration-300 border-2 shadow-md hover:shadow-lg ${
//               selectedCourse === course
//                 ? "bg-indigo-800 text-white border-transparent"
//                 : "bg-white border-gray-300 hover:border-blue-400"
//             }`}
//           >
//             {course}
//           </motion.div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-10">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={prevStep}
//           className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
//         >
//           ← Back
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleSubmit}
//           disabled={!selectedCourse}
//           className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 ${
//             selectedCourse
//               ? "bg-indigo-600 text-white hover:opacity-90"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//         >
//           Save and Next →
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default CourseSelection;



import React, { useState } from "react";
import { motion } from "framer-motion";

const CourseSelection = ({ nextStep, prevStep, formData, setFormData }) => {
  const courses = [
    {
      name: "FELLOW (F)",
      description: "Elite membership for seasoned professionals with 10+ years of impactful experience.",
      price: "₹11,800",
      eligibility: "Requires BE/B.Tech/ME/M.Tech/MS or equivalent, with a senior leadership role. Age: 35+",
    },
    {
      name: "MEMBER (M)",
      description: "For accomplished individuals with 5+ years of proven expertise.",
      price: "₹9,600",
      eligibility: "Requires BE/B.Tech/ME/M.Tech/MS or equivalent. Age: 26+",
    },
    {
      name: "ASSOCIATE MEMBER (AM)",
      description: "For rising professionals building their career foundation.",
      price: "₹8,120",
      eligibility: "Requires BE/B.Tech/ME/M.Tech/MS or equivalent. Age: 21+",
    },
    {
      name: "ASSOCIATE (A)",
      description: "For versatile contributors excelling in electronics or allied fields.",
      price: "₹4,430",
      eligibility: "Open to commerce, finance, law, or IETE postgraduate enrollees. Age: 30+",
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(formData.course || "");

  const handleSubmit = () => {
    if (!selectedCourse) {
      alert("Please select a membership tier to proceed.");
      return;
    }
    setFormData({ ...formData, course: selectedCourse });
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="max-w-5xl w-full mx-auto my-0 p-8 sm:p-10 md:p-12 bg-gray-100 rounded-3xl shadow-3xl overflow-hidden relative"
    >
      {/* Elegant Background Layers */}
      <div className="absolute inset-0  pointer-events-none" />
      <div className="absolute inset-0  pointer-events-none" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 sm:mb-16 tracking-tight relative"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Choose Your Membership
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 rounded-full -mb-4 opacity-80" />
      </motion.h2>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedCourse(course.name)}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1), 0 0 30px rgba(79, 70, 229, 0.08)",
            }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
            className={`relative cursor-pointer p-6 sm:p-8 rounded-2xl border-2 bg-white shadow-lg transition-all duration-500 flex flex-col justify-between ${
              selectedCourse === course.name
                ? "border-indigo-300/80 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/70 shadow-2xl"
                : "border-gray-100/80 hover:border-indigo-200 hover:shadow-xl"
            }`}
          >
            {/* Selection Badge */}
            {selectedCourse === course.name && (
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-3 -right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center"
              >
                <span>✓ Chosen</span>
              </motion.div>
            )}

            <div>
              <h3
                className={`text-xl sm:text-2xl font-bold ${
                  selectedCourse === course.name ? "text-indigo-700" : "text-gray-900"
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {course.name}
              </h3>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  selectedCourse === course.name ? "text-indigo-600" : "text-gray-600"
                }`}
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {course.description}
              </p>
              <p
                className={`mt-3 text-xs italic ${
                  selectedCourse === course.name ? "text-indigo-500" : "text-gray-500"
                }`}
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {course.eligibility}
              </p>
            </div>
            <div className="mt-6">
              <motion.div
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 ${
                  selectedCourse === course.name
                    ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {course.price}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="w-full py-8 sm:py-10 flex flex-col sm:flex-row justify-between items-center mt-12 gap-6 sm:gap-0">
        <motion.button
          whileHover={{ scale: 1.06, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.94 }}
          onClick={prevStep}
          className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full shadow-xl hover:from-gray-900 hover:to-black transition-all duration-500 border border-gray-700/30"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          ← Previous Step
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.06, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.3)" }}
          whileTap={{ scale: 0.94 }}
          onClick={handleSubmit}
          disabled={!selectedCourse}
          className={`w-full sm:w-auto px-8 py-3 font-semibold rounded-full shadow-xl transition-all duration-500 ${
            selectedCourse
              ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:from-indigo-700 hover:to-purple-800 border border-indigo-600/40"
              : "bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300/50"
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Confirm & Proceed →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseSelection;