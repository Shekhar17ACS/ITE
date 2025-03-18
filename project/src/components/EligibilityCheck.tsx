import { motion } from 'framer-motion';
import MultiStepForm from '../components/pages/MultiStepForm';
export function EligibilityCheck() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-full mx-auto p-8 bg-gray-100 rounded-3xl"
    >
      {/* <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Eligibility Check
      </h2> */}
      {/* Add your eligibility check content here */}
      <MultiStepForm />
    </motion.div>
  );
}