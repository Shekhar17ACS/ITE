// import React, { useState } from "react";
// import { motion } from "framer-motion";

// import { FiUploadCloud, FiTrash2, FiFileText, FiLoader } from "react-icons/fi";

// const DocumentUpload = ({ nextStep, prevStep, formData, setFormData }) => {
//   const [files, setFiles] = useState(formData.files || {});
//   const [errors, setErrors] = useState({});
//   const [uploading, setUploading] = useState(false);
//   const [dragActive, setDragActive] = useState(false);

//   const fileFields = [
//     { name: "aadhaar", label: "Aadhaar Card" },
//     { name: "pan", label: "PAN Card" },
//     { name: "tenthCert", label: "10th Certificate" },
//     { name: "twelfthCert", label: "12th Certificate" },
//     { name: "graduationCert", label: "Graduation Certificate" },
//   ];

//   const validateFile = (file, name) => {
//     if (file.size > 5 * 1024 * 1024) {
//       setErrors((prev) => ({ ...prev, [name]: "File size must be under 5MB." }));
//       return false;
//     }
//     if (!["image/jpeg", "image/png", "application/pdf"].includes(file.type)) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "Only JPG, PNG, and PDF files are allowed.",
//       }));
//       return false;
//     }
//     return true;
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const file = files[0];
//       if (!validateFile(file, name)) return;

//       setUploading(true);
//       setTimeout(() => {
//         setFiles((prev) => ({ ...prev, [name]: file }));
//         setErrors((prev) => ({ ...prev, [name]: "" }));
//         setUploading(false);
//       }, 800);
//     }
//   };

//   const removeFile = (name) => {
//     setFiles((prev) => ({ ...prev, [name]: null }));
//   };

//   const handleDrop = (e, name) => {
//     e.preventDefault();
//     setDragActive(false);
//     const file = e.dataTransfer.files[0];
//     if (file && validateFile(file, name)) {
//       setUploading(true);
//       setTimeout(() => {
//         setFiles((prev) => ({ ...prev, [name]: file }));
//         setErrors((prev) => ({ ...prev, [name]: "" }));
//         setUploading(false);
//       }, 800);
//     }
//   };

//   const handleSubmit = () => {
    
