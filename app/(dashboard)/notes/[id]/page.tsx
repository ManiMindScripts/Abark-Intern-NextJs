import { auth } from "@/auth";
import { getUserNote } from "@/features/notes/notes.service";
import { redirect, notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function NoteDetailPage({ params }: Props) {
  const user = await auth();
  if (!user) redirect("/login");

  const note = await getUserNote(params.id, user.id);
  if (!note) notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">{note.title}</h1>

      <div className="text-gray-600 whitespace-pre-wrap">
        {note.content}
      </div>

      <div className="mt-8 text-sm text-gray-400">
        Created at {new Date(note.createdAt).toLocaleString()}
      </div>
    </div>
  );
}