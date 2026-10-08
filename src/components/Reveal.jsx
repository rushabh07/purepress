import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const directionClasses = {
    up: 'translate-y-6',
    down: '-translate-y-6',
    left: 'translate-x-6',
    right: '-translate-x-6',
    none: '',
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${directionClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
