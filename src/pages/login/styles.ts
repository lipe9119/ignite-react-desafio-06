import { styled } from "@/styles";

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FormContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export const Form = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",

  width: "24rem",
});

export const FormHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",

  h1: {
    fontSize: "$2xl",
    fontWeight: "$bold",
    color: "$gray-100",
  },
  span: {
    fontSize: "$sm",
    color: "$gray-400",
  },
});

export const FormButtons = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "$4",

  width: "100%",

  img: {
    width: "32px",
    height: "32px",
  },

  button:{
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "0 $4",
  }
});
