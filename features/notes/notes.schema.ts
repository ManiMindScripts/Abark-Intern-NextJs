import { z } from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(3, "Min 3 Character required required"),
  content: z.string().min(5, "Min 5 character is required"),
});

export const updateNoteSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});