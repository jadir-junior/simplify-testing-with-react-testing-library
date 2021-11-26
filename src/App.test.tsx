import { render, screen } from "@testing-library/react";

import App from "./App";
import React from "react";

test("renders react app", () => {
  render(<App />);
  const appElement = screen.getByTestId(/app/i);
  expect(appElement).toBeInTheDocument();
});
