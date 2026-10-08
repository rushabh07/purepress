import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Check, Search, ArrowLeft } from 'lucide-react'

const zones = [
  {
    zone: 'Zone 1',
    radius: '3–7 km',
    title: 'Bavdhan, Baner & Nearby',
    areas: ['Bavdhan', 'Baner', 'Pashan', 'Mahalunge', 'Balewadi'],
    minOrder: '₹500',
  },
  {
    zone: 'Zone 2',
    radius: '7–12 km',
    title: 'Sus, Aundh & West Pune',
    areas: ['Sus', 'Aundh', 'Wakad', 'Hinjewadi Phase 1', 'Bhugaon'],
    minOrder: '₹1,300',
  },
  {
    zone: 'Zone 3',
    radius: '12–15 km',
    title: 'Kothrud, Warje & Central',
    areas: ['Kothrud', 'Warje', 'Hinjewadi Phase 2 & 3', 'Karve Nagar', 'Erandwane', 'Shivajinagar', 'Deccan'],
    minOrder: '₹2,100',
  },
  {
    zone: 'Zone 4',
    radius: '15 km+',
    title: 'Pimpri-Chinchwad',
    areas: ['Pimple Saudagar', 'Pimpri', 'Pimpri-Chinchwad'],
    minOrder: '₹3,000',
  },
  {
    zone: 'Zone 5',
    radius: 'Extended',
    title: 'Extended Pune',
    areas: ['Hadapsar', 'Kharadi', 'Viman Nagar', 'Camp', 'Kalyani Nagar', 'Koregaon Park', 'Wagholi & surrounding areas'],
    minOrder: '₹4,000',
  },
]

const supportedAreas = [
  'bavdhan', 'baner', 'pashan', 'mahaleunge', 'balewadi', 'sus', 'aundh', 'wakad',
  'hinjewadi', 'bhugaon', 'kothrud', 'warje', 'karve nagar', 'erandwane',
  'shivajinagar', 'deccan', 'pimple saudagar', 'pimpri', 'chinchwad',
  'hadapsar', 'kharadi', 'viman nagar', 'camp', 'kalyani nagar', 'koregaon park',
  'wagholi', 'pune',
]

const puneLocalities = [
  'Bavdhan', 'Baner', 'Pashan', 'Balewadi', 'Sus', 'Aundh', 'Wakad',
  'Hinjewadi', 'Kothrud', 'Warje', 'Karve Nagar', 'Erandwane',
  'Shivajinagar', 'Deccan', 'Pimpri', 'Chinchwad', 'Hadapsar',
  'Kharadi', 'Viman Nagar', 'Kalyani Nagar', 'Koregaon Park', 'Wagholi',
]

