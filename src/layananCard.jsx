import { HeartIcon, TestimonialIcon } from "./component/Icon"
import { WhatsAppCardButton } from "./waButton"
import { useState } from "react"

const LayananCard = ({ 
    userTotal = 100,
    img = 'https://picsum.photos/200/300', 
    title = 'Web Development', 
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
}) => {
     
    const [like, setLike] = useState(false)
    const handleLike = () => setLike(!like)

    return (
        <div className="w-full max-w-sm bg-background-300/30 rounded-2xl shadow-md px-4 pt-2 pb-4 space-y-4 border-2 border-white h-fit"> 
            <div className="flex gap-3 sm:gap-4">
                <img 
                    src={img} 
                    alt="service" 
                    className="rounded-lg w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm text-gray-600 font-medium font-body">+{userTotal} pengguna kami

                    </span>
                    <h3 className="text-text-900 font-header text-base sm:text-lg lg:text-xl font-bold truncate">{title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 line-clamp-5 sm:line-clamp-6 overflow-hidden leading-tight">{description}</p>
                </div>
            </div>
            <div className="flex gap-2 sm:gap-3">
                <button onClick={handleLike} className="flex-shrink-0">
                    <HeartIcon className={`w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full transition-all duration-300 active:scale-110 ${like ? 'fill-red-700 text-red-700' : 'text-red-900'}`}/>
                </button>
                <button className="flex-shrink-0">
                    <TestimonialIcon className="w-7 h-7 sm:w-8 sm:h-8 p-1 bg-background-900 rounded-full border font-sm text-white border-blue-700"/>
                </button>
                <button className="flex-shrink-0">
                    <WhatsAppCardButton />
                </button>
            </div>
        </div>
    )
}

export default LayananCard