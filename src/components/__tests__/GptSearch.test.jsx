import React from "react";
import { screen } from "@testing-library/react";
import GptSearch from "../GptSearch";
import { renderWithProviders } from "../../utils/test-utils";

jest.mock("../GptSearchBar", () => () => <div data-testid="gpt-search-bar">SearchBar</div>);
jest.mock("../GptMovieSuggestions", () => () => <div data-testid="gpt-movie-suggestions">Suggestions</div>);

describe("GptSearch Component", () => {
  it("renders the background image, search bar, and suggestions", () => {
    renderWithProviders(<GptSearch />);

    const bgImage = screen.getByAltText("login-background");
    expect(bgImage).toBeInTheDocument();
    expect(screen.getByTestId("gpt-search-bar")).toBeInTheDocument();
    expect(screen.getByTestId("gpt-movie-suggestions")).toBeInTheDocument();
  });
});
