import { MagnifyingGlass } from "phosphor-react";
import { InputContainer, SearchInput } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: InputProps) {
  return (
    <InputContainer>
      <SearchInput {...rest} />
      <MagnifyingGlass />
    </InputContainer>
  );
}
