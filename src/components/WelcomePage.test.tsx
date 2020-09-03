import React from "react";
import { render } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("renders hello world", () => {
  const { getByText } = render(<WelcomePage />);
  const headerElement = getByText(/what should we watch/i);
  expect(headerElement).toBeInTheDocument();
});
