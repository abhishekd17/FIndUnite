'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">FindUnite</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/search" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Search</Link>
              <Link href="/report" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Report</Link>
              <div className="relative group">
                <button className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Resources</button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-100 ease-in-out">
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">General Resources</Link>
                  <Link href="/emergency" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Emergency Info</Link>
                </div>
              </div>
              <Link href="/get-involved" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Get Involved</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/search" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Search</Link>
            <Link href="/report" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Report</Link>
            <Link href="/resources" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Resources</Link>
            <Link href="/emergency" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Emergency</Link>
            <Link href="/get-involved" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Get Involved</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

