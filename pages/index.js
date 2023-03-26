
import Head from "next/head";
import IconBar from "../components/iconBar";

export default function Home() {
  return (
    <div >
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
      <div className=" h-screen  bg-neutral-800 flex items-center justify-center z-0">
        <div >
          <h1 className=" text-center text-neutral-200 text-6xl font-bold ">Shiv Sarthak Sabhlok</h1>
          <h2 className="  text-neutral-400 text-lg font-normal text-center py-4">Software Developer . Certified Ethical Hacker . Learner</h2>
          <IconBar />
          <div className=" flex items-center justify-center pt-4">
            <a href="https://cloud.shivsarthak.com/s/ryb5Qj9m9jXH3x5">
              <div className=" bg-neutral-700 rounded-md m-2 py-2 px-6  hover:shadow-neutral-900 hover:shadow-md text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105" >
                <h1 className="  font-semibold text-center ">Resume</h1>
              </div>
            </a>
          </div>

        </div>


      </div>

    </div>

  )
}