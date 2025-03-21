// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/Button';

// export function RegisterForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setIsLoading(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
//     >
//       <form className="space-y-6" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
//             Full Name
//           </label>
//           <div className="mt-2">
//             <input
//               id="name"
//               name="name"
//               type="text"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//             Email address
//           </label>
//           <div className="mt-2">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
//             Phone Number
//           </label>
//           <div className="mt-2">
//             <input
//               id="phone"
//               name="phone"
//               type="tel"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//             Password
//           </label>
//           <div className="mt-2">
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
//             Confirm Password
//           </label>
//           <div className="mt-2">
//             <input
//               id="confirmPassword"
//               name="confirmPassword"
//               type="password"
//               required
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <Button
//             type="submit"
//             className="w-full"
//             isLoading={isLoading}
//           >
//             Register
//           </Button>
//         </div>
//       </form>

//       <p className="mt-10 text-center text-sm text-gray-500">
//         Already have an account?{' '}
//         <a href="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
//           Sign in
//         </a>
//       </p>
//     </motion.div>
//   );
// }




// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/Button';

// export function RegisterForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setIsLoading(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
//     >
//       <form className="space-y-6" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
//             Full Name
//           </label>
//           <div className="mt-2">
//             <input
//               id="name"
//               name="name"
//               type="text"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//             Email address
//           </label>
//           <div className="mt-2">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
//             Phone Number
//           </label>
//           <div className="mt-2">
//             <input
//               id="phone"
//               name="phone"
//               type="tel"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//             Password
//           </label>
//           <div className="mt-2">
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
//             Confirm Password
//           </label>
//           <div className="mt-2">
//             <input
//               id="confirmPassword"
//               name="confirmPassword"
//               type="password"
//               required
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <Button
//             type="submit"
//             className="w-full"
//             isLoading={isLoading}
//           >
//             Register
//           </Button>
//         </div>
//       </form>

//       <p className="mt-10 text-center text-sm text-gray-500">
//         Already have an account?{' '}
//         <a href="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
//           Sign in
//         </a>
//       </p>
//     </motion.div>
//   );
// }




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OTPVerification from './OTPVerification';

export function RegisterForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Simulated OTP
    setOtp('123456');
    setIsOtpModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVerifyOtp = (otp: string) => {
    if (otp === '123456') {
      setIsOtpVerified(true);
      setIsOtpModalOpen(false);
      toast.success('Success! OTP validation is done');
      navigate('/login'); // Redirect to Login
      toast.success('Registration successful! You can now login.', {
        position: 'top-right',
        autoClose: 2000,
      });
    } else {
      toast.error('Invalid OTP', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  const handleResendOtp = () => {
    // Simulated API Call
    setTimeout(() => {
      setOtp('123456');
    }, 1000);
  };

  const handleCloseOtpModal = () => {
    setIsOtpModalOpen(false);
  };

  // Enhanced animation variants (matching LoginForm)
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smooth bounce
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Smooth overshoot effect
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    blur: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16 sm:mx-auto sm:w-full sm:max-w-lg px-8 py-10 bg-gradient-to-br from-gray-50/90 to-white/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden relative"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 70%)",
      }}
    >
      {/* Subtle animated background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div className="text-center mb-10 relative z-10" variants={itemVariants}>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          Join Us Today
        </h2>
        <p className="mt-3 text-sm text-gray-500 font-medium">Create your premium account</p>
      </motion.div>

      <form className="space-y-7 relative z-10" onSubmit={handleSubmit}>
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
            Full Name
          </label>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="block w-full rounded-xl border-0 py-3 px-5 bg-white/50 text-gray-900 shadow-md ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 sm:text-sm font-medium"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
            Email Address
          </label>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-xl border-0 py-3 px-5 bg-white/50 text-gray-900 shadow-md ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 sm:text-sm font-medium"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
            Phone Number
          </label>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="block w-full rounded-xl border-0 py-3 px-5 bg-white/50 text-gray-900 shadow-md ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 sm:text-sm font-medium"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
            Password
          </label>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="block w-full rounded-xl border-0 py-3 px-5 bg-white/50 text-gray-900 shadow-md ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 sm:text-sm font-medium"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
            Confirm Password
          </label>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block w-full rounded-xl border-0 py-3 px-5 bg-white/50 text-gray-900 shadow-md ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 sm:text-sm font-medium"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:via-indigo-800 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
            isLoading={isLoading}
          >
            <motion.span
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <span className="relative z-10">Register</span>
          </Button>
        </motion.div>
      </form>

      <AnimatePresence>
        {isOtpModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
            className="relative z-10"
          >
            <OTPVerification
              onVerify={handleVerifyOtp}
              onResend={handleResendOtp}
              isLoading={isLoading}
              onClose={handleCloseOtpModal}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        variants={itemVariants}
        className="mt-10 text-center text-sm text-gray-500 relative z-10"
      >
        Already have an account?{' '}
        <a
          href="/login"
          className="font-semibold text-indigo-600 hover:text-indigo-500 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-indigo-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
        >
          Sign in
        </a>
      </motion.p>
    </motion.div>
  );
}