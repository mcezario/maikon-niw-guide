import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/what-is-eb2', label: 'What is EB2 NIW?' },
  { to: '/why-sign', label: 'Why Sign?' },
  { to: '/process', label: 'The Process' },
  { to: '/faq', label: 'FAQ' },
  { to: '/endeavor', label: "Maikon's Endeavor" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !open

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-navy-700 to-crimson-500 rounded-lg flex items-center justify-center shadow">
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
          <span
            className={`font-display font-bold text-lg transition-colors ${
              transparent ? 'text-white' : 'text-navy-800'
            }`}
          >
            Maikon Cezario - EB2 NIW Guide
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                transparent
                  ? pathname === to
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                  : pathname === to
                  ? 'bg-navy-50 text-navy-700'
                  : 'text-slate-600 hover:text-navy-700 hover:bg-navy-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/sign" className="ml-3 btn-secondary text-sm py-2 px-4">
            Sign the Letter
          </Link>
        </div>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            transparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
          }`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pb-4"
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block px-3 py-3 rounded-lg text-sm font-medium mb-1 transition-colors ${
                  pathname === to
                    ? 'bg-navy-50 text-navy-700'
                    : 'text-slate-600 hover:text-navy-700 hover:bg-navy-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link to="/sign" className="btn-secondary w-full justify-center mt-2 text-sm py-2">
              Sign the Letter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
