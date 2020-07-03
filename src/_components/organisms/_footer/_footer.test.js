import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./_footer";

describe("Footer component testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Footer />);
    expect(input.toJSON()).toMatchSnapshot();
  });
});
