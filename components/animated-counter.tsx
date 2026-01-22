"use client"

import { useEffect, useState } from "react"

interface IAnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ end, suffix = "", duration = 2000 }:IAnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
