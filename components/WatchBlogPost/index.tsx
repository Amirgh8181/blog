/* eslint-disable @next/next/no-img-element */
"use client"
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
interface blogPostResponse {

    _id: string,
    title: string,
    image: string,
    author: string,
    type: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    __v: number

}

interface e {
    data: blogPostResponse[]
}


const WatchBlogPost = () => {
    const [data, setData] = useState<blogPostResponse[]>()
    const searchParam = useSearchParams().get('type')

    useEffect(() => {
        getData()
    },)

    const getData = async () => {
        try {
            const result: e = await axios('http://localhost:5000/api/blog')
            setData(result?.data?.filter(q => q.type === searchParam));
        }
        catch (e) {
            throw Error("somthing went wrong")
        }
    }
    return (
        <>

            <div className='flex flex-col items-center w-full min-h-screen bg-gray-500 pt-6'>
                {data && data?.map(item =>
                    <div key={item._id}
                        className='flex justify-start items-center md:w-[40vw] md:h-[30vh] border-b border-dashed md:p-16 md:space-x-8 space-x-4 mx-auto'>
                            <img src={item.image} alt='bbb' width={100} height={100} className='p-6 md:p-0'/>
                        <div className='flex flex-col'>
                            <div className='md:text-4xl text-2xl text-ellipsis overflow-hidden whitespace-nowrap'>
                                {item.title}
                            </div>
                            <div className='md:text-xl text-lg text-ellipsis overflow-hidden whitespace-nowrap'>
                                {item.description}
                            </div>
                            <div className='md:text-sm text-xs'>
                                {item.author}
                            </div>
                            <div className='text-xs'>
                                {item.createdAt}
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </>

    )
}

export default WatchBlogPost