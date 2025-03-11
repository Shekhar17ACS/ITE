import React from "react";
// import "../index.css";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const RegistrationForm = ({ nextStep, formData, setFormData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  const inputFields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter username" },
    { name: "email", label: "Email", type: "email", placeholder: "Enter email" },
    { name: "password", label: "Password", type: "password", placeholder: "Enter password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Re-enter password" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto p-8 sm:p-10 bg-gray-100 rounded-3xl relative"
      >
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-semibold text-center text-gray-950 mb-12"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "700" }}
        >
          Join Us – Register Now
        </motion.h2>

        
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
          {inputFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <label
                className="block text-sm font-medium text-gray-950 mb-1 ml-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                {...register(field.name, field.name === "confirmPassword" ? {
                  validate: (value) => value === watch("password") || "Passwords do not match",
                } : {
                  required: `${field.label} is required`,
                })}
                placeholder={field.placeholder}
                className="block w-full px-4 py-2 border-1 border-indigo-200 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-indigo-200 sm:text-sm transition duration-150 ease-in-out"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}
              />
              {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name].message}</p>}
            </motion.div>
          ))}
        </form>

        <div className="bg-gray-100 py-4 px-8 max-w-3xl mx-auto flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:ring-opacity-50 transition-all duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Proceed →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;