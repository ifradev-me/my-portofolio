import SectionWrapper from '@/component/secWrap'
import HeroSection from '@/heroSec'
import AboutMeSection from '@/aboutMeSec'
import ProjectSection from '@/projectSec'
import LayananSection from '@/layananSec'
import KontakSection from '@/kontakSec'
import Footer from '@/footer'
import { WhatsAppFloatingButton } from '@/waButton'
import { getProjects, getServices, getContact } from '@/lib/sanity/queries'

export const revalidate = 60

export default async function Page() {
  const [projects, services, contact] = await Promise.all([
    getProjects(),
    getServices(),
    getContact(),
  ])

  return (
    <>
      <main className='lg:h-auto lg:snap-none lg:overflow-y-visible h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth'>
        <SectionWrapper classList="bg-background-950">
          <div className="snap-start" id="home">
            <HeroSection contact={contact} />
          </div>
          <div className="snap-start" id="about">
            <AboutMeSection />
          </div>
        </SectionWrapper>

        <SectionWrapper classList="bg-background-50">
          <div className="snap-start" id="project">
            <ProjectSection projects={projects} />
          </div>
          <div className="snap-start" id="layanan">
            <LayananSection services={services} contact={contact} />
          </div>
          <div className="snap-start" id="kontak">
            <KontakSection contact={contact} />
          </div>
        </SectionWrapper>

        <section className="snap-end">
          <Footer contact={contact} />
        </section>
      </main>

      <WhatsAppFloatingButton contact={contact} />
    </>
  )
}
