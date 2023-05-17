import { motion } from "framer-motion"
import { useState, useEffect } from "react" 

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex absolute items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark sm:text-dark dark:sm:text-light sm:font-bold py-3 px-6 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:bg-transparent dark:sm:bg-transparent shadow-dark dark:shadow-light cursor-pointer'
        whileHover={{scale: 1.15}} initial={{x:0, y:0}} whileInView={{x: x, y: y, transition: {duration: 1.5}}}  viewport={{once: true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {

    const sw = () => {
        return globalThis.window?.innerWidth
    }
    const [screenSize, setScreenSize] = useState(sw());
    
    useEffect(() => {
        const updateDimension = () => {
          setScreenSize(sw())
        }
        window.addEventListener('resize', updateDimension);
        
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
      }, [screenSize])

  return (
    <>
        <h2 className='font-bold text-8xl w-full mt-64 md:mt-32 text-center text-primary dark:text-secondary md:text-6xl xs:text-4xl'>Skills</h2>
        {
            sw() > 764 ? 
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark md:bg-none dark:md:bg-none'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:shadow-light cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 md:bg-light md:text-dark dark:md:bg-dark dark:md:text-light md:font-bold xs:p-2'
                whileHover={{scale: 1.15}} transition={{duration: 1.25}}>
                    Web
                </motion.div>
                <Skill name="ReactJS" x="-6vw" y="-12vw"/>
                <Skill name="Golang" x="-10vw" y="1vw"/>
                <Skill name="Python" x="10vw" y="-7vw"/>
                <Skill name="Flutter" x="20vw" y="1vw"/>
                <Skill name="NextJS" x="-9vw" y="11vw"/>
                <Skill name="Tailwind CSS" x="23vw" y="-12vw"/>
                <Skill name="Git" x="-18vw" y="-5vw"/>
                <Skill name="PostgreSQL" x="9vw" y="-17vw"/>
                <Skill name="GraphQL" x="-24vw" y="5vw"/>
                <Skill name="NodeJS" x="6vw" y="12vw"/>
            </div> : 
            <div className="pt-12 text-center">
                <motion.ul initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:1.5, type:'spring'}}} viewport={{once: true}}>
                    <motion.li className="mb-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>JavaScript</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>Golang</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>Python</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>ReactJS</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>PostgreSQL</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>Flutter</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>Tailwind CSS</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>Node.js</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>GraphQL</motion.li>
                    <motion.li className="my-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>NextJS</motion.li>
                    <motion.li className="mt-3 px-2 py-2 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:bg-primaryDark dark:hover:bg-secondaryDark dark:hover:text-dark" whileHover={{scale: 1.15}} transition={{duration: 1.05}}>Git / GitHub</motion.li>
                </motion.ul>
            </div>
        }
    </>
  )
}

export default Skills