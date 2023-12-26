"use client"
import { motion } from "framer-motion"
import { ContentNav } from "@/components/UI/navBarSection/desktopSection/ContentNav"
import styles from './desktopNav.module.css'

export const DesktopFullNav = () => {
    const fullNavContainer = {
        initial: {
            opacity: 0,
            y: -5,
            width:"60rem"
        },
        animate: {
            opacity: 1,
            y: 0,
            width: '100%',
            transition: {
                duration: 0.1,
                when: "beforeChildren",
            }
        }

    }
    const fullNavCHildren = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        }

    }


    return (
        <>
            <motion.div className={styles.fullNavDesktop}
                variants={fullNavContainer} initial="initial" animate="animate"
            >
                <motion.div className={styles.desktopNavContent} variants={fullNavCHildren}>
                    <ContentNav />
                </motion.div>
            </motion.div>
        </>
    )
}