import Image from "next/image";

export default function ProjectCard({ ...props }) {
    const project = props.project;
    return (
        <div className=" p-4  m-4 ">

            <div className="flex flex-col md:flex-row items-center justify-center">

                <div className="w-full md:w-1/3 md:mr-8 border border-neutral-500  ">
                    <Image 
                        
                        src={project.image}
                        alt={project.title} />
                </div>
                <div className=" md:w-2/3">
                    <h2 className=" text-xl text-center  md:text-left py-4 text-transparent bg-clip-text bg-gradient-to-br from-neutral-400 to-neutral-500" >
                        {project.title}
                    </h2>
                    <p className=" text-sm font-light text-justify  text-neutral-400  pb-5">
                        {project.desc}
                    </p>
                    <div className=" flex flex-row justify-center md:justify-start ">
                        <a href={project.link} >
                            <div className="  w-32 border border-neutral-500 hover:border-neutral-400 text-sm text-center text-neutral-500 hover:text-neutral-400 p-2 duration-300  hover:scale-105">
                                See Project
                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );

}
