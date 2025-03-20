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
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { toast } from 'react-toastify';
import OTPVerification from './OTPVerification';
import { useNavigate } from 'react-router-dom';  //

export function RegisterForm() {
  const navigate = useNavigate();  //
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
      toast.success('Success! OTP validation is done')
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Full Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Phone Number
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
          >
            Register
          </Button>
        </div>
      </form>

      {isOtpModalOpen && (
        <OTPVerification
          onVerify={handleVerifyOtp}
          onResend={handleResendOtp}
          isLoading={isLoading}
          onClose={handleCloseOtpModal}
        />
      )}

      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{' '}
        <a href="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
          Sign in
        </a>
      </p>
    </motion.div>
  );
}