import ProjectCard from "../projectCard";
import Subai from '../../public/assets/subai.png'

export default function Projects() {

    const projects = [
        {
            'title': 'AI Subtitle Generator',
            'desc': "This tool is designed to generate subtitles for uploaded videos using OpenAI's Open Source Whisper Models. It is a full-stack application that utilizes Next.js, Python, Celery, and Redis to provide accurate and efficient subtitle generation. The AI Subtitle Generation Website is particularly useful for content creators, marketers, and educators who want to add subtitles to their videos to make them more accessible and engaging to a wider audience. The tool is easy to use and can save a significant amount of time and effort, allowing users to focus on creating high-quality video content rather than spending hours manually transcribing and adding subtitles.",
            'link': 'https://subai.pro',
            'image': Subai
        }
    ]
    return <div className=" pb-6">

        <h2 className="text-2xl md:text-3xl font-normal text-center py-4 text-neutral-400  " >
            <p>My Recent Project</p>
            <a href="https://github.com/shivsarthak" className=" text-sm md:text-base text-neutral-600 ">
                <span className=" flex flex-row gap-1 items-center justify-center hover:text-neutral-400 duration-150 hover:fill-neutral-400  fill-neutral-600  " >
                    See All My Projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="12" height="12" viewBox="0 0 24 24">
                        <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"  />
                    </svg>
                </span>

            </a>
        </h2>

        <div className=" md:px-16 lg:px-32 grid grid-cols-1 lg:grid-cols-1 gap-2">
            {projects.map((item, key) =>
                <ProjectCard key={key} project={item} />)}

        </div>
    </div>


}