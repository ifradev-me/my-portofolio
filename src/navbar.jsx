import {ProjectsIcon, ContactIcon, HomeIcon, BurgerIcon, AboutIcon, SkillsIcon, BlogIcon, TestimonialIcon, LampIcon } from './component/Icon.jsx'
import { useState, useEffect } from 'react' 
import Togglebutton from './component/toggleButton.jsx'


const Navbar = (whereActive) => {
    const [isSecondPage, setSecondPage] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isActice, setIsActive] = useState(false)
    
    const handleToggle = () => {
        setSecondPage(!isSecondPage)     
    }

    useEffect(() => {
        const handleClick = (e) => {
            const blacklist = ['.navbar', '.sidebar', 'button', '.video', '.ignore'];
            const isBlacklisted = blacklist.some(selector => 
                e.target.closest(selector)
            );
            
            if (!isBlacklisted) {
                setIsOpen(prev => !prev);
            }
        };

        document.body.addEventListener('click', handleClick);
        return () => document.body.removeEventListener('click', handleClick);
    }, []);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setIsOpen(false), 15000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Detect screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Mobile Navigation (Bottom/Side)
    if (isMobile) {
        return (
            <>
            <nav className={`${isOpen ? 'translate-x-0' : 'translate-x-[100%]'} transform transition-transform duration-300 ease-in-out fixed bottom-[-1px] right-[-1px] h-auto z-20 w-18 p-0 text-text-100 rounded-tl-3xl bg-background-900/70 pt-2`}>
                <div className="flex flex-col justify-center space-y-4 text-center pb-2">
                    <button onClick={handleToggle} className="p-2">
                        <Togglebutton isToggled={isSecondPage} />
                    </button>
                    
                    <ul className={`${isSecondPage ? 'hidden' : 'flex'} flex-col space-y-4 mb-4`}>
                         <li>
                            <a href="#home" className="flex flex-col items-center text-xs p-1">
                                <HomeIcon className="w-6 h-6 mb-1" />
                                Home
                            </a>
                        </li> 
                        <li>
                            <a href="#about" className="flex flex-col items-center text-xs p-1">
                                <AboutIcon className="w-6 h-6 mb-1" />
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#project" className="flex flex-col items-center text-xs p-1">
                                <ProjectsIcon className="w-6 h-6 mb-1" />
                                Project
                            </a>
                        </li>
                        <li>
                            <a href="#layanan" className="flex flex-col items-center text-xs p-1">
                                <SkillsIcon className="w-6 h-6 mb-1" />
                                Layanan
                            </a>
                        </li>  
                              
                    </ul>
                    
                    <ul className={`${isSecondPage ? 'flex' : 'hidden'} flex-col space-y-4 mb-4`}>
                        <li>
                             <a href="#kontak" className="flex flex-col items-center text-xs p-1">
                                <ContactIcon className="w-6 h-6 mb-1" />
                                Kontak
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col items-center text-sm p-1">
                                <LampIcon className="w-6 h-6 mb-1" />
                                skill
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex flex-col items-center text-xs p-1'>
                                <TestimonialIcon className="w-6 h-6 mb-1" />
                                Testimoni
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col items-center text-xs p-1">
                                <BlogIcon className="w-6 h-6 mb-1" />
                                Blog
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            </>
            
        )
    }

    // Desktop Navigation (Horizontal Top)
    return (
        <nav className="fixed top-0 left-0 right-0 z-20 bg-background-900/90 backdrop-blur-sm border-b border-background-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold text-text-100">Portfolio</span>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-text-100 hover:text-accent-500 transition-colors">
                                    <HomeIcon className="w-5 h-5" />
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-text-100 hover:text-accent-500 transition-colors">
                                    <ProjectsIcon className="w-5 h-5" />
                                    <span>Project</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-text-100 hover:text-accent-500 transition-colors">
                                    <SkillsIcon className="w-5 h-5" />
                                    <span>Layanan</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-text-100 hover:text-accent-500 transition-colors">
                                    <AboutIcon className="w-5 h-5" />
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-text-100 hover:text-accent-500 transition-colors">
                                    <TestimonialIcon className="w-5 h-5" />
                                    <span>Testimoni</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-text-100 hover:text-accent-500 transition-colors">
                                    <BlogIcon className="w-5 h-5" />
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-text-100 hover:text-accent-500 transition-colors">
                                    <ContactIcon className="w-5 h-5" />
                                    <span>Kontak</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button (for tablet) */}
                    <div className="md:hidden">
                        <button 
                            onClick={handleToggle}
                            className="text-text-100 hover:text-accent-500 focus:outline-none"
                        >
                            <BurgerIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu (for tablet) */}
                {isSecondPage && (
                    <div className="md:hidden bg-background-800 border-t border-background-700">
                        <ul className="px-2 pt-2 pb-3 space-y-1">
                            <li><a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><HomeIcon className="w-5 h-5" /><span>Home</span></a></li>
                            <li><a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><ProjectsIcon className="w-5 h-5" /><span>Project</span></a></li>
                            <li><a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><SkillsIcon className="w-5 h-5" /><span>Layanan</span></a></li>
                            <li><a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><AboutIcon className="w-5 h-5" /><span>About</span></a></li>
                            <li><a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><TestimonialIcon className="w-5 h-5" /><span>Testimoni</span></a></li>
                            <li><a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><BlogIcon className="w-5 h-5" /><span>Blog</span></a></li>
                            <li><a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><ContactIcon className="w-5 h-5" /><span>Kontak</span></a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar