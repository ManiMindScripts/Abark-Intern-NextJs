"use client"

import { useActionState } from "react"
import { updateNote} from "../action"
import SubmitButton from "@/component/SubmitButton"
import { Note } from "@/types/notes"
import { UpdateFormState } from "../schema"

type Props = {
  note: Note
}

const initialState: UpdateFormState = {
  success: false,
  errors: {},
}

export default function EditNoteForm({ note }: Props) {
  const [state, formAction] = useActionState(
    updateNote,
    initialState
  )

  return (
    <form action={formAction} className="space-y-4 max-w-md">

      {/* Hidden ID */}
      <input type="hidden" name="id" value={note.id} />

      {/* Title */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Title
        </label>
        <input
          name="title"
          defaultValue={note.title}
          className={`w-full px-4 py-2 border rounded ${
            state.errors?.title
              ? "border-red-500 bg-red-50"
              : "border-gray-300"
          }`}
        />
        {state.errors?.title && (
          <p className="text-sm text-red-600 mt-1">
            {state.errors.title[0]}
          </p>
        )}
      </div>

      {/* Content */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Content
        </label>
        <textarea
          name="content"
          rows={4}
          defaultValue={note.content}
          className={`w-full px-4 py-2 border rounded ${
            state.errors?.content
              ? "border-red-500 bg-red-50"
              : "border-gray-300"
          }`}
        />
        {state.errors?.content && (
          <p className="text-sm text-red-600 mt-1">
            {state.errors.content[0]}
          </p>
        )}
      </div>

      <SubmitButton />

      {state.success && (
        <div className="p-3 bg-green-100 text-green-700 rounded text-sm">
          Note updated successfully!
        </div>
      )}
    </form>
  )
}