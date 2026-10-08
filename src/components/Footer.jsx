import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const services = [
  'Laundry Care',
  'Dry Cleaning',
  'Carpet & Rug Care',
  'Home Textile Care',
  'Premium Fabric Care',
]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book a Pickup', to: '/book-pickup' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-navy-950 text-xs font-bold tracking-widest">PP</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">PurePress</span>
            </Link>
            <p className="text-sm leading-relaxed text-navy-400 mb-6">
              Professional laundry, dry cleaning and specialized fabric care. We collect from your door and deliver freshness back.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+919999999999" className="flex items-center gap-2.5 text-navy-400 hover:text-white transition-colors">
                <Phone size={14} className="flex-shrink-0" />
                +91 99999 99999
              </a>
              <a href="mailto:hello@purepress.in" className="flex items-center gap-2.5 text-navy-400 hover:text-white transition-colors">
                <Mail size={14} className="flex-shrink-0" />
                hello@purepress.in
              </a>
              <div className="flex items-start gap-2.5 text-navy-400">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                123 Fabric Lane, Bandra West, Mumbai – 400050
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">Business Hours</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-navy-400">
                <Clock size={14} className="flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="text-white font-medium mb-1">Pickup & Delivery</div>
                  <div>Monday – Saturday</div>
                  <div>8:00 AM – 8:00 PM</div>
                </div>
              </div>
              <div className="text-sm text-navy-400 pl-[22px]">
                <div className="text-white font-medium mb-1">Customer Support</div>
                <div>Monday – Sunday</div>
                <div>9:00 AM – 6:00 PM</div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/book-pickup"
                className="btn-light text-sm px-5 py-2.5 inline-flex"
              >
                Book a Pickup
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-navy-500">
          <p>© {new Date().getFullYear()} PurePress. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-navy-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
