import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section id="home" className="pt-16 lg:pt-[70px] bg-white min-h-screen flex flex-col">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto w-full px-6 lg:px-10">

        {/* Text column */}
        <div className="flex flex-col justify-center py-16 lg:py-24 pr-0 lg:pr-16">
          <span className="label-text mb-6 fade-up">Professional Fabric Care</span>

          <h1 className="heading-xl text-4xl md:text-5xl xl:text-6xl mb-6 fade-up-delay-1">
            Exceptional Care.<br />
            Freshness at Your<br />
            Doorstep.
          </h1>

          <p className="body-text text-base md:text-lg max-w-md mb-10 fade-up-delay-2">
            Professional laundry, dry cleaning and specialized fabric care, collected and delivered with care.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 fade-up-delay-3">
            <button
              id="hero-book-btn"
              onClick={() => navigate('/book')}
              className="btn-primary btn-press"
            >
              Book a Pickup
              <ArrowRight size={16} />
            </button>
            <button
              id="hero-explore-btn"
              onClick={() => navigate('/services')}
              className="btn-outline btn-press"
            >
              Explore Services
            </button>
          </div>

          {/* Mini trust line */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-navy-100 fade-up-delay-3">
            <div>
              <div className="font-display font-bold text-navy-950 text-xl">5,000+</div>
              <div className="text-xs text-navy-500 mt-0.5">Satisfied customers</div>
            </div>
            <div className="w-px h-8 bg-navy-100" />
            <div>
              <div className="font-display font-bold text-navy-950 text-xl">98%</div>
              <div className="text-xs text-navy-500 mt-0.5">Satisfaction rate</div>
            </div>
            <div className="w-px h-8 bg-navy-100" />
            <div>
              <div className="font-display font-bold text-navy-950 text-xl">10+</div>
              <div className="text-xs text-navy-500 mt-0.5">Services offered</div>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="relative hidden lg:flex items-stretch overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-laundry.jpg"
              alt="Professional laundry facility with neatly folded clean garments"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent w-16" />
          </div>
        </div>
      </div>

      {/* Mobile image strip */}
      <div className="lg:hidden w-full h-56 sm:h-72 overflow-hidden">
        <img
          src="/hero-laundry.jpg"
          alt="Professional laundry facility"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  )
}
