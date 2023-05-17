import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import me from '../../public/images/profile/me.jpg'
import sakura from '../../public/images/profile/sakura1.png'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

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
        <main className='flex flex-col w-full items-center justify-center'>
            <Layout className='pt-16 bg-[url("../../public/images/profile/sakura1.png")] bg-center bg-contain bg-no-repeat'>
                <AnimatedText className="mb-16" text="Adversity Drives Progress" />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-center flex-grow'>
                        <h2 className='mb-4 text-xl font-bold text-dark/80 capitalize'>A look behind the screen</h2>
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
                    <div className='col-span-2'>

                    </div>
                    <div className='col-span-3 flex flex-col items-end justify-evenly'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-semibold'>
                                <AnimatedNumbers value={100}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/80'>hours spent on youtube(where I actually studied)</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-semibold'>
                            <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/80'>years spent in college(doing everything but study)</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-semibold'>
                            <AnimatedNumbers value={2}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/80'>year spent in freelancing(reality check received)</h2>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default about
