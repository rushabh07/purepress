import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone, ArrowLeft } from 'lucide-react'

const WHATSAPP_NUMBER = '919925297301'

const services = [
  'Wash & Fold',
  'Wash & Iron',
  'Wash & Steam',
  'Dry Cleaning – Shirt',
  'Dry Cleaning – Suit / Blazer',
  'Dry Cleaning – Saree / Lehenga',
  'Dry Cleaning – Dress / Gown',
  'Curtain Cleaning – Sheer',
  'Curtain Cleaning – Linen / Cotton',
  'Curtain Cleaning – Velvet / Blackout',
  'Carpet & Rug Cleaning',
  'Blanket / Quilt Cleaning',
  'Home Textile Care',
  'Premium Fabric Care',
]

const timeSlots = [
  '8:00 AM – 10:00 AM',
  '10:00 AM – 12:00 PM',
  '12:00 PM – 2:00 PM',
  '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM',
  '6:00 PM – 8:00 PM',
]

const defaultForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  items: '',
  address: '',
  date: '',
  time: '',
  instructions: '',
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function BookingPage() {
  const [searchParams] = useSearchParams()
  const preSelectedService = searchParams.get('service') || ''
  const [form, setForm] = useState({ ...defaultForm, service: preSelectedService })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit phone number.'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.service) e.service = 'Please select a service.'
    if (!form.items.trim()) e.items = 'Please enter items or approximate weight.'
    if (!form.address.trim()) e.address = 'Pickup address is required.'
    if (!form.date) e.date = 'Please select a pickup date.'
    if (!form.time) e.time = 'Please select a time slot.'
    return e
  }

  const generateWhatsAppMessage = () => {
    return `Hello PurePress, I would like to book a laundry pickup.

Name: ${form.name}
Mobile: ${form.phone}
Address: ${form.address}
Service: ${form.service}
Items/Weight: ${form.items}
Pickup Date: ${form.date}
Pickup Time: ${form.time}
Notes: ${form.instructions || 'None'}

Please confirm my pickup booking. Thank you!`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    setErrors({})
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleChange = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const today = new Date().toISOString().split('T')[0]

  if (submitted) {
    return (
      <div className="min-h-screen pt-[70px] bg-sand flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center py-20">
          <div className="w-16 h-16 bg-navy-950 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-white" />
          </div>
          <h1 className="font-display font-bold text-navy-950 text-3xl mb-4">
            Booking Details Ready
          </h1>
          <p className="body-text text-base mb-2">
            Thank you, <strong className="text-navy-900">{form.name}</strong>.
          </p>
          <p className="body-text text-sm mb-8">
            Booking details are ready in WhatsApp. Please send the message to confirm your pickup.
          </p>

          <div className="bg-white border border-navy-100 p-6 text-left mb-8 space-y-3">
            <div className="text-xs font-semibold text-navy-400 uppercase tracking-widest mb-4">Booking Summary</div>
            {[
              ['Service', form.service],
              ['Items/Weight', form.items],
              ['Date', form.date],
              ['Time Slot', form.time],
              ['Address', form.address],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between gap-4 text-sm border-b border-navy-50 pb-2">
                <span className="text-navy-500">{label}</span>
                <span className="text-navy-900 font-medium text-right">{val}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => { setSubmitted(false); setForm({ ...defaultForm, service: preSelectedService }) }}
              className="btn-primary"
            >
              Book Another Pickup
              <ArrowRight size={15} />
            </button>
            <a href="tel:+919999999999" className="btn-outline flex items-center gap-2">
              <Phone size={14} />
              Call Us
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-[70px] bg-white">
      {/* Page header */}
      <div className="bg-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors mb-6">
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <span className="label-text block mb-4 text-brand-400">Doorstep Service</span>
          <h1 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight max-w-xl">
            Book a Pickup
          </h1>
          <p className="text-navy-400 mt-4 max-w-lg text-base leading-relaxed">
            Fill in your details below and we'll confirm your pickup via WhatsApp. No minimum order required.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Form area */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Priya Mehta"
                    className={`w-full border px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'}`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="98765 43210"
                    className={`w-full border px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors ${errors.phone ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'}`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="booking-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="priya@example.com"
                  className={`w-full border px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'}`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Service + Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="booking-service"
                    value={form.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className={`w-full border px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-navy-500 transition-colors appearance-none bg-white ${errors.service ? 'border-red-400 bg-red-50' : 'border-navy-200'}`}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Number of Items / Approximate Weight <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-items"
                    type="text"
                    value={form.items}
                    onChange={(e) => handleChange('items', e.target.value)}
                    placeholder="e.g. 8 garments or 5 kg"
                    className={`w-full border px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors ${errors.items ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'}`}
                  />
                  {errors.items && <p className="text-xs text-red-500 mt-1">{errors.items}</p>}
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                  Pickup Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="booking-address"
                  rows={3}
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder="Flat 204, Seaview Apartments, Turner Road, Bandra West, Mumbai – 400050"
                  className={`w-full border px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors resize-none ${errors.address ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'}`}
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Preferred Pickup Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className={`w-full border px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-navy-500 transition-colors bg-white ${errors.date ? 'border-red-400 bg-red-50' : 'border-navy-200'}`}
                  />
                  {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Preferred Pickup Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="booking-time"
                    value={form.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className={`w-full border px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-navy-500 transition-colors appearance-none bg-white ${errors.time ? 'border-red-400 bg-red-50' : 'border-navy-200'}`}
                  >
                    <option value="">Select a slot…</option>
                    {timeSlots.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* Instructions */}
              <div>
                <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                  Additional Notes{' '}
                  <span className="font-normal text-navy-400 normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  id="booking-instructions"
                  rows={3}
                  value={form.instructions}
                  onChange={(e) => handleChange('instructions', e.target.value)}
                  placeholder="e.g. Handle silk sarees with extra care. Starch dress shirts lightly. Gate code is 4721."
                  className="w-full border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors resize-none"
                />
              </div>

              <button
                id="booking-submit"
                type="submit"
                className="btn-primary w-full sm:w-auto text-sm py-4 px-10 inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={18} />
                Confirm Pickup via WhatsApp
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            <div className="bg-navy-950 text-white p-7">
              <h3 className="font-display font-bold text-lg mb-4">What Happens Next?</h3>
              <ol className="space-y-4">
                {[
                  'WhatsApp opens with your booking message ready to send.',
                  'Our team confirms your slot within 30 minutes.',
                  'Your items are professionally cleaned over 48–72 hours.',
                  'Fresh, packaged delivery right back to your door.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-navy-300">
                    <span className="flex-shrink-0 w-5 h-5 bg-navy-800 flex items-center justify-center text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-navy-100 p-7">
              <h3 className="font-display font-bold text-navy-950 text-base mb-4">Need Help?</h3>
              <p className="text-sm text-navy-500 mb-4 leading-relaxed">
                Have a large order, special garment or a question about our process?
              </p>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-brand-600 transition-colors"
              >
                <Phone size={14} />
                +91 99999 99999
              </a>
              <a
                href="mailto:hello@purepress.in"
                className="block text-sm text-navy-500 hover:text-navy-900 transition-colors mt-2"
              >
                hello@purepress.in
              </a>
            </div>

            <div className="bg-sand p-7">
              <div className="text-xs font-semibold text-navy-400 uppercase tracking-widest mb-3">Pickup Hours</div>
              <div className="text-sm text-navy-700 leading-relaxed">
                Monday – Saturday<br />
                <strong className="text-navy-950">8:00 AM – 8:00 PM</strong>
              </div>
              <div className="mt-3 text-xs text-navy-400">
                Sunday pickups available by prior arrangement.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
