import ProjectItem from "./projectItem"
import { useState, useEffect, useRef } from "react"

const ProjectSection = () => {
    const projectList = [
        { image: 'https://picsum.photos/200/300', name: 'Project dummy', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy 2', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy 3', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy 4', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy 5', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy 6', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
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
        <div className="relative h-screen overflow-hidden" id="project-sec">
            <h2 className="text-white text-3xl font-bold text-center font-header">Project-ku</h2>
            {/* Tutorial overlay */}
            <div 
                className={`absolute w-full h-full bg-radial to-background-950/60 ${
                    tutorial ? 'from-background-800/80 z-30 ignore' : 'from-transparent pointer-events-none'
                }`} 
                onClick={() => setTutorial(false)} style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)'
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
                className="flex w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide "
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

            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-background-700/20 border-t-2 border-border-gold text-xl text-text-50 py-6 px-3 rounded-t-2xl font-body">
                Lihat Semua Project
            </button>
        </div>
    )
}

export default ProjectSection