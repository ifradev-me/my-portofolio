import { useState } from "react"
import { WhatsAppCardButton } from "./waButton"

const LayananItemCard = ({ item, index, category }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const categoryColors = {
        penglaris: {
            bg: "bg-gradient-to-br from-green-50 to-emerald-50",
            border: "border-green-200",
            badge: "bg-green-100 text-green-700",
            icon: "text-green-600"
        },
        penghemat: {
            bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
            border: "border-blue-200",
            badge: "bg-blue-100 text-blue-700",
            icon: "text-blue-600"
        }
    }

    const colors = categoryColors[category]

    return (
        <div
            className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full`}
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${colors.badge} flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                    {item.id}
                </div>
                <h3 className="font-header font-bold text-text-900 text-base leading-tight">
                    {item.title}
                </h3>
            </div>

            <div className={`mb-3 px-3 py-2 rounded-lg bg-red-50 border border-red-100`}>
                <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-sm text-red-700 font-medium">{item.problem}</p>
                </div>
            </div>

            <p className={`text-sm text-gray-600 mb-3 flex-grow ${!isExpanded ? 'line-clamp-3' : ''}`}>
                {item.description}
            </p>

            {item.description.length > 120 && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-xs text-primary-blue hover:underline mb-3 self-start"
                >
                    {isExpanded ? 'Tutup' : 'Baca selengkapnya'}
                </button>
            )}

            <div className={`px-3 py-2 rounded-lg ${colors.badge} mb-4`}>
                <div className="flex items-start gap-2">
                    <svg className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium">{item.benefit}</p>
                </div>
            </div>

            <div className="mt-auto">
                <WhatsAppCardButton />
            </div>
        </div>
    )
}

export default LayananItemCard
