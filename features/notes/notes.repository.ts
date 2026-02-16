import prisma from "@/lib/prisma";
import { CreateNoteDTO, UpdateNoteDTO } from "./notes.dto";

export const createNote = async (userId: string, data: CreateNoteDTO) => {
  return prisma.note.create({ data: { ...data, userId: parseInt(userId, 10)  } });
};

export const getNotesByUser = async (userId: string) => {
  return prisma.note.findMany({ where: { userId: parseInt(userId, 10)  },
   orderBy: { createdAt: "desc" } });
};

export const getNoteById = async (id: string, userId: string) => {
  return prisma.note.findFirst({ where: { id, userId: parseInt(userId, 10)  } });
};

export const updateNote = async (id: string, userId: string, data: UpdateNoteDTO) => {
  return prisma.note.updateMany({ where: { id, userId: parseInt(userId, 10)  }, data });
};

export const deleteNote = async (id: string, userId: string) => {
  return prisma.note.deleteMany({ where: { id, userId: parseInt(userId, 10)  } });
};