import { auth } from "@/auth";
import { getUserNotes } from "@/features/notes/notes.service";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function NotesPage() {
  const user = await auth();

  if (!user) {
    redirect("/login");
  }

  const notes = await getUserNotes(user.id);

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <Link
          href="/notes/new"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          + New Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <div className="text-gray-500 text-center py-20">
          No notes yet. Create your first note.
        </div>
      ) : (
        <div className="grid gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {note.title}
              </h2>

              <p className="text-gray-600 line-clamp-3">
                {note.content}
              </p>

              <div className="mt-4 flex justify-between text-sm text-gray-400">
                <span>
                  {new Date(note.createdAt).toLocaleDateString()}
                </span>

                <Link
                  href={`/notes/${note.id}`}
                  className="text-black font-medium"
                >
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}