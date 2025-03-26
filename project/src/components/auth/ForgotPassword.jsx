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








// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "../ui/Button";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import OTPVerification from "./OTPVerification";
// import {
//   forgotPasswordAsync,
//   resetPasswordAsync,
//   setConfirmPassword,
//   setIsOtpModalOpen,
//   setIsOtpVerified,
//   setNewPassword,
//   setEmail,
// } from "../Redux/ReduxSlice/ForgotPasswordSlice";
// import { useDispatch, useSelector } from "react-redux";

// export function ForgotPassword() {
//   const dispatch = useDispatch();
//   const {
//     email,
//     otp,
//     isOtpVerified,
//     isLoading,
//     isOtpModalOpen,
//     newPassword,
//     confirmPassword,
//     error,
//   } = useSelector((state) => state.forgotPassword);
//   const [isPasswordReset, setIsPasswordReset] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(forgotPasswordAsync(email));
//   };

//   const handleVerifyOtp = (otp) => {
//     if (otp === otp) {
//       dispatch(setIsOtpVerified(true));
//       dispatch(setIsOtpModalOpen(false));
//       toast.success("Success! OTP validation is done");
//     } else {
//       toast.error("Invalid OTP");
//     }
//   };

//   const handleResetPassword = (e) => {
//     e.preventDefault();
//     dispatch(resetPasswordAsync({ newPassword, confirmPassword }));
//   };

//   return (
//     <motion.div className="mt-16 sm:mx-auto sm:w-full sm:max-w-lg px-8 py-10 bg-gradient-to-br from-gray-50/90 to-white/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden relative">
//       <motion.div className="text-center mb-10 relative z-10">
//         <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//           Reset Your Password
//         </h2>
//         <p className="mt-3 text-sm text-gray-500 font-medium">
//           Enter your email to proceed
//         </p>
//       </motion.div>

//       {!isOtpVerified ? (
//         <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               required
//               value={email?.email}
//               onChange={(e) => dispatch(setEmail(e.target.value))}
//               className="block w-full rounded-xl border py-3 px-5 text-gray-900 shadow-md"
//             />
//           </div>

//           <div>
//             <Button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg"
//               isLoading={isLoading}
//             >
//               Send Password Reset Email
//             </Button>
//           </div>
//         </form>
//       ) : (
//         <form
//           onSubmit={handleResetPassword}
//           className="space-y-7 relative z-10"
//         >
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               New Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               required
//               value={newPassword}
//               onChange={(e) => dispatch(setNewPassword(e.target.value))}
//               className="block w-full rounded-xl border py-3 px-5 text-gray-900 shadow-md"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Confirm Password
//             </label>
//             <input
//               id="confirmPassword"
//               type="password"
//               required
//               value={confirmPassword}
//               onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
//               className="block w-full rounded-xl border py-3 px-5 text-gray-900 shadow-md"
//             />
//           </div>

//           <div>
//             <Button
//               type="submit"
//               className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold shadow-lg"
//             >
//               Reset Password
//             </Button>
//           </div>
//         </form>
//       )}

//       <AnimatePresence>
//         {isOtpModalOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="relative z-10"
//           >
//             <OTPVerification onVerify={handleVerifyOtp} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }