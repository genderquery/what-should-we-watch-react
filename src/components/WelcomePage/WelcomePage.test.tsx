import React from "react";
import { render } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("renders hello world", () => {
  const { getByText } = render(<WelcomePage />);
  const headerElement = getByText(/hello world/i);
  expect(headerElement).toBeInTheDocument();
});
