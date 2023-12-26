"use client"
import React, { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import styles from './Product.module.css'
import Link from 'next/link'
import ShowContainer from '../UI/showContainer'
import TextAnimation from '../UI/textAnimation/TextAnimation'

const CategoryItem = () => {


    const categoryCard: { title: string, href: string, img: string }[] = [{ title: "FrontEnd", href: '/frontEnd', img: "/images/category-img-2.webp" }, { title: "BackEnd", href: '/backEnd', img: "/images/category-img-1.webp" }]
    return (
        <ShowContainer>
            <div className={styles.ProductContainer}
            >
                <div className={styles.cardContainer}>
                    {
                        categoryCard.map(item =>
                            <div className={styles.cardBody} key={item.href}>
                                <div className={styles.cardElements}>
                                    <Image alt='postImg' src={item.img} width={400} height={400} className={styles.cardImg} />
                                    <div className={styles.cardTitle}>
                                        <TextAnimation title={item.title} staggerTime={0.05} />
                                    </div>

                                    <Link href={`/Blog/${item.href}`}>
                                        <button
                                            className={styles.cardBtn}
                                        >
                                            <TextAnimation title={'SHOW MORE'} staggerTime={0.05} />

                                        </button>
                                    </Link>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div >
        </ShowContainer>
    )
}

export default CategoryItem;


/*

                            <div className='flex flex-col justify-center items-center md:space-y-8 space-y-4'>
                                <Image alt='' src={'/images/HERO.jpg'} width={400} height={400} className='w-[60vw] h-[20vh] md:h-auto md:w-auto rounded-lg' />
                                <h1 className='md:text-7xl text-3xl'>{item}</h1>
                                <motion.button
                                    className='md:p-4 p-2 text-sm md:text-xl rounded-lg dark:bg-black/90 bg-white/90 dark:text-white text-black hover:text-white hover:bg-violet-600 active:bg-violet-700 dark:hover:bg-violet-600 dark:active:bg-violet-700  transition-all duration-400'
                                >SHOW MORE</motion.button>
                            </div>




                                <div className='flex flex-col justify-center items-center md:space-y-8 space-y-4'>
                                <Image alt='' src={'/images/HERO.jpg'} width={400} height={400} className='w-[60vw] h-[20vh] md:h-auto md:w-auto rounded-lg' />
                                <h1 className='md:text-7xl text-3xl'>{item}</h1>
                                <motion.button
                                    className='md:p-4 p-2 text-sm md:text-xl rounded-lg dark:bg-black/90 bg-white/90 dark:text-white text-black hover:text-white hover:bg-violet-600 active:bg-violet-700 dark:hover:bg-violet-600 dark:active:bg-violet-700  transition-all duration-400'
                                >SHOW MORE</motion.button>
*/