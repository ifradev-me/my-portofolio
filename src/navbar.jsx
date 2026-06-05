'use client'

import {ProjectsIcon, ContactIcon, HomeIcon, BurgerIcon, AboutIcon, SkillsIcon, BlogIcon, TestimonialIcon, LampIcon } from './component/Icon.jsx'
import { useState, useEffect, useRef } from 'react'
import Togglebutton from './component/toggleButton.jsx'
import Link from 'next/link'


const Navbar = () => {
    const [isSecondPage, setSecondPage] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)

    const handleToggle = () => {
        setSecondPage(!isSecondPage)
    }

    useEffect(() => {
        if (!isOpen) return
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

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
            {/* Floating opener — visible only when nav is closed */}
            <button
                type="button"
                aria-label="Buka menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(true)}
                className={`${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} fixed bottom-4 right-4 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-background-900/90 text-text-100 shadow-lg backdrop-blur-sm border border-background-700 transition-opacity duration-200`}
            >
                <BurgerIcon className="w-6 h-6" />
            </button>

            <nav ref={navRef} className={`${isOpen ? 'translate-x-0' : 'translate-x-[100%]'} transform transition-transform duration-300 ease-in-out fixed bottom-[-1px] right-[-1px] h-auto z-20 w-18 p-0 text-text-100 rounded-tl-3xl bg-background-900/70 pt-2`}>
                <div className="flex flex-col justify-center space-y-4 text-center pb-2">
                    <button onClick={handleToggle} className="p-2">
                        <Togglebutton isToggled={isSecondPage} />
                    </button>
                    
                    <ul className={`${isSecondPage ? 'hidden' : 'flex'} flex-col space-y-4 mb-4`}>
                         <li>
                            <a href="/#home" className="flex flex-col items-center text-xs p-1">
                                <HomeIcon className="w-6 h-6 mb-1" />
                                Home
                            </a>
                        </li> 
                        <li>
                            <a href="/#about" className="flex flex-col items-center text-xs p-1">
                                <AboutIcon className="w-6 h-6 mb-1" />
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="/#project" className="flex flex-col items-center text-xs p-1">
                                <ProjectsIcon className="w-6 h-6 mb-1" />
                                Project
                            </a>
                        </li>
                        <li>
                            <a href="/#layanan" className="flex flex-col items-center text-xs p-1">
                                <SkillsIcon className="w-6 h-6 mb-1" />
                                Layanan
                            </a>
                        </li>  
                              
                    </ul>
                    
                    <ul className={`${isSecondPage ? 'flex' : 'hidden'} flex-col space-y-4 mb-4`}>
                        <li>
                             <a href="/#kontak" className="flex flex-col items-center text-xs p-1">
                                <ContactIcon className="w-6 h-6 mb-1" />
                                Kontak
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col items-center text-sm p-1 nav-link-disabled">
                                <LampIcon className="w-6 h-6 mb-1" />
                                skill
                            </a>
                        </li>
                        <li>
                            <Link href="/testimoni" className='flex flex-col items-center text-xs p-1'>
                                <TestimonialIcon className="w-6 h-6 mb-1" />
                                Testimoni
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="flex flex-col items-center text-xs p-1">
                                <BlogIcon className="w-6 h-6 mb-1" />
                                Blog
                            </Link>
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
                                <a href="/#home" className="flex items-center space-x-2 text-text-100 hover:text-primary-gold-400 transition-colors">
                                    <HomeIcon className="w-5 h-5" />
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#project" className="flex items-center space-x-2 text-text-100 hover:text-primary-gold-400 transition-colors">
                                    <ProjectsIcon className="w-5 h-5" />
                                    <span>Project</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#layanan" className="flex items-center space-x-2 text-text-100 hover:text-primary-gold-400 transition-colors">
                                    <SkillsIcon className="w-5 h-5" />
                                    <span>Layanan</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#about" className="flex items-center space-x-2 text-text-100 hover:text-primary-gold-400 transition-colors">
                                    <AboutIcon className="w-5 h-5" />
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <Link href="/testimoni" className="flex items-center space-x-2 text-text-100 hover:text-primary-gold-400 transition-colors">
                                    <TestimonialIcon className="w-5 h-5" />
                                    <span>Testimoni</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="flex items-center space-x-2 text-text-100 hover:text-primary-gold-400 transition-colors">
                                    <BlogIcon className="w-5 h-5" />
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <a href="/#kontak" className="flex items-center space-x-2 text-text-100 hover:text-primary-gold-400 transition-colors">
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
                            className="text-text-100 hover:text-primary-gold-400 focus:outline-none"
                        >
                            <BurgerIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu (for tablet) */}
                {isSecondPage && (
                    <div className="md:hidden bg-background-800 border-t border-background-700">
                        <ul className="px-2 pt-2 pb-3 space-y-1">
                            <li><a href="/#home" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><HomeIcon className="w-5 h-5" /><span>Home</span></a></li>
                            <li><a href="/#project" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><ProjectsIcon className="w-5 h-5" /><span>Project</span></a></li>
                            <li><a href="/#layanan" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><SkillsIcon className="w-5 h-5" /><span>Layanan</span></a></li>
                            <li><a href="/#about" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><AboutIcon className="w-5 h-5" /><span>About</span></a></li>
                            <li><Link href="/testimoni" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><TestimonialIcon className="w-5 h-5" /><span>Testimoni</span></Link></li>
                            <li><Link href="/blog" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><BlogIcon className="w-5 h-5" /><span>Blog</span></Link></li>
                            <li><a href="/#kontak" className="flex items-center space-x-3 px-3 py-2 text-text-100 hover:bg-background-700 rounded-md"><ContactIcon className="w-5 h-5" /><span>Kontak</span></a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar