"use client"

import { useFormStatus } from "react-dom"

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-500 text-red-500 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
    >
      {pending ? "Creating..." : "Create Note"}
    </button>
  )
}