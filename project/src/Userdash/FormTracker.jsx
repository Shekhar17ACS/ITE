import  React from "react"
// import  { FormData } from "../types"
import { CheckCircle, Clock, XCircle, AlertCircle, Lock, Download } from "lucide-react"
import { useState } from "react"
import { saveAs } from "file-saver"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"

// interface FormTrackerProps {
//   formData: FormData
// }

const FormTracker = ({ formData }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleExport = (format) => {
    if (format === "pdf") {
      const doc = new Blob([JSON.stringify(formData, null, 2)], { type: "application/pdf" })
      saveAs(doc, "Application_Status.pdf")
    } else if (format === "excel") {
      const ws = XLSX.utils.json_to_sheet([formData])
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, "Application")
      XLSX.writeFile(wb, "Application_Status.xlsx")
    } else if (format === "csv") {
      const csvData = Object.keys(formData)
        .map((key) => `${key},${formData[key]}`)
        .join("\n")
      const blob = new Blob([csvData], { type: "text/csv" })
      saveAs(blob, "Application_Status.csv")
    }
    setDropdownOpen(false)
  }
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle className="h-8 w-8 text-green-600" />
      case "pending":
        return <Clock className="h-8 w-8 text-yellow-600" />
      default:
        return <XCircle className="h-8 w-8 text-red-600" />
    }
  }

  const getStatusBadge = (status) => {
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

  const getPaymentStatusBadge = (status) => {
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
      <div className="rounded-xl bg-white p-6 shadow-lg ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Application Status</h2>
          <div className="relative">
            <button
              className="flex items-center gap-2 rounded-lg bg-black px-6 py-2 text-white transition-colors hover:bg-gray-700"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <Download className="h-5 w-5" /> Export
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg">
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleExport("pdf")}>PDF</button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleExport("excel")}>Excel</button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleExport("csv")}>CSV</button>
              </div>
            )}
          </div>
        </div>


        {/* Application Details */}
        <div className="mb-8 grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Application No</h3>
            <p className=" font-semibold">{formData.applicationNo}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Email</h3>
            <p className=" font-semibold">{formData.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">User ID</h3>
            {formData.userId ? (
              <p className="font-semibold">{formData.userId}</p>
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
            <span className="text-lg font-medium">Amount:</span>
            <span className="text-xl font-bold">₹{formData.amount.toLocaleString()}</span>
          </div>
        </div>

        <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Application Progress</h3>

        <div className="relative space-y-8 mx-auto max-w-3xl">
          {formData.steps.map((step, index) => (
            <div key={step.id} className="relative flex items-start sm:items-center space-x-4">

              {/* Timeline Icon */}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-gray-300 shadow-md">
                {getStatusIcon(step.status)}
              </div>

              {/* Vertical Connector */}
              {index < formData.steps.length - 1 && (
                <div className="absolute left-5 top-10 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-100"></div>
              )}

              {/* Step Details */}
              <div className="ml-6 w-full rounded-lg bg-gray-50 p-4 shadow-md hover:shadow-lg transition duration-300">
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold text-gray-700">{step.title}</h3>
    {step.date && (
      <p className="text-sm text-gray-500">
        {new Date(step.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    )}
  </div>
</div>

            </div>
          ))}
        </div>



      </div>
    </div>
  )
}

export default FormTracker

