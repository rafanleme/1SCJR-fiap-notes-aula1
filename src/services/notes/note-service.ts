import { api } from "../api";
import { Note } from "./types";

export const NotesService = {
  getNotes: () => api.get<Note[]>('/notes'),
  addNotes: (note: Note) => api.post<any, any, Note>('/notes', note)
}