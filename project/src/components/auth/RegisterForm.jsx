// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "../ui/Button";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import OTPVerification from "./OTPVerification";
// import { useSelector, useDispatch } from "react-redux";
// import { UpdateFormData, resetFormData } from "../Redux/ReduxSlice/UserSlice";
// import { SignUp } from "../Redux/ReduxSlice/UserSlice";
// import bg1 from '../../assets/registerbg.jpg'

// export function RegisterForm() {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();
//   const { formData: formdata } = useSelector((state) => state.user);

//   console.log("formdata", formdata);

//   const [otp, setOtp] = useState("");
//   const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
//   const [otpModel, setOtpModel] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(SignUp(formdata));
//     // dispatch(resetFormData());
//     setOtpModel(true);
//     setOtp("123456");
//     setIsOtpModalOpen(true);
//   };

//   const onCloseModel = () => {
//     setIsOtpModalOpen(false);
//     setOtpModel(false);
//   };

//   const handleChange = (e) => {
//     dispatch(UpdateFormData(e.target));
//   };

//   const handleVerifyOtp = (otpInput) => {
//     if (otpInput === "123456") {
//       setIsOtpModalOpen(false);
//       setOtpModel(false);
//       toast.success("Success! OTP validation is done");
//       navigate("/login");
//       toast.success("Registration successful! You can now login.", {
//         position: "top-right",
//         autoClose: 2000,
//       });
//     } else {
//       toast.error("Invalid OTP", {
//         position: "top-right",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleResendOtp = () => {
//     setTimeout(() => {
//       setOtp("123456");
//       toast.info("OTP resent successfully!");
//     }, 1000);
//   };

//   // Animation variants (matched to previous premium design)
//   const containerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//   };

//   const inputVariants = {
//     focus: {
//       scale: 1.02,
//       boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
//       transition: { duration: 0.3 },
//     },
//     blur: {
//       scale: 1,
//       boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <>
//       {otpModel && (
//         <OTPVerification
//           isOtpModalOpen={isOtpModalOpen}
//           onVerify={handleVerifyOtp}
//           onResend={handleResendOtp}
//           isLoading={isLoading}
//           onClose={onCloseModel}
//         />
//       )}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         // className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4 sm:p-6 md:p-8"
//         className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
//          style={{ backgroundImage: `url(${bg1})` }}
//       >
//         <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 md:p-10  overflow-hidden"
       
//         >
//           {/* Premium background effect */}
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-gray-50/20"
//             animate={{ opacity: [0.5, 0.8, 0.5] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]" />

//           <div className="relative z-10">
//             <motion.h2
//               variants={itemVariants}
//               className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8 tracking-tight"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-black to-black">
//                 Welcome to the IETE Register
//               </span>
//             </motion.h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <motion.div variants={itemVariants}>
//                 <div className="flex space-x-2">
//                   <div className="w-1/6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Title
//                     </label>
//                     <motion.select
//                       name="title"
//                       value={formdata?.title}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md text-sm"
//                       variants={inputVariants}
//                       whileFocus="focus"
//                       whileBlur="blur"
//                     >
//                       <option value="Mr.">Mr.</option>
//                       <option value="Mrs.">Mrs.</option>
//                       <option value="Miss">Miss</option>
//                       <option value="Ms.">Ms.</option>
//                     </motion.select>
//                   </div>
//                   <div className="w-full">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       First Name
//                     </label>
//                     <motion.input
//                       name="name"
//                       type="text"
//                       required
//                       value={formdata?.name || ""}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
//                       placeholder="Enter first name"
//                       variants={inputVariants}
//                       whileFocus="focus"
//                       whileBlur="blur"
//                     />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Middle Name
//                 </label>
//                 <motion.input
//                   name="middle_name"
//                   type="text"
//                   value={formdata?.middle_name || ""}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
//                   placeholder="Enter your middle name (optional)"
//                   variants={inputVariants}
//                   whileFocus="focus"
//                   whileBlur="blur"
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Last Name
//                 </label>
//                 <motion.input
//                   name="last_name"
//                   type="text"
//                   required
//                   value={formdata?.last_name || ""}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
//                   placeholder="Enter your last name"
//                   variants={inputVariants}
//                   whileFocus="focus"
//                   whileBlur="blur"
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <motion.input
//                   name="email"
//                   type="email"
//                   required
//                   value={formdata?.email || ""}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md"
//                   placeholder="Enter your email"
//                   variants={inputVariants}
//                   whileFocus="focus"
//                   whileBlur="blur"
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <Button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-black via-black to-black text-white py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg transform "
//                   isLoading={isLoading}
//                 >
//                   Register
//                 </Button>
//               </motion.div>
//             </form>

