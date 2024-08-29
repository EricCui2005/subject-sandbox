import { extendTheme, useColorMode } from "@chakra-ui/react";
import { colors, darkColors, lightColors } from "./colors";

function globals(theme: Record<string, unknown>) {
  return {
    "html, body": {
      color: "$text-01",
      backgroundColor: `$bg-01`,
      fontFamily: "body",
      fontWeight: "normal",
      letterSpacing: "normal",
    },
    h1: theme["$header-01"],
    h2: theme["$header-02"],
    h3: theme["$header-03"],
    h4: theme["$title-03"],
    h5: theme["$title-02"],
    h6: theme["$title-01"],
    small: theme["$body-01"],
    label: theme["$label=-01"],
    ul: {
      marginLeft: "4",
    },
    ol: {
      marginLeft: "4",
    },
    "#chakra-toast-manager-bottom-right": {
      margin: 3,
    },
    a: {
      color: "$primary-text",
      textDecoration: "underline",
    },
    "a:hover": {
      color: "$hover-primary-text",
    },
    "input:-internal-autofill-selected, input:-webkit-autofill:focus": {
      transition: "color 600000s 0s",
      borderColor: "rgb(232, 240, 254)",
      WebkitBoxShadow: "0 0 0px 1000px rgb(232, 240, 254) inset",
    },
  };
}

/**
 * Text styles corresponding to html semantic text tags, i.e. h1, h2, p, etc...
 */
const textStyles = {
  "$header-01": {
    fontSize: ["6xl", null, null, "7xl"],
    fontWeight: "semibold",
    lineHeight: ["7", null, null, "9"],
  },
  "$header-02": {
    fontSize: ["6xl", null, null, "7xl"],
    fontWeight: "semibold",
    lineHeight: "9",
  },
  "$header-03": {
    fontWeight: "bold",
    fontSize: "5xl",
  },
  "$title-03": {
    fontWeight: "semibold",
    fontSize: "4xl",
  },
  "$title-02": {
    fontWeight: "semibold",
    fontSize: "3xl",
  },
  "$title-01": {
    fontWeight: "semibold",
    fontSize: "2xl",
  },
  "$title-00": {
    fontWeight: "semibold",
    fontSize: "lg",
  },
  "$body-02": {
    fontSize: "lg",
  },
  "$body-01": {
    fontSize: "md",
  },
  "$label-01": {
    fontSize: "sm",
    fontWeight: "normal",
  },
  "$caption-02": {
    fontSize: "sm",
    letterSpacing: "wide",
    color: "$text-02",
    textTransform: "uppercase",
  },
  "$caption-01": {
    fontSize: "xs",
    letterSpacing: "wide",
    color: "$text-02",
    textTransform: "uppercase",
  },
  "$helper-01": {
    fontSize: "sm",
    letterSpacing: "normal",
    color: "$text-01",
  },
};

export const subjectTextStyles = {
  "$header-01": {
    fontSize: ["6xl", null, null, "8xl"],
    fontFamily: "heading",
    fontWeight: "book",
    lineHeight: [10, null, null, 12],
  },
  "$header-02": {
    fontSize: ["5xl", null, null, "6xl"],
    fontFamily: "heading",
    fontWeight: "book",
    lineHeight: [9, null, null, 10],
  },
  "$header-03": {
    fontSize: ["3xl", null, null, "5xl"],
    fontFamily: "heading",
    fontWeight: "book",
    lineHeight: [8, null, null, 9],
  },
  "$title-03": {
    fontWeight: "medium",
    fontFamily: "medium",
    fontSize: ["2xl", null, null, "3xl"],
    lineHeight: [6, null, null, 7],
  },
  "$title-02": {
    fontWeight: "medium",
    fontFamily: "medium",
    fontSize: ["lg", null, null, "2xl"],
    lineHeight: [5, null, null, 6],
  },
  "$title-01": {
    fontWeight: "medium",
    fontFamily: "medium",
    fontSize: ["md", null, null, "lg"],
    lineHeight: [4, null, null, 5],
  },
  "$title-00": {
    fontWeight: "medium",
    fontFamily: "medium",
    fontSize: "md",
    lineHeight: 4,
  },
  "$body-02": {
    fontWeight: "normal",
    fontSize: "lg",
    lineHeight: 6,
  },
  "$body-01": {
    fontWeight: "normal",
    fontSize: "md",
    lineHeight: 5,
  },
  "$label-01": {
    fontWeight: "normal",
    fontSize: "sm",
    lineHeight: 4,
  },
  "$caption-02": {
    fontSize: "sm",
    fontWeight: "semibold",
    letterSpacing: "wide",
    lineHeight: 4,
    color: "$text-02",
    textTransform: "uppercase",
  },
  "$caption-01": {
    fontSize: "xs",
    fontWeight: "semibold",
    letterSpacing: "wide",
    lineHeight: 3,
    color: "$text-02",
    textTransform: "uppercase",
  },
  "$helper-01": {
    fontWeight: "regular",
    fontSize: "sm",
    lineHeight: 4,
  },
};

