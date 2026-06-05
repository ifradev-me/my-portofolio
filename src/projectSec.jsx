'use client'

import ProjectItem from "./projectItem"
import { useState, useRef, useEffect } from "react"

const TUTORIAL_KEY = 'portofolio.projectTutorialSeen'

const ProjectSection = ({ projects = [] }) => {
    const projectList = projects

    const [index, setIndex] = useState(0)
    const [tutorial, setTutorial] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        try {
            if (typeof window !== 'undefined' && !window.localStorage.getItem(TUTORIAL_KEY)) {
                setTutorial(true)
            }
        } catch {
            setTutorial(true)
        }
    }, [])

    const dismissTutorial = () => {
        setTutorial(false)
        try {
            window.localStorage.setItem(TUTORIAL_KEY, '1')
        } catch { /* localStorage unavailable */ }
    }

    const handleScroll = () => {
        if (containerRef.current) {
            const scrollLeft = containerRef.current.scrollLeft
            const itemWidth = containerRef.current.offsetWidth
            const newIndex = Math.round(scrollLeft / itemWidth)
            if (newIndex !== index) setIndex(newIndex)
        }
    }


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

    {/* Empty state */}
    {projectList.length === 0 && (
        <div className="px-6 lg:px-12 pb-12">
            <p className="font-body text-text-500 italic">Belum ada project. Tambahkan dari Studio.</p>
        </div>
    )}

    {/* Mobile Version - Original Code */}
    <div className="block lg:hidden">
        {/* Tutorial overlay */}
        <div
            className={`absolute inset-0 transition-opacity duration-500 ${
                tutorial ? 'opacity-100 z-30 ignore' : 'opacity-0 pointer-events-none'
            }`}
            onClick={dismissTutorial}
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
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
            }}
            onScroll={handleScroll}
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

        </div>
    </div>
</div>
    )
}

export default ProjectSection