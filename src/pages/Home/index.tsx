import { useEffect, useLayoutEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote from "./FormNote";
import Modal from "../../components/Modal";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import { Container } from "./styles";
import { AxiosError } from "axios";
import { useNotes } from "../../hooks/useNotes";

function Home() {

  const {
    isError,
    isLoading,
    isOpenModal,
    notes,
    onSubmit,
    setIsOpenModal
  } = useNotes();

  useLayoutEffect(() => {
    console.log("Antes do componente ser montado");
  });

  return (
    <>
      {isOpenModal &&
        <Modal title="Nova nota" handleClose={() => setIsOpenModal(false)}>
          <FormNote handleSubmit={onSubmit} />
        </Modal>
      }
      <Container>
        {isLoading && <h6>Loading...</h6>}
        {isError && <h6>Houve um erro na busca das notas</h6>}
        {notes.map((note) => (
          <CardNote key={note.id} note={note} />
        ))}

        <FabButton handleClick={() => setIsOpenModal(true)}>+</FabButton>
      </Container>
    </>
  );
}

export default Home;

