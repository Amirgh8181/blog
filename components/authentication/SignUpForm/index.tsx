"use client"
import { useState } from 'react'
import Link from 'next/link'

// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'

// zod
import { zodResolver } from '@hookform/resolvers/zod';

//component and styles
import Styles from '../login.module.css'
import { SignUpSchema } from '@/lib/zodSchema/SignUpSchema';
import { SignUpDataType } from '../entrySchemaTypes';
import { signUpUser } from '@/lib/signUp';




const SignUpForm = () => {
    //hook form import 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<SignUpDataType>({
        resolver: zodResolver(SignUpSchema)
    })
    //state
    const [loading, setLoading] = useState(false)

    //submit hadler
    const onSubmit: SubmitHandler<SignUpDataType> = async (e) => {
        setLoading(true)
        const req = await signUpUser(e as SignUpDataType)
        console.log(req);
        setLoading(false)
        reset()
    }


    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className='flex items-center rounded-lg p-8 bg-gradient-to-bl from-gray-500 to-gray-300 dark:from-gray-800 dark:to-gray-500'>


                <div className='flex flex-col justify-center items-center'>
                    <h1 className={Styles.title}>SignUp</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className={Styles.inputField}>
                            <label htmlFor="name" className={Styles.label}>UserName</label>
                            <input type="text" placeholder='Amirgh8181' className={Styles.formInput}
                                {...register("name")}
                            />
                            {errors.name?.message && <span className='text-red-600 ml-2 mt-2 text-xs'>{errors.name.message}</span>}
                        </div>

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
                        <span>you have existing account? </span>
                        <Link href={'/entryUser/Login'} className='text-blue-600'>login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;