import LayananCard from "./layananCard"

const LayananSection = () => {
    const userTotal = 100

 
    return (

        <div className="relative h-screen overflow-hidden bg-gradient-to-l from-background-400/90 via-background-300 to-background-700/60 p-6 flex flex-col md:flex-row gap-6" >  
       
            <h2 className="font-header text-text-900 text-3xl font-bold after:content-[''] after:block after:w-1/2 after:h-1 after:bg-primary-blue after:mt-2"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple-900">Layanan</span> Kami </h2>
            <p className="text-text-900 text-md font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas eum, labore unde ratione tempora sit reprehenderit eveniet hic dolorem!</p> 
            <LayananCard 
                userTotal={userTotal}
                img="https://picsum.photos/200/300"
                title="Web Development"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            
            <LayananCard 
                userTotal={userTotal}
                img="https://picsum.photos/200/300"
                title="Mobile Development"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. tetur adipisicing elit tetur adipisicing elit tetur adipisicing elit tetur adipisicing elit tetur adipisicing elit tetur adipisicing elit"
            />
        </div>
    )
}

export default LayananSection