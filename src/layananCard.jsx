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
        <div className="flex-1 bg-background-300/30 rounded-2xl shadow-md px-4 pt-2 pb-0 space-y-4 border-2 border-white min-h-0"> 
            <div className="flex gap-4">
                <img 
                    src={img} 
                    alt="service" 
                    className="rounded-lg w-20 h-20 object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                    <span className="text-sm text-gray-600 font-medium font-body">+{userTotal} happy clients</span>
                    <h3 className="text-text-900 font-header text-lg sm:text-xl font-bold truncate">{title}</h3>
                    <p className="text-sm text-gray-700 line-clamp-3 overflow-hidden">{description}</p>
                </div>
            </div>
            <div className="flex gap-3">
                <button onClick={handleLike}><HeartIcon className={`w-8 h-8 p-1 m-1  rounded-full font-sm text-red-900 transition-all duration-300 active:fill-red-900 active:scale-130 ${like ? 'fill-red-700' : ''}`}/></button>
                <button><TestimonialIcon className="w-8 h-8 p-1 m-1 bg-background-900 rounded-full border-1 font-sm text-white border-blue-700"/></button>
                <button><WhatsAppCardButton /></button>
            </div>
        </div>
    )
}

export default LayananCard