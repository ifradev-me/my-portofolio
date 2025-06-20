import './App.css'
import Navbar from"./navbar"
import Togglebutton from './component/toggleButton'
import HeroSection from './heroSec'
import { useState, useEffect, useRef } from 'react'
import ProjectSection from './projectSec'
import SectionWrapper from './component/secWrap'
import LayananSection from './layananSec'
import {WhatsAppFloatingButton} from './waButton'
import { LampIcon } from './component/Icon'
import AboutMeSection from './aboutMeSec'
import KontakSection from './kontakSec'
import Footer from './footer'

function App() {
  const [activeSection, setActiveSection] = useState(1)
  const sectionRefs = useRef([])
  const mainRef = useRef(null)

  const addToRefs = (el, index) => {
    if (el) {
      sectionRefs.current[index] = el
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        let mostVisible = null
        let maxRatio = 0

        entries.forEach(entry => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisible = entry.target
          }
        })

        if (mostVisible) {
          const index = sectionRefs.current.findIndex(ref => ref === mostVisible)
          if (index !== -1) {
            setActiveSection(index + 1)
          }
        }
      },
      {
        root: mainRef.current,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px'
      }
    )

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar whereActive={activeSection}/>
      <div className="fixed top-4 right-4 bg-white px-4 py-2 shadow rounded z-50">
        Section aktif: {activeSection}
      </div>
      <main 
        ref={mainRef}
        className='h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth'
      >
        <SectionWrapper classList="bg-gradient-to-b from-highlight-700 to-primary-blue-950 via-primary-purple-950">
          <div 
            ref={(el) => addToRefs(el, 0)} 
            className="snap-start"
            id="home"
          >
            <HeroSection />
          </div>
          <div 
            ref={(el) => addToRefs(el, 1)} 
            className="snap-start"
            id='about'
          >
            <AboutMeSection />
          </div>
          <div 
            ref={(el) => addToRefs(el, 2)} 
            className="snap-start"
            id='project'
          >
            <ProjectSection />
          </div>
        </SectionWrapper>
        
        <SectionWrapper classList="bg-gradient-to-l from-background-500/60 via-background-300 to-background-50">
          <div 
            ref={(el) => addToRefs(el, 3)} 
            className="snap-start"
            id='layanan'
          >
            <LayananSection />
          </div>
          <div 
            ref={(el) => addToRefs(el, 4)} 
            className="snap-start"
            id='kontak'
          >
            <KontakSection />
          </div>
        </SectionWrapper>
<section className="snap-end">
  <Footer />
</section>
      </main>
      
      <WhatsAppFloatingButton/>
    </>
  )
}

export default App