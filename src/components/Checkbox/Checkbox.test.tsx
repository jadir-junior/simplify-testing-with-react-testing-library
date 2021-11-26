import { render, screen } from "@testing-library/react";

import { Checkbox } from ".";
import React from "react";

describe("<Checkbox />", () => {
  it("Should render", () => {
    const { container } = render(<Checkbox />);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render a checkbox with label", () => {
    render(<Checkbox label="Remember me" />);

    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
  });

  it("should render a checkbox without label", () => {
    render(<Checkbox />);

    expect(screen.queryByLabelText(/remember me/i)).not.toBeInTheDocument();
  });
});
