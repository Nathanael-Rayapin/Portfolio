"use client"

import { ArrowUp, Heart } from "lucide-react"
import { siGithub } from 'simple-icons'
import BrandIcon from "./brand-icon"

const footerLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: siGithub, href: "https://github.com/Nathanael-Rayapin", label: "GitHub" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-card/30 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a href="#accueil" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">{"<"}</span>
              N.R-Portfolio
              <span className="text-primary">{"/>"}</span>
            </a>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nathanaël Rayapin. Fait avec
              <Heart className="h-4 w-4 fill-accent text-accent" />
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & scroll to top */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <BrandIcon
                    icon={social.icon}
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
