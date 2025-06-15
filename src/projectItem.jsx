
const ProjectItem = ({project = {image: 'https://picsum.photos/200/300', name: 'Project dummy', description: 'lorem ipsum si dolor amet lorem lorem lorem lorem' }}) => {
    return (
        <div className="font-body flex flex-col items-center bg-gradient-to-t from-background-950 via-background-800/60 to-transparent p-4 rounded-lg h-screen text-text-light border-x-2 border-border-gold">
            <img src={project.image} alt={project.name} className="mb-4"/>
            <h3  className="text-2xl">{project.name}</h3>
            <p  className="text-md">{project.description}</p>
        </div>
    )
}

export default ProjectItem