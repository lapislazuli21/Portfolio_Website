import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"
import logo from '../../public/images/profile/logo.png'
import MainLogo from './Icons'

//whileHover={{backgroundColor: ["#f5f5f5","#F9003A","#FF3363","#FF5C82","#FF99B1","#F9003A", "#f5f5f5"], transition: {duration: 1, repeat: Infinity}}}

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/" className='w-16 h-16 flex items-center justify-center'>
          {/*<Image src={logo} alt="Logo" className='w-16 h-16'/>*/}
          <MainLogo className="text-primary dark:text-secondary"/>
        </MotionLink>
    </div>
  )
}

export default Logo