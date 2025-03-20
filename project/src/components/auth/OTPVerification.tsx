import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { toast } from 'react-toastify';

interface OTPVerificationProps {
  onVerify: (otp: string) => void;
  onResend: () => void;
  isLoading: boolean;
  onClose: () => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  onVerify,
  onResend,
  isLoading,
  onClose,
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array for 6 OTP digits
  const [error, setError] = useState(null);
  const [resent, setResent] = useState(false);

  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Invalid OTP: please enter 6 digits');
      toast.error('Invalid OTP: please enter 6 digits');
      return;
    }
    if (otpString === '') {
      setError('Invalid OTP: please enter a value');
      return;
    }
    onVerify(otpString);
  };

  const handleResend = () => {
    if (resent) {
      setError('You have already resent the OTP');
      toast.success('You have already resent the OTP');
      return;
    }
    onResend();
    setResent(true);
  };

  const handleInputChange = (index: number, value: string) => {
    if (/[^0-9]/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take only the last character
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  // Enhanced animation variants (matching LoginForm)
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.05,
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
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50"
    >
      <motion.div
        variants={itemVariants}
        className="max-w-md w-full mx-4 py-12 px-10 bg-gradient-to-br from-gray-50/95 to-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-100/50 relative overflow-hidden"
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

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300 transform hover:scale-110 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <motion.h2
          variants={itemVariants}
          className="text-3xl font-extrabold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 text-center mb-10 relative z-10"
        >
          Verify OTP
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-3 mb-10 relative z-10"
        >
          {otp.map((digit, index) => (
            <motion.input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              maxLength={1}
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              className="w-12 h-12 text-center rounded-lg border-0 bg-white/70 text-gray-900 shadow-md ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-xl font-medium"
            />
          ))}
        </motion.div>

        {error && (
          <motion.p
            variants={itemVariants}
            className="text-red-600 text-sm mb-8 text-center relative z-10 font-medium"
          >
            {error}
          </motion.p>
        )}

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-6 relative z-10"
        >
          <Button
            type="button"
            onClick={handleVerify}
            isLoading={isLoading}
            className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:via-indigo-800 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <span className="relative z-10">Verify</span>
          </Button>

          <Button
            type="button"
            onClick={handleResend}
            className="w-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <span className="relative z-10">Resend OTP</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OTPVerification;