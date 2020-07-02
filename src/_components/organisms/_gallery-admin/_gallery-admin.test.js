import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "./_gallery-admin";
import { jssPreset } from "@material-ui/core";

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
  },
];
describe("renders gallery ", () => {
  test("Matches the snapshot", () => {
    const input = create(<Gallery allImages={image} isAdmin={true} />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Adding image button ", () => {

    jest.mock("../../molecules/_add-image/_add-image", () => () => (
      <div />
    ));
  const mockHandleImageAdd = jest.fn();
        const { getByText ,container,asFragment} = render(<Gallery allImages={image} isAdmin={true} />);
    const button = getByText("Add image");
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
     // expect(handleImageAdd).toHaveBeenCalledTimes(0);
   // expect(input.toJSON()).toMatchSnapshot();
    // expect(container.textContent)
    // .toMatch('Add imageEnter image details AddReactEdit DeleteReactEditDelete');
  });
});
