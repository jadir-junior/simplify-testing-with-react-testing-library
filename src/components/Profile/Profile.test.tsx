import { render, screen } from "@testing-library/react";

import { Profile } from ".";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("<Profile />", () => {
  it('Profile, given click "hide details" button, shows, "display details" button', () => {
    render(
      <Profile
        name="John Doe"
        title="Team Lead"
        details="This is my 5th year and I love helping other"
      />
    );

    const hideDetailsBtn = screen.getByRole("button", {
      name: /hide details/i,
    });
    expect(hideDetailsBtn).toBeInTheDocument();
    expect(screen.getByText(/This is my 5th/i)).toBeInTheDocument();

    userEvent.click(hideDetailsBtn);

    const displayDetailsBtn = screen.getByRole("button", {
      name: /display details/i,
    });
    expect(displayDetailsBtn).toBeInTheDocument();
    expect(screen.queryByText(/this is my 5th/i)).not.toBeInTheDocument();
  });
});
