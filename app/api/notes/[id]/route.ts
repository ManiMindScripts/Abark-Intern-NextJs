import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getUserNotes, updateUserNote, deleteUserNote } from "@/features/notes/notes.service";
import { updateNoteSchema } from "@/features/notes/notes.schema";

export async function GET(req: NextRequest) {
  const user = await auth(req);
  if (!user) return NextResponse.redirect(new URL("/login", req.url));

  const url = req.nextUrl;
  const search = url.searchParams.get("search") || "";
  const sort = (url.searchParams.get("sort") as "asc" | "desc") || "desc";
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const pageSize = parseInt(url.searchParams.get("pageSize") || "5", 10);

  let notes = await getUserNotes(user.id);

  
  if (search) {
    notes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
    );
  }
  notes.sort((a, b) =>
    sort === "asc"
      ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const total = notes.length;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedNotes = notes.slice(start, end);

  return NextResponse.json({ notes: paginatedNotes, total });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const user = await auth(req);
  if (!user) return NextResponse.redirect(new URL("/login", req.url));

  try {
    const body = await req.json();
    const validated = updateNoteSchema.parse(body);
    const note = await updateUserNote(params.id, user.id, validated);
    return NextResponse.json(note);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const user = await auth(req);
  if (!user) return NextResponse.redirect(new URL("/login", req.url));

  await deleteUserNote(params.id, user.id);
  return NextResponse.json({ success: true });
}
