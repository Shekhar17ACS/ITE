import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About IETE</h2>
          <p className="mt-4 text-lg text-gray-500">
            Advancing technology through professional excellence since 1953
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://content3.jdmagicbox.com/comp/chandigarh/12/0172p172std7012/catalogue/institution-of-electronics-and-telecommunication-engineers-chandigarh-sector-30b-chandigarh-computer-training-institutes-for-c-programming-trMKszQGLz.jpg"
              alt="IETE Building"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              IETE is committed to attaining technological self-reliance in the areas of Electronics, 
              Telecommunication, Information Technology and related areas. We focus on advancing 
              entrepreneurship and providing networking opportunities for professionals.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-600">
              To be the premier professional society in India dedicated to the advancement of science 
              and technology in electronics, telecommunication, and IT. We aim to foster research, 
              innovation, and sustainable development in these fields.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-600 text-lg">50+</h4>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-600 text-lg">10,000+</h4>
                <p className="text-gray-600">Active Members</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our History</h3>
            <p className="text-gray-600">
              IETE was founded in 1953 with the objective of promoting the advancement of science and 
              technology in electronics, telecommunication, and IT. Over the years, we have grown to 
              become one of the largest and most respected professional societies in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <img
              src="https://images.pexels.com/photos/19073633/pexels-photo-19073633/free-photo-of-antenna-in-arctic.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="IETE History"
              className="rounded-lg shadow-lg"
            /> */}
            <video
    width="600"
    loop
  muted
  autoPlay
  playsInline
    className="rounded-lg shadow-lg"
  >
    <source src="https://videos.pexels.com/video-files/2792370/2792370-sd_640_360_30fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="IETE Achievements"
              className="rounded-lg shadow-lg"
            /> */}
            <video
    width="600"
    loop
  muted
  autoPlay
  playsInline
    className="rounded-lg shadow-lg"
  >
    <source src="https://videos.pexels.com/video-files/854262/854262-sd_640_360_24fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Achievements</h3>
            <p className="text-gray-600">
              IETE has achieved numerous milestones over the years, including the establishment of 
              several research centers, the development of new technologies, and the recognition of 
              our members' contributions to the field.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Members</h3>
            <p className="text-gray-600">
              IETE has a diverse membership base of over 10,000 professionals from various fields, 
              including electronics, telecommunication, IT, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="IETE Members"
              className="rounded-lg shadow-lg"
            /> */}
              <video
    width="600"
    loop
  muted
  autoPlay
  playsInline
    className="rounded-lg shadow-lg"
  >
    <source src="https://videos.pexels.com/video-files/7253660/7253660-sd_960_506_30fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
}