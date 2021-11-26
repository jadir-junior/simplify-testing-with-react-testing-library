import { render, screen, waitFor } from "@testing-library/react";

import { Login } from ".";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("<Login />", () => {
  it.skip("Login, given credentials, returns enabled submit button", async () => {
    render(<Login />);

    const username = screen.getByRole("textbox", { name: /username/i });
    const password = screen.getByLabelText(/password/i);
    const rememberMe = screen.getByRole("checkbox");
    const loginBtn = screen.getByRole("button", { name: /submit/i });

    const fakeData = {
      username: "test user",
      password: "123password",
    };

    userEvent.type(username, fakeData.username);
    userEvent.type(password, fakeData.password);
    userEvent.click(rememberMe);

    expect(loginBtn).not.toBeDisabled();

    await waitFor(() => {
      expect(screen.getByTestId("form")).toHaveFormValues({
        username: fakeData.username,
        password: fakeData.password,
        rememberMe: true,
      });
    });
  });
});
