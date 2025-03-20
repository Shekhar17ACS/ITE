import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [resent, setResent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError('Invalid OTP: please enter 6 digits');
      toast.error('Invalid OTP: please enter 6 digits')
      return;
    }
    if (otp === '') {
      setError('Invalid OTP: please enter a value');
      return;
    }
    onVerify(otp);
  };

  const handleResend = () => {
    if (resent) {
      setError('You have already resent the OTP');
      toast.success('You have already resent the OTP')
      return;
    }
    onResend();
    setResent(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 6) return;
    setOtp(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-sm mx-auto p-8 bg-white rounded-lg shadow-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition duration-300"
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl font-bold text-center mb-4"
        >
          Verify OTP
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative"
        >
          <input
            type={showPassword ? 'text' : 'password'}
            value={otp}
            onChange={handleInputChange}
            placeholder="Enter OTP"
            minLength={6}
            maxLength={6}
            pattern="[0-9]{6}"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2"
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-500" />
            ) : (
              <FaEye className="text-gray-500" />
            )}
          </button>
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-red-500 text-sm mb-2"
          >
            {error}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col justify-between gap-2"
        >
          <Button
            type="button"
            onClick={handleVerify}
            isLoading={isLoading}
            className="w-full mb-4"
          >
            Verify
          </Button>
          <Button
            type="button"
            onClick={handleResend}
            className="w-full mb-4"
          >
            Resend OTP
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OTPVerification;