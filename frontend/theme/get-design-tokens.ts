import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#FF385C",
            dark: "#ab003c"
          },
          secondary: {
            main: "#222222"
          },
          text: {
            primary: "#414042",
            secondary: "#ffffff",
            contrast: "#ffffff"
          },
          background: {
            default: "#ffffff",
            paper: "#e6e6e6",
            dark: "#2F3640",
            contrast: "#222222"
          }
        }
      : {
          primary: {
            main: "#32b44a",
            dark: "#008736"
          },
          secondary: {
            main: "#D1D3D4"
          },
          text: {
            primary: "#ffffff",
            secondary: "#ffffff",
            contrast: "#000"
          },
          background: {
            default: "#001e3c",
            paper: "#1a2027",
            dark: "#001326",
            contrast: "#fafafa"
          }
        })
  }
});

export default getDesignTokens;
