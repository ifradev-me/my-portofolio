import { useState } from "react"
import { layananData } from "./layananData"
import LayananItemCard from "./layananItemCard"

const LayananSection = () => {
    const [activeTab, setActiveTab] = useState("penglaris")

    const categories = [
        { key: "penglaris", icon: "TrendingUp" },
        { key: "penghemat", icon: "Shield" }
    ]

    return (
        <section id="layanan" className="min-h-screen py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="lg:py-10 font-header text-text-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 after:content-[''] after:block after:w-24 after:h-1 after:bg-primary-blue after:mt-4 after:mx-auto">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple-900">Sistem</span> Menu
                    </h2>
                    <p className="text-text-900 text-lg sm:text-xl font-body max-w-2xl mx-auto leading-relaxed">
                        Solusi digital untuk membantu UMKM meningkatkan penjualan dan menghemat biaya operasional.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-10">
                    {categories.map(({ key }) => {
                        const category = layananData[key]
                        const isActive = activeTab === key
                        return (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    isActive
                                        ? "bg-gradient-to-r from-primary-blue to-primary-purple-900 text-white shadow-lg scale-105"
                                        : "bg-background-300/50 text-text-900 hover:bg-background-300"
                                }`}
                            >
                                <span className="block text-lg">{category.title}</span>
                                <span className="block text-xs opacity-80">{category.subtitle}</span>
                            </button>
                        )
                    })}
                </div>

                <div className="mb-8 text-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                        activeTab === "penglaris"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                    }`}>
                        {activeTab === "penglaris" ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        )}
                        <span className="font-medium">
                            {layananData[activeTab].items.length} Sistem {layananData[activeTab].title}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {layananData[activeTab].items.map((item, index) => (
                        <LayananItemCard
                            key={item.id}
                            item={item}
                            index={index}
                            category={activeTab}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LayananSection
