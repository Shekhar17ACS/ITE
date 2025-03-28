import type React from "react"
import type { FormData } from "../types"
import { CheckCircle, Clock, XCircle, AlertCircle, Lock } from "lucide-react"

interface FormTrackerProps {
  formData: FormData
}

const FormTracker: React.FC<FormTrackerProps> = ({ formData }) => {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle className="h-8 w-8 text-green-600" />
      case "pending":
        return <Clock className="h-8 w-8 text-yellow-600" />
      default:
        return <XCircle className="h-8 w-8 text-red-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">In Progress</span>
      case "Completed":
        return <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Completed</span>
      case "Pending":
        return <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">Pending</span>
      default:
        return <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">{status}</span>
    }
  }

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "Success":
        return <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Success</span>
      case "Pending":
        return <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">Pending</span>
      case "Failed":
        return <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">Failed</span>
      default:
        return <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">{status}</span>
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">Application Status</h2>

        {/* Application Details */}
        <div className="mb-8 grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Application No</h3>
            <p className="text-lg font-semibold">{formData.applicationNo}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Email</h3>
            <p className="text-lg font-semibold">{formData.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">User ID</h3>
            {formData.userId ? (
              <p className="text-lg font-semibold">{formData.userId}</p>
            ) : (
              <p className="text-sm italic text-gray-500">Will be assigned after approval</p>
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Application Date</h3>
            <p className="text-lg font-semibold">
              {new Date(formData.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Status Overview */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-medium">Application Status</h3>
              {getStatusBadge(formData.status)}
            </div>
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-medium">Admin Approval</h3>
              {formData.isApproved ? (
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Approved</span>
              ) : (
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                  Pending
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">
              {formData.isApproved ? "Your application has been approved" : "Waiting for admin approval"}
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-medium">Payment Status</h3>
              {getPaymentStatusBadge(formData.paymentStatus)}
            </div>
            <p className="text-sm text-gray-500">Amount: ₹{formData.amount.toLocaleString()}</p>
          </div>
        </div>

        {/* Login Access Section */}
        {formData.isApproved && formData.paymentStatus === "Success" && (
          <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <h3 className="font-medium text-green-800">Your application is fully approved</h3>
                <p className="text-sm text-green-700">You can now access your account using your ID and password</p>
              </div>
              <a href="#login" className="ml-auto rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                Login Now
              </a>
            </div>
          </div>
        )}

        {(!formData.isApproved || formData.paymentStatus !== "Success") && (
          <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
              <div>
                <h3 className="font-medium text-yellow-800">Login access pending</h3>
                <p className="text-sm text-yellow-700">
                  {!formData.isApproved
                    ? "Your application needs admin approval before you can login"
                    : "Complete your payment to access your account"}
                </p>
              </div>
              <div className="ml-auto flex items-center space-x-2 rounded-lg border border-yellow-300 bg-yellow-100 px-3 py-1.5">
                <Lock className="h-4 w-4 text-yellow-700" />
                <span className="text-sm font-medium text-yellow-700">Locked</span>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="text-lg font-medium">Loan Amount:</span>
            <span className="text-xl font-bold">₹{formData.amount.toLocaleString()}</span>
          </div>
        </div>

        <h3 className="mb-4 text-xl font-semibold">Application Progress</h3>
        <div className="relative space-y-8">
          {formData.steps.map((step, index) => (
            <div key={step.id} className="relative flex items-start">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center">
                {getStatusIcon(step.status)}
              </div>

              {/* Vertical line */}
              {index < formData.steps.length - 1 && (
                <div
                  className={`absolute left-4 top-8 h-16 w-0.5 -translate-x-1/2 ${
                    step.status === "completed" ? "bg-green-600" : "bg-gray-200"
                  }`}
                />
              )}

              <div className="ml-12 pb-8">
                <h3 className="text-lg font-medium">{step.title}</h3>
                {step.date && (
                  <p className="mt-1 text-sm text-gray-500">
                    {new Date(step.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
            Manage Application
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormTracker

