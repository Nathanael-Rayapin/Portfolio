"use client"

import { useEffect, useRef, useState } from "react"
import { siGithub } from 'simple-icons'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import BrandIcon from "./brand-icon"

interface IProjectProps {
  dict: {
    section: string;
    title: string;
    description: string;
    projects: I18nProjectsProps[]
  };
}

interface I18nProjectsProps {
  description: string;
}

interface IProjectsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  featured: boolean;
}

export default function ProjectsSection({ dict }: IProjectProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const projects: IProjectsProps[] = [
    {
      id: 1,
      title: "Wewiins",
      description: dict.projects[0].description,
      image: "/wewiins-logo.png",
      tags: ["Angular", "Stripe", "Kotlin", "Spring Boot", "Supabase", "FlutterFlow", "Docker", "PostgresSQL", "Figma"],
      githubUrl: "https://github.com/Nathanael-Rayapin/Wewiins",
      featured: true,
    },
    {
      id: 2,
      title: "DevAlert",
      description: dict.projects[1].description,
      image: "/dev-alert.png",
      tags: ["Next.js"],
      githubUrl: "https://github.com/Nathanael-Rayapin/DevAlert",
      featured: true,
    },
    {
      id: 3,
      title: "ExpectToBeTrue",
      description: dict.projects[2].description,
      image: "/expect-to-be-true.png",
      tags: ["Vitest"],
      githubUrl: "https://github.com/Nathanael-Rayapin/Vitest-Playground",
      featured: true,
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projets" ref={sectionRef} className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div
          className={cn(
            "mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <div>
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">{dict.section}</span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-balance">{dict.title}</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            {dict.description}
          </p>
        </div>

        {/* Featured projects */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <article
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                  {/* Hover overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
                      hoveredProject === project.id ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <BrandIcon
                          icon={siGithub}
                          className="h-4 w-4"
                        />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}
