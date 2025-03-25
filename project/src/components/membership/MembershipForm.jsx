import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
// import MultiStepForm from '../pages/MultiStepForm';
 import { useAuth } from '../../Services/AuthServices/AuthUser';


const membershipTypes = [
  { id: 'student', name: 'Student Membership', price: '₹500/year' },
  { id: 'professional', name: 'Professional Membership', price: '₹2000/year' },
  { id: 'corporate', name: 'Corporate Membership', price: '₹5000/year' },
];

export function MembershipForm() {
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {user} = useAuth();

  console.log("user",user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl"
    >
        {/* <MultiStepForm/> */}
      <form onSubmit={handleSubmit} className="space-y-8 mt-12">
        <div>
          <label className="text-base font-semibold text-gray-900">Membership Type</label>
          <p className="text-sm text-gray-500">Select the type of membership you want to apply for</p>
          <fieldset className="mt-4">
            <div className="space-y-4">
              {membershipTypes.map((type) => (
                <div key={type.id} className="flex items-center">
                  <input
                    id={type.id}
                    name="membership-type"
                    type="radio"
                    value={type.id}
                    checked={selectedType === type.id}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label htmlFor={type.id} className="ml-3 flex items-center justify-between w-full">
                    <span className="block text-sm font-medium text-gray-900">{type.name}</span>
                    <span className="block text-sm text-gray-500">{type.price}</span>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
              Institution/Company Name
            </label>
            <input
              type="text"
              name="institution"
              id="institution"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
              Highest Qualification
            </label>
            <input
              type="text"
              name="qualification"
              id="qualification"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full mb-4"
            isLoading={isLoading}
          >
            Submit Application
          </Button>
        </div>
      </form>
    
    </motion.div>
  );
}