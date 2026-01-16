"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import AnimatedCounter from "./animated-counter"

const stats = [
  { value: 4, suffix: "", label: "Années d'expérience" },
  { value: 10, suffix: "+", label: "Projets réalisés" },
  { value: 100, suffix: "%", label: "Passion" },
]

const experiences = [
  {
    period: "2025",
    role: "Développeur Fullstack",
    company: "Liksi — Rennes · Client : Garance",
    description:
      "Intégration d'un système d'authentification Keycloak en marque blanche : parcours d'inscription, connexion et gestion du mot de passe, avec développement d'authenticators personnalisés.",
    stack: "Keycloak, Keycloakify, React, Java",
  },
  {
    period: "2024",
    role: "Développeur Fullstack",
    company: "Liksi — Rennes · Client : Groupe Le Duff",
    description:
      "Développement d'une interface web intégrée aux caisses enregistreuses permettant la consultation et la mise à jour des informations client ainsi que la création de cartes de fidélité, avec rendu via WebView et ajout d'un clavier virtuel.",
    stack: "React, Kotlin, Spring Boot, Vitest, JUnit",
  },
  {
    period: "2024",
    role: "Développeur Fullstack",
    company: "Liksi — Rennes · Client : Bouge ta Boîte",
    description:
      "Mise en place d'une nouvelle offre d'abonnement avec gestion des accès utilisateurs par rôles via Keycloak, intégrée aux offres existantes et livrée dans un délai contraint.",
    stack: "Vue.js, Node.js, Keycloak, Stripe (Webhooks)",
  },
  {
    period: "2023 — 2024",
    role: "Développeur Mobile",
    company: "Liksi — Rennes · Client : Ouest-France",
    description:
      "Développement d'une application mobile destinée aux journalistes pour l'upload de vidéos, incluant compression et envoi vers des plateformes externes.",
    stack: "Flutter, FFmpeg, Swift · Android & iOS (majoritairement iOS)",
  },
  {
    period: "2023",
    role: "Développeur Fullstack",
    company: "Liksi — Rennes · Client : Foncia",
    description:
      "Conception d'un parcours locataire pour le dépôt de candidatures (création de compte, complétion de dossier) et évolution du back-office avec filtres et traitement des données transmises.",
    stack: "Angular, RxJS, NestJS, Vitest · Back-office : React",
  },
]

const technologies = [
  // Frontend frameworks / UI
  "Angular",
  "React",
  "Next.js",
  "Astro",
  "React Native",

  // UI Libraries / CSS
  "Tailwind",
  "Bootstrap",
  "PrimeNg",
  "DaisyUI",

  // Backend frameworks / runtimes
  "Node.js",
  "Nest.js",
  "Java",
  "Kotlin",
  "Spring Boot",

  // ORM / Databases
  "TypeORM",
  "Prisma",
  "Sequelize",
  "PostgreSQL",

  // DevOps / Cloud / Container
  "Docker",
  "AWS",
  "Vercel",

  // Design / Prototyping
  "Figma",
  "Framer",

  // Collaborative tool
  "Trello",
  "Jira",
  "Notion",
  "Confluence",

  // Others
  "GraphQL",
  "TypeScript",
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
        {/* Technology */}
        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-border bg-card/30 py-8 transition-all duration-700 delay-500 mb-24",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <div className="relative flex overflow-hidden">
            <div className="flex animate-[slide_20s_linear_infinite] gap-8 whitespace-nowrap">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 text-xl font-semibold text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section header */}
        <div
          className={`mb-20 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">À propos</span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-balance">Qui suis-je ?</span>
          </h2>
        </div>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column - About text */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Développeur passionné avec {" "}
                <span className="font-semibold text-foreground">4 ans d'expérience</span>, j'ai débuté mon parcours en ESN, au fil de missions et de contextes très variés.
                Cette diversité m'a permis de toucher à de nombreux domaines : front-end,
                back-end, DevOps, web, mobile, ainsi que des solutions low-code et no-code.
              </p>
              <p>
                J'aborde chaque projet avec une approche pragmatique et curieuse, en cherchant
                avant tout à comprendre le besoin et à faire des choix techniques cohérents.
                J'utilise également l'IA comme outil d'aide au développement lorsque cela a du
                sens, tout en veillant à rester <span className="text-primary">pleinement acteur</span> de mes réalisations plutôt
                que simple spectateur.
              </p>
              <p>
                En dehors du développement, je cultive mes autres passions, entre
                <span className="text-primary"> culture numérique</span> et{" "}
                <span className="text-primary">gastronomie</span>.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: MapPin, label: "Localisation", value: "Le Mans, France" },
                { icon: Briefcase, label: "Disponibilité", value: "Ouvert aux opportunités" },
                { icon: Calendar, label: "Expérience", value: "4 ans" },
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
            <h3 className="text-xl font-semibold">Expérience</h3>
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
