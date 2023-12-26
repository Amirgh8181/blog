"use client"
import React from 'react'
import AuthBtn from './entryBtn'
import UserProfile from './profile'
import { useSession } from 'next-auth/react'
const Auth = () => {
    const {data:session} = useSession()
    return (
        <>
            {session ? <UserProfile /> : <AuthBtn />}
        </>
    )
}

export default Auth;