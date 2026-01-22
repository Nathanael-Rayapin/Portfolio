import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import SkillsSection from "@/components/skills-section"
import { getDictionary, Locale } from "./dictionaries"

interface IPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: IPageProps) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navigation lang={lang} dict={dict.navbar} />
      <HeroSection dict={dict.hero} />
      <AboutSection dict={dict.about} />
      <SkillsSection dict={dict.skills} />
      <ProjectsSection dict={dict.project} />
      <ContactSection dict={dict.contact} />
      <Footer navbar={dict.navbar} madewith={dict.footer.madewith} />
    </main>
  )
}
