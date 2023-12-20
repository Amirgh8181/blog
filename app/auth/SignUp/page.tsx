"use client"
import SignUpForm from '@/components/authentication/SignUpForm'
import ParallaxBg from '@/components/paralaxBg/ParallaxBg'
import React from 'react'

// eslint-disable-next-line @next/next/no-async-client-component
export default async function SignUp() {

 
  const containerClass: string = 'min-h-screen overflow-hidden grid place-items-center'
  const titleClass: string = 'flex flex-col justify-center items-center font-bold text-white dark:text-black relative font-splinesans z-20 text-7xl md:text-9xl'
  const imgClass: string = 'absolute inset-0 z-0 grayscale-[50%]'
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <ParallaxBg headerTitle='' imageSrc={'/images/loginbg.webp'} containerClass={containerClass} titleClass={titleClass} imgClass={imgClass} />
      <div className="absolute z-10">
        <SignUpForm/>
      </div>
    </div>
  )
}

