import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "./_contact";
import ContactForm from "../_contact-form/_contact-form";
import Title from "../../atoms/_title/_title";

jest.mock("../_contact-form/_contact-form", () => ({
    __esModule: true,
    default: ()=><div>I am mocked</div>
}) );

describe("Contact component testing", () => {
    

  test("renders", () => {
    const { container } = render(<Contact />);
    expect(container.textContent).toMatch("I am mocked");
  });

  test("Matches the snapshot", () => {
    const input = create(<Contact />);
    expect(input.toJSON()).toMatchSnapshot();
  });
});
