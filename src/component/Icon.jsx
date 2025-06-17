// Home Icon
const HomeIcon = ({ className = "w-8 h-8 my-0", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    {...props}
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

// Heart Icon - sudah benar pathnya, tinggal tambah return
const HeartIcon = ({className = "w-8 h-8 my-0", ...props}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
    stroke="currentColor" 
    strokeWidth="2"
    className={className} {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

// Sun Icon - path yang benar untuk sun
const SunIcon = ({className = "w-8 h-8 my-0", ...props}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={className} {...props}>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Chat Icon - path yang benar untuk chat bubble
const ChatIcon = ({className = "w-8 h-8 my-0", ...props}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={className} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Moon Icon - path yang benar untuk moon
const MoonIcon = ({className = "w-8 h-8 my-0", ...props}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={className} {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// About Me Icon (Person/User)
const AboutIcon = ({ className = "w-8 h-8 my-0", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    {...props}
  >
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-2.66 5.33-4 8-4s8 1.34 8 4"/>
  </svg>
);

// Skills Icon (Tools/Settings)
const SkillsIcon = ({ className = "w-8 h-8 my-0", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    {...props}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

// Projects Icon (Folder)
const ProjectsIcon = ({ className = "w-8 h-8 my-0", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    {...props}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

// Blog Icon (Article/Document)
const BlogIcon = ({ className = "w-8 h-8 my-0", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </svg>
);

// Burger Icon (Hamburger Menu)
const BurgerIcon = ({ className = "w-8 h-8 my-0", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    {...props}
  >
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

// Contact Icon (Email)
const ContactIcon = ({ className = "w-8 h-8 my-0", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

// Testimonial Icon (Three People Silhouettes)
const TestimonialIcon = ({ className = "w-8 h-8 my-0", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    {...props}
  >
    {/* Person in front (center) */}
    <circle cx="12" cy="7" r="3"/>
    <path d="M6 20c0-2 2.67-3 6-3s6 1 6 3"/>
    
    {/* Person behind left */}
    <circle cx="6" cy="6" r="2.5"/>
    <path d="M1 18c0-1.5 2-2.5 5-2.5"/>
    
    {/* Person behind right */}
    <circle cx="18" cy="6" r="2.5"/>
    <path d="M23 18c0-1.5-2-2.5-5-2.5"/>
  </svg>
);




export { 
  HomeIcon, 
  AboutIcon, 
  SkillsIcon, 
  ProjectsIcon, 
  BlogIcon, 
  BurgerIcon, 
  ContactIcon, 
  TestimonialIcon,
  HeartIcon,
  ChatIcon,
  SunIcon,
  MoonIcon
};