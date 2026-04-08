import SectionWrapper from '@/component/secWrap'
import HeroSection from '@/heroSec'
import AboutMeSection from '@/aboutMeSec'
import ProjectSection from '@/projectSec'
import LayananSection from '@/layananSec'
import KontakSection from '@/kontakSec'
import Footer from '@/footer'
import { WhatsAppFloatingButton } from '@/waButton'

export default function Page() {
  return (
    <>
      <main className='h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth'>
        <SectionWrapper classList="bg-gradient-to-b from-highlight-700 to-background-950 via-background-950">
          <div className="snap-start" id="home">
            <HeroSection />
          </div>
          <div className="snap-start" id="about">
            <AboutMeSection />
          </div>
        </SectionWrapper>

        <SectionWrapper classList="bg-background-50">
          <div className="snap-start" id="project">
            <ProjectSection />
          </div>
          <div className="snap-start" id="layanan">
            <LayananSection />
          </div>
          <div className="snap-start" id="kontak">
            <KontakSection />
          </div>
        </SectionWrapper>

        <section className="snap-end">
          <Footer />
        </section>
      </main>

      <WhatsAppFloatingButton />
    </>
  )
}
