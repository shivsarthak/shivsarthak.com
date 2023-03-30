export default function Experience() {

    const experience_list = [
        {
            'company': 'Indian Space Research Organization',
            'designation': 'Project Intern',
            'period': 'October 2022 - April 2023 ',
            'duration': '(6 Months)',
            'desc': 'Led a project to analyze land use land cover (LULC) using remote sensing and visualizing the data on web application, Bhuvan Panchayat 3.Gained experience working with Geospatial data processing and management.'

        },
        {
            'company': 'National Technical Research Organization',
            'designation': 'Cyber Research Intern',
            'period': 'June 2022 - July 2022 ',
            'duration': '(2 Months)',
            'desc': 'Developed an application for internal use to identify vulnerabilities and exploits for a user defined list of applications , for an air-gapped environment.'
        },
        {
            'company': 'Umango',
            'designation': 'Flutter Developer',
            'period': 'Dec 2020 - Jan 2022 ',
            'duration': '(1 Year 2 Months)',
            'desc': 'Worked as Freelancer on multiple apps throughout my term.In tandem with Flutter, worked with technologies like Firebase Firestore, Authentication and Realtime Database, Rest APIs'
        },
        {
            'company': 'Aura Social Network',
            'designation': 'Software Security Tester',
            'period': 'Jul 2020 - Nov 2020 ',
            'duration': '(5 Months)',
            'desc': 'Exploited, reverse engineered and performed various attacks on the AURA Mobile App and backend end-points to report bugs.Suggested ways to make the platform more secure from external attacks alsohelped setting up cloud functions and other microservices on the backend.'
        },


    ];

    return <div>

        <h2 className="text-2xl md:text-3xl font-normal text-center py-4 pb-12 text-transparent bg-clip-text bg-gradient-to-br from-neutral-400 to-neutral-800 " >
            Experience
        </h2>
        <ol className="relative border-l border-neutral-700 ">
            {
                experience_list.map((item, id) => {
                    return (<li key={`${id}`}
                        className="mb-10 ml-5">
                        <span className={`absolute flex items-center justify-center w-2 h-2 bg-neutral-500 rounded-full -left-1 ring-4 ring-neutral-700 `}>
                        </span>
                        <span>
                            <h3 className=" mb-1 text-xl text-left  text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-500">
                                {item.company}
                            </h3>
                            <h4 className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">
                                {item.designation}
                            </h4>
                        </span>
                        <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">
                            {item.period}&nbsp;<span className=" text-neutral-500 text-xs">{` ${item.duration }`} </span>
                        </time>
                        <p className="mb-4 text-base font-normal text-neutral-500 ">{item.desc}</p>
                    </li>)
                }
                )
            }
        </ol>

    </div>
}

export function EducationAndCertification() {

    const education_list = [
        {
            'institution': 'The Northcap University, Gurgaon',
            'period': '2019 - 2023 ',
            'course': 'Bachelors in Technology (Computer Science)',
            'desc': 'Specialization in Cyber Security'
        },
        {
            'institution': 'New Era Public School',
            'period': '2017 - 2019 ',
        },


    ];

    const certification_list=[
        {
            'title':'Certified Ethical Hacker',
            'institution':'EC-Council',
            'id':'ECC5283417690',
            'validity':'October 2021 - October 2024'
        }
    ];

    return <div>

        <h2 className="text-2xl md:text-3xl font-normal text-center py-4 pb-12 text-transparent bg-clip-text bg-gradient-to-br from-neutral-400 to-neutral-800 " >
            Education
        </h2>
        <ol className="relative border-l border-neutral-700 ">
            {
                education_list.map((item, id) => {
                    return (<li key={`${id}`}
                        className="mb-10 ml-5">
                        <span className="absolute flex items-center justify-center w-2 h-2 bg-neutral-500 rounded-full -left-1 ring-4 ring-neutral-700 ">
                        </span>
                        <h3 className=" mb-1 text-xl text-left  text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-500">{item.institution}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">{item.period}</time>
                        <h3 className="block mb-2 text-base font-normal leading-none text-neutral-400 ">{item.course}</h3>
                        <p className="mb-4 text-base font-normal text-neutral-500 ">{item.desc}</p>
                    </li>)
                }
                )
            }
        </ol>
        <h2 className="text-2xl md:text-3xl font-normal text-center py-4 pb-12 text-transparent bg-clip-text bg-gradient-to-br from-neutral-400 to-neutral-800 " >
            Certifications
        </h2>
        <ol className="relative border-l border-neutral-700 ">
            {
                certification_list.map((item, id) => {
                    return (<li key={`${id}`}
                        className="mb-10 ml-5">
                        <span className="absolute flex items-center justify-center w-2 h-2 bg-neutral-500 rounded-full -left-1 ring-4 ring-neutral-700 ">
                        </span>
                        <h3 className=" mb-1 text-xl text-left  text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-500">{item.title}</h3>
                        <h3 className="block mb-2 text-base font-normal leading-none text-neutral-400 ">{item.institution}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">{item.validity}</time>
                        <p className="mb-4 text-base font-normal text-neutral-500 ">{item.id}</p>
                    </li>)
                }
                )
            }
        </ol>

    </div>
}