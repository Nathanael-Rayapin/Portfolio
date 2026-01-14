"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send, Phone } from "lucide-react"
import { siGithub } from 'simple-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import BrandIcon from "./brand-icon"

const contactInfo = [
  { icon: Mail, label: "Email", value: "nathanael.rayapin@gmail.com", href: "mailto:nathanael.rayapin@gmail.com" },
  { icon: Phone, label: "Téléphone", value: "+33 6 41 51 27 17", href: "tel:+33641512717" },
  { icon: MapPin, label: "Localisation", value: "Le Mans, France" },
]

const socials = [
  { icon: siGithub, href: "https://github.com/Nathanael-Rayapin", label: "GitHub" },
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setFormState({ name: "", email: "", subject: "", message: "" })
    alert("Message envoyé avec succès !")
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-32 bottom-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div
          className={cn(
            "mb-20 text-center transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">Contact</span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-balance">Travaillons ensemble</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter. Je vous répondrai dans les plus brefs
            délais.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom
                  </label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="border-border bg-card/50 transition-colors focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="border-border bg-card/50 transition-colors focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <Input
                  id="subject"
                  placeholder="Sujet de votre message"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  required
                  className="border-border bg-card/50 transition-colors focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={6}
                  className="border-border bg-card/50 transition-colors focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="group w-full gap-2 bg-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div
            className={cn(
              "space-y-8 transition-all duration-700 delay-400",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="rounded-xl border border-border bg-card/50 p-6">
              <h3 className="mb-4 font-semibold">Retrouvez-moi sur</h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <BrandIcon
                      icon={social.icon}
                      className="h-5 w-5"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-50" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Ouvert aux opportunités</p>
                  <p className="text-sm text-muted-foreground">Actuellement ouvert à de nouveaux projets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
