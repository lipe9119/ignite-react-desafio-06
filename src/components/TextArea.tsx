import { styled } from "@stitches/react";
import { useState } from "react";

const Container = styled("div", {
  position: "relative",
  backgroundColor: "$gray-800",
  border: "1px solid $gray-500",
  borderRadius: "$md",
  padding: "$4",
  width: "100%",
  boxSizing: "border-box",
});

const TextAreaInput = styled("textarea", {
  width: "100%",
  height: 150,
  resize: "none",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  color: "$gray-200",
  fontSize: "$sm",
  lineHeight: "$base",
  fontFamily: "inherit",

  "&::placeholder": {
    color: "$gray-400",
  },
});

const CharCount = styled("span", {
  position: "absolute",
  bottom: 8,
  right: 12,
  fontSize: 12,
  color: "$gray-400",
});

interface TextAreaProps extends React.ComponentProps<typeof TextAreaInput> {
  maxLength?: number;
}

export default function TextArea({ maxLength = 450 }: TextAreaProps) {
  const [text, setText] = useState("");

  return (
    <Container>
      <TextAreaInput
        maxLength={maxLength}
        placeholder="Escreva sua avaliação"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <CharCount>
        {text.length}/{maxLength}
      </CharCount>
    </Container>
  );
}
