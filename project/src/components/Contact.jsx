"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { Mail, Phone, User, MessageSquare, BookOpen } from "lucide-react";
import img1 from '../assets/secretery.png';
import img2 from '../assets/02.png'
import img3 from '../assets/03.png'
import img4 from '../assets/04.png'
import img5 from '../assets/05.png'
import img6 from '../assets/06.png'
import img7 from '../assets/07.png'
import img8 from '../assets/08.png';
import img9 from '../assets/09.png';


export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsLoading(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            The Institution of Electronics and Telecommunication Engineers (IETE)
          </h1>
          <div className="text-center mt-2 text-sm md:text-base">
            <p>2, Institutional Area, Lodhi Road, New Delhi 110003</p>
            <p className="mt-1">
              <span className="inline-flex items-center mr-4">
                <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1" /> 011-43538858, 24649429
              </span>
              <span className="inline-flex items-center mr-4">
                <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1" /> Mobile: 9821801668, 9315422728
              </span>
              <span className="inline-flex items-center">
                <Mail className="h-3 w-3 md:h-4 md:w-4 mr-1" /> info@iete.org
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Secretary General Section */}
        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-0 md:pr-6 mb-4 md:mb-0"> {/* Increased width */}
  <img
    src={img1}
    alt="Secretary General Office"
    className="w-full md:w-[450px] h-[200px] md:h-[200px] rounded-lg object-cover"
  />
</div>

          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Secretary General</h2>
            <p className="font-medium text-gray-700 mb-2">Brig Arun Sehgal (Retd)</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>(Mob) 9971905421</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>(Office) 011-43538853, Extn:220</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>(Office) 011-24649429</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>sec.gen@iete.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Administration Section */}
        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row-reverse">
          <div className="md:w-1/2 pl-0 md:pl-6 mb-4 md:mb-0">
            <img
              src={img2}
              alt="Administration Team"
              className="w-full md:w-[400px] h-[300px] md:h-[250px] rounded-lg object-cover max-h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Administration</h2>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Bharat Bhushan (Extn-218): +91 9818054406</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Ms Vijay Laxmi (Extn-217): +91 9971299827</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Ms Anu Dua (Reception) (Extn-205): +91 9818712275</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Pankaj Kumar: +91 9868015719</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Arun Kumar (Extn-217): #9994665105</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Gulshan Singh: 9311827511</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accounts Section */}
        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-0 md:pr-6 mb-4 md:mb-0">
            <img
              src={img3}
              alt="Accounts Department"
              className="w-full md:w-[450px] h-[200px] md:h-[250px] rounded-lg object-cover max-h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Accounts</h2>
            <p className="font-medium text-gray-700 mb-2">
              Shri Mahesh Prasad Gupta
              <br />
              Assistant Secretary (Finance): 011-43642153
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>asfiete@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Sanjay Chawla (Extn-206): 9868008559</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>accounts@iete.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Sunil Kumar (Extn-208): 9999115594</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Membership Section */}
       


        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row-reverse">
          <div className="md:w-1/2 pl-0 md:pl-6 mb-4 md:mb-0">
            <img
              src={img5}
              alt="Membership Meeting"
              className="w-full md:w-[450px] h-[200px] md:h-[250px] rounded-lg object-cover max-h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Membership (USF, ORGANISATIONAL MEMBERS)
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>membership@iete.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri N Suresh (Extn-215): +91 9811576435</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Manoj Kumar: +91 9811576435</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Praveen Kumar: +91 9910558243</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Awards & Publications Section */}
        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-0 md:pr-6 mb-4 md:mb-0">
            <img
              src={img6}
              alt="Awards Ceremony"
              className="w-full md:w-[450px] h-[200px] md:h-[250px] rounded-lg object-cover max-h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Awards & Publications</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Ms. Sai Geeta (Extn-216): +91 9958168908</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>publication@iete.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Sanjeev Sharma (Extn-221): +91 9958167223</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Deepak Kumar (Extn-217): +91 9868431544</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Examination Section */}
        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row-reverse">
          <div className="md:w-1/2 pl-0 md:pl-6 mb-4 md:mb-0">
            <img
              src={img7}
              alt="Examination Hall"
              className="w-full md:w-[450px] h-[200px] md:h-[250px] rounded-lg object-cover max-h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Examination</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Chetan Arora (Extn-224): 9810578260</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>exam@iete.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Mohan Sajwan (Extn-222): 9891781994</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>iete.exam@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* IT Support Section */}
        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-0 md:pr-6 mb-4 md:mb-0">
            <img
              src={img8}
              alt="IT Support"
              className="w-full md:w-[450px] h-[200px] md:h-[250px] rounded-lg object-cover max-h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">IT Support</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri Suresh Challa (Extn-215): +91 8800435741</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Assistant Secretary (IT Support)</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>itsupport@iete.org</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row-reverse">
          <div className="md:w-1/2 pl-0 md:pl-6 mb-4 md:mb-0">
            <img
              src={img4}
              alt="Membership Meeting"
              className="w-full md:w-[450px] h-[200px] md:h-[250px] rounded-lg object-cover max-h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Membership (CORPORATE MEMBERS)
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>membership@iete.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri M P Kesarwani (Extn-214): +91 9911278880</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Shri D S Rawat: +91 9654022148</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="border border-dashed border-gray-300 p-4 md:p-6 mb-6 rounded-lg flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-0 md:pr-6 mb-4 md:mb-0">
            <img
              src={img9}
              alt="IT Support"
              className="w-full md:w-[450px] h-[200px] md:h-[250px] rounded-lg object-cover max-h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Centres' Activities</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>Nitin Juyal</span>
              </li>
              
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-gray-800 mr-2 mt-0.5" />
                <span>iete.cac@gmail.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 border border-dashed border-gray-300 p-4 md:p-6 rounded-lg bg-gray-50"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6 max-w-3xl mx-auto"
          >
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <User className="h-4 w-4 text-gray-600 mr-1" /> Name
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Mail className="h-4 w-4 text-gray-600 mr-1" /> Email
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <BookOpen className="h-4 w-4 text-gray-600 mr-1" /> Subject
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm"
                  placeholder="What is your message about?"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <MessageSquare className="h-4 w-4 text-gray-600 mr-1" /> Message
              </label>
              <div className="relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

