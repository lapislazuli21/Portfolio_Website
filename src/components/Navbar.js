import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { LinkedInIcon, GithubIcon, SunIcon, MoonIcon } from './Icons'
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) => {

    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block bg-primary dark:bg-secondaryDark absolute
            left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link> 
    )
}

const MobileLink = ({href, title, className="", toggle}) => {

    const router = useRouter();

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
            {title}
            <span className={`h-[2px] inline-block bg-primary dark:bg-secondaryDark absolute
            left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </button> 
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
        
        <button className='hidden flex-col items-center justify-center lg:flex' onClick={handleClick}>
            <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
        
        <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='ml-4'/>
                {/* <CustomLink href="/about2" title="About 2" className='ml-4'/> */}
            </nav>
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://www.linkedin.com/in/khushgandhi24/" target='_blank' title="LinkedIN" whileHover={{y: -4}} whileTap={{scale: 0.8}} className='w-6 mr-3'>
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://github.com/lapislazuli21" target='_blank' title="Github" whileHover={{y: -4}} whileTap={{scale: 0.8}} className='w-6 mx-3'>
                    <GithubIcon />
                </motion.a>

                <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light": "bg-light text-dark"}`}>
                    {
                        mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"}/>
                    }
                </button>
            </nav>
        </div>

        {
            isOpen ? 
            <motion.div initial={{scale:0, opacity:0, x: "-50%", y:"-50%"}} animate={{scale:1, opacity:1, x: "-50%", y:"-50%"}} transition={{type:"spring", duration:0.75}}
            className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'>
                <nav className='flex items-center flex-col justify-center'>
                    <MobileLink href="/" title="Home" className='mb-2' toggle={handleClick}/>
                    <MobileLink href="/about" title="About" className='my-2' toggle={handleClick}/>
                    <MobileLink href="/projects" title="Projects" className='my-2' toggle={handleClick}/>
                    {/* <CustomLink href="/about2" title="About 2" className='ml-4'/> */}
                </nav>
                <nav className='flex items-center justify-center flex-wrap my-2 mx-auto'>
                    <motion.a href="https://www.linkedin.com/in/khushgandhi24/" target='_blank' title="LinkedIN" whileHover={{y: -4}} whileTap={{scale: 0.8}} className='w-6 mr-3 sm:mr-2'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://github.com/lapislazuli21" target='_blank' title="Github" whileHover={{y: -4}} whileTap={{scale: 0.8}} className='w-6 mx-3 sm:mx-2 bg-light rounded-full dark:bg-dark'>
                        <GithubIcon />
                    </motion.a>

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 sm:ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light": "bg-light text-dark"}`}>
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"}/>
                        }
                    </button>
                </nav>
            </motion.div>
            : null
        }

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default Navbar