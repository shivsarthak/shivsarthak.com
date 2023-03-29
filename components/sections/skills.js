
import Balancer from 'react-wrap-balancer'
import ProjectCard from '../projectCard'
import Image from 'next/image';
export default function Skills() {
    return <div>
        <h2 className="text-xl md:text-2xl font-normal text-center py-4 pb-12 text-transparent bg-clip-text bg-gradient-to-br from-neutral-400 to-neutral-800 " >
            <p>Skills That Set Me Apart: A Showcase of </p>
            <p>My Proficiencies and Expertise</p>


        </h2>
        <center>
            <div className=' w-[90%] md:w-3/4  grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 overflow-visible'>
                <ProjectCard
                    title="Web & Mobile Development "
                    desc="Design, develop, and deploy responsive and efficient web and mobile applications using various programming languages and frameworks.">
                    <Image
                        src={'/icons/webdev.svg'}
                        height={44}
                        width={44}
                        alt="Security"
                    />
                </ProjectCard>

                <ProjectCard
                    title="Development"
                    desc="Create solutions using programming languages, tools, and frameworks, including requirements gathering, architecture design, coding, testing, and deployment." >
                    <Image
                        src={'/icons/development.svg'}
                        height={44}
                        width={44}
                        alt="Security"
                    />
                </ProjectCard>
                <ProjectCard
                    title="Dev-Ops"
                    desc="The knowledge and expertise to automate the software development and deployment process, perform continuous integration and delivery, monitor system performance, and ensure the security of the software and systems."
                >
                    <Image
                        src={'/icons/devops.svg'}
                        height={44}
                        width={44}
                        alt="Security"
                    />
                </ProjectCard>

                <ProjectCard
                    title="Security"
                    desc="Identify and address potential security threats in software and systems to ensure data and information are secure from unauthorized access or attacks. "
                >
                    <Image
                        src={'/icons/security.svg'}
                        height={44}
                        width={44}
                        alt="Security"
                    />

                </ProjectCard>

            </div>
        </center>

    </div>
}