"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          style={{
            width: isHovering ? 48 : 12,
            height: isHovering ? 48 : 12,
            transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease",
            mixBlendMode: "difference",
          }}
        />
      </div>
      {/* Cursor trail */}
      <div
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 0.5 : 0,
          transition: "left 0.15s ease, top 0.15s ease, opacity 0.3s ease",
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary"
          style={{
            width: isHovering ? 64 : 40,
            height: isHovering ? 64 : 40,
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        />
      </div>
    </>
  )
}
