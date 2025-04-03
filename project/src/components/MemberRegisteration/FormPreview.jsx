// import React from "react";
// import { motion } from "framer-motion";

// const FormPreview = ({ nextStep, prevStep, formData }) => {
//   const { files = {}, ...personalDetails } = formData;

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.98 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.98 }}
//       transition={{ duration: 0.6, ease: "easeInOut" }}
//       className="max-w-6xl w-full mx-auto my-8 p-6 sm:p-8 md:p-10 bg-white rounded-3xl shadow-xl font-sans border border-gray-100/30 overflow-hidden"
//     >
    
//       {/* Header */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
//         className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 tracking-tight relative"
//         style={{ fontFamily: "'Poppins', sans-serif" }}
//       >
//         Application Preview
//         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-gold-500 rounded-full" />
//       </motion.h2>

//       {/* Main Content */}
//       <div className="space-y-8">
//         {/* Personal Details */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="bg-gray-50/70 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100/50"
//         >
//           <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 flex items-center">
//             <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
//             Personal Details
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//             {Object.entries(personalDetails).map(([key, value]) =>
//               key !== "files" && value ? (
//                 <motion.div
//                   key={key}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4, duration: 0.4 }}
//                   className="flex flex-col"
//                 >
//                   <span className="text-xs sm:text-sm font-medium text-gray-600 capitalize">
//                     {key.replace(/([A-Z])/g, " $1")}
//                   </span>
//                   <span className="text-sm sm:text-base text-gray-900 font-light mt-1">
//                     {value}
//                   </span>
//                 </motion.div>
//               ) : null
//             )}
//           </div>
//         </motion.section>

//         {/* Membership & Documents Side-by-Side on Larger Screens */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Membership Selection */}
//           <motion.section
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="bg-gray-50/70 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100/50"
//           >
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 flex items-center">
//               <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
//               Membership
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-100/50">
//               <span className="text-xs sm:text-sm font-medium text-gray-600">Selected Membership</span>
//               <p className="mt-2 text-base sm:text-lg text-indigo-600 font-semibold bg-indigo-50 px-3 py-1 rounded-full inline-block">
//                 {formData.course || "Not Selected"}
//               </p>
//             </div>
//           </motion.section>

//           {/* Documents */}
//           <motion.section
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//             className="bg-gray-50/70 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100/50"
//           >
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 flex items-center">
//               <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
//               Documents
//             </h3>
//             <div className="space-y-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 pr-2">
//               {Object.entries(files).map(([key, file]) =>
//                 file ? (
//                   <motion.div
//                     key={key}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6, duration: 0.4 }}
//                     className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50"
//                   >
//                     <p className="text-xs sm:text-sm font-medium text-gray-600 capitalize">
//                       {key.replace(/([A-Z])/g, " $1")}
//                     </p>
//                     <p className="text-xs sm:text-sm text-gray-800 font-light truncate mt-1 mb-2">
//                       {file.name}
//                     </p>
//                     {file.type.includes("image") ? (
//                       <img
//                         src={URL.createObjectURL(file)}
//                         alt={file.name}
//                         className="w-full h-24 sm:h-28 object-cover rounded-md hover:scale-105 transition-transform duration-300"
//                       />
//                     ) : (
//                       <div className="w-full h-24 sm:h-28 flex items-center justify-center bg-gray-100 rounded-md">
//                         <span className="text-gray-400 text-xs font-medium">No Preview</span>
//                       </div>
//                     )}
//                   </motion.div>
//                 ) : null
//               )}
//             </div>
//           </motion.section>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="w-full py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 sm:gap-0">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={prevStep}
//           className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
//         >
//           ← Back
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={nextStep}
//           className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 border border-indigo-500/20"
//         >
//           Confirm & Proceed →
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default FormPreview;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormPreview = ({ nextStep, prevStep, formData }) => {
  const { files = {}, ...personalDetails } = formData;
  const [consent, setConsent] = useState(false);

  const handleConsent = () => {
    setConsent(!consent);
  };

  const handleDownload = () => {
    const data = JSON.stringify(formData);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form-data.json";
    a.click();
    toast.success("Form data downloaded successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="max-w-6xl w-full mx-auto my-8 p-6 sm:p-8 md:p-10 bg-white rounded-3xl shadow-xl font-sans border border-gray-100/30 overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 tracking-tight relative"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Application Preview
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-gold-500 rounded-full" />
      </motion.h2>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Personal Details */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gray-50/70 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100/50"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 flex items-center">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
            Personal Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(personalDetails).map(([key, value]) =>
              key !== "files" && value ? (
                <motion.div
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex flex-col"
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="text-sm sm:text-base text-gray-900 font-light mt-1">
                    {value}
                  </span>
                </motion.div>
              ) : null
            )}
          </div>
        </motion.section>

        {/* Membership & Documents Side-by-Side on Larger Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Membership Selection */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-50/70 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100/50"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 flex items-center">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
              Membership
            </h3>
            <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-100/50">
              <span className="text-xs sm:text-sm font-medium text-gray-600">Selected Membership</span>
              <p className="mt-2 text-base sm:text-lg text-indigo-600 font-semibold bg-indigo-50 px-3 py-1 rounded-full inline-block">
                {formData.course || "Not Selected"}
              </p>
            </div>
          </motion.section>

          {/* Documents */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gray-50/70 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100/50"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 flex items-center">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
              Documents
            </h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 pr-2">
              {Object.entries(files).map(([key, file]) =>
                file ? (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50"
                  >
                    <p className="text-xs sm:text-sm font-medium text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-800 font-light truncate mt-1 mb-2">
                      {file.name}
                    </p>
                    {file.type.includes("image") ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-24 sm:h-28 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-24 sm:h-28 flex items-center justify-center bg-gray-100 rounded-md">
                        <span className="text-gray-400 text-xs font-medium">No Preview</span>
                      </div>
                    )}
                  </motion.div>
                ) : null
              )}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Consent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="bg-gray-50/70 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100/50 mt-8"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 flex items-center">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
          Consent
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          I hereby declare that the information provided is true and accurate to the best of my knowledge.
        </p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={handleConsent}
            className="mr-2"
          />
          <label htmlFor="consent" className="text-sm sm:text-base text-gray-600">
            I agree to the terms and conditions.
          </label>
        </div>
      </motion.div>

      {/* Buttons */}
      <div className="w-full py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 sm:gap-0">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevStep}
          className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
        >
          ← Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextStep}
          disabled={!consent}
          className={`w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 border border-indigo-500/20 ${
            !consent ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Confirm & Proceed →
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:from-green-700 hover:to-green-900 transition-all duration-300 border border-green-500/20"
        >
          Download Form Data
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FormPreview;
