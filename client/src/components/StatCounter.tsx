import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface Props {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export default function StatCounter({ value, suffix = '', prefix = '', label, duration = 2000 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-navy-200 text-sm font-medium uppercase tracking-wide">{label}</div>
    </div>
  )
}
