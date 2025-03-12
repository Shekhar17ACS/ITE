import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Payment = ({ prevStep, formData }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_U4bdC62vxssMpp",
      amount: 1000 * 100,
      currency: "INR",
      name: "Course Registration",
      description: "Payment for Registration",
      image: "https://yourlogo.com/logo.png",
      handler: (response) => {
        console.log("Payment successful!", response);
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: formData.fullName || "Enter Your Name",
        email: formData.email || "Enter Your Email",
        contact: formData.phone || "+91 XXXXXXXXXX",
      },
      theme: {
        color: "#4F46E5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto p-8 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
      >
        Secure Payment
      </motion.h2>

      <p className="text-gray-600 mt-3 mb-6 text-lg">
        Complete your registration by making a payment.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePayment}
        className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
      >
        Pay Now
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevStep}
        className="mt-4 w-full px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
      >
        ← Back
      </motion.button>
    </motion.div>
  );
};

export default Payment;
