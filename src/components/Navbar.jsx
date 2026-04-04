import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [discoverOpen, setDiscoverOpen] = useState(false)

  const activeCls = 'yellow-underline'
  const linkCls =
    'text-artsy-brown text-lg font-medium hover:yellow-underline transition-all'

  return (
    <>
      {/* Floating pill navbar */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-5xl flex items-center justify-between bg-white border border-black rounded-full shadow-[6px_6px_0px_rgba(0,0,0,1)] px-5 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/circle-logo.png" alt="Artsy Whiz" className="w-12 h-12 select-none" />
            <span className="font-bold text-2xl text-artsy-brown hidden sm:block select-none">
              Artsy Whiz
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            <NavLink
              to="/shop"
              className={({ isActive }) => `${linkCls} ${isActive ? activeCls : ''}`}
            >
              Shop
            </NavLink>

            {/* Discover dropdown */}
            <div className="relative group">
              <NavLink
                to="/discover"
                className={({ isActive }) => `${linkCls} ${isActive ? activeCls : ''}`}
              >
                Discover
              </NavLink>
              <div className="absolute top-full left-0 mt-3 hidden group-hover:block">
                <div className="bg-white border border-black rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)] overflow-hidden min-w-44">
                  <Link
                    to="/discover#charity"
                    className="block px-5 py-3 text-artsy-brown hover:bg-artsy-gray text-sm transition-colors"
                  >
                    Choose the Charity
                  </Link>
                  <Link
                    to="/discover#faq"
                    className="block px-5 py-3 text-artsy-brown hover:bg-artsy-gray text-sm transition-colors"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) => `${linkCls} ${isActive ? activeCls : ''}`}
            >
              About
            </NavLink>
          </div>

          {/* Cart + hamburger */}
          <div className="flex items-center gap-3">
            <Link to="/shop" aria-label="Cart">
              <img src="/shop-icon.png" alt="Cart" className="w-11 h-11" />
            </Link>
            <button
              className="md:hidden text-2xl text-artsy-brown leading-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div className="relative ml-auto w-72 bg-white h-full shadow-2xl flex flex-col pt-6 px-8">
            <button
              className="self-end text-3xl text-artsy-brown mb-8"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 mb-8"
              onClick={() => setMobileOpen(false)}
            >
              <img src="/circle-logo.png" alt="Artsy Whiz" className="w-10 h-10" />
              <span className="font-bold text-xl text-artsy-brown">Artsy Whiz</span>
            </Link>
            <nav className="flex flex-col gap-6 text-2xl font-medium text-artsy-brown">
              <NavLink
                to="/shop"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => isActive ? 'yellow-underline' : ''}
              >
                Shop
              </NavLink>

              <button
                className="text-left flex items-center justify-between"
                onClick={() => setDiscoverOpen(v => !v)}
              >
                Discover
                <span className="text-base">{discoverOpen ? '▲' : '▼'}</span>
              </button>
              {discoverOpen && (
                <div className="flex flex-col gap-4 pl-4 text-xl">
                  <Link
                    to="/discover#charity"
                    onClick={() => setMobileOpen(false)}
                    className="hover:yellow-underline"
                  >
                    Choose the Charity
                  </Link>
                  <Link
                    to="/discover#faq"
                    onClick={() => setMobileOpen(false)}
                    className="hover:yellow-underline"
                  >
                    FAQ
                  </Link>
                </div>
              )}

              <NavLink
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => isActive ? 'yellow-underline' : ''}
              >
                About
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
