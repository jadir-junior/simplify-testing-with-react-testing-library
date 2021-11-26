import { render, screen } from "@testing-library/react";

import { Input } from ".";
import React from "react";

describe("<Input />", () => {
  it("Should render", () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with a label", () => {
    render(<Input label="username" />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });

  it("should render without a label", () => {
    render(<Input />);

    expect(screen.queryByLabelText(/username/i)).not.toBeInTheDocument();
  });
});
