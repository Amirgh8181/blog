"use client"
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import styles from './mobileNav.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { DesktopSearchBtn, MobileSearchBtn } from '@/components/UI/navBarSection/searchBtn'
import NavItem from '@/components/UI/navBarSection/navItem'
import BlogLogo from '../../UI/blogLogo'
import LoginBtn from '@/components/UI/navBarSection/authButtons/entryBtn'
import { useSession } from 'next-auth/react'
import Auth from '@/components/UI/navBarSection/authButtons'


const MobileNav = () => {
    const [mobileMenuToggle, setMobileMenuToggle] = useState<boolean>(false)
    const [searchBar, setSearchBar] = useState<boolean>(false)
    const{data:session}=useSession()
    const openMobileMenu: voidFunc = () => {
        setMobileMenuToggle(!mobileMenuToggle)
    }
    const openSearch: voidFunc = () => {
        setSearchBar(!searchBar)
    }
    const menuVar = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.5,
            }
        }
    }
    return (
        <>
            <div id='mobileNavBar' className={styles.mobileNav}>
                <div className='w-20 flex justify-start items-center'>
                    <BlogLogo />
                </div>
                <div className='flex'>
                    <DesktopSearchBtn />
                    <input placeholder='search' className='outline-none border focus:border-gray-800 w-[20vw] h-9 px-2 text-sm rounded-lg transition-all duration-300' />
                </div>
                <div className='flex justify-end items-center space-x-2'>
                    <div className='h-7'>
                        <Auth/>
                    </div>
                    {mobileMenuToggle === false && <button onClick={() => openMobileMenu()} className={styles.mobileMenuBtn}><AiOutlineMenu /></button>}
                </div>
            </div>
            <AnimatePresence>
                {mobileMenuToggle && (
                    <motion.div
                        className={styles.mobileMenu}
                        variants={menuVar}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        <div onClick={() => openMobileMenu()} className={styles.inMenuBtn}><AiOutlineClose /> </div>
                        <NavItem toggle={openMobileMenu} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
export default MobileNav;

