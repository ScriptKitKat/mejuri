import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-0">
          Unlock professional class AI for your firm
        </h2>
        <Link
          href="#"
          className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          Request a Demo
        </Link>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-800"></div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="text-5xl font-serif font-bold">M</div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-gray-400 font-medium mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Assistant
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Vault
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Knowledge
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Workflows
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-medium mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-medium mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Your Privacy Choices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-medium mb-6">Follow</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  X
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="text-gray-500 text-sm">
          <p>Copyright © 2025 MeJurix Corporation.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

