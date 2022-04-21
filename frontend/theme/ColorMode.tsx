import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import getDesignTokens from "./get-design-tokens";

type Props = {
  children?: React.ReactNode;
};

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light"
});

const ColorModeProvider: React.FC<Props> = (props) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode
    }),
    [mode]
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