//     if (Object.values(files).some((file) => !file)) {
//       alert("Please upload all required documents.");
//       return;
//     }
//     setFormData({ ...formData, files: { ...files } });
//     nextStep();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-4xl mx-auto p-8 bg-gray-100 dark:bg-gray-900 rounded-3xl backdrop-blur-lg"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
//       >
//         Upload Your Documents
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {fileFields.map((field, index) => (
//           <motion.div
//             key={field.name}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.5 }}
//             className={`relative flex flex-col items-center justify-center border-2 border-dashed ${
//               dragActive
//                 ? "border-indigo-500 bg-indigo-100 dark:bg-indigo-900"
//                 : "border-gray-300"
//             } rounded-lg p-6 bg-gray-50 dark:bg-gray-800 hover:border-indigo-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer`}
//             onDrop={(e) => handleDrop(e, field.name)}
//             onDragOver={(e) => {
//               e.preventDefault();
//               setDragActive(true);
//             }}
//             onDragLeave={() => setDragActive(false)}
//           >
//             <input
//               type="file"
//               name={field.name}
//               onChange={handleFileChange}
//               className="hidden"
//               id={field.name}
//             />
//             <label htmlFor={field.name} className="flex flex-col items-center cursor-pointer">
//               {uploading ? (
//                 <FiLoader className="animate-spin text-indigo-500 text-4xl mb-2" />
//               ) : files[field.name] ? (
//                 <div className="flex flex-col items-center">
//                   {files[field.name].type.includes("image") ? (
//                     <img
//                       src={URL.createObjectURL(files[field.name])}
//                       alt="preview"
//                       className="w-20 h-20 object-cover rounded-lg shadow-md mb-2"
//                     />
//                   ) : (
//                     <FiFileText className="text-green-500 text-4xl mb-2" />
//                   )}
//                   <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
//                     {files[field.name].name}
//                   </span>
//                   <button
//                     onClick={() => removeFile(field.name)}
//                     className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
//                   >
//                     <FiTrash2 size={16} />
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <FiUploadCloud className="text-indigo-500 text-4xl mb-2" />
//                   <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
//                     Drag & drop or click to upload <br /> {field.label}
//                   </span>
//                 </>
//               )}
//             </label>
//             {errors[field.name] && (
//               <p className="text-red-500 text-xs mt-2">{errors[field.name]}</p>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-10">
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
//           onClick={handleSubmit}
//           className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
//         >
//           Save and Next →
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default DocumentUpload;
import React, { useState } from "react";
import { motion } from "framer-motion";

import { FiUploadCloud, FiTrash2, FiFileText, FiLoader } from "react-icons/fi";

const DocumentUpload = ({ nextStep, prevStep, formData, setFormData }) => {
  const [files, setFiles] = useState(formData.files || {});
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const fileFields = [
    { name: "aadhaar", label: "Aadhaar Card" },
    { name: "pan", label: "PAN Card" },
    { name: "tenthCert", label: "10th Certificate" },
    { name: "twelfthCert", label: "12th Certificate" },
    { name: "graduationCert", label: "Graduation Certificate" },
    { name: "masterCert", label: "Master Certificate" },
  ];

  const validateFile = (file, name) => {
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, [name]: "File size must be under 5MB." }));
      return false;
    }
    if (!["image/jpeg", "image/png", "image/gif", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        [name]: "Only JPG, PNG, GIF, PDF, DOCX, and XLSX files are allowed.",
      }));
      return false;
    }
    return true;
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const file = files[0];
      if (!validateFile(file, name)) return;

      setUploading(true);
      setTimeout(() => {
        setFiles((prev) => ({ ...prev, [name]: file }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setUploading(false);
      }, 800);
    }
  };

  const removeFile = (name) => {
    setFiles((prev) => ({ ...prev, [name]: null }));
  };

  const handleDrop = (e, name) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && validateFile(file, name)) {
      setUploading(true);
      setTimeout(() => {
        setFiles((prev) => ({ ...prev, [name]: file }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setUploading(false);
      }, 800);
    }
  };

  const handleSubmit = () => {
    
    if (Object.values(files).some((file) => !file)) {
      alert("Please upload all required documents.");
      return;
    }
    setFormData({ ...formData, files: { ...files } });
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-8 bg-gray-100 dark:bg-gray-900 rounded-3xl backdrop-blur-lg"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
      >
        Upload Your Documents
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fileFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative flex flex-col items-center justify-center border-2 border-dashed ${
              dragActive
                ? "border-indigo-500 bg-indigo-100 dark:bg-indigo-900"
                : "border-gray-300"
            } rounded-lg p-6 bg-gray-50 dark:bg-gray-800 hover:border-indigo-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer`}
            onDrop={(e) => handleDrop(e, field.name)}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
          >
            <input
              type="file"
              name={field.name}
              onChange={handleFileChange}
              className="hidden"
              id={field.name}
            />
            <label htmlFor={field.name} className="flex flex-col items-center cursor-pointer">
              {uploading ? (
                <FiLoader className="animate-spin text-indigo-500 text-4xl mb-2" />
              ) : files[field.name] ? (
                <div className="flex flex-col items-center">
                  {files[field.name].type.includes("image") ? (
                    <img
                      src={URL.createObjectURL(files[field.name])}
                      alt="preview"
                      className="w-20 h-20 object-cover rounded-lg shadow-md mb-2"
                    />
                  ) : (
                    <FiFileText className="text-green-500 text-4xl mb-2" />
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    {files[field.name].name}
                  </span>
                  <button
                    onClick={() => removeFile(field.name)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <FiUploadCloud className="text-indigo-500 text-4xl mb-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Drag & drop or click to upload <br /> {field.label}
                  </span>
                </>
              )}
            </label>
            <p className="text-red-500 text-xs mt-2">
              Max file size: 5MB, Allowed file types: .jpg, .png, .gif, .docx, .pdf, .xlsx
            </p>
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-2">{errors[field.name]}</p>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between mt-10">
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
          onClick={handleSubmit}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
        >
          Save and Next →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DocumentUpload;