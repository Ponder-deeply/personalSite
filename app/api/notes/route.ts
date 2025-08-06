import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { notes } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const allNotes = await db.select().from(notes);
    return NextResponse.json(allNotes);
  }
  catch (error) {
    return NextResponse.json({ error: "Failed to fetch your mom" }, { status: 500 })
  }
}
export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();
    await db.insert(notes).values({ title, content, completed: false })
    return NextResponse.json({ message: "Successfully added a note" });
  }
  catch (error) {
    return NextResponse.json({ error: "Failed to add your mom" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const { id, completed } = await req.json();
    await db.update(notes).set({ completed: !completed }).where(eq(notes.id, id));
    return NextResponse.json({ message: "Succesfully update note" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update your mom" }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await db.delete(notes).where(eq(notes.id, id));
    return NextResponse.json({ message: "Succesfully deleted a note" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete your mom" }, { status: 500 })
  }

}
