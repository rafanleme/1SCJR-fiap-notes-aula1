import { useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote from "./FormNote";
import Modal from "../../components/Modal";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import { Container } from "./styles";

function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const notes = [
    {
      id: 1,
      text: "Minha primeira nota",
      date: new Date(),
      urgent: true
    },

    {
      id: 3,
      text: "Minha terceira nota",
      date: new Date()
    },
  ] as Note[];

  return (
    <>
      {isOpenModal &&
        <Modal title="Nova nota" handleClose={() => setIsOpenModal(false)}>
          <FormNote />
        </Modal>
      }
      <Container>
        {notes.map((note) => (
          <CardNote key={note.id} note={note} />
        ))}

        <FabButton handleClick={() => setIsOpenModal(true)}>+</FabButton>
      </Container>
    </>
  );
}

export default Home;

