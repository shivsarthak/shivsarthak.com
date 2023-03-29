
import IconBar from "../iconBar";
import Balancer from 'react-wrap-balancer'
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="w-full flex justify-center items-center">


            <div className="w-2/3 lg:w-1/2 ">
                <div className=" flex flex-col items-center justify-center z-0" >
                    <div className=" mt-14">
                        <div className="flex items-center justify-center">
                            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 grayscale">
                                <Image width="128" height="128" src="/assets/me.jpg" alt="Shiv Sarthak Sabhlok" />
                            </div>
                        </div>

                        <h2 className=" text-center text-neutral-500  text-lg font-light font-outfit ">Hi, I&apos;m Shiv Sarthak Sabhlok</h2>
                        <h2 className="text-4xl md:text-6xl font-normal text-center py-4 pb-12 text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-600" >
                            <Balancer ratio={1}>
                                Solving problems and creating innovative solutions with skill and code
                            </Balancer>
                        </h2>
                        <IconBar />
                        <div className=" flex items-center justify-center pt-4">

                            <div className=" bg-neutral-800   border border-[#3b3b3b] m-2 py-2 px-6 mb-12  shadow-neutral-900 hover:shadow-md text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105" >
                                <a href="https://cloud.shivsarthak.com/s/ryb5Qj9m9jXH3x5">
                                    <h1 className=" font-normal text-xl  text-center ">Resume</h1>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>);
}
