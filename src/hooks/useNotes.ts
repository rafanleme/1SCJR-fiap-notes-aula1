import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { NotesService } from "../services/notes/note-service";
import { Note } from "../services/notes/types";


export const useNotes = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [notes, setNotes] = useState<Note[]>([]);

    const fetchData = async () => {
        try {
            const response = await NotesService.getNotes();

            setNotes(response.data);
        } catch (error) {
            const axiosError = error as AxiosError;
            axiosError.response?.data;
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();

        return () => {
            console.log("Componente desmontado")
        }
    }, []);

    const addNote = async (note: Note) => {
        setIsOpenModal(false);
        const response = await NotesService.addNotes(note);
        setNotes([...notes, response.data]);
    }

    return { notes, isLoading, isError, isOpenModal, addNote, setIsOpenModal }
}