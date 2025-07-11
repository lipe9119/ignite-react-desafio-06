import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray-800",
    color: "$gray-100",
  },

  "body, input, textarea, button": {
    fontFamily: "$default",
    fontWeight: 400,
  },
});
