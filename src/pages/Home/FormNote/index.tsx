import { ChangeEvent, FormEvent, MutableRefObject, useRef, useState } from "react";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { Form } from "./styles";

function FormNote() {
  const [formValues, setFormValues] = useState({
    text: "",
    urgent: false
  });

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, text: event.target.value })
  }

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("formulário enviado", formValues)
  }

  const handleChangeUrgent = () => {
    setFormValues({...formValues, urgent: !formValues.urgent})
  }

  return (
    <Form onSubmit={handleSubmit}>
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
