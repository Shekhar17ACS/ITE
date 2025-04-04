
import { useState, useEffect } from "react"
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import FormTracker from "./FormTracker.jsx"
import PaymentHistory from "./PaymentHistory.jsx"
import EligibleForm from "../components/pages/MultiStepForm.jsx"
// import type { FormData, PaymentHistory as PaymentHistoryType } from "../types/index"

const mockFormData = {
  applicationNo: "APP596611",
  email: "Shekharsharma17800@gmail.com",
  userId: "USR-2025-0015",
  status: "In Progress",
  amount: 25869,
  date: "2025-03-28",
  isApproved: true,
  paymentStatus: "Pending",
  steps: [
    { id: 1, title: "Personal Details", status: "completed", date: "2025-03-28" },
    { id: 2, title: "Membership Selection", status: "completed", date: "2025-03-30" },
    { id: 3, title: "Document", status: "pending", date: null },
    { id: 4, title: "Eligibility Check", status: "pending", date: null },
    { id: 4, title: "Summury", status: "pending", date: null },
    { id: 4, title: "Payment", status: "pending", date: null },
  ],
  images: [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&auto=format",
  ],
}

const mockPayments = [
  {
    id: "1",
    applicationNo: "APP596611",
    amount: 25869,
    adminFee: 5000,
    status: "Pending",
    date: "2025-03-28",
    transactionId: "TXN-2024-0015",
    paymentMethod: "UPI",
    remarks: "Awaiting bank confirmation",
  },
  {
    id: "2",
    applicationNo: "APP596611",
    amount: 25869,
    adminFee: 3000,
    status: "Completed",
    date: "2025-03-29",
    transactionId: "TXN-2024-0010",
    paymentMethod: "Credit Card",
    remarks: "Payment successful",
  },
]

function Userdashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("eligible")
  const [isMobile, setIsMobile] = useState(false)
  const userEmail = "Shekharsharma17800@gmail.com"

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
