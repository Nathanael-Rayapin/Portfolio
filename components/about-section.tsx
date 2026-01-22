"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import AnimatedCounter from "./animated-counter"

interface IAboutProps {
  dict: {
    section: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
    localisation: {
      label: string;
      value: string;
    };
    availability: {
      label: string;
      value: string;
    };
    experience: {
      label: string;
      value: string;
      alternatelabel: string;
    };
    completedprojects: string;
    passion: string;
    experiences: I18nExperiencesProps[]
  };
}

interface I18nExperiencesProps {
  role: string;
  description: string;
}

interface IExperiencesProps {
  period: string;
  role: string;
  company: string;
  description: string;
  stack: string;
}

export default function AboutSection({ dict }: IAboutProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const experiences: IExperiencesProps[] = [
    {
      period: "2025",
      role: dict.experiences[0].role,
      company: "Liksi — Rennes · Client : Garance",
      description: dict.experiences[0].description,
      stack: "Stack : Keycloak, Keycloakify, React, Java",
    },
    {
      period: "2024",
      role: dict.experiences[1].role,
      company: "Liksi — Rennes · Client : Groupe Le Duff",
      description: dict.experiences[1].description,
      stack: "Stack : React, Kotlin, Spring Boot, Vitest, JUnit",
    },
    {
      period: "2024",
      role: dict.experiences[2].role,
      company: "Liksi — Rennes · Client : Bouge ta Boîte",
      description: dict.experiences[2].description,
      stack: "Stack : Vue.js, Node.js, Keycloak, Stripe (Webhooks)",
    },
    {
      period: "2023 — 2024",
      role: dict.experiences[3].role,
      company: "Liksi — Rennes · Client : Ouest-France",
      description: dict.experiences[3].description,
      stack: "Stack : Flutter, FFmpeg, Swift · Android & iOS (majoritairement iOS)",
    },
    {
      period: "2023",
      role: dict.experiences[4].role,
      company: "Liksi — Rennes · Client : Foncia",
      description: dict.experiences[4].description,
      stack: "Stack : Angular, RxJS, NestJS, Vitest · Back-office : React",
    }
  ]

  const stats = [
    { value: 4, suffix: "", label: dict.experience.alternatelabel },
    { value: 10, suffix: "+", label: dict.completedprojects },
    { value: 100, suffix: "%", label: dict.passion },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="a-propos" ref={sectionRef} className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-card/50" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div
          className={`mb-20 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">{dict.section}</span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-balance">{dict.title}</span>
          </h2>
        </div>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column - About text */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>{dict.description1}</p>
              <p>{dict.description2}</p>
              <p>{dict.description3}</p>
            </div>

            {/* Info cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: MapPin, label: dict.localisation.label, value: dict.localisation.value },
                { icon: Briefcase, label: dict.availability.label, value: dict.availability.value },
                { icon: Calendar, label: dict.experience.label, value: dict.experience.value },
              ].map(({ icon: Icon, label, value }, index) => (
                <div
                  key={label}
                  className="group rounded-xl border border-border bg-card/50 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-card"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="mb-2 h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Experience timeline */}
          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <h3 className="text-xl font-semibold">{dict.experience.label}</h3>
            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <div key={index} className="group relative pl-8" style={{ transitionDelay: `${index * 150}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />

                  <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-primary">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-semibold">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>

                  {/* Stack */}
                  {exp.stack && (
                    <p className="mt-1 text-xs text-primary italic">
                      Stack : {exp.stack}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4 transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="group text-center" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">
                {isVisible && <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
