import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { About } from '@/components/About'
import { TechStack } from '@/components/TechStack'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { useSeo } from '@/utils/seo'

export function Home() {
  useSeo()

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}