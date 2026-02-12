import fs from "fs/promises"
import path from "path"
import { ContactMessage } from "@/app/(day-7)/contact/types"
import { ContactInput } from "@/app/(day-7)/contact/schema"
import { v4 as uuidv4 } from "uuid"

const filePath = path.join(process.cwd(), "data", "message.json")

export async function getMessages(): Promise<ContactMessage[]> {
    try {
        const data = await fs.readFile(filePath, "utf-8")
        return JSON.parse(data)
    } catch(err) {
        return []
    }
}

export async function saveMessage(input: ContactInput): Promise<void> {
    const messages = await getMessages()

    const newMessage: ContactMessage = {
        id: uuidv4(),
        name: input.name,
        email: input.email,
        message: input.message,
        createdAt: new Date().toISOString(),
    }
    messages.push(newMessage)
    await fs.writeFile(filePath,JSON.stringify(messages,null,2))
}