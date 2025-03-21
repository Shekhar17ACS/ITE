import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OTPVerification from './OTPVerification';

export function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'otp' | null>(null);

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginMethod('email');

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === 'admin@gmail.com' && password === 'admin') {
      toast.success('Login successful! Redirecting...', { autoClose: 2000 });
      setTimeout(() => {
        navigate('/admin'); // Direct navigation, no OTP
      }, 2000);
    } else {
      toast.error('Invalid credentials! Please try again.');
    }

    setIsLoading(false);
  };

  const handleOtpLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginMethod('otp');

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === 'admin@gmail.com') {
      toast.success('OTP sent successfully! Please verify...', { autoClose: 2000 });
      setTimeout(() => {
        setOtp('123456');
        setIsOtpModalOpen(true);
      }, 2000);
    } else {
      toast.error('Invalid email! Please try again.');
    }

    setIsLoading(false);
  };

  const handleVerifyOtp = (otp: string) => {
    if (otp === '123456') {
      setIsOtpVerified(true);
      setIsOtpModalOpen(false);
      toast.success('Success! OTP validation is done');
      navigate('/admin');
    } else {
      toast.error('Invalid OTP');
    }
  };

  const handleResendOtp = () => {
    setTimeout(() => {
      setOtp('123456');
      toast.info('OTP resent successfully!');
    }, 1000);
  };

  const handleCloseOtpModal = () => {
    setIsOtpModalOpen(false);
  };

  // Enhanced animation variants
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
      boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.3), 0 6px 14px rgba(0, 0, 0, 0.08)",
      background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(245, 245, 255, 0.95))",
      borderColor: "rgba(99, 102, 241, 0.9)",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    blur: {
      scale: 1,
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.04)",
      background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(240, 240, 245, 0.6))",
      borderColor: "rgba(209, 213, 219, 0.6)",
      transition: { duration: 0.25, ease: "easeOut" },
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
          Welcome Back
        </h2>
        <p className="mt-3 text-sm text-gray-500 font-medium">Access your premium account</p>
      </motion.div>

      <form className="space-y-7 relative z-10" onSubmit={loginMethod === 'email' ? handleEmailLogin : handleOtpLogin}>
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
            Email Address
          </label>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            animate="blur" // Default state when not focused
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-xl border py-3 px-5 text-gray-900 shadow-md placeholder:text-gray-400/70 focus:ring-0 transition-all duration-300 sm:text-sm font-medium outline-none appearance-none"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
            Password
          </label>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            animate="blur" // Default state when not focused
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-xl border py-3 px-5 text-gray-900 shadow-md placeholder:text-gray-400/70 focus:ring-0 transition-all duration-300 sm:text-sm font-medium outline-none appearance-none"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between text-sm"
        >
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-200 text-indigo-600 focus:ring-indigo-500 transition-all duration-200 shadow-sm"
            />
            <label htmlFor="remember-me" className="ml-3 text-gray-600 font-medium">
              Remember me
            </label>
          </div>

          <a
            href="/forgot-password"
            className="font-semibold text-indigo-600 hover:text-indigo-500 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-indigo-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            Forgot password?
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
          <Button
            type="submit"
            onClick={() => setLoginMethod('email')}
            className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:via-indigo-800 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            isLoading={isLoading && loginMethod === 'email'}
          >
            <motion.span
              className="absolute inset-0 bg-white/15"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <span className="relative z-10">Login with Email</span>
          </Button>

          <Button
            type="submit"
            onClick={() => setLoginMethod('otp')}
            className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            isLoading={isLoading && loginMethod === 'otp'}
          >
            <motion.span
              className="absolute inset-0 bg-white/15"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <span className="relative z-10">Login with OTP</span>
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
        Not a member?{' '}
        <a
          href="/register"
          className="font-semibold text-indigo-600 hover:text-indigo-500 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-indigo-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
        >
          Register now
        </a>
      </motion.p>
    </motion.div>
  );
}