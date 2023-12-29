"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BlogPost = ({ params }: { params: { section: string, Post: string } }) => {
  const pathname = usePathname()

  return (
    <div className='w-full min-h-screen flex items-center justify-center p-8'>
      <div className='flex justify-center items-center bg-gray-500/50 p-20 space-x-16 rounded-lg'>
        <h1 className='text-5xl text-white font-splinesans'>select one strategy</h1>

        <Link href={`${pathname}/uploadpost?type=${params.Post}`}>
          <div className='relative w-72 h-96 bg-blue-500 rounded-lg cursor-pointer hover:scale-110 transition-all duration-500'>
            <h1 className='text-2xl text-white font-splinesans absolute z-30 bottom-8 left-4'>upload post in {params.Post.toLowerCase()}</h1>
            <Image src={'/images/about-us-content.webp'} alt='upload' width={300} height={300} className='w-full h-full absolute inset-0 rounded-lg z-20' />
          </div>
        </Link>
        <Link href={`${pathname}/watchposts?type=${params.Post}`}>

          <div className='relative w-72 h-96 bg-blue-500 rounded-lg cursor-pointer hover:scale-110 transition-all duration-500'>
            <h1 className='text-2xl text-white absolute z-30 bottom-8 left-4'>see {params.Post.toLowerCase()} posts</h1>
            <Image src={'/images/about-us-content.webp'} alt='upload' width={300} height={300} className='w-full h-full absolute inset-0 rounded-lg' />
          </div>
        </Link>

      </div>
    </div>
  )
}

export default BlogPost