"use client"
import { z } from 'zod'
import { SignUpSchema } from '@/lib/zodSchema/SignUpSchema'
import { LoginSchema } from '@/lib/zodSchema/LoginSchema'

export type SignUpDataType = z.infer<typeof SignUpSchema>
export type LoginDataType = z.infer<typeof LoginSchema>