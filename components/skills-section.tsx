"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiBootstrap,
  SiPrimeng,
  SiDaisyui,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiSequelize,
  SiDocker,
  SiAmazonwebservices,
  SiVercel,
  SiFigma,
  SiFramer,
  SiTrello,
  SiJira,
  SiNotion,
  SiConfluence,
  SiGraphql,
} from "react-icons/si"
import { FaJava, FaDatabase } from "react-icons/fa"
import { TbBrandKotlin } from "react-icons/tb"

interface ISkillsProps {
  dict: {
    title: string;
  };
}

const technologyStacks = [
  {
    title: "Frontend & UI",
    icon: SiReact,
    color: "from-cyan-500 to-blue-500",
    technologies: [
      { name: "Angular", icon: SiAngular },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Astro", icon: SiAstro },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    title: "Styling & UI Libraries",
    icon: SiTailwindcss,
    color: "from-teal-500 to-cyan-500",
    technologies: [
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "PrimeNg", icon: SiPrimeng },
      { name: "DaisyUI", icon: SiDaisyui },
    ],
  },
  {
    title: "Backend & Runtime",
    icon: SiNodedotjs,
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Java", icon: FaJava },
      { name: "Kotlin", icon: TbBrandKotlin },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },
  {
    title: "ORM & Databases",
    icon: SiPostgresql,
    color: "from-blue-500 to-indigo-500",
    technologies: [
      { name: "TypeORM", icon: FaDatabase },
      { name: "Prisma", icon: SiPrisma },
      { name: "Sequelize", icon: SiSequelize },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: SiDocker,
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    title: "Design & Prototyping",
    icon: SiFigma,
    color: "from-pink-500 to-rose-500",
    technologies: [
      { name: "Figma", icon: SiFigma },
      { name: "Framer", icon: SiFramer },
    ],
  },
  {
    title: "Collaboration",
    icon: SiNotion,
    color: "from-violet-500 to-purple-500",
    technologies: [
      { name: "Trello", icon: SiTrello },
      { name: "Jira", icon: SiJira },
      { name: "Notion", icon: SiNotion },
      { name: "Confluence", icon: SiConfluence },
    ],
  },
  {
    title: "Autres",
    icon: SiTypescript,
    color: "from-amber-500 to-yellow-500",
    technologies: [
      { name: "GraphQL", icon: SiGraphql },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
]

export default function SkillsSection({ dict }: ISkillsProps) {
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
    <section id="competences" ref={sectionRef} className="relative overflow-hidden py-32 px-6">
      {/* Background decorations */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Technology Stacks Grid */}
        <div className="mt-8">
          <h3
            className={cn(
              "mb-8 text-2xl font-semibold transition-all duration-700 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            {dict.title}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologyStacks.map((stack, stackIndex) => {
              const StackIcon = stack.icon
              return (
                <div
                  key={stack.title}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all duration-500 hover:border-primary/50 hover:bg-card",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                  )}
                  style={{ transitionDelay: `${400 + stackIndex * 100}ms` }}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-5",
                      stack.color,
                    )}
                  />

                  {/* Header */}
                  <div className="relative mb-4 flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br",
                        stack.color,
                      )}
                    >
                      <StackIcon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold">{stack.title}</h4>
                  </div>

                  {/* Technologies */}
                  <div className="relative flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => {
                      const TechIcon = tech.icon
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground"
                        >
                          <TechIcon className="h-3.5 w-3.5" />
                          <span>{tech.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
