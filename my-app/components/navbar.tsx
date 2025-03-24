"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react"

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

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

  // Detect scroll position to toggle shadow and visibility
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY

      // Toggle shadow based on scroll position
      setIsScrolled(currentScrollY > 0)

      // Determine scroll direction and toggle visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false) // Hide navbar when scrolling down
      } else {
        setIsVisible(true) // Show navbar when scrolling up
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`w-full px-4 py-6 flex fixed top-0 left-0 right-0 z-50 bg-gray-900 transition-all duration-500 ease-linear ${
          isScrolled ? "shadow-lg" : "shadow-none"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex max-w-[1920px] px-8 w-full lg:px-9 xl:px-10 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="mr-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="#B146D7" />
                <path d="M20 8L30.6603 14V26L20 32L9.33975 26V14L20 8Z" fill="#111827" />
              </svg>
            </div>
            <span className="text-4xl font-bold">MeJurix</span>
          </Link>

          {/* Navbar Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto absolute inset-x-0 left-0 right-0 justify-center">
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="flex font-medium text-sm font-sans md:text-lg lg:text-xl text-gray-50-ivory transition-colors duration-300 ease-out items-center hover:text-gray-500"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-[4rem] z-[1] bg-[#1b2743] mx-auto flex w-max flex-col items-center justify-center gap-2 rounded p-4 origin-top transition-all duration-300 ease-in-out before:absolute before:inset-x-0 before:top-[-32px] before:mx-auto before:h-8 before:w-full before:content-[''] ${
                  isProductsOpen ? "opacity-100 scale-100 block" : "opacity-0 scale-95 hidden"
                }`}
              >
                <li className="group flex w-full items-center">
                  <Link
                    href="#"
                    className="font-sans transition-colors duration-300 ease-out text-center px-4 py-3 md:text-lg lg:text-xl bg-transparent text-gray-50-ivory hover:text-gray-400 leading-[130%] flex w-full items-center gap-2"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    Medical Report
                  </Link>
                </li>
                <li className="group flex w-full items-center">
                  <Link
                    href="#"
                    className="font-sans transition-colors duration-300 ease-out text-center px-4 py-3 md:text-lg lg:text-xl bg-transparent text-gray-50-ivory hover:text-gray-400 leading-[130%] flex w-full items-center gap-2"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    Assessment
                  </Link>
                </li>
              </div>
            </div>

            <Link
              href="/security"
              className="font-medium text-sm md:text-lg lg:text-xl text-gray-50-ivory transition-colors duration-300 ease-out hover:text-gray-500 font-sans"
            >
              Security
            </Link>
            <Link
              href="/news"
              className="font-medium text-sm md:text-lg lg:text-xl text-gray-50-ivory transition-colors duration-300 ease-out hover:text-gray-500 font-sans"
            >
              News
            </Link>
            <Link
              href="#"
              className="font-medium text-sm md:text-lg lg:text-xl text-gray-50-ivory transition-colors duration-300 ease-out hover:text-gray-500 font-sans"
            >
              Company
            </Link>
            <Link
              href="/contact"
              className="font-medium text-sm md:text-lg lg:text-xl text-gray-50-ivory transition-colors duration-300 ease-out hover:text-gray-500 font-sans"
            >
              Contact
            </Link>
          </nav>

          {/* Login Button - Desktop */}
          <button className="ml-auto hidden md:flex items-center space-x-4 mr-6 px-4 py-2 rounded font-medium text-sm md:text-lg lg:text-xl text-gray-50-ivory transition-colors duration-300 ease-out hover:text-gray-500 font-sans">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden ml-auto" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-8 w-8 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 flex flex-col transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="text-white text-2xl font-bold">MeJurix</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 space-y-6">
          <div>
            <button
              className="flex items-center justify-between w-full text-white text-xl font-medium"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <span>Products</span>
              <ChevronRight className={`h-5 w-5 transition-transform ${isProductsOpen ? "rotate-90" : ""}`} />
            </button>
            {isProductsOpen && (
              <div className="mt-4 ml-4 space-y-4">
                <Link
                  href="#"
                  className="block text-white text-lg"
                  onClick={() => {
                    setIsProductsOpen(false)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Medical Report
                </Link>
                <Link
                  href="#"
                  className="block text-white text-lg"
                  onClick={() => {
                    setIsProductsOpen(false)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Assessment
                </Link>
              </div>
            )}
          </div>

          <Link href="/security" className="text-white text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Security
          </Link>

          <Link href="/news" className="text-white text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            News
          </Link>

          <Link href="#" className="text-white text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Company
          </Link>

          <Link href="/contact" className="text-white text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="mt-auto p-6 grid grid-cols-1 gap-4">
          <button
            className="w-full py-4 bg-white text-black font-medium rounded-md text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </button>
        </div>
      </div>
    </>
  )
}

