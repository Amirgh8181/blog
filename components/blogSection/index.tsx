"use client"
import { motion } from "framer-motion"
import React from 'react'
import styles from './blogsection.module.css'
import Link from "next/link"
import { usePathname } from "next/navigation"

const BlogSections = ({ card }: { card: blogCard[] }) => {
    const pathName=usePathname()
    
    const ContainerVariant = {
        initial: {
        },
        animate: {
            transition: {
                staggerChildren: 0.5,
            }
        }
    }
    const cardVariant = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                type:'spring'

            }
        }
    }

    return (
        //cardsContainer
        <motion.div className={styles.cardsContainer} variants={ContainerVariant} initial='initial' animate='animate'>
            {card.map(item =>
                <Link key={item.label} href={`${pathName}/${item.label}`} className="group">
                    {/*cardsBody*/}
                    <motion.div variants={cardVariant} className={`${styles.cardsBody} lg:group-hover:w-56`}>
                        <div className={styles.cardContents}>
                            <div className={`${styles.cardsTitle} lg:group-hover:rotate-0`}>{item.label}</div>
                            <div className={styles.cardsIcons}>{item.icon}</div>
                        </div>
                        <div className={`${styles.bgGradiant} ${item.bgGradiant}`}></div>
                    </motion.div>
                </Link>
            )}
        </motion.div>
    )
}

export default BlogSections




