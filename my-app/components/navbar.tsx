"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <div className="mr-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="#B146D7" />
            <path d="M20 8L30.6603 14V26L20 32L9.33975 26V14L20 8Z" fill="#111827" />
          </svg>
        </div>
        <span className="text-2xl font-bold">MeJurix</span>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <div
          className="relative"
          ref={dropdownRef}
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
        >
          <button className="flex items-center hover:text-gray-300" onClick={() => setIsProductsOpen(!isProductsOpen)}>
            Products
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1c1c1c] ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
              isProductsOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="py-1">
              <Link
                href="#"
                className="block px-4 py-3 text-sm hover:bg-[#2c2c2c] transition-colors"
                onClick={() => setIsProductsOpen(false)}
              >
                Medical Report
              </Link>
              <Link
                href="#"
                className="block px-4 py-3 text-sm hover:bg-[#2c2c2c] transition-colors"
                onClick={() => setIsProductsOpen(false)}
              >
                Assessment
              </Link>
            </div>
          </div>
        </div>

        <Link href="#" className="hover:text-gray-300">
          Security
        </Link>
        <Link href="#" className="hover:text-gray-300">
          News
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Company
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Contact
        </Link>
      </nav>

      <div>
        <button className="px-4 py-2 rounded hover:bg-gray-800 transition-colors">Login</button>
      </div>
    </header>
  )
}

