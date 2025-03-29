"use client"

import { useState, useEffect } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import FormTracker from "./FormTracker"
import PaymentHistory from "./PaymentHistory"
import EligibleForm from "../components/pages/MultiStepForm.jsx"
import type { FormData, PaymentHistory as PaymentHistoryType } from "../types/index"

const mockFormData: FormData = {
  applicationNo: "APP-2024-0015",
  email: "user@example.com",
  userId: "USR-2024-0015",
  status: "In Progress",
  amount: 500000,
  date: "2024-03-15",
  isApproved: true,
  paymentStatus: "Pending",
  steps: [
    { id: 1, title: "Loan Application Received", status: "completed", date: "2024-03-15" },
    { id: 2, title: "Credit Check Complete", status: "completed", date: "2024-03-16" },
    { id: 3, title: "Submit Financial Documents", status: "pending", date: null },
    { id: 4, title: "Loan Agreement", status: "pending", date: null },
  ],
  images: [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&auto=format",
  ],
}

const mockPayments: PaymentHistoryType[] = [
  {
    id: "1",
    applicationNo: "APP-2024-0015",
    amount: 500000,
    adminFee: 5000,
    status: "Pending",
    date: "2024-03-15",
    transactionId: "TXN-2024-0015",
    paymentMethod: "UPI",
    remarks: "Awaiting bank confirmation",
  },
  {
    id: "2",
    applicationNo: "APP-2024-0010",
    amount: 300000,
    adminFee: 3000,
    status: "Completed",
    date: "2024-03-10",
    transactionId: "TXN-2024-0010",
    paymentMethod: "Credit Card",
    remarks: "Payment successful",
  },
]

function Userdashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("eligible")
  const [isMobile, setIsMobile] = useState(false)
  const userEmail = "user@example.com"

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false)
      }
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (isMobile) {
      setIsSidebarOpen(false)
    }
  }

  const handleLogout = () => {
    console.log("Logging out...")
  }

  return (
    <div className="flex h-screen bg-[#f4f2ee]">
      <aside
        className={`fixed left-0 top-0 z-40 h-full w-64 transform transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${!isMobile && isSidebarOpen ? "lg:relative lg:z-0" : ""}
        `}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
      </aside>

      <div
        className={`flex h-full w-full flex-col transition-all duration-300 ease-in-out
        ${!isMobile && isSidebarOpen ? "lg:ml-0" : "ml-0"}
      `}
      >
        <Header
          email={userEmail}
          onLogout={handleLogout}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-full">
            {activeTab !== "eligible" && (
              <div className="mb-4 flex justify-end">
                <button
                  onClick={() => setActiveTab("eligible")}
                  className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                >
                  Go Back
                </button>
              </div>
            )}

            {activeTab === "eligible" && <EligibleForm />}
            {activeTab === "form" && <FormTracker formData={mockFormData} />}
            {activeTab === "payments" && <PaymentHistory payments={mockPayments} />}
          </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default Userdashboard
