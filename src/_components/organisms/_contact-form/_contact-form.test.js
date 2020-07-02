import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "./_contact-form";

describe("About component testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<ContactForm />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("error msgs for empty inputs", () => {
    const { getByRole ,getByTestId} = render(<ContactForm />);

    fireEvent.click(getByRole("button"));
    expect(getByTestId("emailError")).toBeInTheDocument();
  });

  test("error msgs for inavlid inputs", () => {
    const { getByPlaceholderText, getByRole ,getByTestId} = render(<ContactForm />);
    fireEvent.change(getByPlaceholderText("Enter name"), {
        target: { value: "123" },
      });
      fireEvent.change(getByPlaceholderText("email"), {
        target: { value: "ab" },
      });
      fireEvent.change(getByPlaceholderText("phone number"), {
        target: { value: "1234" },
      });
    fireEvent.click(getByRole("button"));
    expect(getByTestId("emailError")).toBeInTheDocument(); 
 });

 test("valid inputs", () => {
    const { getByPlaceholderText, getByRole ,getByTestId} = render(<ContactForm />);
    fireEvent.change(getByPlaceholderText("Enter name"), {
        target: { value: "Abc" },
      });
      fireEvent.change(getByPlaceholderText("email"), {
        target: { value: "ab@gmail.com" },
      });
      fireEvent.change(getByPlaceholderText("phone number"), {
        target: { value: "1234567890" },
      });
      fireEvent.change(getByPlaceholderText("Subject"), {
        target: { value: "abcd" },
      });
    fireEvent.click(getByRole("button"));
    expect(getByTestId("emailError").value).toBeUndefined(); 
 });

});
