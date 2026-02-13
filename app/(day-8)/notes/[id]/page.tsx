import { getNoteById } from "../action"
import EditNoteForm from "./EditNoteForm"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditNotePage({ params }: Props) {
  const { id } = await params

  const note = await getNoteById(id)

  if (!note) return notFound()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Note</h1>
      <EditNoteForm note={note} />
    </div>
  )
}