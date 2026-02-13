// import { getNotes } from "./action"
// import Link from "next/link"
// import { Note } from "@/types/notes"

// export default async function Notespage() {
//     const notes: Note[] = await getNotes()
//     return (
//         <>
            
//             <div className="p-6 bg-white rounded-lg shadow-md">
//                 <div className="flex items-center justify-between mb-6">
//                     <h1 className="text-2xl font-bold">Notes</h1>
//                     <Link
//                         href="/notes/create"
//                         className="bg-blue-500 text-red-500 px-4 py-2 rounded hover:bg-blue-600"
//                     >
//                         + Add Note
//                     </Link>
//                 </div>

//                 {notes.length === 0 ? (
//                     <p className="text-gray-500">No notes found. Add your first note!</p>
//                 ) : (
//                     <ul className="space-y-4">
//                         {notes.map((note) => (
//                             <li
//                                 key={note.id}
//                                 className="border p-4 rounded hover:shadow transition-shadow"
//                             >
//                                 <Link href={`/notes/${note.id}`}>
//                                     <h2 className="text-lg font-semibold">{note.title}</h2>
//                                     <p className="text-gray-600 line-clamp-2">{note.content}</p>
//                                 </Link>
//                                 <div className="mt-2 text-xs text-gray-400">
//                                     Created: {new Date(note.createdAt).toLocaleString()}
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </>
//     )
// }

import { getNotes } from "./action"
import Link from "next/link"
import { Note } from "@/types/notes"
import DeleteButton from "@/component/DeleteButton"
import { Pencil } from "lucide-react"

export default async function Notespage() {
  const notes: Note[] = await getNotes()

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Notes</h1>
        <Link
          href="/notes/create"
          className="bg-blue-500 text-red-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <p className="text-gray-500">
          No notes found. Add your first note!
        </p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li
              key={note.id}
              className="border p-4 rounded hover:shadow transition-shadow"
            >
              <div className="flex justify-between items-start">

                {/* Clickable Title */}
                <Link href={`/notes/${note.id}`} className="flex-1">
                  <h2 className="text-lg font-semibold">
                    {note.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2">
                    {note.content}
                  </p>
                </Link>

                {/* Icons */}
                <div className="flex gap-3 ml-4">

                  {/* Edit */}
                  <Link
                    href={`/notes/${note.id}/edit`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Pencil size={18} />
                  </Link>

                  {/* Delete */}
                  <DeleteButton id={note.id} />

                </div>
              </div>

              <div className="mt-2 text-xs text-gray-400">
                Created:{" "}
                {new Date(note.createdAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}