import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-navy-100 shadow-sm' : 'bg-white/95 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-navy-900 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold tracking-widest">PP</span>
            </div>
            <span className="font-display font-bold text-navy-950 text-lg tracking-tight">
              PurePress
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-navy-950'
                      : 'text-navy-500 hover:text-navy-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/book-pickup')}
              className="hidden lg:inline-flex btn-primary text-xs px-5 py-2.5"
            >
              Book a Pickup
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-navy-700 hover:text-navy-950 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-navy-100 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2.5 text-sm font-medium border-b border-navy-50 transition-colors ${
                  isActive ? 'text-navy-950' : 'text-navy-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => { navigate('/book-pickup'); setOpen(false) }}
            className="btn-primary mt-3 w-full text-center"
          >
            Book a Pickup
          </button>
        </nav>
      </div>
    </header>
  )
}
