import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import themes from "../src/themes";

const withMaterialUi = (Story, context) => {
  const theme = themes[context.globals.theme];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: Object.getOwnPropertyNames(themes),
    },
  },
};

export const decorators = [withMaterialUi];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
