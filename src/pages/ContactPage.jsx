import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setErrors({})
    setSent(true)
  }

  const handleChange = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  return (
    <div className="pt-[70px] bg-white">
      {/* Header */}
      <div className="bg-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="label-text block mb-4 text-brand-400">Get in Touch</span>
          <h1 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight max-w-xl">
            We'd Love to Hear From You
          </h1>
          <p className="text-navy-400 mt-4 max-w-lg text-base leading-relaxed">
            Questions, feedback or a large order enquiry — reach out and we'll get back to you promptly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-bold text-navy-950 text-xl mb-6">Contact Details</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-navy-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-1">Phone</div>
                    <a href="tel:+919999999999" className="text-sm text-navy-900 hover:text-brand-600 transition-colors font-medium">
                      +91 99999 99999
                    </a>
                    <div className="text-xs text-navy-400 mt-0.5">Mon–Sat, 9 AM – 6 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-navy-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-1">Email</div>
                    <a href="mailto:hello@purepress.in" className="text-sm text-navy-900 hover:text-brand-600 transition-colors font-medium">
                      hello@purepress.in
                    </a>
                    <div className="text-xs text-navy-400 mt-0.5">Reply within 4 business hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-navy-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-1">Address</div>
                    <div className="text-sm text-navy-700 leading-relaxed">
                      123 Fabric Lane,<br />
                      Bandra West,<br />
                      Mumbai – 400050
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-navy-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-1">Business Hours</div>
                    <div className="text-sm text-navy-700 leading-relaxed">
                      Pickup & Delivery: Mon–Sat, 8 AM – 8 PM<br />
                      Support: Mon–Sun, 9 AM – 6 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-50 border border-navy-100 p-6">
              <div className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-2">Quick Booking</div>
              <p className="text-sm text-navy-600 mb-4 leading-relaxed">Ready to place an order? Skip the form and book directly.</p>
              <a href="/book" className="btn-primary text-sm inline-flex">
                Book a Pickup <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-navy-100">
                <div className="w-14 h-14 bg-navy-950 flex items-center justify-center mb-5">
                  <CheckCircle size={26} className="text-white" />
                </div>
                <h2 className="font-display font-bold text-navy-950 text-2xl mb-3">Message Sent!</h2>
                <p className="text-navy-500 text-sm max-w-sm mb-6 leading-relaxed">
                  Thanks for reaching out, <strong className="text-navy-900">{form.name}</strong>. We'll reply to <strong className="text-navy-900">{form.email}</strong> within 4 business hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="btn-outline text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your name"
                      className={`w-full border px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full border px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'}`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-navy-500 transition-colors appearance-none"
                  >
                    <option value="">Select a topic…</option>
                    <option>General Enquiry</option>
                    <option>Booking Assistance</option>
                    <option>Order Status</option>
                    <option>Pricing & Services</option>
                    <option>Feedback / Complaint</option>
                    <option>Partnership / Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us how we can help…"
                    className={`w-full border px-4 py-3 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-navy-200 bg-white'}`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button id="contact-submit" type="submit" className="btn-primary">
                  Send Message <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
