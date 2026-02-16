import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getUserNote, updateUserNote, deleteUserNote } from "@/features/notes/notes.service";
import { updateNoteSchema } from "@/features/notes/notes.schema";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const user = await auth(req);
  if (!user) return NextResponse.redirect(new URL("/login", req.url));
  const note = await getUserNote(params.id, user.id);
  return NextResponse.json(note);
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