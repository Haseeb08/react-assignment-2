import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import About from "./_about";
import { BrowserRouter } from "react-router-dom";

describe("About component testing", () => {
  test("Matches the snapshot", () => {
    const input = create(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(input.toJSON()).toMatchSnapshot();
  });
});
