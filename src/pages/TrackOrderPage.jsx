import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Phone, MapPin, Clock, CheckCircle, Package, Truck, Zap, ArrowLeft } from 'lucide-react'

const demoOrders = {
  '9876543210': {
    id: 'PP10248',
    status: 'out-for-delivery',
    service: 'Wash & Iron',
    items: '8 garments',
    pickup: 'Bavdhan',
    delivery: 'Bavdhan',
    estimatedDelivery: 'Today, 6:30 PM',
  },
  '9876543211': {
    id: 'PP10249',
    status: 'processing',
    service: 'Dry Cleaning — Suit',
    items: '2 pieces',
    pickup: 'Baner',
    delivery: 'Baner',
    estimatedDelivery: 'Tomorrow, 12:00 PM',
  },
  '9876543212': {
    id: 'PP10250',
    status: 'delivered',
    service: 'Wash & Fold',
    items: '12 kg',
    pickup: 'Bavdhan',
    delivery: 'Bavdhan',
    estimatedDelivery: 'Delivered on 28 Sep',
  },
}

const timelineSteps = [
  { key: 'confirmed', label: 'Order Confirmed' },
  { key: 'pickup', label: 'Pickup Completed' },
  { key: 'cleaning', label: 'Cleaning & Processing' },
  { key: 'quality', label: 'Quality Checked' },
  { key: 'packed', label: 'Packed' },
  { key: 'delivery', label: 'Out for Delivery' },
  { key: 'delivered', label: 'Delivered' },
]

const statusOrder = {
  'confirmed': 0,
  'pickup': 1,
  'cleaning': 2,
  'quality': 3,
  'packed': 4,
  'delivery': 5,
  'delivered': 6,
}

const branches = [
  {
    name: 'Bavdhan',
    address: 'Opp. Suryadatta College, Bavdhan, Pune 411021',
    phone: '+91 77750 66002',
    phoneHref: 'tel:+917775066002',
    directions: 'https://maps.google.com/?q=Suryadatta+College+Bavdhan+Pune',
  },
  {
    name: 'Baner',
    address: 'Shop 15, Jardin Commercial Space, Baner-Mahalunge Rd, near Vibgyor School, Mahalunge, Pune 411045',
    phone: '+91 88882 66265',
    phoneHref: 'tel:+918888266265',
    directions: 'https://maps.google.com/?q=Vibgyor+School+Mahalunge+Baner+Pune',
  },
]

const trustStats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '2', label: 'Branches in Pune' },
  { value: '100%', label: 'Satisfaction Guarantee' },
  { value: '90 min', label: 'Express Turnaround' },
  { value: '9+', label: 'Services Offered' },
]

