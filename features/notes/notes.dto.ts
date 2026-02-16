import { z } from "zod";
import { createNoteSchema, updateNoteSchema } from "./notes.schema";

export type CreateNoteDTO = z.infer<typeof createNoteSchema>;
export type UpdateNoteDTO = z.infer<typeof updateNoteSchema>;