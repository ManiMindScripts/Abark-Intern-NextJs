import z from "zod";

export const contactSchema = z.object({
    name: z.string()
    .trim().min(5,"Name must be at least 5 characters"),

    email: z.string()
    .trim()
    .email("Please enter a valid email"),

    message: z.string()
    .trim()
    .min(5, "Message must be at least 5 characters")
})
export type ContactInput = z.infer<typeof contactSchema>    