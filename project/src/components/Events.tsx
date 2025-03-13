// src/components/Events.tsx

import { motion } from 'framer-motion';

export function Events() {
  const events = [
    {
      id: 1,
      title: 'Event 1: Annual Conference',
      date: '2023-03-01',
      description: 'Join us for our annual conference, where we will discuss the latest trends and innovations in the field.',
      image: 'https://images.pexels.com/photos/22669860/pexels-photo-22669860/free-photo-of-people-sitting-at-event.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'New York, USA',
      time: '9:00 AM - 5:00 PM',
    },
    {
      id: 2,
      title: 'Event 2: Workshop on AI and Machine Learning',
      date: '2023-03-15',
      description: 'Join us for a workshop on AI and machine learning, where we will explore the latest techniques and tools in the field.',
      image: 'https://images.pexels.com/photos/9242834/pexels-photo-9242834.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'London, UK',
      time: '10:00 AM - 4:00 PM',
    },
    {
      id: 3,
      title: 'Event 3: Networking Reception',
      date: '2023-03-30',
      description: 'Join us for a networking reception, where you can meet and connect with other professionals in the field.',
      image: 'https://images.pexels.com/photos/12297608/pexels-photo-12297608.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Paris, France',
      time: '6:00 PM - 8:00 PM',
    },
    {
        id: 4,
        title: 'Event 4: Web Development Workshop',
        date: '2023-04-10',
        description: 'Join us for a workshop on web development, where we will cover the basics of HTML, CSS, and JavaScript.',
        image: 'https://images.pexels.com/photos/16023919/pexels-photo-16023919/free-photo-of-photo-of-a-html-code.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Berlin, Germany',
        time: '10:00 AM - 4:00 PM',
      },
      {
        id: 5,
        title: 'Event 5: Artificial Intelligence Conference',
        date: '2023-04-20',
        description: 'Join us for a conference on artificial intelligence, where we will explore the latest advancements and applications in the field.',
        image: 'https://images.pexels.com/photos/5181148/pexels-photo-5181148.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Tokyo, Japan',
        time: '9:00 AM - 5:00 PM',
      },
      {
        id: 6,
        title: 'Event 6: Cybersecurity Summit',
        date: '2023-04-30',
        description: 'Join us for a summit on cybersecurity, where we will discuss the latest threats and solutions in the field.',
        image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Sydney, Australia',
        time: '10:00 AM - 4:00 PM',
      },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Events</h2>
          <p className="mt-4 text-lg text-gray-500">
            Check out our upcoming events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mt-4">{event.title}</h3>
              <p className="text-lg text-gray-600">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-lg text-gray-600 mt-4">
                Location: {event.location}
              </p>
              <p className="text-lg text-gray-600">
                Time: {event.time}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}