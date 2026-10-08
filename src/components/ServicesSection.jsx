import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Laundry Care',
    category: 'Everyday Care',
    desc: 'Professional washing, drying and folding for everyday clothing.',
    price: 'Starting from ₹60/kg',
    img: '/service-laundry.jpg',
    alt: 'Neatly folded clean white shirts and towels',
  },
  {
    title: 'Dry Cleaning',
    category: 'Premium Care',
    desc: 'Gentle professional cleaning for suits, sarees, blazers and delicate garments.',
    price: 'Starting from ₹80',
    img: '/service-dry-cleaning.jpg',
    alt: 'Professional pressing a dark suit jacket',
  },
  {
    title: 'Curtain Care',
    category: 'Specialised',
    desc: 'Specialized cleaning for curtains, drapes and delicate fabrics.',
    price: 'Starting from ₹150/panel',
    img: '/service-curtain.jpg',
    alt: 'Fresh clean linen curtains hanging with natural light',
  },
  {
    title: 'Steam Iron',
    category: 'Finishing',
    desc: 'Professional steam ironing for a crisp, polished finish.',
    price: 'Starting from ₹20',
    img: '/service-steam-iron.jpg',
    alt: 'Professional steam ironing of crisp white shirts',
  },
  {
    title: 'Bedsheets & Blankets',
    category: 'Home Textiles',
    desc: 'Deep cleaning for bedsheets, blankets, comforters and home textiles.',
    price: 'Starting from ₹100',
    img: '/service-bedsheets.jpg',
    alt: 'Crisp white bed linen on a luxurious bed',
  },
  {
    title: 'Shoes & Specialty Care',
    category: 'Specialised',
    desc: 'Specialized cleaning for shoes, leather items and premium fabrics.',
    price: 'Starting from ₹250',
    img: '/service-shoes.jpg',
    alt: 'Premium shoes being professionally cleaned',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto container-px">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="label-text block mb-4">What We Do</span>
          <h2 className="heading-lg text-3xl md:text-4xl mb-3">Our Services</h2>
          <p className="body-text text-base">
            Professional care for your clothes, curtains and everyday essentials.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white border border-navy-100 rounded-lg overflow-hidden hover:border-navy-200 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={svc.img}
                  alt={svc.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-600 mb-2">
                  {svc.category}
                </span>
                <h3 className="font-display font-bold text-navy-950 text-lg mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed mb-4 flex-1">
                  {svc.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-navy-50">
                  <span className="text-xs font-semibold text-navy-700">{svc.price}</span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-brand-600 transition-colors duration-200"
                  >
                    Explore Service
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-brand-600 transition-colors duration-200"
          >
            View All Services
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
