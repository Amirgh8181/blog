"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BlogPost = ({ params }: { params: { section: string, Post: string } }) => {
  const pathname = usePathname()

  return (
    <div className='w-full min-h-screen flex items-center justify-center md:p-8'>
      <div className='flex flex-col md:flex-row justify-center items-center bg-gray-500/70 md:p-20 p-4 md:space-x-16 md:space-y-0 space-y-8  rounded-lg'>
        <h1 className='md:text-5xl text-3xl text-white font-splinesans'>select one strategy</h1>

        <Link href={`${pathname}/uploadpost?type=${params.Post}`}>
          <div className='flex justify-center relative w-72 md:h-96 h-72 bg-blue-500 rounded-lg cursor-pointer md:hover:scale-110 hover:scale-105 transition-all duration-500'>
            <div className='absolute z-30 p-4 rounded-lg bg-black/80 bottom-8 mx-auto'>
              <h1 className='text-xl text-white'>upload post in {params.Post.toLowerCase()}</h1>
            </div>
            <Image src={'/images/upload-post.jpg'} quality={100} alt='upload' width={500} height={500} className='w-full md:h-full h-72 absolute inset-0 rounded-lg z-20' />
          </div>
        </Link>
        <Link href={`${pathname}/watchposts?type=${params.Post}`}>
          <div className='flex justify-center relative w-72 md:h-96 h-72 bg-blue-500 rounded-lg cursor-pointer md:hover:scale-110 hover:scale-105 transition-all duration-500'>
            <div className='absolute z-30 p-4 rounded-lg bg-black/80 bottom-8 mx-auto'>
              <h1 className='text-xl text-white'>see {params.Post.toLowerCase()} posts</h1>
            </div>
            <Image src={'/images/see-post.jpg'} quality={100} alt='upload' width={500} height={500} className='w-full md:h-full h-72 absolute inset-0 rounded-lg' />
          </div>
        </Link>

      </div>
    </div>
  )
}

export default BlogPost