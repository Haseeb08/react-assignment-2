import React from "react";
import { create } from "react-test-renderer";
import { render, screen, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Title from "./_title";

describe("Title testing", () => {
  test("Matches the snapshot", () => {
    const title = create(<Title />);
    expect(title.toJSON()).toMatchSnapshot();
  });

  test("Titleis present", () => {
    // Using screen
    render(<Title />);
    const title = screen.getByText("test title")

    expect(title).toBeInTheDocument();
  });
});
