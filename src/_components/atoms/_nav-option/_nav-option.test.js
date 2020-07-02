import React from "react";
import { create } from "react-test-renderer";
import { render, screen, getByRole,container, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavItem from "./_nav-option";

describe("Nav item testing", () => {
  test("Matches the snapshot", () => {
    const item = create(<NavItem />);
    expect(item.toJSON()).toMatchSnapshot();
  });

  test("Nav item  is present", () => {
    // Using screen
    const {getByTestId,container } = render(<NavItem title={"home"} />);


   //const item = screen.getByTestId("input");

    expect(getByTestId("input")).toBeInTheDocument();
    fireEvent.mouseOver(getByTestId("input"));
    expect(container.firstChild).toHaveTextContent("home");
  });
});
