
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destination' },
    { name: 'Packages', path: '/package' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const linkStyle = (path) =>
    `block rounded-lg px-3 py-2 font-medium transition duration-200 ${
      location.pathname === path
        ? 'bg-blue-50 text-[#1E9FFF]'
        : 'text-gray-700 hover:bg-blue-50 hover:text-[#1E9FFF]'
    }`

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0 text-2xl font-bold tracking-wide text-[#1E9FFF]"
        >
          Voyara
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 md:flex lg:gap-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={linkStyle(link.path)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Authentication Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg border border-[#1E9FFF] px-4 py-2 font-semibold text-[#1E9FFF] transition duration-300 hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-[#1E9FFF] px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-blue-50 hover:text-[#1E9FFF] md:hidden"
        >
          {menuOpen ? (
            // Close icon
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 shadow-md md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={linkStyle(link.path)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex gap-3">
            <Link
              to="/login"
              onClick={closeMenu}
              className="flex-1 rounded-lg border border-[#1E9FFF] px-4 py-2.5 text-center font-semibold text-[#1E9FFF] transition hover:bg-blue-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="flex-1 rounded-lg bg-[#1E9FFF] px-4 py-2.5 text-center font-semibold text-white transition hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
