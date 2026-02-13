"use server"

import prisma from "@/lib/prisma"
import { noteSchema, NoteInput, UpdateFormState } from "./schema"
import { revalidatePath } from "next/cache"



//createNote(data) → Server action to create a note
export async function createNote(
    prevState: any,
    formData: FormData
) {
    const data = {
        title: formData.get("title"),
        content: formData.get("content"),
    }

    const parsed = noteSchema.safeParse(data)

    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten().fieldErrors,
        }
    }

    await prisma.note.create({
        data: parsed.data,
    })

    revalidatePath("/notes")

    return {
        success: true,
        errors: {},
    }
}
// getNotes() → Fetch all notes for /notes page
export async function getNotes() {
    return prisma.note.findMany({
        orderBy: { createdAt: "desc" },
    })
}
// getNotes() → Fetch all notes for /notes page
export async function getNoteById(id: string) {
    return prisma.note.findUnique({
        where: { id },
    })
}
// updateNote(id, data) → Update a note
export async function updateNote(
    prevState: UpdateFormState,
    formData: FormData
): Promise<UpdateFormState> {

    const id = formData.get("id") as string

    const data = {
        title: formData.get("title"),
        content: formData.get("content"),
    }

    const parsed = noteSchema.safeParse(data)

    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten().fieldErrors,
        }
    }
    await prisma.note.update({
        where: { id },
        data: parsed.data,
    })

    revalidatePath("/notes")
    revalidatePath(`/notes/${id}`)

    return {
        success: true,
        errors: {},
    }
}
// deleteNote(id) → Delete a note
export async function deleteNote(
  prevState: { success: boolean },
  formData: FormData
) {
  const id = formData.get("id") as string

  await prisma.note.delete({
    where: { id },
  })

  revalidatePath("/notes")

  return { success: true }
}