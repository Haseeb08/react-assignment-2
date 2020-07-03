import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./_header";

jest.mock('../../molecules/_nav-menu/_nav-menu', () => ({
    __esModule: true,
    default: ()=><div>I am mocked</div>
}) );


describe("Header component testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Header />);
    expect(input.toJSON()).toMatchSnapshot();
  });

});
