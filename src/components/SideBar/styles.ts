import { styled } from "@/styles";

export const SideBarContainer = styled("aside", {
  gridTemplateRows: "auto 1fr auto",

  width: "14.5rem",
  borderRadius: 12,
  margin: "$5",
  padding: "$10",

  background: "$gray-700",

  variants: {
    show: {
      true: {
        display: "grid",
      },
      false: {
        display: "none",
      },
    },
  },

  defaultVariants: {
    show: true,
  },
});

export const SideBarHeader = styled("div", {});

export const SideBarBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",

  margin: "$10 0",
});

export const SideBarItem = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: "$3",
  width: "100%",

  cursor: "pointer",
  color: "$gray-400",

  padding: "$3 $5",

  "&:hover": {
    color: "$gray-100",
  },

  span: {
    fontSize: "$sm",
    fontWeight: "$regular",
  },

  variants: {
    active: {
      true: {
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          borderRadius: "999px",
          background: "$gradient-vertical",
        },
        color: "$gray-100",
      },
      false: {},
    },
  },

  defaultVariants: {
    active: false,
  },
});

export const SideBarFooter = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  button: {
    all: "unset",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "$5",

    width: "100%",
  },

  variants: {
    isLoged: {
      true: {
        fontSize: "$md",

        svg: {
          color: "red",
        },
      },
      false: {
        fontSize: "$lg",
        fontWeight: "$bold",
        svg: {
          color: "$green-100",
        },
      },
    },
  },
});
