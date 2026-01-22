"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import { siGithub } from 'simple-icons'
import { Button } from "@/components/ui/button"
import BrandIcon from "./brand-icon"

interface IHeroProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    cta1: string;
    cta2: string;
  };
}

export default function HeroSection({ dict }: IHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("a-propos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socials = [
    { icon: siGithub, href: "https://github.com/Nathanael-Rayapin", label: "GitHub" },
  ]

  return (
    <section
      id="accueil"
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float delay-300" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl animate-glow" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Greeting */}
        <div
          className={`mb-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            👋 {dict.badge}
          </span>
        </div>

        {/* Name */}
        <h1
          className={`mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <span className="block text-balance">Nathanaël Rayapin</span>
        </h1>

        {/* Title */}
        <div
          className={`mb-8 overflow-hidden transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">
            <span className="text-primary">{dict.title}</span>
          </p>
          <p className="mt-2 text-lg text-muted-foreground">{dict.subtitle}</p>
        </div>

        {/* Description */}
        <p
          className={`mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {dict.description}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary px-8 py-6 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105"
            onClick={() => {
              const element = document.getElementById("projets")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="relative z-10">{dict.cta1}</span>
            <span className="absolute inset-0 -translate-x-full bg-foreground transition-transform duration-300 group-hover:translate-x-0" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group border-muted-foreground/30 px-8 py-6 text-base font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/10 bg-transparent"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {dict.cta2}
          </Button>
        </div>

        {/* Social Links */}
        <div
          className={`mt-12 flex items-center justify-center gap-6 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="group relative p-3 text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <BrandIcon
                icon={icon}
                className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors duration-300 hover:text-primary"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}
