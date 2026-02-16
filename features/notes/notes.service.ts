import * as repo from "./notes.repository";
import { CreateNoteDTO, UpdateNoteDTO } from "./notes.dto";

export const createNoteForUser = async (userId: string, data: CreateNoteDTO) => {
  return repo.createNote(userId, data);
};

export const getUserNotes = async (userId: string) => {
  return repo.getNotesByUser(userId);
};

export const getUserNote = async (noteId: string, userId: string) => {
  return repo.getNoteById(noteId, userId);
};

export const updateUserNote = async (noteId: string, userId: string, data: UpdateNoteDTO) => {
  return repo.updateNote(noteId, userId, data);
};

export const deleteUserNote = async (noteId: string, userId: string) => {
  return repo.deleteNote(noteId, userId);
};