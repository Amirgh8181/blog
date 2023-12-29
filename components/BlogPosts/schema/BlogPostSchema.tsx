import { z } from 'zod'

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const BlogPostSchema = z.object({
    title: z
        .string()
        .min(1, { message: 'Name Required' }),

    description: z
        .string()
        .min(1, { message: "Email Required" }),

        image: z
        .any()
        .refine((files) => files?.length == 1, "Image is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
          (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
          "Only .jpg, .jpeg, .png and .webp formats are supported."
        )
})

