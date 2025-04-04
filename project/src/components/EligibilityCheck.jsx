import { motion } from 'framer-motion';
import MultiStepForm from './pages/MultiStepForm';
export function EligibilityCheck() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-full mx-auto p-8 bg-gray-100 rounded-3xl"
    >
      <MultiStepForm />
    </motion.div>
  );
}