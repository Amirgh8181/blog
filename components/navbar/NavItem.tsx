"use client"
import Link from 'next/link'
import styles from './navBar.module.css'
import { usePathname } from 'next/navigation'

const NavItem = () => {
    const pathname = usePathname()


    const navItem: navItem[] = [
        { navItem: 'Home', link: "/" },
        { navItem: 'Contact-Us', link: "/ContactUs" },
        { navItem: "Blog", link: "/Blog" }
    ]

    return (
        <ul className={styles.navContainer}>
            {navItem.map(item =>
                <div key={item.navItem} className='mx-auto'>
                    <li className={`link ${pathname === item.link ? styles.activeNavItem : `group ${styles.NavItem}`}`}>
                        <Link href={item.link} className='hover:text-blue-500'>{item.navItem}</Link>
                    </li>
                </div>
            )}
        </ul>
    )
}

export default NavItem


