import Reveal from './Reveal'

const galleryItems = [
  {
    src: '/hero-laundry.jpg',
    alt: 'Clean laundry facility with folded garments on shelves',
    span: 'row-span-2',
    aspect: 'h-full',
  },
  {
    src: '/service-laundry.jpg',
    alt: 'Neatly folded shirts and towels on a wooden counter',
    span: '',
    aspect: 'h-52',
  },
  {
    src: '/service-curtain.jpg',
    alt: 'Freshly cleaned linen curtains with natural light',
    span: '',
    aspect: 'h-52',
  },
  {
    src: '/service-dry-cleaning.jpg',
    alt: 'Professional pressing a suit jacket',
    span: 'row-span-2',
    aspect: 'h-full',
  },
  {
    src: '/curtain-care-wide.jpg',
    alt: 'Professional curtain steam cleaning facility',
    span: '',
    aspect: 'h-52',
  },
  {
    src: '/service-carpet.jpg',
    alt: 'Steam cleaning a patterned area rug',
    span: '',
    aspect: 'h-52',
  },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-px">

        {/* Header */}
        <Reveal>
          <div className="mb-12">
            <span className="label-text block mb-4">Our Work</span>
            <h2 className="heading-lg text-3xl md:text-4xl">A Glimpse Inside</h2>
            <p className="body-text mt-3 max-w-md text-sm">
              The care and precision we bring to every order, every day.
            </p>
          </div>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-3">
          {galleryItems.map((item, i) => (
            <Reveal key={i} delay={i * 80} className={item.span}>
              <div className="overflow-hidden group h-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="img-zoom w-full h-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
