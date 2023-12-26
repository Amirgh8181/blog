"use client"
import { useState } from 'react'
import Link from 'next/link'

import { SubmitHandler, useForm } from 'react-hook-form'

// zod
import { zodResolver } from '@hookform/resolvers/zod';

//component and styles
import Styles from '../login.module.css'
//import { loginUserRequest } from '@/lib/login';
import { LoginSchema } from '@/lib/zodSchema/LoginSchema';
import { LoginDataType } from '../entrySchemaTypes';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';




const LoginForm = () => {
    //hook form initialize 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginDataType>({
        resolver: zodResolver(LoginSchema)
    })
    //state
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    //submit hadler
    const onSubmit: SubmitHandler<LoginDataType> = async (e) => {
        //next auth
        const req = await signIn('credentials', {
            email: e.email,
            password: e.password,
            redirect: false,
        })
        console.log(req);

        if (req?.ok) {
            router.push('/')
        } else {
            throw Error('invalid login data')
        }
        setLoading(false)
        reset()
    }


    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className='flex items-center rounded-lg p-8 bg-gradient-to-bl from-gray-500 to-gray-300 dark:from-gray-800 dark:to-gray-500'>


                <div className='flex flex-col justify-center items-center'>
                    <h1 className={Styles.title}>Login</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className={Styles.inputField}>
                            <label htmlFor="email" className={Styles.label}>Email</label>
                            <input type="email" placeholder='amir@yahoo.com' className={Styles.formInput}
                                {...register("email")}
                            />
                            {errors.email?.message && <span className='text-red-600 ml-2 mt-2 text-xs'>{errors.email.message}</span>}
                        </div>


                        <div className={Styles.inputField}>
                            <label htmlFor="password" className={Styles.label}>password</label>
                            <input type='password' placeholder='8 character password' className={Styles.formInput}
                                {...register("password")}
                            />
                            {errors.password?.message && <span className='text-red-600 ml-2 mt-2 text-xs'>{errors.password.message}</span>}

                        </div>


                        <div className='w-full flex justify-center items-center'>
                            <button disabled={loading} type="submit" className={Styles.formBtn}>Submit</button>
                        </div>

                    </form>


                    <div className='mt-4'>
                        <span>you dont have existing account? </span>
                        <Link href={'/entryUser/SignUp'} className='text-blue-600'>login</Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default LoginForm;