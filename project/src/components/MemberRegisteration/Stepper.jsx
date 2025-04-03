import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Stepper = ({ step, onStepClick, completedSteps = [], canNavigateAll = false }) => {
  const steps = [
    // "Registration",
    "Personal Details",
    // "Parents' Details",
    "Membership Selection",
    "Documents",
    "Eligibility Check",
    "Payment",
  ];

  const circleVariants = {
    inactive: { scale: 0.85, opacity: 0.6 },
    active: { scale: 1.1, opacity: 1 },
    completed: { scale: 0.95, opacity: 1 },
  };

  const lineVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "100%", opacity: 1 },
  };

  const handleClick = (index) => {
    console.log("Step clicked in Stepper:", index + 1); 
    if (onStepClick && (canNavigateAll || step >= index + 1)) {
      onStepClick(index + 1); 
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#1a1f36] to-[#2a3354] p-4 sm:p-6 border border-gray-800/50">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-between w-full space-x-0 sm:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {steps.map((label, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center min-w-[70px] flex-shrink-0 group"
            >
              {index < steps.length - 1 && (
                <motion.div
                  variants={lineVariants}
                  initial="initial"
                  animate={step > index + 1 ? "animate" : "initial"}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-4 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent transform -translate-y-1/2 z-0"
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: step > index + 1 ? "100%" : "0%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.div>
              )}
              <motion.div
                variants={circleVariants}
                initial="inactive"
                animate={
                  step > index + 1
                    ? "completed"
                    : step === index + 1
                    ? "active"
                    : "inactive"
                }
                whileHover={
                  canNavigateAll || step >= index + 1 ? { scale: 1.15 } : {}
                }
                onClick={() => handleClick(index)}
                transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
                className={`relative flex items-center justify-center w-8 h-8 rounded-full font-bold text-white transition-all shadow-md z-10
                  ${
                    canNavigateAll || step >= index + 1
                      ? "cursor-pointer"
                      : "cursor-not-allowed"
                  }
                  ${
                    step > index + 1
                      ? "bg-gradient-to-br from-green-500 to-teal-600 shadow-green-500/30 hover:shadow-green-500/50"
                      : step === index + 1
                      ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30 hover:shadow-blue-500/50"
                      : "bg-gradient-to-br from-gray-600 to-gray-700 shadow-gray-600/20 hover:shadow-gray-600/40"
                  }`}
              >
                {step > index + 1 ? (
                  <FaCheckCircle className="text-white text-sm" />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900/90 text-white text-[10px] rounded-md py-1 px-1.5 shadow-lg whitespace-nowrap">
                    {label}
                    <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-gray-900/90 transform rotate-45 -translate-x-1/2" />
                  </div>
                </div>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`mt-1 text-[10px] font-medium text-center tracking-tight
                  ${
                    step === index + 1
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-indigo-600/20 px-1 py-0.5 rounded-full"
                      : step > index + 1
                      ? "text-green-400"
                      : "text-gray-500"
                  }`}
              >
                {label}
              </motion.span>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex items-center justify-between w-full space-x-0">
          {steps.map((label, index) => (
            <div key={index} className="relative flex flex-col items-center w-full group">
              {index < steps.length - 1 && (
                <motion.div
                  variants={lineVariants}
                  initial="initial"
                  animate={step > index + 1 ? "animate" : "initial"}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-5 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent transform -translate-y-1/2 z-0"
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: step > index + 1 ? "100%" : "0%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.div>
              )}
              <motion.div
                variants={circleVariants}
                initial="inactive"
                animate={
                  step > index + 1
                    ? "completed"
                    : step === index + 1
                    ? "active"
                    : "inactive"
                }
                whileHover={
                  canNavigateAll || step >= index + 1 ? { scale: 1.15 } : {}
                }
                onClick={() => handleClick(index)}
                transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full font-bold text-white transition-all shadow-md z-10
                  ${
                    canNavigateAll || step >= index + 1
                      ? "cursor-pointer"
                      : "cursor-not-allowed"
                  }
                  ${
                    step > index + 1
                      ? "bg-gradient-to-br from-green-500 to-teal-600 shadow-green-500/30 hover:shadow-green-500/50"
                      : step === index + 1
                      ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30 hover:shadow-blue-500/50"
                      : "bg-gradient-to-br from-gray-600 to-gray-700 shadow-gray-600/20 hover:shadow-gray-600/40"
                  }`}
              >
                {step > index + 1 ? (
                  <FaCheckCircle className="text-white text-lg" />
                ) : (
                  <span className="text-base">{index + 1}</span>
                )}
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900/90 text-white text-xs rounded-md py-1.5 px-2 shadow-lg whitespace-nowrap">
                    {label}
                    <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-gray-900/90 transform rotate-45 -translate-x-1/2" />
                  </div>
                </div>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`mt-2 text-xs font-medium text-center tracking-tight
                  ${
                    step === index + 1
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-indigo-600/20 px-2 py-0.5 rounded-full"
                      : step > index + 1
                      ? "text-green-400"
                      : "text-gray-500"
                  }`}
              >
                {label}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;