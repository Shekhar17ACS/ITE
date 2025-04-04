// "use client"

// import type React from "react"
// import { Menu, X, FileText, ClipboardCheck, CreditCard } from "lucide-react"

// interface SidebarProps {
//   isOpen: boolean
//   toggleSidebar: () => void
//   activeTab: string
//   setActiveTab: (tab: string) => void
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, activeTab, setActiveTab }) => {
//   const menuItems = [
//     { id: "eligible", label: "Eligibility Form", icon: ClipboardCheck },
//     { id: "form", label: "Form Tracker", icon: FileText },
//     { id: "payments", label: "Payment History", icon: CreditCard },
//   ]

//   return (
//     <div className="flex h-full w-full flex-col bg-[#1a237e] shadow-lg">
//       <div className="flex h-16 items-center justify-between px-4">
//         <h2 className="text-xl font-bold text-white">Dashboard</h2>
//         <button
//           onClick={toggleSidebar}
//           className="rounded-lg p-1.5 text-gray-300 hover:bg-blue-800 focus:outline-none"
//           aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       <nav className="flex-1 space-y-1 px-3 py-4">
//         {menuItems.map((item) => {
//           const Icon = item.icon
//           return (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`flex w-full items-center rounded-lg px-4 py-2.5 transition-colors ${
//                 activeTab === item.id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-blue-800"
//               }`}
//             >
//               <Icon size={20} className="shrink-0" />
//               <span className="ml-3 font-medium">{item.label}</span>
//             </button>
//           )
//         })}
//       </nav>
//     </div>
//   )
// }

// export default Sidebar


import React from "react"
import { Menu, X, FileText, ClipboardCheck, CreditCard } from "lucide-react"

// interface SidebarProps {
//   isOpen: boolean
//   toggleSidebar: () => void
//   activeTab: string
//   setActiveTab: (tab: string) => void
// }

const Sidebar= ({ isOpen, toggleSidebar, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "eligible", label: "Eligibility Form", icon: ClipboardCheck },
    { id: "form", label: "Form Tracker", icon: FileText },
    { id: "payments", label: "PaymentHistory", icon: CreditCard },
  ]

  return (
    <div className="flex h-full w-full flex-col bg-[#ffffff] shadow-lg">
      <div className="flex h-16 items-center justify-between px-4">
        <h2 className="text-xl font-bold text-black">Dashboard</h2>
        {/* <button
          onClick={toggleSidebar}
          className="rounded-lg p-1.5 text-gray-300 hover:bg-blue-800 focus:outline-none"
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />} 
        </button> */}
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center rounded-lg px-4 py-2.5 transition-colors ${
                activeTab === item.id ? "bg-black text-white" : "text-black hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={20} className="shrink-0" />
              <span className="ml-3 font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar