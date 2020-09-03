import React from "react";
import { render } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

test("renders not found", () => {
  const { getByText } = render(<NotFoundPage />);
  const headerElement = getByText(/not found/i);
  expect(headerElement).toBeInTheDocument();
});