export default function TrackOrderPage() {
  const [phone, setPhone] = useState('')
  const [searched, setSearched] = useState(false)
  const [order, setOrder] = useState(null)

  const handleTrack = (e) => {
    e.preventDefault()
    const cleaned = phone.replace(/\D/g, '')
    const found = demoOrders[cleaned]
    setOrder(found || null)
    setSearched(true)
  }

  const currentStepIndex = order ? statusOrder[order.status] : -1

  return (
    <div className="pt-[70px] bg-white">
      {/* Hero */}
      <div className="bg-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors mb-6">
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <span className="label-text block mb-4 text-brand-400">Order Tracking</span>
            <h1 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight mb-5">
              Where Are Your Clothes?
            </h1>
            <p className="text-navy-400 text-base leading-relaxed mb-8">
              Enter the phone number you used when booking to see the latest status of your PurePress order.
            </p>

            {/* Tracking Form */}
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setSearched(false) }}
                  placeholder="Enter your booking phone number"
                  className="w-full border border-navy-700 bg-navy-900 text-white pl-11 pr-4 py-3.5 text-sm placeholder-navy-500 focus:outline-none focus:border-navy-500 transition-colors"
                />
              </div>
              <button type="submit" className="btn-light flex-shrink-0">
                Track Order
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Tracking Result */}
      {searched && (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          {order ? (
            <div className="max-w-3xl mx-auto">
              {/* Order Header */}
              <div className="bg-white border border-navy-100 rounded-lg p-6 md:p-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="text-xs text-navy-400 uppercase tracking-widest mb-1">Order</div>
                    <div className="font-display font-bold text-navy-950 text-2xl">#{order.id}</div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-700 text-sm font-semibold">
                    <Truck size={16} />
                    Out for Delivery
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-navy-50">
                  <div>
                    <div className="text-xs text-navy-400 mb-1">Service</div>
                    <div className="text-sm font-medium text-navy-900">{order.service}</div>
                  </div>
                  <div>
                    <div className="text-xs text-navy-400 mb-1">Items</div>
                    <div className="text-sm font-medium text-navy-900">{order.items}</div>
                  </div>
                  <div>
                    <div className="text-xs text-navy-400 mb-1">Pickup</div>
                    <div className="text-sm font-medium text-navy-900">{order.pickup}</div>
                  </div>
                  <div>
                    <div className="text-xs text-navy-400 mb-1">Delivery</div>
                    <div className="text-sm font-medium text-navy-900">{order.delivery}</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-navy-50 flex items-center gap-3">
                  <Clock size={16} className="text-brand-600 flex-shrink-0" />
                  <span className="text-sm text-navy-700">
                    Estimated Delivery: <strong className="text-navy-950">{order.estimatedDelivery}</strong>
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white border border-navy-100 rounded-lg p-6 md:p-8">
                <h3 className="font-display font-bold text-navy-950 text-lg mb-8">Order Status</h3>

                {/* Desktop Timeline */}
                <div className="hidden md:block">
                  <div className="flex items-start justify-between">
                    {timelineSteps.map((step, i) => {
                      const isCompleted = i <= currentStepIndex
                      const isCurrent = i === currentStepIndex
                      return (
                        <div key={step.key} className="flex flex-col items-center flex-1">
                          <div className="flex items-center w-full">
                            {i > 0 && (
                              <div className={`flex-1 h-0.5 ${i <= currentStepIndex ? 'bg-navy-900' : 'bg-navy-100'}`} />
                            )}
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                                isCompleted
                                  ? 'bg-navy-900 border-navy-900 text-white'
                                  : 'bg-white border-navy-200 text-navy-300'
                              } ${isCurrent ? 'ring-4 ring-brand-100' : ''}`}
                            >
                              {isCompleted ? (
                                <CheckCircle size={16} />
                              ) : (
                                <div className="w-2 h-2 rounded-full bg-navy-200" />
                              )}
                            </div>
                            {i < timelineSteps.length - 1 && (
                              <div className={`flex-1 h-0.5 ${i < currentStepIndex ? 'bg-navy-900' : 'bg-navy-100'}`} />
                            )}
                          </div>
                          <span className={`text-xs mt-2 text-center leading-tight ${isCompleted ? 'text-navy-900 font-medium' : 'text-navy-400'}`}>
                            {step.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden">
                  <div className="space-y-0">
                    {timelineSteps.map((step, i) => {
                      const isCompleted = i <= currentStepIndex
                      const isCurrent = i === currentStepIndex
                      return (
                        <div key={step.key} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                                isCompleted
                                  ? 'bg-navy-900 border-navy-900 text-white'
                                  : 'bg-white border-navy-200 text-navy-300'
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle size={14} />
                              ) : (
                                <div className="w-1.5 h-1.5 rounded-full bg-navy-200" />
                              )}
                            </div>
                            {i < timelineSteps.length - 1 && (
                              <div className={`w-0.5 flex-1 min-h-[24px] ${i < currentStepIndex ? 'bg-navy-900' : 'bg-navy-100'}`} />
                            )}
                          </div>
                          <div className="pb-6">
                            <span className={`text-sm ${isCompleted ? 'text-navy-900 font-medium' : 'text-navy-400'}`}>
                              {step.label}
                            </span>
                            {isCurrent && (
                              <span className="ml-2 text-xs bg-brand-50 text-brand-700 px-2 py-0.5 font-medium">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-xl mx-auto bg-sand border border-navy-100 rounded-lg p-8 text-center">
              <Package size={40} className="text-navy-300 mx-auto mb-4" />
              <p className="text-sm text-navy-600 leading-relaxed">
                We couldn't find an order associated with this number. Please check your number and try again.
              </p>
              <p className="text-xs text-navy-400 mt-3">
                Demo numbers: 9876543210, 9876543211, 9876543212
              </p>
            </div>
          )}
        </div>
      )}

      {/* Branches */}
      <section className="bg-sand py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="label-text block mb-4">Our Branches</span>
            <h2 className="heading-lg text-3xl md:text-4xl mb-3">Branches in Bavdhan & Baner</h2>
            <p className="body-text text-base">
              Visit or contact your nearest PurePress branch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch) => (
              <div key={branch.name} className="bg-white border border-navy-100 rounded-lg p-7 hover:border-navy-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-navy-950 text-xl">{branch.name}</h3>
                </div>
                <p className="text-sm text-navy-600 leading-relaxed mb-3">{branch.address}</p>
                <a href={branch.phoneHref} className="text-sm font-semibold text-navy-900 hover:text-brand-600 transition-colors mb-5 inline-block">
                  {branch.phone}
                </a>
                <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-navy-50">
                  <a href={branch.phoneHref} className="btn-primary text-xs px-5 py-2.5 inline-flex items-center justify-center gap-2">
                    <Phone size={13} />
                    Call Branch
                  </a>
                  <a href={branch.directions} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-5 py-2.5 inline-flex items-center justify-center gap-2">
                    <MapPin size={13} />
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-y border-navy-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-navy-950 text-2xl md:text-3xl mb-1">{stat.value}</div>
                <div className="text-xs text-navy-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Express Service */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-text block mb-4 text-brand-400">Need It Fast? We've Got You.</span>
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight leading-tight mb-5">
                90-Minute Express Service
              </h2>
              <p className="text-navy-400 text-base leading-relaxed mb-6">
                From pickup to professionally cleaned and finished garments delivered back to your door — all within 90 minutes.
              </p>
              <p className="text-navy-500 text-sm leading-relaxed mb-8">
                Available in Bavdhan, Baner and nearby free-pickup areas, subject to slot availability. Priced at 1.5× the standard rate.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-sm text-navy-300">Wash & Fold</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-sm text-navy-300">Wash & Iron</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div>
                  <div className="text-navy-500 text-xs uppercase tracking-widest mb-1">Schedule</div>
                  <div className="text-white font-medium">Mon–Wed & Fri–Sun</div>
                </div>
                <div>
                  <div className="text-navy-500 text-xs uppercase tracking-widest mb-1">Price</div>
                  <div className="text-white font-medium">1.5× standard rate</div>
                </div>
              </div>

              <p className="text-xs text-navy-500 mt-4 italic">Even our machines rest on Thursdays.</p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-600 flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">90-Minute Express Service</h3>
              </div>
              <p className="text-navy-400 text-sm leading-relaxed mb-6">
                Need it back fast? We pick up and deliver within 90 minutes — Bavdhan, Baner & nearby areas.
              </p>
              <Link to="/book" className="btn-light w-full justify-center inline-flex">
                <Zap size={15} />
                Book Express Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
