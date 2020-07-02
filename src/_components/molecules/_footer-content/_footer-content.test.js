import React from "react";
import { create } from "react-test-renderer";
import {
  render,
  screen,
  getByRole,
  getByPlaceholderText,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterContent from "./_footer-content";

describe("Add Image box testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<FooterContent />);
    expect(input.toJSON()).toMatchSnapshot();
  });

});
