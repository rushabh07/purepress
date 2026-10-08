import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Mehta',
    location: 'Bandra West, Mumbai',
    initials: 'PM',
    rating: 5,
    text: 'PurePress has completely changed how I handle laundry. The pickup is always on time, and my clothes come back perfectly folded and smelling wonderful. The curtain cleaning service was an absolute revelation — my old linen curtains look brand new.',
    service: 'Curtain Care & Laundry',
  },
  {
    name: 'Rahul Sharma',
    location: 'Powai, Mumbai',
    initials: 'RS',
    rating: 5,
    text: 'I was skeptical about an online laundry service at first, but PurePress won me over immediately. My suits come back professionally pressed every single time. The quality is consistently excellent, and their customer support is genuinely responsive.',
    service: 'Dry Cleaning',
  },
  {
    name: 'Ananya Krishnan',
    location: 'Koramangala, Bangalore',
    initials: 'AK',
    rating: 5,
    text: 'The home textile service is phenomenal. They cleaned our entire set of curtains, bed sheets and blankets before our housewarming. Everything came back spotless and beautifully packaged. Will absolutely recommend to everyone I know.',
    service: 'Home Textile Care',
  },
]

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-sand">
      <div className="max-w-7xl mx-auto container-px">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-text block mb-4">Customer Reviews</span>
          <h2 className="heading-lg text-3xl md:text-4xl">What Our Customers Say</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-100">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 flex flex-col">
              <Stars count={t.rating} />
              <p className="text-navy-700 text-sm leading-relaxed mt-5 mb-8 flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 pt-5 border-t border-navy-100">
                <div className="w-10 h-10 bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-navy-950 text-sm">{t.name}</div>
                  <div className="text-xs text-navy-400 mt-0.5">{t.location}</div>
                  <div className="text-xs text-brand-600 mt-0.5">{t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
