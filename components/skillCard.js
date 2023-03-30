
export default function SkillCard({ children, ...props }) {
    return (

        <div className=" p-8 bg-neutral-800   border border-[#3b3b3b] duration-300  hover:scale-105">
            <div className="flex flex-col items-start justify-start">
                {children}
                <h2 className=" text-xl text-left  py-4 pb-6  text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-500" >
                    {props.title}
                </h2>
                <p className=" text-sm font-light text-neutral-400 text-left">{props.desc}</p>
            </div>
        </div>
    );

}
