import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base'>
        <Layout className='py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Forged with<span className=''>&nbsp;Next.js,</span><span className='text-[#38BDF7]'>&nbsp;Tailwind</span> <span className=''>&nbsp;and Vercel&nbsp;</span>by&nbsp; <Link href="/about" className='text-primary dark:text-secondary'>Khush Gandhi</Link>
            </div>
            <Link href="/" className='text-primary dark:text-secondary'>Nothing to see here folks</Link> 
        </Layout>
    </footer>
  )
}

export default Footer