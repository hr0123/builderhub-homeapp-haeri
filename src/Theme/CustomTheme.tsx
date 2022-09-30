import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title36: React.CSSProperties;
    title32: React.CSSProperties;
    title28: React.CSSProperties;
    title24: React.CSSProperties;
    title20: React.CSSProperties;
    title15: React.CSSProperties;
    title12: React.CSSProperties;
    body28: React.CSSProperties;
    body24: React.CSSProperties;
    body20: React.CSSProperties;
    body12: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    title36: React.CSSProperties;
    title32: React.CSSProperties;
    title28: React.CSSProperties;
    title24: React.CSSProperties;
    title20: React.CSSProperties;
    title15: React.CSSProperties;
    title12: React.CSSProperties;
    body28: React.CSSProperties;
    body24: React.CSSProperties;
    body20: React.CSSProperties;
    body12: React.CSSProperties;
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title36: true;
    title32: true;
    title28: true;
    title24: true;
    title20: true;
    title15: true;
    title12: true;
    body28: true;
    body24: true;
    body20: true;
    body12: true;
  }
}

const customPalette = {
  background: {
    default: "#F7F6FB",
  },
  success: {
    main: "#3E3D46",
  },
  primary: {
    main: "#664AE3",
  },
  action: {
    hover: "#47339e",
  },
  secondary: {
    main: "#e2dcf7",
  },
  text: {
    primary: "#3B3748",
    secondary: "#664AE3",
  },
  info: {
    main: "#8D879B",
  },
  common: {
    white: "#FFFFFF",
  },
};

const customTypography = {
  title36: {
    fontStyle: "normal",
    fontSize: "2.25rem",
    "@media (max-width: 1024px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "1.125rem",
    },
    fontWeight: "700",
  },
  title32: {
    fontStyle: "normal",
    fontSize: "32px",
    "@media (max-width: 1024px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "1.125rem",
    },
    fontWeight: "700",
  },
  title28: {
    fontStyle: "normal",
    fontSize: "28px",
    "@media (max-width: 1024px)": {
      fontSize: "20px",
    },
    "@media (max-width: 768px)": {
      fontSize: "16px",
    },
    fontWeight: "700",
  },
  title24: {
    fontStyle: "normal",
    fontSize: "24px",
    "@media (max-width: 1024px)": {
      fontSize: "20px",
    },
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
    fontWeight: "700",
  },
  title20: {
    fontStyle: "normal",
    fontSize: "20px",
    "@media (max-width: 1024px)": {
      fontSize: "16px",
    },
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
    fontWeight: "700",
  },
  title15: {
    fontStyle: "normal",
    fontSize: "15px",
    fontWeight: "700",
  },
  title12: {
    fontStyle: "normal",
    fontSize: "12px",
    fontWeight: "700",
  },
  body28: {
    fontStyle: "normal",
    fontSize: "28px",
    "@media (max-width: 1024px)": {
      fontSize: "16px",
    },
    "@media (max-width: 768px)": {
      fontSize: "14px",
    },
    fontWeight: "400",
  },
  body24: {
    fontStyle: "normal",
    fontSize: "24px",
    "@media (max-width: 1024px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "0.75rem",
    },
    fontWeight: "400",
  },
  body20: {
    fontStyle: "normal",
    fontSize: "20px",
    "@media (max-width: 1024px)": {
      fontSize: "16px",
    },
    "@media (max-width: 768px)": {
      fontSize: "14px",
    },
    fontWeight: "400",
  },
  body12: {
    fontStyle: "normal",
    fontSize: "12px",
    "@media (max-width: 768px)": {
      fontSize: "8px",
    },
    fontWeight: "400",
  },
};

const customBreakpoints = {
  values: {
    mobile: 360,
    tablet: 768,
    laptop: 1024,
    desktop: 1200,
  },
};

const options: ThemeOptions = {
  palette: { ...customPalette },
  typography: { ...customTypography },
  breakpoints: { ...customBreakpoints },
};

export const theme = createTheme(options);
