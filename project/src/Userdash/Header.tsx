"use client"

import type React from "react"
import { LogOut, Menu } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
  email: string
  onLogout: () => void
  onMenuClick: () => void
  isSidebarOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ email, onLogout, onMenuClick, isSidebarOpen }) => {
  const navigate= useNavigate();
   const handlelogout= ()=>{
      onLogout();
      navigate("/login");
   }
  return (
    <header className="sticky top-0 z-20 w-full bg-white shadow">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <Menu size={24} />
          </button>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <span className="hidden text-sm text-gray-600 sm:inline-block sm:text-base">{email}</span>
          <button
            onClick={handlelogout}
            className="flex items-center space-x-1 rounded-lg px-2 py-2 text-gray-600 transition-colors hover:bg-gray-100 sm:space-x-2 sm:px-3"
          >
            <LogOut size={20} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header