import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import me from '../../public/images/profile/me.jpg'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {

    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>About Me</title>
            <meta name="description" content="A page describing who I am & what I do"></meta>
        </Head>
        <TransitionEffect />
        <main className='flex flex-col w-full items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText className="mb-16 sm:mb-8 pl-8 sm:pl-0 lg:!text-6xl sm:!text-5xl xs:!text-4xl" text="Adversity Drives Progress" />
                <div className='grid w-full grid-cols-9 gap-16 sm:gap-8 dark:text-light'>
                    <div className='md:order-2 md:col-span-9 col-span-3 xl:col-span-4 flex flex-col items-start md:items-center justify-center '>
                        <h2 className='mb-4 text-xl font-bold text-dark/90 dark:text-light/90 capitalize'>A look behind the screen</h2>
                        <p className='font-medium'>Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients&apos; visions to life.
</p>
                        <p className='font-medium my-4'>I believe that design is about more than just making things look pretty, it&apos;s about solving problems and 
creating intuitive, enjoyable experiences for users. </p>
                        <p className='font-medium'>Whether I&apos;m working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                    </div>
                    <div className='md:order-1 md:col-span-9 col-span-3 xl:col-span-5 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8'>
                        <div className='absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={me} alt="Khush Gandhi (Me)" priority className='w-full h-auto rounded-2xl' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                    <div className='md:order-3 col-span-3 xl:col-span-9 xl:flex-row xl:items-center xl:justify-center flex flex-col items-end justify-evenly md:flex-wrap text-dark/80 dark:text-light/80'>
                        <div className='flex flex-col items-end xl:items-center justify-center md:my-2'>
                            <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-semibold text-dark dark:text-light'>
                                <AnimatedNumbers value={100}/>+
                            </span>
                            <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize'>hours spent on youtube(where I actually studied)</h2>
                        </div>
                        <div className='flex flex-col items-end xl:items-center justify-center md:my-2'>
                            <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-semibold text-dark dark:text-light'>
                            <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize'>years spent in college(doing everything but study)</h2>
                        </div>
                        <div className='flex flex-col items-end xl:items-center justify-center md:mt-2'>
                            <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-semibold text-dark dark:text-light'>
                            <AnimatedNumbers value={2}/>+
                            </span>
                            <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize'>years spent in freelancing(reality check received)</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
            </Layout>
        </main>
    </>
  )
}

export default about
