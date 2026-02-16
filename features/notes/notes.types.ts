export interface Note {
  id: string;
  title: string;
  content: string;
  userId: Number;
  createdAt: Date;
  updatedAt: Date;
}
 export interface NotesResponse {
  notes: Note[];
  total: number;
}