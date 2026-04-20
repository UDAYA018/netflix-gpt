import React from "react";
import { render, screen } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

// Mock child components to isolate Body's testing
jest.mock("../Login", () => () => <div data-testid="login-component">Login Mock</div>);
jest.mock("../Browse", () => () => <div data-testid="browse-component">Browse Mock</div>);

describe("Body Component", () => {
  it("renders Login component by default on '/' path", () => {
    // Body sets up its own RouterProvider, so we only need Redux
    render(
      <Provider store={appStore}>
        <Body />
      </Provider>
    );

    // Initial route is usually '/' so Login should be rendered
    expect(screen.getByTestId("login-component")).toBeInTheDocument();
  });
});
