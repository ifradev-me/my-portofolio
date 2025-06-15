import {ProjectsIcon, ContactIcon, HomeIcon, BurgerIcon, AboutIcon, SkillsIcon, BlogIcon, TestimonialIcon } from './Icon.jsx'
import { useState } from 'react' 
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOverlayClick = () => setIsOpen(false)
    const moreMenu = () => setIsOpen(true)

    return (
        <nav className="fixed bottom-[-1px] right-[-1px] h-75 z-20 w-18 p-0 text-black rounded-tl-3xl">
            <ul className="flex flex-col justify-center space-y-5.5 text-center"> 
                <li>
                    <a href="#" className="flex flex-col items-center">
                        <HomeIcon className="w-8 h-8 my-0 mx-auto" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-col items-center">
                        <ProjectsIcon className="w-8 h-8 my-0 mx-auto" />
                        Project
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-col items-center">
                        <ContactIcon className="w-8 h-8 my-0 mx-auto" />
                        Kontak
                    </a>
                </li>
                <li>
                    <button onClick={moreMenu}>
                        <BurgerIcon className="w-8 h-8 my-0 mx-auto" />
                    </button>
                </li>
            </ul>
            
            <div className={`inset-0 fixed z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className='absolute bg-black w-full h-full opacity-50' onClick={handleOverlayClick}></div>
                
                <div className={`absolute bottom-0 bg-background-800 left-0 right-0 rounded-t-lg shadow-xl h-80 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                    <ul className="py-6 before:content-['-'] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-2 before:w-80 before:h-1 before:bg-background-50 before:rounded-sm">
                        <li className="li-offcanvas-nav">
                            <AboutIcon className="w-6 h-6 my-0 mr-2" /> About me
                        </li>
                        <li className="li-offcanvas-nav">
                            <SkillsIcon className="w-6 h-6 my-0 mr-2" /> Skills
                        </li>
                        <li className="li-offcanvas-nav">
                            <BlogIcon className="w-6 h-6 my-0 mr-2" /> Blog
                        </li>
                        <li className="li-offcanvas-nav">
                            <TestimonialIcon className="w-6 h-6 my-0 mr-2" /> Testimoni
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar