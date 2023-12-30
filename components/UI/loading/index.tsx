import React from 'react'
import Image from 'next/image'
const LoadingSvg = () => {
    return (
        <div>
            <Image src={'/images/loading.svg'} alt='loading' width={200} height={200} />
        </div>
    )
}

export default LoadingSvg;