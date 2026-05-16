import { useState, useEffect, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Menu, X, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const HASH_LINKS = [
  { hash: 'home', label: 'Home' },
  { hash: 'what-is-eb2', label: 'What is EB2 NIW?' },
  { hash: 'why-sign', label: 'Why Sign?' },
  { hash: 'who-has-signed', label: 'Who Has Signed' },
  { hash: 'process', label: 'The Process' },
  { hash: 'faq', label: 'FAQ' },
  { hash: 'endeavor', label: "Maikon's Endeavor" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState(window.location.hash.slice(1) || 'home')
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const update = () => setActiveHash(window.location.hash.slice(1) || 'home')
    window.addEventListener('scrollspy', update)
    window.addEventListener('hashchange', update)
    return () => {
      window.removeEventListener('scrollspy', update)
      window.removeEventListener('hashchange', update)
    }
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const handleHashClick = useCallback(
    (e: React.MouseEvent, hash: string) => {
      e.preventDefault()
      setOpen(false)
      if (pathname === '/') {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate(`/#${hash}`)
      }
    },
    [pathname, navigate]
  )

  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !open

  const linkBase = (active: boolean) =>
    `px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
      transparent
        ? active
          ? 'bg-white/20 text-white'
          : 'text-white/80 hover:text-white hover:bg-white/10'
        : active
        ? 'bg-navy-50 text-navy-700'
        : 'text-slate-600 hover:text-navy-700 hover:bg-navy-50'
    }`

  const mobileLinkBase = (active: boolean) =>
    `block px-3 py-3 rounded-lg text-sm font-medium mb-1 transition-colors ${
      active ? 'bg-navy-50 text-navy-700' : 'text-slate-600 hover:text-navy-700 hover:bg-navy-50'
    }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href={pathname === '/' ? '#home' : '/'}
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
            }
            setOpen(false)
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-navy-700 to-crimson-500 rounded-lg flex items-center justify-center shadow">
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
          <span
            className={`font-display font-bold text-base transition-colors ${
              transparent ? 'text-white' : 'text-navy-800'
            }`}
          >
            Maikon Cezario - EB2 NIW Guide
          </span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {HASH_LINKS.map(({ hash, label }) => (
            <a
              key={hash}
              href={`#${hash}`}
              onClick={(e) => handleHashClick(e, hash)}
              className={linkBase(isHome && activeHash === hash)}
            >
              {label}
            </a>
          ))}
          <a
            href="#sign"
            onClick={(e) => handleHashClick(e, 'sign')}
            className="ml-2 btn-secondary text-xs py-1.5 px-3"
          >
            Sign the Letter
          </a>
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
            {HASH_LINKS.map(({ hash, label }) => (
              <a
                key={hash}
                href={`#${hash}`}
                onClick={(e) => handleHashClick(e, hash)}
                className={mobileLinkBase(isHome && activeHash === hash)}
              >
                {label}
              </a>
            ))}
            <a
              href="#sign"
              onClick={(e) => handleHashClick(e, 'sign')}
              className="btn-secondary w-full justify-center mt-2 text-sm py-2"
            >
              Sign the Letter
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
