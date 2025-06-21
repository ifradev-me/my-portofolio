import texture1 from './assets/durve2.png';
import fotoTes from './assets/fototes.jpeg';
const HeroSection = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background Texture */}
            <div 
                className="absolute inset-0 rotate-55 opacity-40"
                style={{ 
                    backgroundImage: `url(${texture1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            <div className="relative z-10 h-screen flex flex-col justify-between p-4 sm:p-6 lg:p-8">
                
                {/* Mobile Layout */}
                <div className="lg:hidden flex flex-col h-full text-text-100">
                    {/* 1. Title */}

            
            <h1 className="font-bold pb-2 text-5xl sm:text-6xl md:text-7xl text-left font-body mb-2 sm:mb-3 md:mb-4 z-[1] leading-tight">
               Aku <span className='text-yellow-500'>Ifrad</span><span className='block text-3xl sm:text-xl mt-2 text-white/90 font-header'>Front-End Developer & WhatsApp Automation Builder</span>
            </h1>
            
            <img 
                src={fotoTes} 
                alt="Hero image" 
                className="w-full mb-4 max-w-sm sm:max-w-md md:max-w-lg mb- h-auto object-cover rounded-lg z-[1] relative left-[20%] sm:left-[26%] object-right self-right" 
            />
            
            <p className="text-lg sm:text-base text-white text-left font-body mt-2 sm:mt-4 md:mt-6 z-[1] leading-relaxed">
                Bangun websitemu & sistem otomatisasi WhatsApp untuk penjualan yang cepat, mudah, dan terukur.
            </p>
            
            
                </div>
                
                {/* Desktop Layout - Pure Rule of Thirds */}
                <div className="hidden lg:block h-full">
                    <div className="grid grid-cols-12 gap-8 h-full items-center">
                        
                        {/* Left Content - Simplified */}
                        <div className="col-span-6 space-y-12">
                            {/* 1. Main Message */}
                            <div className="space-y-6">
                                <h1 className="text-5xl xl:text-6xl font-header font-bold text-white leading-tight">
                                    Aku <span className="text-yellow-400">Ifrad</span>
                                </h1>
                                
                                <p className="text-xl xl:text-2xl text-white/90 font-bold font-header ">
                                    Front-End Developer & WhatsApp Automation Builder
                                </p>
                                
                                <p className="text-lg xl:text-xl text-white font-light font-body leading-relaxed max-w-xl">
                                    Bangun websitemu & sistem otomatisasi WhatsApp untuk penjualan yang cepat, mudah, dan terukur.
                                </p>
                            </div>
                            
                            {/* 3. Single Strong CTA */}
                            <a className="pt-4 relative" href='https://wa.me/6282260740023'>
                               <button className="relative px-12 py-5 bg-background-800 text-white rounded-full font-semibold text-lg hover:bg-green-950 transition-all transform hover:scale-105 shadow-2xl group overflow-hidden" >
                                    💬 Mulai Konsultasi Gratis
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-950 to-green-500 group-hover:w-full transition-all duration-300"></div>
                                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-0 h-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </a>
                        </div>
                        
                        {/* 2. Hero Image - Clean */}
                        <div className="col-span-6 relative h-full flex items-center">
                            <img 
                                src={fotoTes} 
                                alt="Ifrad - Front-End Developer" 
                                className="w-80 xl:w-96 h-96 xl:h-[480px] object-cover rounded-2xl shadow-2xl relative left-[20%] xl:left-[25%] object-right"
                            />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
};
export default HeroSection;