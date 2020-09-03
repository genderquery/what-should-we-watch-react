import React from "react";
import { render, waitFor, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignInForm from "./SignInForm";

interface SetupResult extends RenderResult {
  onSignIn: jest.Mock;
}

function setup(): SetupResult {
  const onSignIn = jest.fn();
  const result = render(<SignInForm onSignIn={onSignIn} />);
  return { onSignIn, ...result };
}

test("calls onSignIn with credentials", async () => {
  const { onSignIn, getByLabelText, getByRole } = setup();

  const username = getByLabelText(/username/i);
  userEvent.type(username, "testuser");

  const password = getByLabelText(/password/i);
  userEvent.type(password, "secret");

  const button = getByRole("button", { name: /sign in/i });
  userEvent.click(button);

  await waitFor(() => expect(onSignIn).toHaveBeenCalledWith("testuser", "secret"));
});
