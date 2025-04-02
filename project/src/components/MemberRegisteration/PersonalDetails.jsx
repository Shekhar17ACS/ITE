// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const PersonalDetails = ({ nextStep, prevStep, formData, setFormData }) => {
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
    
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.phone ||
//       !formData.address ||
//       !formData.qualification ||
//       !formData.gender ||
//       !formData.dob
//     ) {
//       setError("All fields are required!");
//       return;
//     }
//     setError("");
//     setFormData({ ...formData }); 
//     nextStep();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-3xl font-sans"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gray-800 mb-8"
//         style={{ fontFamily: "'Poppins', sans-serif" }}
//       >
//         Personal Details
//       </motion.h2>

//       {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

//       <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {[
//           { label: "Full Name", name: "name", type: "text", placeholder: "Enter Full Name" },
//           { label: "Email", name: "email", type: "email", placeholder: "Enter Email" },
//           { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter Phone Number" },
//           { label: "Date of Birth", name: "dob", type: "date" },
//         ].map((field, index) => (
//           <motion.div
//             key={field.name}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.5 }}
//             className="relative"
//           >
//             <label
//               className="block text-sm font-medium text-gray-700 mb-1 ml-2"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               {field.label}
//             </label>
//             <input
//               type={field.type}
//               name={field.name}
//               value={formData[field.name] || ""}
//               onChange={handleChange}
//               placeholder={field.placeholder || ""}
//               className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             />
//           </motion.div>
//         ))}

//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="relative"
//         >
//           <label
//             className="block text-sm font-medium text-gray-700 mb-1 ml-2"
//             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
//           >
//             Gender
//           </label>
//           <select
//             name="gender"
//             value={formData.gender || ""}
//             onChange={handleChange}
//             className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
//             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </motion.div>

        
//         {[
//           { label: "Address", name: "address", type: "text", placeholder: "Enter Address" },
//           { label: "Highest Qualification", name: "qualification", type: "text", placeholder: "Enter Qualification" },
//         ].map((field, index) => (
//           <motion.div
//             key={field.name}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: (index + 4) * 0.1, duration: 0.5 }}
//             className="relative col-span-2"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             <label
//               className="block text-sm font-medium text-gray-700 mb-1 ml-2"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               {field.label}
//             </label>
//             <input
//               type={field.type}
//               name={field.name}
//               value={formData[field.name] || ""}
//               onChange={handleChange}
//               placeholder={field.placeholder || ""}
//               className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             />
//           </motion.div>
//         ))}
//       </form>

//       <div className="w-full bg-gray-100 py-4 flex justify-between items-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={prevStep}
//           className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
//         >
//           ← Back
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleSubmit}
//           className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
//         >
//           Save and Next →
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };
// export default PersonalDetails;

import React, { useState } from "react";
import { motion } from "framer-motion";

