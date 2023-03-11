import {
  ChangeEvent,
  FormEvent,
  useContext,
  useState,
} from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Button from "../../../components/Button";
import { AuthContext } from "../../../context/authContext";
import { Form } from "./styles";

export interface FormValueState {
  username: string;
  password: string;
}

interface FormLoginProps {
  handleSubmit: (payload: FormValueState) => void;
}

function FormLogin({ handleSubmit }: FormLoginProps) {
  const [formValues, setFormValues] = useState<FormValueState>({
    username: "",
    password: "",
  });

  const { handleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [event.target.id]: event.target.value });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Login</h1>
      <input type="text"
        id="username"
        value={formValues.username}
        onChange={handleInput}
        autoFocus
        placeholder="Insira seu usuário"
      />
      <input type="password"
        id="password"
        value={formValues.password}
        onChange={handleInput}
        autoFocus
        placeholder="Insira sua senha"
      />

      <Button handleClick={() => handleLogin(formValues)}>Entrar</Button>
      <Link to="/register">Registrar</Link>
    </Form>
  );
}

export default FormLogin;
