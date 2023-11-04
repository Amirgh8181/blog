"use client"
import { motion } from 'framer-motion'
import { ContentNav } from './ContentNav'
import styles from './desktopNav.module.css'


const DesktopCenterNav = () => {
    const CenterNavContainer = {
        initial: {
            opacity: 0,
            y: -5
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
                when: "beforeChildren",
                type: "spring",
            }
        }

    }
    const CenterNavCHildren = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        }

    }
    return (
        <>
            <motion.div id='mediumNavBar' className={styles.centerNavDesktop}
                variants={CenterNavContainer} initial='initial' animate='animate'
            >
                <motion.div className={styles.desktopNavContent} variants={CenterNavCHildren}>
                    <ContentNav />
                </motion.div>
            </ motion.div>

        </>
    )
}
export default DesktopCenterNav