import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Fabric-First', desc: 'Every decision we make starts with what\'s best for the fabric, not the fastest process.' },
  { title: 'Transparency', desc: 'Clear pricing, clear process. No surprises at billing, no hidden pickup charges.' },
  { title: 'Reliability', desc: 'We show up on time, every time. If something changes, we tell you immediately.' },
  { title: 'Attention to Detail', desc: 'From pre-treatment to final fold, every step is done with precision and care.' },
]

const team = [
  { name: 'Arjun Nair', role: 'Founder & Operations Head', initial: 'AN' },
  { name: 'Meera Pillai', role: 'Head of Fabric Care', initial: 'MP' },
  { name: 'Rohan Desai', role: 'Customer Experience Lead', initial: 'RD' },
]

export default function AboutPage() {
  return (
    <div className="pt-[70px] bg-white">
      {/* Header */}
      <div className="bg-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="label-text block mb-4 text-brand-400">Our Story</span>
          <h1 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight max-w-2xl">
            Built on a Belief That Clothes Deserve Better Care.
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="label-text block mb-4">Who We Are</span>
            <h2 className="heading-lg text-2xl md:text-3xl mb-6">The PurePress Story</h2>
            <div className="space-y-4 text-sm text-navy-600 leading-relaxed">
              <p>
                PurePress was founded in 2021 with a simple frustration: getting clothes properly cleaned in a busy city shouldn't require multiple trips, poor communication and mediocre results.
              </p>
              <p>
                Our founder, Arjun Nair, spent years working in hospitality where linen care was treated as a precise science. He brought that same standard — fabric-specific processes, meticulous quality checks and respectful handling — to everyday consumers.
              </p>
              <p>
                Today, PurePress serves over 5,000 households across Mumbai, handling everything from everyday laundry to delicate curtains, heirloom sarees and designer suits. Every order, regardless of size, receives the same level of professional attention.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hero-laundry.jpg"
              alt="The PurePress laundry facility"
              className="w-full h-80 object-cover"
            />
            <div className="absolute -bottom-5 -left-5 hidden lg:flex flex-col items-center justify-center w-32 h-32 bg-navy-950 text-white text-center p-4">
              <div className="font-display font-extrabold text-2xl">2021</div>
              <div className="text-xs text-navy-400 mt-1 leading-tight">Founded in Mumbai</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-sand py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="label-text block mb-4">What We Stand For</span>
          <h2 className="heading-lg text-2xl md:text-3xl mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy-100">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <h3 className="font-display font-bold text-navy-950 text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="label-text block mb-4">The People Behind PurePress</span>
          <h2 className="heading-lg text-2xl md:text-3xl mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-navy-100">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-navy-950 flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-xl">{member.initial}</span>
                </div>
                <div className="font-display font-bold text-navy-950 text-lg mb-1">{member.name}</div>
                <div className="text-sm text-navy-400">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-navy-950 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-800">
            {[
              { v: '2021', l: 'Founded' },
              { v: '5,000+', l: 'Customers Served' },
              { v: '98%', l: 'Satisfaction Rate' },
              { v: '10+', l: 'Services Available' },
            ].map(({ v, l }) => (
              <div key={l} className="bg-navy-950 px-8 py-10 text-center">
                <div className="font-display font-extrabold text-3xl text-white mb-1">{v}</div>
                <div className="text-xs text-navy-400">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center bg-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display font-bold text-navy-950 text-2xl md:text-3xl mb-4">Experience the PurePress Difference</h2>
          <p className="text-navy-500 text-sm mb-8">Your first pickup is just a few clicks away.</p>
          <Link to="/book-pickup" className="btn-primary">
            Book a Pickup <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}
