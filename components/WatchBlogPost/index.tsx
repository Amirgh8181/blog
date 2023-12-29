/* eslint-disable @next/next/no-img-element */

"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
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
const WatchBlogPost = () => {
    const [data, setData] = useState<blogPostResponse[]>()
    const getPosts = async () => {
        const result = await axios.get('http://localhost:5000/api/blog')
        setData(result.data)


        console.log(data);

    }
    return (
        <>
            <button onClick={() => getPosts()}>funccc</button>
            <div>{JSON.stringify(data)}</div>

            {data?.map(item =>
                <div key={item._id}>
                    <img src={item.image} alt='bbb' width={200} height={200} />
                </div>
            )}
        </>

    )
}

export default WatchBlogPost