"use client"

import { useActionState } from "react"
import { deleteNote } from "@/app/(day-8)/notes/action"
import { useFormStatus } from "react-dom"
import { Trash2 } from "lucide-react"

const initialState = { success: false }

function SubmitDelete() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="text-red-500 hover:text-red-700"
    >
      <Trash2 size={18} />
    </button>
  )
}

export default function DeleteButton({ id }: { id: string }) {
  const [, formAction] = useActionState(deleteNote, initialState)

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (!confirm("Are you sure you want to delete this note?")) {
          e.preventDefault()
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <SubmitDelete />
    </form>
  )
}