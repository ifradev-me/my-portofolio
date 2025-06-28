import ProjectItem from "./projectItem"
import { useState, useEffect, useRef } from "react"

const ProjectSection = () => {
    const projectList = [
        /*{ 
            image: 'https://picsum.photos/200/300', 
            name: 'E-Commerce Website', 
            description: 'Full-stack e-commerce platform dengan pembayaran terintegrasi, autentifikasi dan admin dashboard',
            techStack: ['React', 'Node.js', 'MongoDB', 'doku'],
            demoUrl: 'https://example.com/demo1',
            githubUrl: 'https://github.com/user/project1',
            duration: '4 weeks',
            views: '± 10'
        },*/
        { 
            image: '/botAbsen.png', 
            name: 'bot absensi otomatis', 
            description: 'Bot absensi otomatis dengan integrasi dengan sistem notifikasi absensi lewat whatsapp',
            techStack: ['express', 'MongoDB', 'Puppeteer', "baileys js"],
            demoUrl: 'https:wa.me/6287744328617',
            githubUrl: 'https://github.com/ifradev-me/absen-auto',
            duration: '7 weeks',
            views: '± 112'
        },
        { 
            image: '/IoT.png', 
            name: 'IoT Dashboard', 
            description: 'Website IoT dashboard dengan visual yang interaktif dan memukau',
            techStack: ['React', 'python', 'USK API', 'sqlite3', 'flask', 'axios', 'fastAPI'],
            demoUrl: 'https://colab.research.google.com/drive/1_KlDIy9WBLs1G07lWhXEsYok2VE7Livo',
            duration: '3 weeks',
            views: 'under 50'
        },
        { 
            image: '/sii.png', 
            name: 'Islamic event Landing Page', 
            description: 'landing page islami dengan album dan testimoni event',
            techStack: ['bootstrap', 'Google Cloud Api', 'app script', 'vercel'],
            demoUrl: 'https://sii2025.netlify.app/',
            githubUrl: 'https://github.com/ifradev-me/SII-2025',
            duration: '3 weeks',
            views: '± 100'
        },
        { 
            image: 'https://picsum.photos/200/300', 
            name: 'AI Chat Assistant (coming soon)', 
            description: 'chatbot yang dapat membantu pengguna meringkas email masuk dan pengingat tugas harian',
            techStack: ['baileys js', 'axios', 'Google Cloud API', 'n8n', 'Openai API', 'MongoDB' ],
            demoUrl: 'https://example.com/demo6',
            githubUrl: 'https://github.com/user/project6',
            duration: '4 weeks',
            views: 'on development'
        },
    ]

    const [index, setIndex] = useState(0)
    const [tutorial, setTutorial] = useState(true)
    const [touchInfo, setTouchInfo] = useState({ start: null, current: null, end: null })
    const containerRef = useRef(null)

    const scrollToItem = (itemIndex) => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth
            const targetLeft = itemIndex * containerWidth
            containerRef.current.scrollTo({
                left: targetLeft,
                behavior: 'smooth'
            })
        }
    }

    const updateIndex = (newIndex) => {
        const clampedIndex = Math.max(0, Math.min(newIndex, projectList.length - 1))
        setIndex(clampedIndex)
        scrollToItem(clampedIndex)
    }

    
    const [touchStartTime, setTouchStartTime] = useState(null)

    const handleTouchStart = (e) => {
        if (e.targetTouches && e.targetTouches.length > 0) {
            const touch = e.targetTouches[0]
            const startX = touch.clientX
            const startTime = Date.now() // Catat waktu mulai
            
            setTouchInfo(prev => ({ ...prev, start: startX, current: startX }))
            setTouchStartTime(startTime)
        }
    }

    const handleTouchEnd = (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
            const touch = e.changedTouches[0]
            const endX = touch.clientX
            const endTime = Date.now() // Catat waktu selesai
            
            const distance = touchInfo.start - endX
            const deltaTime = endTime - touchStartTime // Selisih waktu
            const velocity = Math.abs(distance) / deltaTime // Kecepatan (px/ms)
            
            // Jika swipe cepat, threshold jadi lebih rendah
            const minDistance = velocity > 0.3 ? 30 : 80
            
            if (Math.abs(distance) > minDistance) {
                if (distance > 0) {
                    updateIndex(index + 1)
                } else {
                    updateIndex(index - 1)
                }
            }
        }
        setTimeout(() => {
            setTouchInfo({ start: null, current: null, end: null })
        }, 1000)
    }
    const handleTouchMove = (e) => {
        if (e.targetTouches && e.targetTouches.length > 0) {
            const touch = e.targetTouches[0]
            const currentX = touch.clientX
            setTouchInfo(prev => ({ ...prev, current: currentX }))
        }
    }

    

    useEffect(() => {
        scrollToItem(index)
    }, [])


    return (
        <div className="relative min-h-screen overflow-hidden" id="project-sec">
    <h2 className="text-white text-3xl font-bold text-center font-header mb-8">Project-ku</h2>
    
    {/* Mobile Version - Original Code */}
    <div className="block lg:hidden">
        {/* Tutorial overlay */}
        <div 
            className={`absolute w-full h-full bg-radial to-background-950/60 ${
                tutorial ? 'from-background-800 z-30 ignore' : 'from-transparent pointer-events-none'
            }`} 
            onClick={() => setTutorial(false)} 
            style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)'
            }}
        >
            {tutorial && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
                    <div className="text-4xl text-white font-extrabold animate-pulse mb-4">
                        &gt; &gt;
                    </div>
                    <div className="text-white text-lg font-bold">
                        Geser untuk selanjutnya
                    </div>
                </div>
            )}
        </div>
        
        {/* Main container */}
        <div 
            ref={containerRef}
            className="flex w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {projectList.map((project, idx) => (
                <div 
                    key={idx} 
                    className="flex-shrink-0 w-full h-full snap-center"
                >
                    <ProjectItem project={project} />
                </div>
            ))}
        </div>
    </div>

    {/* Desktop & Tablet Version */}
    <div className="hidden lg:block">
        <div className="container mx-auto px-6 py-8">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {projectList.map((project, idx) => (
                    <ProjectItem key={idx} project={project} />
                ))}
            </div>

            {/* Load More Button - Desktop 
            <div className="flex justify-center mt-12">
                <button className="bg-gradient-to-r from-background-800 to-background-700 border-2 border-border-gold text-text-50 py-4 px-8 rounded-2xl font-body font-semibold hover:from-background-700 hover:to-background-600 hover:border-text-gold hover:text-text-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-border-gold/20">
                    Lihat Semua Project
                </button>
            </div>*/}
        </div>
    </div>
</div>
    )
}

export default ProjectSection