import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPVerification from "./OTPVerification";
import { Login,UpdateFormData,resetFormData } from "../Redux/ReduxSlice/LoginSlice";
import { useSelector, useDispatch } from "react-redux";
import img1 from "../../assets/login1.jpg"

export function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [identifier, setIdentifier] = useState(""); // For existing users
  const [newUserIdentifier, setNewUserIdentifier] = useState(""); // For new users (mobile or email)
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [loginMode, setLoginMode] = useState("existing");
  
const dispatch = useDispatch()
const {formData} = useSelector((state)=>state.LoginUser)

  // Handle login for existing users
  // const handleExistingUserLogin = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   const isValidIdentifier =
  //     identifier === "admin@gmail.com" ||
  //     identifier === "1234567890" ||
  //     identifier === "APP12345";
  //   if (isValidIdentifier && password === "admin") {
  //     toast.success(
  //       `OTP sent to ${
  //         identifier.includes("@")
  //           ? "email"
  //           : identifier.match(/^\d{10}$/)
  //           ? "mobile"
  //           : "application number"
  //       }! Please verify...`,
  //       { autoClose: 2000 }
  //     );
  //     setTimeout(() => {
  //       setOtp("123456");
  //       setIsOtpModalOpen(true);
  //     }, 2000);
  //   } else {
  //     toast.error("Invalid credentials! Please try again.");
  //   }
  //   setIsLoading(false);
  // };

  // Handle login for new users
  // const handleNewUserLogin = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   const isValidNewUserIdentifier =
  //     newUserIdentifier === "9876543210" ||
  //     newUserIdentifier === "newuser@gmail.com";
  //   if (isValidNewUserIdentifier && password === "newuser") {
  //     toast.success(
  //       `OTP sent to ${
  //         newUserIdentifier.includes("@") ? "email" : "mobile"
  //       }! Please verify...`,
  //       { autoClose: 2000 }
  //     );
  //     setTimeout(() => {
  //       setOtp("123456");
  //       setIsOtpModalOpen(true);
  //     }, 2000);
  //   } else {
  //     toast.error("Invalid credentials! Please try again.");
  //   }
  //   setIsLoading(false);
  // };

  // Handle Forgot Password (for both modes)
  // const handleForgotPassword = async () => {
  //   const fieldToCheck = loginMode === 'existing' ? identifier : newUserIdentifier;
  //   if (!fieldToCheck) {
  //     toast.error(`Please enter your ${loginMode === 'existing' ? 'identifier' : 'mobile number or email'} first`);
  //     return;
  //   }
  //   setIsLoading(true);
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   toast.success(`Password reset instructions sent to ${fieldToCheck}`);
  //   setIsLoading(false);
  // };
  const handleForgotPassword = () => {
    const fieldToCheck =
      loginMode === "existing" ? identifier : newUserIdentifier;
    if (!fieldToCheck) {
      toast.error(
        `Please enter your ${
          loginMode === "existing" ? "identifier" : "mobile number or email"
        } first`
      );
      return;
    }
    // Navigate to the ForgotPassword component
    navigate("/forgot-password"); // Update this line
  };

  // Handle OTP verification
  const handleVerifyOtp = (otpInput) => {
    if (otpInput === "123456") {
      setIsOtpModalOpen(false);
      toast.success("Login successful! Redirecting...", { autoClose: 2000 });
      setTimeout(() => navigate("/admin"), 2000);
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleResendOtp = () => {
    setTimeout(() => {
      setOtp("123456");
      toast.info("OTP resent successfully!");
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
 

  const handleSubmit = (e)=>{
    e.preventDefault();
    //  dispatch(Login(formData)).then(()=>setIsOtpModalOpen(true))
    dispatch(Login(formData)).then(()=>navigate('/admin'))
    toast.success('Successfully login')
  }


  console.log("444",formData);

  const handleChange = (e)=>{
     dispatch(UpdateFormData(e.target))
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4 sm:p-6 md:p-8"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${img1})` }} >
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200/50 overflow-hidden">
        {/* Premium background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-indigo-200/20 to-gray-100/20"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]" />

        <div className="relative z-10">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-black">
              {loginMode === "existing"
                ? "Existing IETE Members"
                : "New User Login"}
            </span>
          </motion.h2>

          {/* Toggle Existing IETE Users / New User */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="relative flex justify-center items-center bg-gray-100/50 rounded-full p-1 w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] mx-auto shadow-sm">
              <motion.div
                className="absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full shadow-md"
                animate={{ x: loginMode === "existing" ? "-50%" : "50%" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <button
                type="button"
                onClick={() => setLoginMode("existing")}
                className={`relative z-10 w-1/2 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-300 ${
                  loginMode === "existing" ? "text-white" : "text-gray-600"
                }`}
              >
                IETE Members
              </button>
              <button
                type="button"
                onClick={() => setLoginMode("new")}
                className={`relative z-10 w-1/2 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-300 ${
                  loginMode === "new" ? "text-white" : "text-gray-600"
                }`}
              >
                Register User Apply
              </button>
            </div>
          </motion.div>

          {/* Form based on login mode */}
          {loginMode === "existing" ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
            >
              {/* Single Identifier Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                  Email / Mobile / MemberShip ID
                </label>
                <input
                  type="text"

                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Enter email, mobile, membership id"
                />
              </motion.div>

              {/* Password */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData?.password}
                  onChange={handleChange}
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Enter your password"
                />
              </motion.div>

              {/* Forgot Password */}
              <motion.div variants={itemVariants} className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                >
                  Forgot Password?
                </button>
              </motion.div>

              {/* Sign In Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-black to-black text-white py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  isLoading={isLoading}
                >
                  Sign In
                </Button>
              </motion.div>
            </form>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
            >
              {/* Mobile Number / Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Mobile Number / Email / Application ID
                </label>
                <div className="relative">
                  <input
                    type="text"

                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Enter your mobile, email, appication id"
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData?.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Enter your password"
                />
              </motion.div>

              {/* Forgot Password */}
              <motion.div variants={itemVariants} className="text-right">
                <button
                  type="button"
                  // onClick={handleForgotPassword}
                  className="text-xs sm:text-sm text-blue-700 hover:text-blue-600 font-semibold transition-colors duration-300"
                >
                  Forgot Password?
                </button>
              </motion.div>

              {/* Sign In Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-black to-black text-white py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  isLoading={isLoading}
                >
                  Sign In
                </Button>
              </motion.div>
            </form>
          )}

          {/* OTP Modal */}
          <AnimatePresence>
            {isOtpModalOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <OTPVerification
                  onVerify={handleVerifyOtp}
                  onResend={handleResendOtp}
                  isLoading={isLoading}
                  onClose={() => setIsOtpModalOpen(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-center text-xs sm:text-sm text-gray-600"
          >
            If you are first time user?{" "}
            <a
              href="/register"
              className="text-blue-700 hover:text-blue-600 font-semibold transition-colors duration-300"
            >
              Register Here
            </a>{" "}
            to Apply for IETE Membership
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}