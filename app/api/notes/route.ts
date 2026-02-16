import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { createNoteForUser, getUserNotes } from "@/features/notes/notes.service";
import { createNoteSchema } from "@/features/notes/notes.schema";

export async function GET(req: NextRequest) {
  const user = await auth(req);
  if (!user) return NextResponse.redirect(new URL("/login", req.url));

  const notes = await getUserNotes(user.id);
  return NextResponse.json(notes);
}

export async function POST(req: NextRequest) {
  const user = await auth(req);
  if (!user) return NextResponse.redirect(new URL("/login", req.url));

  try {
    const body = await req.json();
    const validated = createNoteSchema.parse(body);
    const note = await createNoteForUser(user.id, validated);
    return NextResponse.json(note);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}