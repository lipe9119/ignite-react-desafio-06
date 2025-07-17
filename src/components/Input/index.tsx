import { MagnifyingGlass } from "phosphor-react";
import { InputContainer, SearchInput } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

export default function Input({ onClick, buttonType, ...rest }: InputProps) {
  return (
    <InputContainer>
      <SearchInput {...rest} />
      <button type={buttonType} onClick={onClick}>
        <MagnifyingGlass />
      </button>
    </InputContainer>
  );
}
