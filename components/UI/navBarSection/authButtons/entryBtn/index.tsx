import Link from 'next/link'
import styles from '../buttons.module.css'
import TextAnimation from '../../../textAnimation/TextAnimation'
import { signIn } from 'next-auth/react'
export default function AuthBtn() {

    
    return (
        <div className='flex justify-center items-center'>
            <button className={`bg-gradient-to-tr rounded-s-lg ${styles.SignUpContainer}`} onClick={() => signIn()}>
                <div className={styles.btn}>
                    <TextAnimation title={'Login'} staggerTime={0.1} />
                </div>
            </button>
            <Link href={'/auth/SignUp'} className={`bg-gradient-to-tl rounded-e-lg ${styles.SignUpContainer}`}>
                <div className={styles.btn}>
                    <TextAnimation title={'SignUp'} staggerTime={0.1} />
                </div>

            </Link>


        </div>

    )
}
