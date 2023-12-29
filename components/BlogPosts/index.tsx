"use client"
import {useState } from 'react'
// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'
// zod
import { zodResolver } from '@hookform/resolvers/zod';
//component and styles
import Styles from './login.module.css'
import { BlogPostSchema } from './schema/BlogPostSchema';
import { BlogPostDataType } from './schema/BlogPostDataType';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';




const BlogPostsUpload = () => {
    //hook form import 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<BlogPostDataType>({
        resolver: zodResolver(BlogPostSchema)
    })
    //state
    const [loading, setLoading] = useState<boolean>(false)
    const {data:session}=useSession()
    const searchParam=useSearchParams().get('type')
    
    //submit hadler
    const onSubmit: SubmitHandler<BlogPostDataType> = async (e) => {
        setLoading(true)
        const formData = new FormData();

        formData.append("image", e.image[0]);
        formData.append('title', e.title);
        formData.append('type', searchParam as string);
        formData.append('author', session?.user.email as string);
        formData.append('description', e.description);

        const response = await axios.post('http://localhost:5000/api/blog', formData);
        console.log(response);


        setLoading(false)
        reset()
    }


    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className='container flex items-center justify-center  rounded-lg p-8 bg-gradient-to-bl from-gray-500 to-gray-300 dark:from-gray-800 dark:to-gray-500'>


                <div className='flex flex-col justify-center items-center'>
                    <h1 className={Styles.title}>upload blog post in section</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className={Styles.inputField}>
                            <label htmlFor="title" className={Styles.label}>title</label>
                            <input type="text" placeholder='Amirgh8181' className={Styles.formInput}
                                {...register("title")}
                            />
                            {errors.title?.message && <span className='text-red-600 ml-2 mt-2 text-xs'>{errors.title.message}</span>}
                        </div>

                        <div className={Styles.inputField}>
                            <label htmlFor="description" className={Styles.label}>description</label>
                            <textarea placeholder='Amirgh8181' className={`${Styles.formInput} h-72`}
                                {...register("description")}
                            />
                            {errors.description?.message && <span className='text-red-600 ml-2 mt-2 text-xs'>{errors.description.message}</span>}
                        </div>


                        <div className={Styles.inputField}>
                            <label htmlFor="image" className={Styles.label}>image</label>
                            <input type="file" placeholder='Amirgh8181' accept='image/*' className={Styles.formInput}
                                {...register("image")}
                            />
                            {errors.image?.message && <span className='text-red-600 ml-2 mt-2 text-xs'>{errors?.image?.message.toString()}</span>}
                        </div>

                        <div className='w-full flex justify-center items-center'>
                            <button disabled={loading} type="submit" className={Styles.formBtn}>Submit</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default BlogPostsUpload;