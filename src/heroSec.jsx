import texture1 from './assets/durve2.png';
import fotoTes from './assets/fototes.jpeg';

const HeroSection = () => {
    return (
        <div className="relative h-screen flex flex-col p-5 overflow-hidden text-text-light">
            <img 
                src={texture1} 
                alt="Logo" 
                className="absolute overflow-hidden w-full h-full rotate-55 opacity-60 "
            />
            
            <h1 className="flex-shrink-0 text-bold text-4xl sm:text-5xl text-left font-header mb-3 sm:mb-4 z-[1]">
                Aku Ifrad || Front-End Developer & WhatsApp Automation Builder
            </h1>
            <img 
                    src={fotoTes} 
                    alt="Hero image" 
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-cover rounded-lg z-[1] relative left-[26%] object-right self-right" 
                />
            
            <p className="flex-shrink-0 text-lg sm:text-2xl text-left font-body mt-4 sm:mt-6 z-[1]">
                Bangun websitemu & sistem otomatisasi WhatsApp untuk penjualan yang cepat, mudah, dan terukur.
            </p>
        </div>
    );
};

export default HeroSection;