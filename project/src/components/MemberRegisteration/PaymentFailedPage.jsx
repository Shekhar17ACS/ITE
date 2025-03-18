import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const PaymentFailedPage = () => {
  const [transactionNumber] = useState(Math.floor(Math.random() * 1000000));
  const [attemptDate] = useState(new Date().toLocaleDateString());
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(transactionNumber.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center px-4 transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center relative overflow-hidden border border-red-300 dark:border-gray-700"
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <svg
            className="w-20 h-20 text-red-500 mx-auto animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">
          Payment Failed
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mt-4">
          We're sorry, but your payment could not be processed. Please try again or contact support.
        </p>

        {/* Transaction Details */}
        <div className="bg-gradient-to-r from-red-200 to-orange-200 dark:bg-gray-700 p-4 rounded-lg mt-6">
          <p className="text-sm">
            Transaction #: <span className="font-bold">{transactionNumber}</span>
          </p>
          <p className="text-sm">Date: {attemptDate}</p>
          <button
            onClick={handleCopy}
            className={`mt-2 text-sm px-3 py-1 rounded-full ${
              copied ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {copied ? "Copied!" : "Copy Transaction #"}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/retry-payment")}
            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-700 transition-all"
          >
            Try Again
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/support")}
            className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-700 transition-all"
          >
            Contact Support
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentFailedPage;