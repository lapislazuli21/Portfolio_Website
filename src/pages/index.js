import Layout from '@/components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import hero from "../../public/images/profile/hero.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

//bg-image: bg-[url('../../public/images/profile/mountains.png')] bg-cover bg-center

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Khush Gandhi</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className='py-16 md:pt-12 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/3 md:w-full md:py-8'>
              <Image src={hero} alt="Hero" className="lg:hidden md:inline-block md:w-full w-full h-auto" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Reshaping the Present to Transform the Future." className='!text-left xl:!text-6xl lg:!text-center lg:!text-7xl md:!text-6xl sm:!text-4xl' />
              <p className='my-6 text-[18px] font-medium md:text-[16px] sm:text-[14px]'>
              As a full-stack developer, I'm on a journey to create solutions that have the potential to revolutionize the world. By leveraging my expertise, I constantly reinvent myself, grow my skills, and improve as an innovator.
              </p>
              <div className='w-full flex items-center justify-start mt-4 lg:justify-center'>
                <Link href="/dummy.pdf" target='_blank' className='flex items-center bg-dark/90 text-secondary dark:border-light dark:text-secondaryDark px-6 py-2.5 md:px-4 rounded-lg text-lg md:text-base font-semibold hover:bg-light dark:hover:bg-dark dark:hover:text-light hover:text-dark border-2 border-solid border-transparent hover:border-secondary dark:hover:border-secondary'>
                  <LinkArrow className={"w-6 mr-2"}/>
                  Resume
                </Link>
                <Link href="/mailto:xyz@gmail.com" target='_blank'
                className='ml-4 md:text-base flex items-center bg-light text-primary dark:border-light dark:text-primaryDark px-6 py-2.5 rounded-lg text-lg font-semibold hover:text-dark border-2 border-solid border-dark hover:border-primary dark:hover:bg-dark dark:hover:border-primaryDark dark:hover:text-light'>
                  Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
