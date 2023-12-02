'use client'
import React, { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import styles from './ParallaxBg.module.css'
import HeroSearchBar from '../UI/hero/HeroSearchBar'
import TextAnimation from '../UI/textAnimation/TextAnimation'

interface parallax {
    headerTitle: string,
    containerClass: string,
    titleClass: string,
    imgClass: string,
    imageSrc:string,
    searchBar?: boolean

}

const ParallaxBg = ({ headerTitle, containerClass, titleClass, imgClass,imageSrc,searchBar }: parallax) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const bgY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])


   
    return (
        <div
            ref={ref}
            className={`w-full relative inset-0 ${containerClass}`}
        >
            <motion.div
                style={{ y: textY }}
                className={titleClass}
            >
                {/* title animation in paralax bg */}

                <TextAnimation title={headerTitle} staggerTime={0.15}/>


                {/* if in hero show search bar */}
                <div>
                    {searchBar && <HeroSearchBar />}
                </div>

            </motion.div>

            {/* background of content with paralax animation */}
            <motion.div
                className={`${imgClass} bg-cover bg-no-repeat bg-bottom`}
                style={{ y: bgY,backgroundImage: `url(${imageSrc})` }}
            >
            </motion.div>
        </div>
    )
}

export default ParallaxBg
