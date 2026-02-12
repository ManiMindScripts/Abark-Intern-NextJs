"use server"
import { revalidatePath } from 'next/cache';
import { FormState } from "./types"
import { contactSchema, ContactInput } from "./schema"
import  {saveMessage}  from "../../../lib/message-store"



export async function submitContactForm(prevState:FormState | null,formData: FormData):Promise<FormState>{
    try {
        const name = formData.get("name")?.toString() || ""
        const email = formData.get("email")?.toString() || ""
        const message = formData.get("message")?.toString() || ""

        const input : ContactInput = {name,email,message}
        const parsed = contactSchema.safeParse(input)

        if(!parsed.success){
            const errors = parsed.error.flatten().fieldErrors
            return{
                success: false,
                errors,
                message: "Please fix the errors below",
            }
        }
        console.log("Saving message:", parsed.data)
        await saveMessage(parsed.data)
        console.log("Message saved successfully")
        revalidatePath('/(day-7)/messages')
        return {
            success: true,
            message: "Message Sent Successfully"
        }
         } catch (error) {
        console.log("Contact form submission error",error)
        return{
            success: false,
            message: "Something Went Wrong"
        }
    }
}
