'use client'

import ProjectItem from "./projectItem"
import { useState, useEffect, useRef } from "react"

const ProjectSection = () => {
    const projectList = [
        {
            image: '/botAbsen.png',
            name: 'Bot Absensi Otomatis',
            description: 'Bot absensi otomatis dengan integrasi notifikasi absensi lewat WhatsApp',
            techStack: ['Express', 'MongoDB', 'Puppeteer', 'Baileys JS'],
            githubUrl: 'https://github.com/ifradev-me/absen-auto',
            duration: '7 weeks',
            views: '± 112',
            status: 'completed'
        },
        {
            image: '/IoT.png',
            name: 'IoT Dashboard',
            description: 'Website IoT dashboard dengan visual interaktif untuk monitoring data sensor secara real-time',
            techStack: ['React', 'Python', 'Flask', 'FastAPI', 'SQLite'],
            demoUrl: 'https://colab.research.google.com/drive/1_KlDIy9WBLs1G07lWhXEsYok2VE7Livo',
            duration: '3 weeks',
            views: 'under 50',
            status: 'completed'
        },
        {
            image: '/sii.png',
            name: 'Islamic Event Landing Page',
            description: 'Landing page islami dengan fitur galeri foto dan testimoni untuk event SII 2025',
            techStack: ['Bootstrap', 'Google Cloud API', 'App Script', 'Vercel'],
            githubUrl: 'https://github.com/ifradev-me/SII-2025',
            duration: '3 weeks',
            views: '± 100',
            status: 'completed'
        },
        {
            image: '/culture x perkenalan budaya aceh dan umkm.png',
            name: 'Culture X',
            description: 'Platform pengenalan budaya Aceh dan pendampingan UMKM Aceh berbasis AI, dibangun dengan React TypeScript dan Appwrite',
            techStack: ['React TS', 'Appwrite', 'OpenRouter'],
            githubUrl: 'https://github.com/ifradev-me/culture-x_frontend_main',
            duration: '~ ongoing',
            status: 'beta'
        },
        {
            image: '/fanfic translator.png',
            name: 'Fanfic Translator',
            description: 'Alat penerjemahan fanfic otomatis via workflow n8n dan AI, dikembangkan untuk kebutuhan internal',
            techStack: ['n8n', 'OpenRouter'],
            duration: '~ 2 weeks',
            status: 'internal'
        },
        {
            image: '/konsitech-platform edukasi hukum.png',
            name: 'Konsitech',
            description: 'Platform edukasi hukum yang membantu masyarakat memahami konstitusi dan hukum Indonesia secara mudah melalui AI',
            techStack: ['React JS', 'Express', 'OpenRouter'],
            githubUrl: 'https://github.com/ifradev-me/frontend-konsi-tech',
            duration: '~ ongoing',
            status: 'completed'
        },
        {
            image: '/kroeng usk - organisasi kampus.png',
            name: 'Kroeng USK',
            description: 'Landing page untuk komunitas robotika engineering Universitas Syiah Kuala, sudah production namun menunggu persetujuan internal',
            techStack: ['Next.js', 'Express'],
            githubUrl: 'https://github.com/ifradev-me/kroeng-usk',
            duration: '~ 3 weeks',
            status: 'pending'
        },
        {
            image: '/menu makanan warkop mjd kupi.png',
            name: 'Warkop MJD',
            description: 'Website menu lauk dan minuman interaktif untuk Warkop MJD, bukan sekedar landing page tapi platform menu digital',
            techStack: ['React JS', 'Cloudflare'],
            githubUrl: 'https://github.com/ifradev-me/demo-mjd',
            duration: '~ 2 weeks',
            status: 'completed'
        },
        {
            image: '/nutrisight.png',
            name: 'NutriSight',
            description: 'Aplikasi Android untuk deteksi dan pemahaman gizi keluarga, difokuskan untuk ibu. Saat ini dalam tahap beta test terbatas',
            techStack: ['React Native TS', 'OpenRouter'],
            githubUrl: 'https://github.com/nutrisight-innovilage/nutrisight_apps',
            duration: '~ ongoing',
            status: 'beta'
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
            const startTime = Date.now() 
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

    {/* Section Header */}
    <div className="pt-16 pb-8 px-6 lg:px-12">
        <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-gold-600 animate-pulse inline-block" />
            <span className="font-body text-text-500 text-xs uppercase tracking-widest font-semibold">
                Karya Saya
            </span>
        </div>
        <h2 className="font-header font-bold text-primary-blue leading-none"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}>
            Project<span className="text-primary-gold-600">.</span>
        </h2>
        <p className="font-body text-primary-blue-700 text-base mt-2 max-w-md">
            Beberapa project yang sudah aku kerjakan.
        </p>
    </div>

    {/* Mobile Version - Original Code */}
    <div className="block lg:hidden">
        {/* Tutorial overlay */}
        <div
            className={`absolute inset-0 transition-opacity duration-500 ${
                tutorial ? 'opacity-100 z-30 ignore' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setTutorial(false)}
            style={{ background: 'radial-gradient(ellipse at center, rgba(15,15,20,0.85) 0%, rgba(15,15,20,0.4) 60%, transparent 100%)' }}
        >
            {tutorial && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="flex gap-2 text-primary-gold-600 animate-pulse">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <p className="font-body text-primary-blue text-base font-semibold">Geser untuk selanjutnya</p>
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
        <div className="container mx-auto px-6 pb-12">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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