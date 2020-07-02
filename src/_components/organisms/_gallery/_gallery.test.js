import React from "react";
import { create } from "react-test-renderer";
import {
  render,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "./_gallery";

const image = [
    {
    id: "1",
    name: "React",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWXoLhb1QGq1B52D9rNOdWzmIdy0IVkmKk9Q&usqp=CAU",
  },
  {
    id: "2",
    name: "React",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWXoLhb1QGq1B52D9rNOdWzmIdy0IVkmKk9Q&usqp=CAU",
  }
];
describe("renders gallery ", () => {
  test("Matches the snapshot", () => {
    const input = create(<Gallery allImages={image} />);
    expect(input.toJSON()).toMatchSnapshot();
  });
});