import { createMuiTheme } from "@material-ui/core";

export const light = createMuiTheme({
  name: "light",
  palette: {
    type: "light",
    primary: {
      main: "#1976d2",
      light: "rgb(71, 145, 219)",
      dark: "rgb(17, 82, 147)",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgb(220, 0, 78)",
      light: "rgb(227, 51, 113)",
      dark: "rgb(154, 0, 54)",
      contrastText: "#fff",
    },
  },
});

export const dark = createMuiTheme({
  name: "dark",
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
      light: "rgb(166, 212, 250)",
      dark: "rgb(100, 141, 174)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#f48fb1",
      light: "rgb(246, 165, 192)",
      dark: "rgb(170, 100, 123)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
});

export default { light, dark };
