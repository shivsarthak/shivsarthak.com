
import Head from "next/head";
import Hero from "../components/sections/hero";
import Skills from "../components/sections/skills";
import BottomBar from "../components/bottomBar";
import Projects from "../components/sections/projects";
import Experience, { Education, EducationAndCertification } from "../components/sections/experience";
export default function Home() {
  return (
    <div className=" font-outfit min-h-screen max-w-screen from-neutral-900  to-neutral-800  bg-gradient-to-br  " >
      <Head>
        <title>Shiv Sarthak Sabhlok</title>
        <link rel="icon" href="/assets/icon.png" />
        <meta name="description" content="Shiv Sarthak Sabhlok - Application Developer" />
        <link rel="canonical" href="https:/shivsarthak.com" />
        <meta property="og:title" content="Shiv Sarthak | Portfolio" />
        <meta property="og:description" content="Shiv Sarthak Sabhlok - Application Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shivsarthak.com" />
        <meta property="og:image" content="https://shivsarthak.com/assets/icon.png" />
        <meta property="og:image:alt" content="Shiv Sarthak | Portfolio" />
      </Head>
      <main className=" bg-[url('/assets/BG.svg')] bg-repeat bg-fixed">
        <Hero />
        <div className=" border-b-2 border-neutral-700 w-3/5 mx-auto mb-12" />
        <Skills />
        <Projects />
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-12 md:px-32 px-12 ">
          <Experience />
          <EducationAndCertification/>
        </div>

        <div className="py-6" />
        <BottomBar></BottomBar>
      </main>

    </div>
  )
}