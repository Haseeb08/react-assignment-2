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
import NavMenu from "./_nav-menu";
import { BrowserRouter } from "react-router-dom";

describe("Add Image box testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<BrowserRouter><NavMenu /></BrowserRouter>);
    expect(input.toJSON()).toMatchSnapshot();
  });
});
