import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto container-px">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="label-text block mb-5 text-brand-400">Get Started Today</span>
            <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight mb-6">
              Ready for a<br />Fresher Wardrobe?
            </h2>
            <p className="text-navy-400 text-base leading-relaxed mb-10 max-w-md mx-auto">
              Book your first pickup in under two minutes. No subscriptions. No minimum orders. Just exceptional fabric care, at your door.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-pickup" className="btn-light btn-press">
                Book a Pickup
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="text-sm text-navy-400 hover:text-white transition-colors">
                Have a question? Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
