"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, Info, AlertCircle } from "lucide-react"

const EligibleForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    income: "",
    occupation: "",
    address: "",
    phone: "",
    idProofType: "",
    idProofNumber: "",
    password: "",
    confirmPassword: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [applicationNo, setApplicationNo] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate a unique application number
    const newApplicationNo = `APP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
    setApplicationNo(newApplicationNo)
    setFormSubmitted(true)

    console.log("Form submitted:", { ...formData, applicationNo: newApplicationNo })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-6">
      {formSubmitted ? (
        <div className="rounded-lg bg-green-50 p-6 shadow-lg">
          <div className="mb-4 flex items-center space-x-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <h2 className="text-2xl font-bold text-green-800">Application Submitted Successfully</h2>
          </div>

          <div className="mb-6 rounded-lg bg-white p-4">
            <p className="mb-2 text-lg font-medium">Your Application Number:</p>
            <p className="text-2xl font-bold text-blue-600">{applicationNo}</p>
            <p className="mt-2 text-sm text-gray-600">
              Please save this application number for future reference. You will need it to track your application
              status.
            </p>
          </div>

          <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-600" />
              <div>
                <h3 className="font-medium text-yellow-800">Next Steps</h3>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-yellow-700">
                  <li>Our team will review your application within 2-3 business days</li>
                  <li>You will receive an email notification once your application is approved</li>
                  <li>After approval, you will need to complete the payment process</li>
                  <li>Once payment is confirmed, you will receive your login credentials</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFormSubmitted(false)}
              className="rounded-lg border border-blue-600 bg-white px-6 py-2 text-blue-600 transition-colors hover:bg-blue-50"
            >
              Submit Another Application
            </button>
            <button
              onClick={() => (window.location.href = "#track")}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
            >
              Track Your Application
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-lg bg-white p-4 shadow-lg sm:p-6">
          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-600" size={24} />
              <h2 className="text-xl font-bold sm:text-2xl">Eligibility Form</h2>
            </div>
            <p className="mt-2 text-gray-600">
              Complete this form to check your eligibility and submit your application
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-medium text-blue-800">Personal Information</h3>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-medium text-blue-800">Financial Information</h3>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Monthly Income</label>
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-medium text-blue-800">ID Verification</h3>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">ID Proof Type</label>
                  <select
                    name="idProofType"
                    value={formData.idProofType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select ID Type</option>
                    <option value="aadhar">Aadhar Card</option>
                    <option value="pan">PAN Card</option>
                    <option value="passport">Passport</option>
                    <option value="driving">Driving License</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">ID Number</label>
                  <input
                    type="text"
                    name="idProofNumber"
                    value={formData.idProofNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-medium text-blue-800">Account Setup</h3>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters long</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <div className="flex items-start space-x-2">
                <Info className="mt-0.5 h-5 w-5 text-blue-600" />
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to our terms and conditions. Your information will be verified, and
                  you will receive a unique ID upon approval.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-6"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default EligibleForm

