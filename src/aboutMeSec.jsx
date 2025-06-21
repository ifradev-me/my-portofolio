const AboutMeSection = () => {
    return (
        <div className="relative min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto pb-16 pt-1 lg:py-24">
                {/* Header dengan accent line */}
                <div className="relative mb-12">
                    <div className="absolute left-0 top-full w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-100 mt-4 mb-2 tracking-tight">
                        About Me
                    </h2>
                    <div className=" absolute left-0 bottom-1 w-36 h-0.5 bg-gray-300 rounded-full"></div>
                </div>

                {/* Content dengan highlight box */}
                <div className="relative">
                    {/* Decorative element */}
                    <div className="absolute -left-4 top-8 w-1 h-32 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-60"></div>
                    
                    <div className="relative z-10">
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-text-300 mb-8 max-w-3xl">
                           Di dunia yang serba cepat, kami percaya inovasi adalah jalan hidup terbaik. Ifrad Dev lahir dari semangat membantu UMKM agar tidak ketinggalan zaman. Saya (Ifrad) sudah lama berkecimpung di dunia teknologi, dan menyadari banyak pemilik usaha masih kesulitan memahami teknologi. Maka, lewat Ifrad Dev, kami tidak hanya membangun solusi teknologi, tetapi juga membimbing klien memahami cara kerjanya. Nilai kami: Inovasi, edukasi, dan kemudahan. Kami selalu mencari cara baru untuk menyederhanakan proses, serta senang berbagi ilmu (misal lewat video tutorial atau sesi konsultasi) agar tiap klien jadi lebih percaya diri dengan teknologinya
                        </p>

                        {/* Highlight quote atau key point */}
                        <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
                            <p className="text-lg font-medium text-gray-800 italic">
                                 "Dalam dunia yang serba cepat ini, inovasi adalah jalan hidup terbaik."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action buttons dengan modern styling */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    <button className="group relative overflow-hidden bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:transform hover:-translate-y-0.5">
                        <span className="relative z-10">Download CV</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    </button>
                    
                    <button className="group relative border-2 border-gray-300 text-text-200 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:border-gray-400 hover:text-text-50 hover:shadow-md">
                        <span className="relative z-10">Go to Blog</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                        {/* Decorative corner */}
                        <div className="absolute top-2 right-2 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 right-8 w-32 h-32 opacity-5">
                    <div className="absolute inset-0 border-2 border-gray-400 rounded-full"></div>
                    <div className="absolute inset-4 border border-gray-400 rounded-full"></div>
                    <div className="absolute inset-8 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection