"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Locale } from "@/app/[lang]/dictionaries"
import { useRouter, usePathname } from 'next/navigation';
import Select from "./ui/select"

export interface INavigationProps {
  lang: Locale;
  dict: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
}

export default function Navigation({ lang, dict }: INavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("accueil")

  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "#accueil", label: dict.home },
    { href: "#a-propos", label: dict.about },
    { href: "#competences", label: dict.skills },
    { href: "#projets", label: dict.projects },
    { href: "#contact", label: dict.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleLanguageChange = (newLang: string) => {
    if (newLang === lang) return;
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/80 py-4 backdrop-blur-xl" : "bg-transparent py-6",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("#accueil")
          }}
          className="group relative text-2xl font-bold tracking-tight"
        >
          <span className="relative z-10">
            <span className="text-primary">{"<"}</span>
            N.R-Portfolio
            <span className="text-primary">{"/>"}</span>
          </span>
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className={cn(
                  "relative py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300",
                  activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    activeSection === link.href.slice(1) ? "w-full" : "w-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <Select currentLang={lang} handleLanguageChange={handleLanguageChange} />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
          )}
        >
          <ul className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  "transition-all duration-500",
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className={cn(
                    "text-3xl font-bold uppercase tracking-wider transition-colors duration-300",
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
