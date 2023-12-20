import React from 'react'
import styles from '../buttons.module.css'
import { signOut } from 'next-auth/react'
import TextAnimation from '@/components/UI/textAnimation/TextAnimation'
const SignOutBtn = () => {
    return (
        <button className={styles.SignOutContainer} onClick={() => signOut()}>
            <div className={styles.btn}>
                <TextAnimation title={'SignOut'} staggerTime={0.1} />
            </div>
        </button>
    )
}

export default SignOutBtn