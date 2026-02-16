
import { auth } from "@/auth";
import { getUserNotes } from "@/features/notes/notes.service";
import { redirect } from "next/navigation";
import Link from "next/link";
import NotesList from "./NotesList"; 

export default async function NotesPage() {
  const user = await auth();

  if (!user) redirect("/login");

  
  const notes = await getUserNotes(user.id);

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <Link
          href="/notes/create"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          + New Note
        </Link>
      </div>
      <NotesList initialNotes={notes} />
    </div>
  );
}