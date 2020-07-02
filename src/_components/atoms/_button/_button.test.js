import React from "react";
import { create } from "react-test-renderer";
import { render, screen, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./_button";

beforeEach(() => {
    render(<Button value={"abc"} />);
  });

describe("Button testing", () => {

  test("Matches the snapshot", () => {
    const input = create(<Button />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Button is present", () => {
   
    //const {getByRole} = render(<Button />);
    // const button = getByRole("button");

    // Using screen

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Button to have some value",()=>{
   // const {getByRole} = render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("abc");
  });
});
