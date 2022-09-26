import { createTheme } from "@mui/material";

const bgPalette = {
  primary: "#664AE3",
  secondary: "#F7F6FB",
  dark: "#3E3D46",
};

const fontPalette = {
  white: "#FFFFFF",
  primary: "#664AE3",
  seondary: "#3B3748",
};

const customTypography = {
  title36: {
    fontStyle: "normal",
    fontSize: "36px",
    fontWeight: "700",
  },
  title32: {
    fontStyle: "normal",
    fontSize: "32px",
    fontWeight: "700",
  },
  title28: {
    fontStyle: "normal",
    fontSize: "28px",
    fontWeight: "700",
  },
  title24: {
    fontStyle: "normal",
    fontSize: "24px",
    fontWeight: "700",
  },
  title20: {
    fontStyle: "normal",
    fontSize: "20px",
    fontWeight: "700",
  },
  title15: {
    fontStyle: "normal",
    fontSize: "15px",
    fontWeight: "700",
  },
  body28: {
    fontStyle: "normal",
    fontSize: "28px",
    fontWeight: "400",
  },
  body24: {
    fontStyle: "normal",
    fontSize: "24px",
    fontWeight: "400",
  },
  body20: {
    fontStyle: "normal",
    fontSize: "20px",
    fontWeight: "400",
  },
  body12: {
    fontStyle: "normal",
    fontSize: "12px",
    fontWeight: "400",
  },
};

export const customTheme = createTheme({
  bgPalette: { ...bgPalette },
  fontPalette: { ...fontPalette },
  typography: { ...customTypography },
});

// export const theme = {
//   colors: {
//     background: {
//       layout: "#664AE3",
//       main: "#FAFAFC",
//       dark: "#47339e",
//     },
//     font: {
//       primary: "#664AE3",
//       seondary: "#3B3748",
//       white: "#FFFFFF",
//     },
//   },
//   customTypography: {
//     title36: {
//       fontStyle: "normal",
//       fontSize: "36px",
//       fontWeight: "700",
//     },
//     title32: {
//       fontStyle: "normal",
//       fontSize: "32px",
//       fontWeight: "700",
//     },
//     title28: {
//       fontStyle: "normal",
//       fontSize: "28px",
//       fontWeight: "700",
//     },
//     title24: {
//       fontStyle: "normal",
//       fontSize: "24px",
//       fontWeight: "700",
//     },
//     title20: {
//       fontStyle: "normal",
//       fontSize: "20px",
//       fontWeight: "700",
//     },
//     title15: {
//       fontStyle: "normal",
//       fontSize: "15px",
//       fontWeight: "700",
//     },
//     body28: {
//       fontStyle: "normal",
//       fontSize: "28px",
//       fontWeight: "400",
//     },
//     body24: {
//       fontStyle: "normal",
//       fontSize: "24px",
//       fontWeight: "400",
//     },
//     body20: {
//       fontStyle: "normal",
//       fontSize: "20px",
//       fontWeight: "400",
//     },
//     body12: {
//       fontStyle: "normal",
//       fontSize: "12px",
//       fontWeight: "400",
//     },
//   },
// };
