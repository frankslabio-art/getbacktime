import SmoothScroll from '@/components/SmoothScroll'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import AuditCategories from '@/components/AuditCategories'
import Outcomes from '@/components/Outcomes'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import BottomCTA from '@/components/BottomCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <AuditCategories />
        <Outcomes />
        <About />
        <Testimonials />
        <BottomCTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
