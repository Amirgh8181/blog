"use client"
import styles from './content.module.css'
import BlogLogo from "@/components/UI/blogLogo"
import NavItem from "../navItem"
import { DesktopSearchBtn } from "@/components/UI/navBarSection/searchBtn"
import LoginBtn from '@/components/UI/navBarSection/authButtons/entryBtn'
import { useSession } from 'next-auth/react'
import SignOutBtn from '../authButtons/LogoutBtn'

export const ContentNav = () => {
    const { data: session } = useSession()

    return (
        <div id='navbar' className='w-full h-full flex justify-between items-center px-6'>
            <div>
                <BlogLogo />
            </div>
            <div className='flex'>
                <NavItem />
            </div>
            <div className='flex space-x-1'>
                <DesktopSearchBtn />
                <input placeholder='search' className={styles.searchBar} />
            </div>
            <div>
                {
                    session ? <SignOutBtn/> : <LoginBtn />
                }
            </div>
        </div>
    )
}