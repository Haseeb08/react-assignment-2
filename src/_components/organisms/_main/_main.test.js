import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Main from "./_main";
import { MemoryRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../_home/_home";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { mount } from "enzyme";
import Gallery from "../_gallery/_gallery";
import GalleryAdmin from "../_gallery-admin/_gallery-admin";

describe("Main component testing", () => {
  test("Matches the snapshot", () => {
    const input = create(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(input.toJSON()).toMatchSnapshot();
  });
});

describe("routes using memory router", () => {
  const allImages = {
    images: [
      {
        id: "1",
        name: "React",
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWXoLhb1QGq1B52D9rNOdWzmIdy0IVkmKk9Q&usqp=CAU",
      },
      {
        id: "2",
        name: "Angular",
        url: "https://angular.io/assets/images/logos/angular/angular.png",
      },
    ],
  };

  it("should show Home component for / router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/home']}">
        <Home />
      </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  });
  it("should show Home component for /gallery router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/gallery']}">
        <Gallery allImages={allImages.images} />
      </MemoryRouter>
    );
    expect(component.find(Gallery)).toHaveLength(1);
  });
  it("should show Home component for /gallery-admin router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/gallery-admin']}">
        <GalleryAdmin allImages={allImages.images} />
      </MemoryRouter>
    );
    expect(component.find(GalleryAdmin)).toHaveLength(1);
  });
});
 