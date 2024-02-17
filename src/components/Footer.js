import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base'>
      <Layout className='py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2 sm:flex-col sm:'>
          Forged with Next.js,<span className='text-[#38BDF7]'>&nbsp;Tailwind,&nbsp;</span>and Vercel.
        </div>
        <Link href="/about" className='text-primary dark:text-secondary'>Developed by Khush Gandhi</Link>
      </Layout>
    </footer>
  )
}

export default Footer