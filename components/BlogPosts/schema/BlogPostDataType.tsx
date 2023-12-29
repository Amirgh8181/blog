"use client"
import { z } from 'zod'
import {BlogPostSchema} from './BlogPostSchema'
export type BlogPostDataType = z.infer<typeof BlogPostSchema>
