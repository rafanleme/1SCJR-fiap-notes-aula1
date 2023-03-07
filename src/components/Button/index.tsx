import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  type?: "normal" | "text";
}

function Button({ children, handleClick, type = "normal" }: ButtonProps) {
  return <ButtonStyled styleType={type} onClick={handleClick}>{children}</ButtonStyled>;
}

export default Button;
