import React, { useEffect, useState } from "react";
 
import Confetti from "react-confetti";
import { motion } from "framer-motion";


const ThankYouPage = () => {
   
  const [transactionNumber] = useState(Math.floor(Math.random() * 1000000));
  const [purchaseDate] = useState(new Date().toLocaleDateString());
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 300);
    setTimeout(() => clearInterval(timer), 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const confettiTimer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(confettiTimer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(transactionNumber.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center px-4 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={300} gravity={0.2} />}


      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center relative overflow-hidden border border-blue-300 dark:border-gray-700"
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <svg className="w-20 h-20 text-green-500 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.div>

        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Thank You!</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mt-4">Your payment was successful! Your order is being processed.</p>


        <div className="bg-gradient-to-r from-yellow-200 to-red-200 dark:bg-gray-700 p-4 rounded-lg mt-6">
          <p className="text-sm">Transaction #: <span className="font-bold">{transactionNumber}</span></p>
          <p className="text-sm">Date: {purchaseDate}</p>
          <button onClick={handleCopy} className={`mt-2 text-sm px-3 py-1 rounded-full ${copied ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"}`}>{copied ? "Copied!" : "Copy Transaction #"}</button>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            Back to Home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;