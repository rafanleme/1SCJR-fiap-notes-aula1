import { ChangeEvent, FormEvent, MutableRefObject, useRef, useState } from "react";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { Note } from "../../../services/notes/types";
import { Form } from "./styles";

interface FormNoteProps {
  handleSubmit: (note: Note) => void
}

function FormNote({ handleSubmit }: FormNoteProps) {
  const [formValues, setFormValues] = useState({
    text: "",
    urgent: false
  });

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, text: event.target.value })
  }

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChangeUrgent = () => {
    setFormValues({ ...formValues, urgent: !formValues.urgent })
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSubmit({
      id: window.crypto.randomUUID(),
      date: new Date(),
      ...formValues,
    });
  }

  return (
    <Form onSubmit={onSubmit}>
      <textarea
        autoFocus
        ref={textAreaRef}
        placeholder="Insira o texto da nota"
        value={formValues.text}
        onChange={handleChangeText}
      />
      <Checkbox
        checked={formValues.urgent}
        handleChange={handleChangeUrgent}
        label="Urgente?"
      />
      <Button handleClick={() => { }}>Salvar</Button>
    </Form>
  );
}

export default FormNote;
