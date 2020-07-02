import React from "react";
import { create } from "react-test-renderer";
import { render, screen, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./_input";

describe("Input field testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Input />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Input field is present", () => {
    // Using screen
    render(<Input />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
});
