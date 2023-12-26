"use client"
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";

interface getSession{
    
        user: {
          email: string,
          username: string,
          token:string
        },
        expires: string
      
}

const UserProfile = () => {
    const {data:session}=useSession()
    console.log("profile session:");
    
    
    
    return (
        <Dropdown backdrop="blur">
            <div className='flex items-center bg-gray-400 p-1 rounded-lg w-16 h-8 md:w-auto md:h-auto'>
                <Avatar name='amir' className='cursor-pointer' size="sm"/>

                <DropdownTrigger>

                    <div className='flex items-center text-sm mx-2 cursor-pointer space-x-1'>
                        <span>{session?.user?.username}</span>
                        <span><IoIosArrowDown /></span>
                    </div>

                </DropdownTrigger>
            </div>

            <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="delete" className="text-danger" color="danger" onClick={() => signOut()}>
                    LogOut
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default UserProfile;