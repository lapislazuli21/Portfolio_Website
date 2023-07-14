import { useScroll, motion } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({position, workplace, website, time, work}) => {
    
    const ref = useRef(null)

    return(
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp; <a className="text-primary capitalize dark:text-secondary" target="_blank" href={website}>@{workplace}</a> </h3>
                <span className="capitalize text-lg font-medium text-dark/80 dark:text-light/80 xs:text-sm">
                    {time}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const EdDetails = ({type, place, info, time, gpa}) => {
    
    const ref = useRef(null)

    return(
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;|&nbsp;<span className="text-primary dark:text-secondary">{place}</span></h3>
                <span className="capitalize text-lg font-semibold text-dark/80 dark:text-light/80 xs:text-sm">
                    {time} | GPA:&nbsp;{gpa}
                </span>
                <p className="font-semibold w-full md:text-sm">
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-64 sm:mt-16 sm:mb-32'>
        <h2 className='font-bold text-8xl w-full mb-32 text-center md:text-6xl xs:text-4xl md:mb-32 text-primary dark:text-secondary'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0.5 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            <ul className="w-full flex flex-col items-start justify-between ml-4 dark:text-light xs:ml-2">
                <Details position='Student Research Assistant' workplace='University of the Fraser Valley' time='April 2022 - Present'
                website='https://www.ufv.ca/chasi/about/faculty-associates/shabani-amir.htm' work='Working on research topics at the intersection of multiple disciplines such as Robotics, Artificial Intelligence, Augmented Reality, Computer Vision, Voice Recognition, IoT, Home Automation, and Wearable devices.'/>
                <Details position='Freelance Mobile App Developer' workplace='Gravity Intelligent Solutions' time='November 2022 - May 2023'
                website='https://www.gravityintel.com/home/' work='Developed an ecommerce mobile app using Flutter for both Android & iOS platforms. Integrated multiple APIs for authentication, shipments & cart functionalities. Designed the app from scratch.'/>
                <Details position='Freelance Web Developer' workplace='Gravity Intelligent Solutions' time='February 2021 - April 2021'
                website='https://www.gravityintel.com/home/' work='Worked on the website for Gravity Intelligent Solutions. Used HTML, CSS, JavaScript & jQuery to implement the website design and functionalities.'/>
                <EdDetails type="Bachelor's in Computer Information Systems" place="University of the Fraser Valley" gpa="3.77" time="September 2018 - September 2022" info="Dean's List in Winter 2022"/>
            </ul>
        </div>
    </div>
  )
}

export default Experience
