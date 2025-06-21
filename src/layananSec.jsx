import LayananCard from "./layananCard"

const LayananSection = () => {
    const userTotal = 100

    const layananData = [
        {
            id: 1,
            userTotal,
            img: "./public/webdev.png",
            title: "jasa pembuatan website",
            description: "Website profesional, dan mudah dikelola bahkan tanpa pengalaman teknis. Ifrad Dev tidak hanya membangun, tapi juga membuatmu paham cara memanfaatkannya."
        },
        {
            id: 2,
            userTotal,
            img: "./public/automation.jpeg",
            title: "jasa otomatisasi cs",
            description: "Bot kami membantu UMKM meningkatkan pelayanan tanpa nambah karyawan, dengan fitur auto-reply, pencatatan pesanan, dan pengingat otomatis yang mudah digunakan dan langsung siap pakai."
        }
    ]

    return (
        <section className="min-h-screen  py-10 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className=" lg:py-10 font-header text-text-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 after:content-[''] after:block after:w-24 after:h-1 after:bg-primary-blue after:mt-4 after:mx-auto">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple-900">Layanan</span> Kami 
                    </h2>
                    <p className="text-text-900 text-lg sm:text-xl font-body max-w-2xl mx-auto leading-relaxed">
                        Ifrad Dev menawarkan layanan pembuatan website dan otomatisasi bisnis yang simpel, efektif, dan langsung bisa dipakai. Fokus kami: bantu UMKM naik level tanpa bikin pusing.
                    </p> 
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                    {layananData.map(layanan => (
                        <LayananCard 
                            key={layanan.id}
                            userTotal={layanan.userTotal}
                            img={layanan.img}
                            title={layanan.title}
                            description={layanan.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LayananSection