const PersonalDetails = ({ nextStep, prevStep, formData, setFormData }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = e.target.type === "text" ? value.toUpperCase() : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = () => {
    if (
      !formData.title ||
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.phone ||
      !formData.fathername ||
      !formData.mothername ||
      !formData.address || // Still checking only the first address field
      !formData.address2 ||
      !formData.country || // Add this line
      !formData.state || // Add this line
      !formData.city || // Add this line
      !formData.pincode ||
      !formData.qualification ||
      !formData.Stream ||
      !formData.experience ||
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

      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            combined: [
              {
                label: (
                  <span>
                    Title
                    <span style={{ color: "red" }}>*</span>
                  </span>
                ),
                name: "title",
                type: "select",
                options: [
                  { value: "MR", label: "Mr." },
                  { value: "MS", label: "Ms." },
                  { value: "MRS", label: "Mrs." },
                  { value: "DR", label: "Dr." },
                ],
              },
              {
                label: (
                  <span>
                    First Name
                    <span style={{ color: "red" }}>*</span>
                  </span>
                ),
                name: "firstname",
                type: "text",
                placeholder: "Enter First Name",
              },
            ],
          },
          {
            label: "Middle Name (Optional)",
            name: "middlename",
            type: "text",
            placeholder: "Enter Middle Name (Optional)",
          },
          {
            label: (
              <span>
                Last Name
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "lastname",
            type: "text",
            placeholder: "Enter Last Name",
          },
          {
            label: (
              <span>
                Email
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "email",
            type: "email",
            placeholder: "Enter Email",
          },
          {
            label: (
              <span>
                Mobile Number
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "phone",
            type: "tel",
            placeholder: "Enter Phone Number",
          },
          {
            label: "Landline Number (Optional)",
            name: "landline",
            type: "tel",
            placeholder: "Enter Landline Number",
          },
          {
            label: (
              <span>
                Father's Name
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "fathername",
            type: "text",
            placeholder: "Enter Father's Name",
          },
          {
            label: (
              <span>
                Mother's Name
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "mothername",
            type: "text",
            placeholder: "Enter Mother's Name",
          },
          {
            label: (
              <span>
                Date of Birth
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "dob",
            type: "date",
          },
        ].map((field, index) => (
          <motion.div
            key={field.combined ? "title-firstname" : field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            {field.combined ? (
              <div className="flex gap-2">
                {field.combined.map((subField) => (
                  <div
                    key={subField.name}
                    className={subField.name === "title" ? "w-1/3" : "w-2/3"}
                  >
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1 ml-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {subField.label}
                    </label>
                    {subField.type === "select" ? (
                      <select
                        name={subField.name}
                        value={formData[subField.name] || ""}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <option value="">Select</option>
                        {subField.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={subField.type}
                        name={subField.name}
                        value={formData[subField.name] || ""}
                        onChange={handleChange}
                        placeholder={subField.placeholder || ""}
                        className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1 ml-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <option value="">Select Title</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder || ""}
                    className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                )}
              </>
            )}
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
            Gender<span style={{ color: "red" }}>*</span>
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
            Country/Nation<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country || ""}
            onChange={handleChange}
            className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
          />
        </motion.div>

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
            State<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="state"
            value={formData.state || ""}
            onChange={handleChange}
            className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
          />
        </motion.div>

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
            City<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
            className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
          />
        </motion.div>

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
            Pincode<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="pincode"
            value={formData.pincode || ""}
            onChange={handleChange}
            className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
          />
        </motion.div>

        {[
          {
            combined: [
              {
                label: (
                  <span>
                    Address Line 1<span style={{ color: "red" }}>*</span>
                  </span>
                ),
                name: "address",
                type: "text",
                placeholder: "Enter Address Line 1",
              },
              {
                label: (
                  <span>
                    Address Line 2<span style={{ color: "red" }}>*</span>
                  </span>
                ),
                name: "address2",
                type: "text",
                placeholder: "Enter Address Line 2",
              },
              {
                label: "Address Line 3",
                name: "address3",
                type: "text",
                placeholder: "Enter Address Line 3",
              },
            ],
          },
          {
            label: (
              <span>
                Qualification
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "qualification",
            type: "select",
            options: [
              { value: "PhD", label: "PhD" },
              { value: "Mtech", label: "M.Tech" },
              { value: "B.Tech", label: "B.Tech" },
              { value: "B.Sc(Engineering)", label: "B.Sc(Engineering)" },
              { value: "BE", label: "BE" },
              { value: "ME", label: "ME" },
              { value: "MS", label: "MS" },
            ],
          },
          {
            label: (
              <span>
                Stream
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "Stream",
            type: "select",
            options: [
              {
                value: "Electronics & Communication",
                label: "Electronics & Communication",
              },
              { value: "Computer Science", label: "Computer Science" },
              {
                value: "Information Technology",
                label: "Information Technology",
              },
              { value: "Engineering/Science", label: "Engineering/Science" },
            ],
          },
          {
            label: (
              <span>
                Total Experience (Years)
                <span style={{ color: "red" }}>*</span>
              </span>
            ),
            name: "experience",
            type: "number",
            min: 0,
            placeholder: "Enter Years of Experience",
          },
        ].map((field, index) => (
          <motion.div
            key={field.combined ? "address-combined" : field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index + 4) * 0.1, duration: 0.5 }}
            className="relative col-span-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {field.combined ? (
              <div className="space-y-2">
                {field.combined.map((subField) => (
                  <div key={subField.name}>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1 ml-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {subField.label}
                    </label>
                    <input
                      type={subField.type}
                      name={subField.name}
                      value={formData[subField.name] || ""}
                      onChange={handleChange}
                      placeholder={subField.placeholder || ""}
                      className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1 ml-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder || ""}
                    className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                )}
              </>
            )}
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