export default function ServiceAreasPage() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)

  const checkAvailability = (e) => {
    e.preventDefault()
    const q = query.trim().toLowerCase()
    if (!q) return
    const found = supportedAreas.some((area) => q.includes(area) || area.includes(q))
    setResult(found ? 'available' : 'unavailable')
  }

  return (
    <div className="pt-[70px] bg-white">
      {/* Hero */}
      <div className="bg-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors mb-6">
                <ArrowLeft size={14} />
                Back to Home
              </Link>
              <span className="label-text block mb-4 text-brand-400">Service Areas</span>
              <h1 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight mb-5">
                Convenience At Your Doorstep, Anywhere in Pune
              </h1>
              <p className="text-navy-400 text-base leading-relaxed mb-8 max-w-lg">
                Wherever you are in the city, we'll pick up, clean and deliver your clothes back — no laundry runs required.
              </p>
              <Link to="/book" className="btn-light inline-flex">
                Book a Pickup
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="hidden lg:block overflow-hidden rounded-lg">
              <img
                src="/service-areas-hero.jpg"
                alt="Professional doorstep laundry pickup in a Pune neighborhood"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Coverage */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto container-px">
          <div className="max-w-2xl mb-14">
            <span className="label-text block mb-4">Service Coverage</span>
            <h2 className="heading-lg text-3xl md:text-4xl mb-3">Where We Currently Deliver</h2>
            <p className="body-text text-base">
              PurePress provides doorstep laundry and fabric-care services across Pune and surrounding areas.
            </p>
          </div>

          {/* Progressive Zone Layout */}
          <div className="space-y-4">
            {zones.map((z, i) => (
              <div
                key={z.zone}
                className="bg-white border border-navy-100 rounded-lg p-6 md:p-8 hover:border-navy-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Zone indicator */}
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <div className="w-10 h-10 bg-navy-900 text-white flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-navy-400 uppercase tracking-widest">{z.zone}</div>
                      <div className="font-display font-bold text-navy-950 text-lg leading-tight">{z.radius}</div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-12 bg-navy-100" />

                  {/* Areas */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-navy-950 text-sm mb-2">{z.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {z.areas.map((area) => (
                        <span
                          key={area}
                          className="text-xs text-navy-600 bg-sand border border-navy-100 px-2.5 py-1"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Min order */}
                  <div className="md:text-right flex-shrink-0">
                    <div className="text-xs text-navy-400 uppercase tracking-wide">Minimum Order</div>
                    <div className="font-display font-bold text-navy-950 text-lg">{z.minOrder}</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-5 h-1 bg-navy-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-navy-900 rounded-full"
                    style={{ width: `${(i + 1) * 20}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pune Coverage Visual */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-text block mb-5">Pune Coverage</span>
              <h2 className="heading-lg text-3xl md:text-4xl mb-5">
                Serving Pune & Nearby Areas
              </h2>
              <p className="body-text mb-8 text-base">
                From Bavdhan to Hadapsar, Baner to Pimpri-Chinchwad — our pickup and delivery network covers the entire Pune metropolitan area.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {puneLocalities.map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-sm text-navy-700">
                    <div className="w-4 h-4 bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-brand-600" strokeWidth={3} />
                    </div>
                    {loc}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-navy-100">
                <img
                  src="/service-areas-map.jpg"
                  alt="Stylized map of Pune service coverage areas"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white border border-navy-100 px-4 py-2 shadow-sm">
                <span className="text-xs font-semibold text-navy-950">Serving Pune & Nearby Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Check Your Area */}
      <section className="section-padding bg-sand">
        <div className="max-w-7xl mx-auto container-px">
          <div className="max-w-xl mx-auto text-center">
            <span className="label-text block mb-4">Check Availability</span>
            <h2 className="heading-lg text-3xl md:text-4xl mb-4">
              Not Sure If We Deliver to You?
            </h2>
            <p className="body-text text-base mb-8">
              Enter your locality or PIN code to check PurePress service availability.
            </p>

            <form onSubmit={checkAvailability} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setResult(null) }}
                  placeholder="Enter locality or PIN code"
                  className="w-full border border-navy-200 bg-white pl-11 pr-4 py-3.5 text-sm text-navy-900 placeholder-navy-300 focus:outline-none focus:border-navy-500 transition-colors"
                />
              </div>
              <button type="submit" className="btn-primary flex-shrink-0">
                Check Availability
              </button>
            </form>

            {result === 'available' && (
              <div className="mt-6 bg-white border border-navy-100 p-5 inline-flex items-center gap-3">
                <div className="w-8 h-8 bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-sm font-semibold text-navy-950">
                  Great news! PurePress serves your area.
                </span>
              </div>
            )}

            {result === 'unavailable' && (
              <div className="mt-6 bg-white border border-navy-100 p-5 inline-flex items-center gap-3">
                <div className="w-8 h-8 bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-navy-500" />
                </div>
                <span className="text-sm text-navy-700">
                  We'll be expanding to your area soon.
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-navy-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-white text-2xl md:text-4xl mb-4">
            Your Laundry. Our Doorstep.
          </h2>
          <p className="text-navy-400 text-sm md:text-base mb-8 max-w-md mx-auto">
            Schedule a pickup and let PurePress take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="btn-light">
              Book a Pickup
              <ArrowRight size={15} />
            </Link>
            <Link to="/services" className="btn-outline border-navy-700 text-white hover:bg-navy-800 hover:border-navy-600">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