const sizes = {
  "$icon-xs": "12px",
  "$icon-sm": "16px",
  "$icon-md": "24px",
  "$icon-lg": "32px",
  "$icon-xl": "48px",
  "$icon-2xl": "64px",
};

const space = {
  px: "1px",
  1: "4px",
  2: "8px",
  3: "16px",
  4: "24px",
  5: "32px",
  6: "40px",
  7: "56px",
  8: "64px",
  9: "80px",
  10: "120px",
  11: "160px",
  12: "200px",
  13: "240px",
  14: "280px",
};

const overrides = {
  initialColorMode: "dark",
  fonts: {
    body: "Suisse Intl, sans-serif",
    medium: "Suisse Intl, sans-serif",
    heading: "Suisse Intl Book, sans-serif",
    mono: "Avenir Next, monospace",
  },
  fontSizes: {
    xs: "0.625rem", // 10px
    sm: "0.75rem", // 12px
    md: "0.875rem", // 14px
    lg: "1rem", // 16px
    xl: "1.125rem", // 18px
    "2xl": "1.25rem", // 20px
    "3xl": "1.5rem", // 24px
    "4xl": "1.75rem", // 28px
    "5xl": "2rem", // 32px
    "6xl": "2.5rem", // 40px
    "7xl": "3rem", // 48px
    "8xl": "4rem", // 64px
  },
  fontWeights: {
    normal: 400,
    book: 500,
    medium: 600,
    semibold: 700,
  },
  letterSpacings: {
    normal: "0",
    wide: "0.12em",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1,
    short: 1.25,
    base: 1.5,
    tall: 1.75,
    taller: 2.5,
    "2": "0.625rem", // 10px
    "3": "0.75rem", // 12px
    "4": "1rem", // 16px
    "5": "1.25rem", // 20px
    "6": "1.5rem", // 24px
    "7": "1.75rem", // 28px
    "8": "2.5rem", // 32px
    "9": "2.5rem", // 40px
    "10": "3rem", // 48px
    "11": "3.5rem", // 56px
    "12": "4.75rem", // 76px
  },
  radii: {
    none: "0",
    sm: "3px",
    md: "5px",
    lg: "8px",
    xl: "16px",
  },
  shadows: {
    near: `0 ${space["1"]} ${space["2"]} rgba(17, 18, 19, 0.2), 0 ${space["2"]} ${space["3"]} rgba(17, 18, 19, 0.2)`,
  },
  breakpoints: {
    xs: "320px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1360px",
    "2xl": "1536px",
  },
  colors: darkColors,
  space,
  sizes,
  textStyles: subjectTextStyles,
  useSystemColorMode: false,
  styles: {
    global: globals(subjectTextStyles),
  },
  config: {
    initialColorMode: "dark",
  },
  name: "subject",
};

export const darkTheme = extendTheme({
  ...overrides,
});

export const lightTheme = extendTheme({
  ...overrides,
  colors: lightColors,
  initialColorMode: "light",
});

export const multiTheme = extendTheme({
  ...overrides,
  semanticTokens: {
    colors,
  },
});

export const useTheme = (): Record<string, any> => {
  const { colorMode } = useColorMode();
  return {
    ...multiTheme,
    colors: colorMode === "dark" ? darkColors : lightColors,
    mode: colorMode,
  };
};

export const theme = extendTheme(overrides);

export default theme;
