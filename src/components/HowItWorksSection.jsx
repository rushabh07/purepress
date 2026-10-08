const steps = [
  {
    number: '01',
    title: 'Book Online',
    desc: 'Choose your service, select a convenient pickup date and time, and add any special instructions.',
  },
  {
    number: '02',
    title: 'Doorstep Pickup',
    desc: 'Our uniformed executive collects your items in a sealed bag from your door at the scheduled time.',
  },
  {
    number: '03',
    title: 'Professional Cleaning',
    desc: 'Your garments go through our expert cleaning process — sorted, treated and processed with care.',
  },
  {
    number: '04',
    title: 'Fresh Delivery',
    desc: 'Clean, pressed and perfectly packaged clothes delivered back to your doorstep within 48–72 hours.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-px">

        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="label-text block mb-4">Simple Process</span>
          <h2 className="heading-lg text-3xl md:text-4xl">How It Works</h2>
          <p className="body-text mt-4">
            From booking to delivery in four easy steps — no hassle, no trips to the laundromat.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line – desktop only */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-navy-100 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-start lg:items-center lg:text-center">
                {/* Number bubble */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 border border-navy-200 bg-white flex flex-col items-center justify-center">
                    <span className="text-xs font-semibold text-brand-600 tracking-widest">{step.number}</span>
                    <div className="w-4 h-px bg-navy-200 my-1" />
                    <span className="text-xs text-navy-400">Step</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-navy-950 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow – mobile only */}
                {i < steps.length - 1 && (
                  <div className="mt-6 lg:hidden w-full flex justify-center">
                    <div className="w-px h-8 bg-navy-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
