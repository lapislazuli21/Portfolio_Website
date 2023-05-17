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
                        <p className='font-medium'>Hey, I&apos;m Khush, a dedicated full-stack and mobile app developer with a diverse background in creating seamless and engaging digital experiences. As a freelance web & mobile app developer, I&apos;ve had the opportunity to work on various projects, honing my skills in designing intuitive user interfaces and building robust backend systems. Additionally, my experience as an AI research intern has allowed me to delve into the exciting realm of artificial intelligence, further expanding my knowledge and expertise.
.
</p>
                        <p className='font-medium my-4'>With a deep understanding of both front-end and back-end technologies, I work diligently to ensure smooth functionality and top-notch performance in all my projects. As an enthusiastic learner, I stay up-to-date with industry trends and technologies, constantly exploring new tools and best practices to deliver high-quality applications that exceed expectations. I believe in pushing boundaries and embracing challenges to create solutions that truly make a difference. </p>
                        <p className='font-medium'> If you&apos;re seeking a developer who is not only skilled but also committed to making an impact, I&apos;m here to collaborate with you. Let&apos;s work together to create remarkable digital experiences that revolutionize the world!</p>
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
