import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

<<<<<<< HEAD
  const handleSubmit = async (e:any) => {
=======
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
>>>>>>> 775ebc615f7958c118aff0edd4183cf0f15fdc3c
    e.preventDefault();
    setIsLoading(true);

    // Simulated API Call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulated Admin Login Validation
    if (email === 'admin@gmail.com' && password === 'admin') {
      toast.success('Login successful! Redirecting...', { autoClose: 2000 });
      
      setTimeout(() => {
        navigate('/admin'); // Redirect to Admin Dashboard
      }, 2000);
    } else {
      toast.error('Invalid credentials! Please try again.');
    }

    setIsLoading(false);
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
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="/forgot-password" className="font-semibold text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <Button type="submit" className="w-full" isLoading={isLoading}>
            Sign in
          </Button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500 mb-5">
        Not a member?{' '}
        <a href="/register" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
          Register now
        </a>
      </p>
    </motion.div>
  );
}
