import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPVerification from "./OTPVerification";
import { useSelector, useDispatch } from "react-redux";
import { UpdateFormData, resetFormData } from "../Redux/ReduxSlice/UserSlice";
import { SignUp } from "../Redux/ReduxSlice/UserSlice";

export function RegisterForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { formData: formdata } = useSelector((state) => state.user);

  console.log("formdata", formdata);

  const [otp, setOtp] = useState("");
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otpModel, setOtpModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignUp(formdata));
    // dispatch(resetFormData());
    setOtpModel(true);
    setOtp("123456");
    setIsOtpModalOpen(true);
  };

  const onCloseModel = () => {
    setIsOtpModalOpen(false);
    setOtpModel(false);
  };

  const handleChange = (e) => {
    dispatch(UpdateFormData(e.target));
  };

  const handleVerifyOtp = (otpInput) => {
    if (otpInput === "123456") {
      setIsOtpModalOpen(false);
      setOtpModel(false);
      toast.success("Success! OTP validation is done");
      navigate("/login");
      toast.success("Registration successful! You can now login.", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.error("Invalid OTP", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleResendOtp = () => {
    setTimeout(() => {
      setOtp("123456");
      toast.info("OTP resent successfully!");
    }, 1000);
  };

  // Animation variants (matched to previous premium design)
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
    <>
      {otpModel && (
        <OTPVerification
          isOtpModalOpen={isOtpModalOpen}
          onVerify={handleVerifyOtp}
          onResend={handleResendOtp}
          isLoading={isLoading}
          onClose={onCloseModel}
        />
      )}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4 sm:p-6 md:p-8"
      >
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-200/50 overflow-hidden">
          {/* Premium background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-gray-50/20"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]" />

          <div className="relative z-10">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Register in IETE
              </span>
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Combined Title and Name (adjusted to Full Name per Redux state) */}
              <motion.div variants={itemVariants}>
  <div className="flex space-x-2">
    <div className="w-1/6">
      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
        Title
      </label>
      <motion.select
        name="title"
        value={formdata?.title}
        onChange={handleChange}
        className="w-full px-3 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md text-sm"
        variants={inputVariants}
        whileFocus="focus"
        whileBlur="blur"
      >
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Miss">Miss</option>
        <option value="Ms.">Ms.</option>
      </motion.select>
    </div>
    <div className="w-full">
      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
        First Name
      </label>
      <motion.input
        name="name"
        type="text"
        required
        value={formdata?.name || ""}
        onChange={handleChange}
        className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
        placeholder="Enter first name"
        variants={inputVariants}
        whileFocus="focus"
        whileBlur="blur"
      />
    </div>
  </div>
</motion.div>

              {/* <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Username</label>
                <motion.input
                  name="username"
                  type="text"
                  required
                  value={formdata?.username || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Enter username"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                />
              </motion.div> */}

              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Middle Name
                </label>
                <motion.input
                  name="middle_name"
                  type="text"
                  value={formdata?.middle_name || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Enter your middle name (optional)"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <motion.input
                  name="last_name"
                  type="text"
                  required
                  value={formdata?.last_name || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Enter your last anme"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <motion.input
                  name="email"
                  type="email"
                  required
                  value={formdata?.email || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Enter your email"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <motion.input
                  name="mobile_no"
                  type="tel"
                  required
                  value={formdata?.mobile_no || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="+91-XXXX-XXXXXX"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <motion.input
                  name="password"
                  type="password"
                  required
                  value={formdata?.password || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Password (9+ Characters)"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <motion.input
                  name="confirm_password"
                  type="password"
                  required
                  value={formdata?.confirm_password || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Confirm password"
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
                  Register
                </Button>
              </motion.div>
            </form>

            <AnimatePresence>
              {isOtpModalOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* OTPVerification is already rendered conditionally above */}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-center text-xs sm:text-sm text-gray-600"
            >
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
              >
                Sign in
              </a>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
