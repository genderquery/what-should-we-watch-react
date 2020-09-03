import React from "react";
import { render } from "@testing-library/react";
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from "@reach/router";
import App from "./App";

const withMockLocation = (Component: React.ReactElement, initialPath = "/") => {
  const source = createMemorySource(initialPath);
  const history = createHistory(source);
  return {
    ui: <LocationProvider history={history}>{Component}</LocationProvider>,
    history,
  };
};

test("render welcome page", () => {
  const { ui } = withMockLocation(<App />);
  const { getByText } = render(ui);
  expect(getByText(/what should we watch/i)).toBeInTheDocument();
});

test("render not found page", () => {
  const { ui } = withMockLocation(<App />, "whoops");
  const { getByText } = render(ui);
  expect(getByText(/not found/i)).toBeInTheDocument();
});
