"use client"
import React from 'react';
import ParallaxBg from '../paralaxBg/ParallaxBg';

const Hero = () => {
    const containerClass: string = 'h-screen overflow-hidden grid place-items-center'
    const titleClass: string = 'flex flex-col justify-center items-center font-bold text-white dark:text-black relative font-splinesans z-20 text-7xl md:text-9xl'
    const imgClass: string = 'absolute inset-0 z-0 grayscale-[50%]'
    return (
        <div>
            <ParallaxBg headerTitle={'BLOG'} containerClass={containerClass} titleClass={titleClass} imgClass={imgClass} imageSrc='/images/HERO.webp' searchBar={true} />
        </div>
    );
};

export default Hero;