import { FaTelegram } from 'react-icons/fa'
import { BsInstagram } from "react-icons/bs"
import { FaYahoo } from "react-icons/fa"

const SocialIcons = () => {
    return (
        <>
            <div className='flex flex-row justify-center space-x-4'>
                <div className='text-2xl hover:text-blue-500 cursor-pointer transition-all duration-400'><FaTelegram /></div>
                <div className='text-2xl hover:text-red-500 cursor-pointer transition-all duration-400'><BsInstagram /></div>
                <div className='text-2xl hover:text-purple-500 cursor-pointer transition-all duration-400'><FaYahoo /></div>
            </div>
        </>
    )
}

export default SocialIcons