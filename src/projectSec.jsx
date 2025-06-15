import ProjectItem from "./projectItem"
import { useState, useEffect, useRef } from "react"

const ProjectSection = () => {
    const projectList = [
        { image: 'https://picsum.photos/200/300', name: 'Project dummy', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
        { image: 'https://picsum.photos/200/300', name: 'Project dummy', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' },
    ]

    const [index, setIndex] = useState(0)
    const [tutorial, setTutorial] = useState(true)
    const containerRef = useRef(null)
    
    // Touch handling states
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    console.log('🔍 Component render - Current index:', index)

    const handleScroll = () => {
        console.log('📜 handleScroll triggered')
        if (containerRef.current && !isDragging) {
            const scrollLeft = containerRef.current.scrollLeft
            const containerWidth = containerRef.current.offsetWidth
            const newIndex = Math.round(scrollLeft / containerWidth)
            console.log('📏 Scroll data:', { scrollLeft, containerWidth, newIndex })
            setIndex(Math.min(Math.max(newIndex, 0), projectList.length - 1))
        } else {
            console.log('❌ handleScroll blocked:', { 
                hasContainer: !!containerRef.current, 
                isDragging 
            })
        }
    }

    const scrollToItem = (itemIndex) => {
        console.log('🎯 scrollToItem called with index:', itemIndex)
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth
            const targetLeft = itemIndex * containerWidth
            console.log('📐 Scroll calculation:', { containerWidth, targetLeft })
            
            containerRef.current.scrollTo({
                left: targetLeft,
                behavior: 'smooth'
            })
            console.log('✅ Scroll executed')
        } else {
            console.log('❌ scrollToItem failed - no container ref')
        }
    }

    const projectIndexProcess = (idNow) => {
        console.log('🔄 projectIndexProcess called with:', idNow)
        let newIndex
        if(idNow < 0) {
            newIndex = projectList.length - 1
        }
        else if(idNow > projectList.length - 1) {
            newIndex = 0
        }
        else {
            newIndex = idNow
        }
        console.log('🎯 Setting new index:', newIndex)
        setIndex(newIndex)
        scrollToItem(newIndex)
    }

    // Touch handlers untuk mobile
    const handleTouchStart = (e) => {
        console.log('👆 Touch start detected')
        const startX = e.targetTouches[0].clientX
        setTouchStart(startX)
        setIsDragging(true)
        console.log('📍 Touch start position:', startX)
    }

    const handleTouchMove = (e) => {
        const moveX = e.targetTouches[0].clientX
        setTouchEnd(moveX)
        console.log('👈👉 Touch move:', { start: touchStart, current: moveX })
    }

    const handleTouchEnd = () => {
        console.log('👆 Touch end detected')
        console.log('📊 Touch data:', { touchStart, touchEnd })
        
        if (!touchStart || !touchEnd) {
            console.log('❌ Invalid touch data')
            return
        }
        
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        console.log('📏 Swipe analysis:', { 
            distance, 
            isLeftSwipe, 
            isRightSwipe,
            currentIndex: index 
        })

        if (isLeftSwipe) {
            console.log('👈 Left swipe detected - going to next')
            projectIndexProcess(index + 1)
        } else if (isRightSwipe) {
            console.log('👉 Right swipe detected - going to prev')
            projectIndexProcess(index - 1)
        } else {
            console.log('🤷 No swipe detected - distance too small')
        }
        
        setIsDragging(false)
        setTouchStart(0)
        setTouchEnd(0)
    }

    // Test button handlers
    const handlePrevious = () => {
        console.log('⬅️ Previous button clicked')
        projectIndexProcess(index - 1)
    }

    const handleNext = () => {
        console.log('➡️ Next button clicked')
        projectIndexProcess(index + 1)
    }

    const handleDotClick = (idx) => {
        console.log('🔴 Dot clicked for index:', idx)
        projectIndexProcess(idx)
    }

    useEffect(() => {
        console.log('🔧 Setting up scroll listener')
        const container = containerRef.current
        if (container) {
            console.log('✅ Container found, adding scroll listener')
            container.addEventListener('scroll', handleScroll, { passive: true })
            return () => {
                console.log('🧹 Cleaning up scroll listener')
                container.removeEventListener('scroll', handleScroll)
            }
        } else {
            console.log('❌ No container found for scroll listener')
        }
    }, [isDragging])

    // Auto scroll ke index yang benar setelah component mount
    useEffect(() => {
        console.log('🚀 Component mounted, scrolling to index:', index)
        setTimeout(() => {
            scrollToItem(index)
        }, 100) // Small delay to ensure DOM is ready
    }, [])

    // Debug container dimensions
    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            console.log('📦 Container dimensions:', {
                width: rect.width,
                height: rect.height,
                scrollWidth: containerRef.current.scrollWidth,
                childrenCount: containerRef.current.children.length
            })
        }
    })

    return (
        <div className="relative h-screen p-0 overflow-hidden" id="project-sec">
            {/* Debug info - hapus nanti */}
            <div className="absolute top-4 left-4 bg-black/80 text-white p-2 rounded z-50 text-xs">
                Index: {index} | Touch: {touchStart ? 'Active' : 'Inactive'} | Drag: {isDragging ? 'Yes' : 'No'}
            </div>

            <div className={`absolute w-full h-full bg-radial to-background-950/60 ${tutorial ? ' from-background-800/80 z-30 ignore' : 'from-transparent'} `} style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)'
                }} onClick={() => setTutorial(false)}>
                    {tutorial && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
                            <div className="text-4xl text-white font-extrabold animate-pulse mb-4">
                                👈👉
                            </div>
                            <div className="text-white text-lg font-bold">
                                Geser untuk selanjutnya
                            </div>
                        </div>
                    )}
            </div>
            
            {/* Container yang bisa di-scroll horizontal dengan touch support */}
            <div 
                ref={containerRef}
                className="flex items-center w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    touchAction: 'pan-x pinch-zoom'
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={() => console.log('🖱️ Container clicked')}
            >
                {projectList.map((project, idx) => (
                    <div 
                        key={idx} 
                        className="flex-shrink-0 w-full snap-center bg-red-500/20 border border-white/20"
                        style={{ minHeight: '200px' }}
                        onClick={() => console.log('📦 Item clicked:', idx)}
                    >
                        <div className="p-4 text-white">
                            <h3>Project {idx + 1}</h3>
                            <p>Current visible: {idx === index ? 'YES' : 'NO'}</p>
                        </div>
                        <ProjectItem project={project}/>
                    </div>
                ))}
            </div>

            {/* Navigation buttons - dengan debug */}
            <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full z-20"
                onClick={handlePrevious}
                style={{ minHeight: '44px', minWidth: '44px' }}
            >
                ←
            </button>
            <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full z-20"
                onClick={handleNext}
                style={{ minHeight: '44px', minWidth: '44px' }}
            >
                →
            </button>

            {/* Indicator dots */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {projectList.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-4 h-4 rounded-full ${idx === index ? 'bg-red-500' : 'bg-gray-400'}`}
                        onClick={() => handleDotClick(idx)}
                        style={{ minHeight: '44px', minWidth: '44px', padding: '15px' }}
                    />
                ))}
            </div>
            
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-background-700/20 border-t-2 border-border-gold text-xl text-text-50 py-6 px-3 rounded-t-2xl font-body">
                Lihat Semua Project
            </button>
        </div>
    )
}

export default ProjectSection