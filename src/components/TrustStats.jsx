const stats = [
  { value: '5,000+', label: 'Happy Customers', desc: 'Trusted across the city' },
  { value: '10+', label: 'Services Offered', desc: 'From laundry to curtains' },
  { value: '98%', label: 'Satisfaction Rate', desc: 'Measured every month' },
  { value: 'Free', label: 'Pickup & Delivery', desc: 'Right from your doorstep' },
]

export default function TrustStats() {
  return (
    <section id="trust" className="bg-navy-950 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-800">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-navy-950 px-8 py-10 text-center hover:bg-navy-900 transition-colors duration-200"
            >
              <div className="font-display font-extrabold text-3xl md:text-4xl text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-navy-400">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