//             <motion.p
//               variants={itemVariants}
//               className="mt-6 text-center text-xs sm:text-sm text-gray-600"
//             >
//               Already have an account?{" "}
//               <a
//                 href="/login"
//                 className="text-blue-700 hover:text-blue-600 font-semibold transition-colors duration-300"
//               >
//                 Sign in
//               </a>
//             </motion.p>
//           </div>

//         </div>
//       </motion.div>
//     </>
//   );
// }

"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import OTPVerification from "./OTPVerification"
import { useSelector, useDispatch } from "react-redux"
import { UpdateFormData, SignUp } from "../Redux/ReduxSlice/UserSlice"
import { ArrowRight, CheckCircle, Lock, Mail, Phone, User } from "lucide-react"

export function RegisterForm() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { formData: formdata } = useSelector((state) => state.user)
  const [otp, setOtp] = useState("")
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false)
  const [otpModel, setOtpModel] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(SignUp(formdata))
    setOtpModel(true)
    setOtp("123456")
    setIsOtpModalOpen(true)
  }

  const onCloseModel = () => {
    setIsOtpModalOpen(false)
    setOtpModel(false)
  }

  const handleChange = (e) => {
    dispatch(UpdateFormData(e.target))
  }

  const handleVerifyOtp = (otpInput) => {
    if (otpInput === "123456") {
      setIsOtpModalOpen(false)
      setOtpModel(false)
      toast.success("Success! OTP validation is done")
      navigate("/login")
      toast.success("Registration successful! You can now login.", {
        position: "top-right",
        autoClose: 2000,
      })
    } else {
      toast.error("Invalid OTP", {
        position: "top-right",
        autoClose: 2000,
      })
    }
  }

  const handleResendOtp = () => {
    setTimeout(() => {
      setOtp("123456")
      toast.info("OTP resent successfully!")
    }, 1000)
  }

  // Animation variants
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Join the IETE Community</h1>
              <p className="text-gray-300 mb-6">
                Become a member of India's leading professional society for electronics and telecommunication engineers.
              </p>

              <div className="space-y-4 mt-8">
                <motion.div variants={itemVariants} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                  <p>Access to exclusive technical resources and journals</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                  <p>Networking opportunities with industry professionals</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                  <p>Discounted rates for workshops and conferences</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                  <p>Professional development and certification programs</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Prof. Sunil Mehta</h3>
                    <p className="text-sm text-gray-400">IETE Fellow Member</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "IETE membership has been instrumental in my professional growth. The technical resources and
                  networking opportunities are unparalleled in the industry."
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="https://www.iete.org/"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn more about membership benefits
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Registration Form Section - Right side on desktop, bottom on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 bg-white p-8 md:p-12 flex items-center justify-center"
        >
          <div className="w-full max-w-md">
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8"
            >
              IETE Membership Registration
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title and First Name */}
              <motion.div variants={itemVariants} className="flex space-x-3">
                <div className="w-1/4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <motion.select
                    name="title"
                    value={formdata?.title || ""}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    variants={inputVariants}
                    whileFocus="focus"
                  >
                    <option value="">Select</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                  </motion.select>
                </div>
                <div className="w-3/4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <motion.input
                      name="name"
                      type="text"
                      required
                      value={formdata?.name || ""}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="First name"
                      variants={inputVariants}
                      whileFocus="focus"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Middle Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                <motion.input
                  name="middle_name"
                  type="text"
                  value={formdata?.middle_name || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Middle name (optional)"
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>

              {/* Last Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <motion.input
                  name="last_name"
                  type="text"
                  required
                  value={formdata?.last_name || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Last name"
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>

              {/* Email Address */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <motion.input
                    name="email"
                    type="email"
                    required
                    value={formdata?.email || ""}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </div>
              </motion.div>

              {/* Mobile Number */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>
                  <motion.input
                    name="mobile_number"
                    type="tel"
                    required
                    value={formdata?.mobile_number || ""}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="+91-XXXX-XXXXXX"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <motion.input
                    name="password"
                    type="password"
                    required
                    value={formdata?.password || ""}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Password (9+ characters)"
                    variants={inputVariants}
                    whileFocus="focus"
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
                    name="confirm_password"
                    type="password"
                    required
                    value={formdata?.confirm_password || ""}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Confirm password"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </div>
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    I agree to the{" "}
                    <a href="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </motion.div>

              {/* Register Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg"
                  isLoading={isLoading}
                >
                  Register
                </Button>
              </motion.div>
            </form>

            {/* Login Link */}
            <motion.p variants={itemVariants} className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                Sign in
              </a>
            </motion.p>

            {/* Additional help text */}
            <motion.p variants={itemVariants} className="mt-4 text-center text-xs text-gray-500">
              Need help with registration?{" "}
              <a href="mailto:support@iete.org" className="text-blue-600 hover:underline">
                Contact support
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </>
  )
}