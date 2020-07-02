import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ImageBox from "./_image-box";

const image = {
  id: "1",
  name: "React",
  url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWXoLhb1QGq1B52D9rNOdWzmIdy0IVkmKk9Q&usqp=CAU",
};
describe("renders gallery image", () => {
  test("Matches the snapshot", () => {
    const input = create(<ImageBox img={image} />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Matches the snapshot admin", () => {
    const input = create(<ImageBox img={image} isAdmin={true} />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Edit image", () => {
    const mockFn = jest.fn();

    const { getByTestId, getByRole, getByText } = render(
      <ImageBox
        img={image}
        isAdmin={true}
        handleImageEdit={mockFn}
        handleImageDelete={mockFn}
      />
    );
    const edit = getByTestId("edit-button");
    fireEvent.click(edit);
    fireEvent.change(getByRole("textbox"), { target: { value: "abc" } });
    expect(getByText("Save")).toBeInTheDocument();
    fireEvent.click(getByText("Save"));
    expect(mockFn).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText("Delete"));
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
