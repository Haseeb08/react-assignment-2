import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Home from "./_home";

describe("Home component testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Home />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  });
