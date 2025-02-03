import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        img: z.string(),
        url: z.string(),
        tag: z.string(),
        description: z.string(),
    })
})

export const collections = {blog};