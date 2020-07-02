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
import AddImageBox from "./_add-image";

describe("Add Image box testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<AddImageBox />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("onchange of url input box", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <AddImageBox setimageUrl={mockOnChange} setimageTitle={mockOnChange} />
    );
    const input = getByPlaceholderText("Enter URL");
    fireEvent.change(input, { target: { value: "ab" } });
    fireEvent.change(getByPlaceholderText("Enter title"), { target: { value: "ab" } });
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });
});
