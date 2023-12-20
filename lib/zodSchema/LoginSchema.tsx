"use client"
import { z } from 'zod'

export const LoginSchema = z.object({
    email: z
        .string()
        .email("no valid email")
        .min(1, { message: "Email Required" }),

    password: z
        .string()
        .min(8, { message: "password should 8 character" })
})

