import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Laundry Care',
    desc: 'Professional washing, drying and folding for everyday clothing.',
    price: 'Starting from ₹60/kg',
    img: '/service-laundry.jpg',
    alt: 'Neatly folded clean white shirts and towels',
    items: ['Wash & Fold', 'Wash & Iron', 'Premium Wash'],
  },
  {
    title: 'Dry Cleaning',
    desc: 'Gentle professional cleaning for suits, sarees, blazers and delicate garments.',
    price: 'Starting from ₹80',
    img: '/service-dry-cleaning.jpg',
    alt: 'Professional pressing a dark suit jacket',
    items: ['Shirts', 'Trousers', 'Blazers', 'Suits', 'Sarees'],
  },
  {
    title: 'Steam Iron',
    desc: 'Professional steam ironing for a crisp, polished finish.',
    price: 'Starting from ₹20',
    img: '/service-steam-iron.jpg',
    alt: 'Professional steam ironing of crisp white shirts',
    items: ['Shirts', 'T-Shirts', 'Trousers', 'Sarees', 'Blazers'],
  },
  {
    title: 'Bedsheets & Blankets',
    desc: 'Deep cleaning for bedsheets, blankets, comforters and home textiles.',
    price: 'Starting from ₹100',
    img: '/service-bedsheets.jpg',
    alt: 'Crisp white bed linen on a luxurious bed',
    items: ['Single/Double Bedsheets', 'Blankets', 'Comforters'],
  },
  {
    title: 'Shoes & Specialty Care',
    desc: 'Specialized cleaning for shoes, leather items and premium fabrics.',
    price: 'Starting from ₹250',
    img: '/service-shoes.jpg',
    alt: 'Premium shoes being professionally cleaned',
    items: ['Sports Shoes', 'Sneakers', 'Formal Shoes', 'Boots'],
  },
  {
    title: 'Specialized Fabric Care',
    desc: 'Expert treatment for carpets, leather, silk and premium fabrics.',
    price: 'Starting from ₹150',
    img: '/service-silk.jpg',
    alt: 'Elegant premium fabric garments on hangers',
    items: ['Carpet Cleaning', 'Leather Item Care', 'Silk/Premium Fabric', 'Stain Treatment'],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-[70px] bg-white">
      {/* Hero */}
      <div className="bg-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors mb-6">
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <span className="label-text block mb-4 text-brand-400">Our Services</span>
          <h1 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight max-w-2xl mb-5">
            Professional Care for Every Fabric
          </h1>
          <p className="text-navy-400 text-base leading-relaxed max-w-xl">
            From everyday laundry to delicate garments, PurePress provides reliable cleaning, finishing and doorstep delivery.
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((svc) => (
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
                  <h3 className="font-display font-bold text-navy-950 text-lg mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4">
                    {svc.desc}
                  </p>

                  {/* Sub-items */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] text-navy-600 bg-sand border border-navy-100 px-2 py-0.5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-navy-50 mt-auto">
                    <span className="text-xs font-semibold text-navy-700">{svc.price}</span>
                    <Link
                      to="/book"
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
        </div>
      </section>

      {/* CTA */}
      <div className="bg-navy-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-white text-2xl md:text-4xl mb-4">
            Ready to Give Your Clothes Better Care?
          </h2>
          <p className="text-navy-400 text-sm md:text-base mb-8 max-w-md mx-auto">
            Book a pickup today and experience professional fabric care at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="btn-light">
              Book a Pickup
              <ArrowRight size={15} />
            </Link>
            <Link to="/#pricing" className="btn-outline border-navy-700 text-white hover:bg-navy-800 hover:border-navy-600">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
