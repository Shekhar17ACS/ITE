// // src/components/auth/ForgotPassword.tsx

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/Button';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulated API Call
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Simulated Password Reset Validation
//     if (email) {
//       toast.success('Password reset email sent successfully!');
//     } else {
//       toast.error('Please enter a valid email address.');
//     }

//     setIsLoading(false);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
//     >
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//             Email address
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             autoComplete="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//           />
//         </div>

//         <div>
//           <Button type="submit" className="w-full" isLoading={isLoading}>
//             Send Password Reset Email
//           </Button>
//         </div>
//       </form>

//       <p className="mt-10 text-center text-sm text-gray-500">
//         Remember your password?{' '}
//         <a href="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
//           Sign in
//         </a>
//       </p>
//     </motion.div>
//   );
// }





import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPVerification from "./OTPVerification";
import {
  forgotPasswordAsync,
  resetPasswordAsync,
  setConfirmPassword,
  setIsOtpModalOpen,
  setIsOtpVerified,
  setNewPassword,
  setEmail,
} from "../Redux/ReduxSlice/ForgotPasswordSlice";
import { useDispatch, useSelector } from "react-redux";

export function ForgotPassword() {
  const dispatch = useDispatch();
  const {
    email,
    otp,
    isOtpVerified,
    isLoading,
    isOtpModalOpen,
    newPassword,
    confirmPassword,
    error,
  } = useSelector((state) => state.forgotPassword);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(forgotPasswordAsync(email));
  };

  const handleVerifyOtp = (inputOtp) => {
    if (inputOtp === otp) { // Compare with the actual OTP
      dispatch(setIsOtpVerified(true));
      dispatch(setIsOtpModalOpen(false));
      toast.success("Success! OTP validation is done");
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    dispatch(resetPasswordAsync({ newPassword, confirmPassword }));
  };

  // Animation variants (matched to RegisterForm)
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 },
    },
    blur: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16 sm:mx-auto sm:w-full sm:max-w-lg px-8 py-10 bg-gradient-to-br from-gray-50/90 to-white/90 rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden relative"
    >
      <div
        className="backdrop-blur-2xl absolute inset-0 z-0"
        style={{ background: "rgba(255, 255, 255, 0.5)" }}
      />

      {/* Added premium background effects from RegisterForm */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-gray-50/20"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]" />

      <motion.div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Reset Your Password
          </span>
        </h2>
        <p className="mt-3 text-sm text-gray-500 font-medium">
          Enter your email to proceed
        </p>
      </motion.div>

      {!isOtpVerified ? (
        <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
          <motion.div variants={itemVariants}>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <motion.input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              className="block w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Enter your email"
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              isLoading={isLoading}
            >
              Send Password Reset Email
            </Button>
          </motion.div>
        </form>
      ) : (
        <form
          onSubmit={handleResetPassword}
          className="space-y-7 relative z-10"
        >
          <motion.div variants={itemVariants}>
            <label
              htmlFor="password"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
            >
              New Password
            </label>
            <motion.input
              id="password"
              type="password"
              required
              value={newPassword}
              onChange={(e) => dispatch(setNewPassword(e.target.value))}
              className="block w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Enter new password"
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="confirmPassword"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <motion.input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              className="block w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Confirm new password"
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Reset Password
            </Button>
          </motion.div>
        </form>
      )}

      <AnimatePresence>
        {isOtpModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative z-10"
          >
            <OTPVerification onVerify={handleVerifyOtp} />
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="text-red-500 text-center mt-4">{error}</p>
      )}
    </motion.div>
  );
}