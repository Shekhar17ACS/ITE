import React from "react"
// import { PaymentHistory as PaymentHistoryType } from "../types"
import { CheckCircle, Clock, XCircle, Download, Info } from "lucide-react"

// interface PaymentHistoryProps {
//   payments: PaymentHistoryType[]
// }

const PaymentHistory= ({ payments }) => {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle className="text-green-600" />
      case "pending":
        return <Clock className="text-yellow-600" />
      default:
        return <XCircle className="text-red-600" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">Payment History</h2>

        {/* Payment Summary */}
        <div className="mb-6 grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Payments</h3>
            <p className="text-2xl font-bold">{payments.length}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Amount</h3>
            <p className="text-2xl font-bold">
              ₹{payments.reduce((sum, payment) => sum + payment.amount, 0).toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Admin Fees</h3>
            <p className="text-2xl font-bold">
              ₹{payments.reduce((sum, payment) => sum + payment.adminFee, 0).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Application No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Admin Fee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm">{payment.applicationNo}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    {new Date(payment.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">₹{payment.amount.toLocaleString()}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">₹{payment.adminFee.toLocaleString()}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">{payment.transactionId || "-"}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">{payment.paymentMethod || "-"}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(payment.status)}
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          payment.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : payment.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button
                        className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        title="Download Receipt"
                      >
                        <Download size={18} />
                      </button>
                      <button
                        className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        title="View Details"
                      >
                        <Info size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Remarks */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Payment Remarks</h3>
          {payments.map((payment) => (
            <div key={`remark-${payment.id}`} className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{payment.transactionId || `Payment #${payment.id}`}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(payment.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div
                  className={`rounded-full px-3 py-1 text-xs ${
                    payment.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {payment.status}
                </div>
              </div>
              <p className="mt-2 text-sm">{payment.remarks || "No remarks available"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory

