const reasons = [
  {
    title: 'Professional Cleaning',
    desc: 'Trained professionals with years of fabric care expertise handle every garment.',
  },
  {
    title: 'Fabric-Safe Process',
    desc: 'We read every label and match the cleaning method to each fabric type.',
  },
  {
    title: 'Careful Handling',
    desc: 'Delicate, embroidered and structured garments treated with individual attention.',
  },
  {
    title: 'Quality Checked',
    desc: 'Every order goes through a final quality check before being packaged and sent.',
  },
  {
    title: 'Reliable Delivery',
    desc: 'Consistent 48–72 hour turnaround. Punctual pickup and drop at your door.',
  },
]

export default function WhyPurePress() {
  return (
    <section id="why-us" className="section-padding bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <div>
            <span className="label-text block mb-5 text-brand-400">Why Choose Us</span>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              The Standard You<br />Deserve.
            </h2>
            <p className="text-navy-400 leading-relaxed text-base max-w-md">
              We built PurePress because premium fabric care shouldn't be complicated. Every process we follow is designed around one thing — bringing your clothes back looking their very best.
            </p>
          </div>

          {/* Right reasons list */}
          <div className="flex flex-col divide-y divide-navy-800">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-5 group"
              >
                <div className="w-6 h-6 border border-navy-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-brand-500 transition-colors">
                  <span className="text-[10px] font-bold text-navy-500 group-hover:text-brand-400 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{r.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
