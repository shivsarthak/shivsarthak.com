import ProjectCard from "../projectCard";


export default function Projects() {

    const projects = [
        {
            'title': 'AI Subtitle Generator',
            'desc': "This tool is designed to generate subtitles for uploaded videos using OpenAI's Open Source Whisper Models. It is a full-stack application that utilizes Next.js, Python, Celery, and Redis to provide accurate and efficient subtitle generation. The AI Subtitle Generation Website is particularly useful for content creators, marketers, and educators who want to add subtitles to their videos to make them more accessible and engaging to a wider audience. The tool is easy to use and can save a significant amount of time and effort, allowing users to focus on creating high-quality video content rather than spending hours manually transcribing and adding subtitles.",
            'link': 'https://subai.pro',
            'image': '/assets/subai.png'
        }
    ]
    return <div className=" pb-12">
        <h2 className="text-2xl md:text-3xl font-normal text-center py-4 text-transparent bg-clip-text bg-gradient-to-br from-neutral-400 to-neutral-700 " >
            My Recent Work
        </h2>
        <div className=" md:px-16 lg:px-32 grid grid-cols-1 lg:grid-cols-1 gap-2">
            {projects.map((item, key) =>
                <ProjectCard key={key} project={item} />)}

        </div>
    </div>


}