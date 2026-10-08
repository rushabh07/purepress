import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Laundry',
    items: [
      { service: 'Wash & Fold', price: '₹60/kg' },
      { service: 'Wash & Iron', price: '₹80/kg' },
      { service: 'Premium Wash', price: '₹100/kg' },
    ],
  },
  {
    name: 'Dry Cleaning',
    items: [
      { service: 'Shirt', price: '₹80' },
      { service: 'T-Shirt', price: '₹70' },
      { service: 'Trousers', price: '₹100' },
      { service: 'Blazer', price: '₹200' },
      { service: 'Suit', price: '₹300' },
      { service: 'Saree', price: '₹180' },
    ],
  },
  {
    name: 'Steam Iron',
    items: [
      { service: 'Shirt', price: '₹25' },
      { service: 'T-Shirt', price: '₹20' },
      { service: 'Trousers', price: '₹30' },
      { service: 'Saree', price: '₹60' },
      { service: 'Blazer', price: '₹80' },
    ],
  },
  {
    name: 'Bedsheets & Blankets',
    items: [
      { service: 'Single Bedsheet', price: '₹100' },
      { service: 'Double Bedsheet', price: '₹150' },
      { service: 'Blanket', price: '₹250' },
      { service: 'Comforter', price: '₹300' },
      { service: 'Heavy Blanket', price: '₹350' },
    ],
  },
  {
    name: 'Shoes',
    items: [
      { service: 'Sports Shoes', price: '₹250' },
      { service: 'Sneakers', price: '₹300' },
      { service: 'Formal Shoes', price: '₹250' },
      { service: 'Boots', price: '₹400' },
    ],
  },
  {
    name: 'Specialty',
    items: [
      { service: 'Curtain Cleaning', price: 'From ₹150/panel' },
      { service: 'Carpet Cleaning', price: 'From ₹12/sq.ft' },
      { service: 'Leather Item Care', price: 'From ₹400' },
      { service: 'Silk / Premium Fabric', price: 'From ₹250' },
      { service: 'Stain Treatment', price: 'From ₹150' },
    ],
  },
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(0)
  const active = categories[activeTab]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-px">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="label-text block mb-4">Transparent Pricing</span>
          <h2 className="heading-lg text-3xl md:text-4xl mb-3">Full Rate List</h2>
          <p className="body-text text-base">
            No hidden charges. Rate confirmed before cleaning starts.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="border-b border-navy-100 mb-10 overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex items-center gap-1 min-w-max">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                  activeTab === i
                    ? 'border-navy-900 text-navy-950'
                    : 'border-transparent text-navy-500 hover:text-navy-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Table */}
        <div className="max-w-2xl">
          <div className="border border-navy-100">
            <div className="px-6 py-3.5 bg-navy-50 border-b border-navy-100">
              <h3 className="font-display font-bold text-navy-950 text-sm tracking-wide uppercase">
                {active.name}
              </h3>
            </div>
            <div className="px-6 py-2 divide-y divide-navy-50">
              {active.items.map((item) => (
                <div key={item.service} className="flex items-center justify-between py-3.5">
                  <span className="text-sm text-navy-700">{item.service}</span>
                  <span className="font-semibold text-navy-950 text-sm tabular-nums">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-xs text-navy-400 mt-6 max-w-2xl leading-relaxed">
          Prices may vary based on fabric, size, condition and special treatment. Final rate is confirmed before cleaning begins.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link to="/book" className="btn-primary">
            Need a Custom Quote? Get Estimate
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
