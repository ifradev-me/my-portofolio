import { ChatIcon } from './component/Icon'; // sesuaikan path import

// Button 1: Card CTA dengan animasi bersinar kilau
const WhatsAppCardButton = ({ 
  message = "Halo, saya tertarik dengan layanan Anda",
  phoneNumber = "6281234567890",
  className = ""
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative w-full block p-1.5 bg-gradient-to-r from-primary-gold-500 to-primary-gold-400
        text-background-950 rounded-lg font-semibold text-center
        hover:from-primary-gold-400 hover:to-primary-gold-500
        transform hover:scale-[1.02] transition-all duration-300
        overflow-hidden group
        ${className}
      `}
    >
      {/* Animasi kilau bersinar */}
      <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 group-hover:animate-shimmer"></div>
      
      <div className="relative z-10 flex items-center justify-center gap-3">
        <ChatIcon className="w-6 h-6" />
        <span>Chat di WhatsApp</span>
      </div>
    </a>
  );
};

// Button 2: Floating button dengan animasi berdetak dan wave (DIPERBAIKI)
const WhatsAppFloatingButton = ({ 
  message = "Halo, saya tertarik dengan layanan Anda",
  phoneNumber = "6281234567890",
  position = "bottom-6 right-6"
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <div className={`fixed ${position} z-10 ignore`}>
      {/* Wave rings */}
      <div className="absolute inset-0 animate-ping">
        <div className="w-14 h-14 bg-primary-gold-400 rounded-full opacity-20"></div>
      </div>
      <div className="absolute inset-0 animate-pulse">
        <div className="w-14 h-14 bg-primary-gold-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '0.87s'}}></div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative w-14 h-14 bg-primary-gold-500 hover:bg-primary-gold-400
          rounded-full shadow-lg hover:shadow-xl
          flex items-center justify-center
          transform hover:scale-110 transition-all duration-300
        "
        style={{
          animation: 'heartbeat 2s ease-in-out infinite'
        }}
      >
        <ChatIcon className="w-7 h-7 text-background-950" />
      </a>
    </div>
  );
};


export { WhatsAppCardButton, WhatsAppFloatingButton };