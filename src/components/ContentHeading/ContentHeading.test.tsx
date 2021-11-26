import { render, screen } from "@testing-library/react";

import { ContentHeading } from ".";
import React from "react";

describe("<ContentHeading />", () => {
  it("Should render content heading default", () => {
    const { container } = render(
      <ContentHeading data-testid="contentHeading">
        <h3>Sign In</h3>
      </ContentHeading>
    );

    expect(
      screen.getByRole("heading", { name: /sign in/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({
      padding: "16px",
      backgroundColor: "#eee",
      borderBottom: "1px solid #ddd",
    });
  });
});
