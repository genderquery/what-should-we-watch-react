import { createMuiTheme } from "@material-ui/core";

export const light = createMuiTheme({
  name: "light",
  palette: {
    type: "light",
  },
});

export const dark = createMuiTheme({
  name: "dark",
  palette: {
    type: "dark",
  },
});

export default {light, dark};
