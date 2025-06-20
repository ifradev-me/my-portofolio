const ProjectItem = ({
    project = {
        image: 'https://picsum.photos/200/300', 
        name: 'Project dummy', 
        description: 'lorem ipsum si dolor amet lorem lorem lorem lorem',
        techStack: ['React', 'Tailwind', 'Node.js'],
        demoUrl: '',
        githubUrl: '',
        duration: '2-3 weeks',
        views: '1.2k'
    }
}) => {
    return (
        <>
            {/* Mobile Version - Full Screen Card */}
            <div className="lg:hidden font-body flex flex-col items-center justify-end bg-gradient-to-t from-background-950 via-background-800/60 to-transparent p-6 pb-24 h-screen text-text-light border-x-2 border-border-gold relative overflow-hidden">
                
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${project.image})`,
                        filter: 'brightness(0.4)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0) 100%)'
                    }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-950/90 via-background-800/40 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-4 max-w-sm bottom-[20%]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {project.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                    
                    {/* Mobile Action Buttons */}
                    <div className="flex gap-3 justify-center mt-6">
                        {project.demoUrl && (
                            <a 
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-border-gold to-yellow-500 text-background-950 py-3 px-6 rounded-xl font-semibold hover:from-yellow-500 hover:to-border-gold transition-all duration-300 text-sm"
                            >
                                Demo
                            </a>
                        )}
                        
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-background-700 border-2 border-border-gold/50 text-text-50 py-3 px-6 rounded-xl font-semibold hover:bg-background-600 hover:border-border-gold transition-all duration-300 text-sm"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Desktop & Tablet Version - Grid Card */}
            <div className="hidden lg:block group relative bg-background-800/50 backdrop-blur-sm rounded-2xl border border-border-gold/20 overflow-hidden hover:border-border-gold/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-border-gold/20">
                
                {/* Project Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-950/80 via-background-800/20 to-transparent" />
                    
                    {/* Hover Overlay with Actions */}
                    <div className="absolute inset-0 bg-background-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                        {project.demoUrl && (
                            <a 
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-border-gold to-yellow-500 text-background-950 py-3 px-6 rounded-xl font-semibold hover:from-yellow-500 hover:to-border-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Demo
                            </a>
                        )}
                        
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-background-700 border-2 border-border-gold/50 text-text-50 py-3 px-6 rounded-xl font-semibold hover:bg-background-600 hover:border-border-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                        )}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs rounded-full font-medium backdrop-blur-sm">
                            Completed
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-10 flex flex-col">
                    <div className="flex-1">
                        <h3 className="text-text-50 text-xl font-bold font-header mb-3 group-hover:text-text-gold transition-colors duration-300 line-clamp-2">
                            {project.name}
                        </h3>
                        
                        <p className="text-text-400 text-sm font-body leading-relaxed line-clamp-3 mb-4">
                            {project.description}
                        </p>

                        {/* Always Visible Action Buttons (fallback for non-hover) */}
                        <div className="flex gap-3 mb-4 lg:group-hover:opacity-0 transition-opacity duration-300">
                            {project.demoUrl && (
                                <a 
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gradient-to-r from-border-gold to-yellow-500 text-background-950 py-2 px-4 rounded-lg font-semibold text-sm hover:from-yellow-500 hover:to-border-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
                                >
                                    Demo
                                </a>
                            )}
                            
                            {project.githubUrl && (
                                <a 
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-background-700 border border-border-gold/30 text-text-50 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-background-600 hover:border-border-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="mt-auto pt-4 border-t border-border-gold/20">
                        <div className="flex items-center justify-between text-xs text-text-500">
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {project.duration || '2-3 weeks'}
                            </span>
                            
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {project.views || '1.2k'} views
                            </span>
                        </div>
                    </div>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-border-gold/20 via-transparent to-border-gold/20 animate-pulse" />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute -top-full -left-full w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-45 group-hover:top-full group-hover:left-full transition-all duration-1000 ease-out" />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-border-gold/10 via-transparent to-border-gold/10 blur-xl" />
                </div>
            </div>
        </>
    )
}

export default ProjectItem