const ProjectItem = ({
    project = {
        image: 'https://picsum.photos/200/300', 
        name: 'Project dummy', 
        description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' 
    }
}) => {
    return (
        <div className="font-body flex flex-col items-center justify-end bg-gradient-to-t from-background-950 via-background-800/60 to-transparent p-6 pb-24 h-screen text-text-light border-x-2 border-border-gold relative overflow-hidden">
            
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${project.image})`,
                    filter: 'brightness(0.4)'
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
            </div>
        </div>
    )
}

export default ProjectItem