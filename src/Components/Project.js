// import websiteImg1 "../Assets/"
// import websiteImg2 "../Assets/"
// import websiteImg3 "../Assets/"



export default function Project() {
     const config ={
        projects: [
            {
                image:'',
                description:'',
                link:''
            },
            {
                image:'',
                description:'',
                link:''
            },
            {
                image:'',
                description:'',
                link:''
            }
        ]
     }


    return <>
    <section id="project" className="flex flex-col py-20 px-5 justify-center bg-primary">
        <div className="w-full" >
        <div className="flex flex-col px-10 py-5">
         <h1 className="text-4xl text-white border-b-4  border-secondary mb-5 w-[150px] font-bold">Project</h1>
        <p>these are my best project</p>
         </div>


        </div>


        <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5 ">
            {config.projects.map((project)=> (
                

           
            <div className="relative" >
                    {/* <img className="h-[200px] w-[500px]" src={project.image}/> */}
                    <div className="project-desc">
                        <p className="text-center px-5 py-5">{project.description}</p>
                    </div>
                    <div className="flex justify-center"> 
                        <a className="btn" target="_blank"href={project.link}>view Project</a>


                    </div>

            </div>
            
             ))}
            


        </div>
        </div>
     </section>
    
    
    
    
    
    
    </>
}