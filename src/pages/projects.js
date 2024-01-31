import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import exa from "../../public/images/projects/ExAncient.jpg"
import plh from "../../public/images/projects/ExAncient.jpg"
import dts from "../../public/images/projects/DatasetRecordLinkage.png"
import wta from "../../public/images/projects/WeatherApp_New.png"
import rp from "../../public/images/projects/r_port_img.png"
import bc from "../../public/images/projects/bccomp.png"
import sth from "../../public/images/projects/stray_happy.png"
import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full relative flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4">
            <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2.5rem] bg-dark dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={`${link}`} target="_blank" className="w-2/3 lg:w-full cursor-pointer overflow-none">
                <FramerImage src={img} alt={title} priority className="w-full h-auto rounded-xl border border-solid border-dark dark:border-light" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <div className="w-1/3 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-secondary font-medium text-lg xs:text-base">{type}</span>
                <Link href={`${link}`} target="_blank" className="hover:underline hover:underline-offset-4 hover:decoration-secondary">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="w-full mt-2 flex items-center justify-evenly">
                    <Link href={`${github}`} target="_blank" className="w-10 dark:text-light"><GithubIcon /></Link>
                    <Link href={`${link}`} target="_blank" className="ml-4 rounded-lg bg-dark text-secondary dark:bg-light dark:text-primary px-6 py-2 sm:text-base text-lg font-semibold
                    hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-secondary dark:hover:border-primary">Check it Out</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github, summary }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
            <div className='absolute -z-10 w-[102%] h-[103%] rounded-br-3xl rounded-[1.5rem] bg-dark dark:bg-light md:-right-2 xs:w-full md:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={`${link}`} target="_blank" className="w-full cursor-pointer overflow-none">
                <FramerImage src={img} alt={title} className="w-full h-[600px] rounded-xl border border-solid border-dark dark:border-light" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} priority />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-secondary font-medium text-lg lg:text-base md:text-sm">{type}</span>
                <Link href={`${link}`} target="_blank" className="hover:underline hover:underline-offset-4 hover:decoration-secondary dark:hover:decoration-primary">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-xl ">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="w-full mt-2 flex items-center justify-evenly">
                    <Link href={`${link}`} target="_blank" className="ml-4 md:ml-0 rounded-lg bg-light border-dark text-primary dark:bg-dark dark:border-light dark:text-secondary px-6 py-2 text-lg font-semibold
                    hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid hover:border-primary dark:hover:border-secondary md:text-base">Check it Out</Link>
                    <Link href={`${github}`} target="_blank" className="w-10 dark:text-light"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="A page containing all my projects"></meta>
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Curiosity Sparks Innovation" className="mb-16 pl-16 lg:pl-0  lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-6">
                        <div className="col-span-12">
                            <FeaturedProject title="ExAncient"
                                link="https://devpost.com/software/exancient"
                                github="https://github.com/RutvikJ77/ExAncient"
                                img={exa}
                                type="Featured Project"
                                summary="This project performs neural style transfer from top paintings and gives you that feel and look of living in that era. It also generates a romantic caption based on the image using a neural storyteller model" />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project title="Dataset Record Linkage" summary="This project takes 2 related datasets containing data on IPOs issued by Indian Companies and performs EDA & Record Linkage to prepare a more comprehensive & complete dataset." link="https://github.com/lapislazuli21/Dataset_Record_Linkage" github="https://github.com/lapislazuli21/Dataset_Record_Linkage" type="Data Science" img={dts} />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project title="Weather App" summary="This project is a simple app that uses a weather api to display the temperature of city and current weather condition. It changes its background in accordance to the weather of the city." link="https://weather-app-dun-phi.vercel.app/" github="https://github.com/lapislazuli21/Weather_App" type="Front-End Project" img={wta} />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject title="BC Components Website"
                                link="https://www.bccomp.net"
                                github="https://github.com/lapislazuli21/BC_Components_Website"
                                img={bc}
                                type="Featured Project"
                                summary="This project is a website for BC Components, a supplier of electronic parts across India" />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project title="Portofolio Website" summary="This project is a portfolio website for a Multidisciplinary designer." link="https://r-portofolio-site.vercel.app/" github="https://github.com/lapislazuli21/R_Portofolio_Site" type="Front-End Project" img={rp} />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project title="Stray Happy" summary="This project is a mobile application for a Mumbai based NGO called Stray Happy used to showcase their services and provide useful information related to their mission." link="https://play.google.com/store/apps/details?id=com.mycompany.strayhappy&hl=en_IN&gl=US" github="https://github.com/lapislazuli21/Stray-Happy" type="Mobile App Project" img={sth} />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
