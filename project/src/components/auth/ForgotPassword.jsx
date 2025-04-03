"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/Button"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import OTPVerification from "./OTPVerification"
import {
  forgotPasswordAsync,
  resetPasswordAsync,
  setConfirmPassword,
  setIsOtpModalOpen,
  setIsOtpVerified,
  setNewPassword,
  setEmail,
} from "../Redux/ReduxSlice/ForgotPasswordSlice"
import { useDispatch, useSelector } from "react-redux"
import { ArrowRight, CheckCircle, Lock, Mail } from "lucide-react"

export function ForgotPassword() {
  const dispatch = useDispatch()
  const { email, otp, isOtpVerified, isLoading, isOtpModalOpen, newPassword, confirmPassword, error } = useSelector(
    (state) => state.forgotPassword,
  )
  const [isPasswordReset, setIsPasswordReset] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(forgotPasswordAsync(email))
  }

  const handleVerifyOtp = (inputOtp) => {
    if (inputOtp === otp) {
      // Compare with the actual OTP
      dispatch(setIsOtpVerified(true))
      dispatch(setIsOtpModalOpen(false))
      toast.success("Success! OTP validation is done")
    } else {
      toast.error("Invalid OTP")
    }
  }

  const handleResetPassword = (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }
    dispatch(resetPasswordAsync({ newPassword, confirmPassword }))
  }

  // Animation variants (matched to RegisterForm)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

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
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Description Section - Left side on desktop, top on mobile */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 flex flex-col justify-center"
      >
        <div className="max-w-md mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Reset Your Password</h1>
            <p className="text-gray-300 mb-6">
              Forgot your password? No problem. We'll help you reset it and get back to your account quickly and
              securely.
            </p>

            <div className="space-y-4 mt-8">
              <motion.div variants={itemVariants} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                <p>Secure password reset process</p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                <p>OTP verification for added security</p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                <p>Quick and easy password update</p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                <p>Immediate access to your account</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 italic">
                "Your security is our priority. We use industry-standard encryption and verification methods to ensure
                your account remains protected."
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <a href="/login" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Return to login page
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Password Reset Form Section - Right side on desktop, bottom on mobile */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 bg-white p-8 md:p-12 flex items-center justify-center"
      >
        <div className="w-full max-w-md">
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            {!isOtpVerified ? "Reset Your Password" : "Create New Password"}
          </motion.h2>

          {!isOtpVerified ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Address */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <motion.input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your email"
                    variants={inputVariants}
                    whileFocus="focus"
                    whileBlur="blur"
                  />
                </div>
              </motion.div>

              {/* Send Reset Email Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg"
                  isLoading={isLoading}
                >
                  Send Password Reset Email
                </Button>
              </motion.div>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-5">
              {/* New Password */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <motion.input
                    id="password"
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => dispatch(setNewPassword(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter new password"
                    variants={inputVariants}
                    whileFocus="focus"
                    whileBlur="blur"
                  />
                </div>
              </motion.div>

              {/* Confirm Password */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <motion.input
                    id="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Confirm new password"
                    variants={inputVariants}
                    whileFocus="focus"
                    whileBlur="blur"
                  />
                </div>
              </motion.div>

              {/* Reset Password Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg"
                  isLoading={isLoading}
                >
                  Reset Password
                </Button>
              </motion.div>
            </form>
          )}

          {/* Login Link */}
          <motion.p variants={itemVariants} className="mt-8 text-center text-sm text-gray-600">
            Remember your password?{" "}
            <a href="/login" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
              Sign in
            </a>
          </motion.p>

          {/* Additional help text */}
          <motion.p variants={itemVariants} className="mt-4 text-center text-xs text-gray-500">
            Need help with password reset?{" "}
            <a href="mailto:support@iete.org" className="text-blue-600 hover:underline">
              Contact support
            </a>
          </motion.p>

          {error && (
            <motion.p
              variants={itemVariants}
              className="mt-4 text-red-500 text-center bg-red-50 p-2 rounded-md border border-red-200"
            >
              {error}
            </motion.p>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOtpModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <OTPVerification onVerify={handleVerifyOtp} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

