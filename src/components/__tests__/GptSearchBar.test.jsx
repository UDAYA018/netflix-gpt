import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GptSearchBar from "../GptSearchBar";
import { renderWithProviders } from "../../utils/test-utils";
import lang from "../../utils/languageConstants";

jest.mock("../../utils/openai", () => ({
  chat: { completions: { create: jest.fn() } },
}));

describe("GptSearchBar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with correct language placeholder based on Redux lang state", () => {
    renderWithProviders(<GptSearchBar />, {
      preloadedState: { config: { lang: "en" } },
    });
    
    expect(screen.getByPlaceholderText(lang.en.gptSearchPlaceholder)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: lang.en.search })).toBeInTheDocument();
  });

  it("dispatches movie results when search button is clicked", async () => {
    const user = userEvent.setup();
    const mockJsonPromise = Promise.resolve({ results: [{ id: 1, title: "Movie 1" }] });
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    const { store } = renderWithProviders(<GptSearchBar />, {
      preloadedState: { config: { lang: "en" }, gpt: {} },
    });

    const input = screen.getByPlaceholderText(lang.en.gptSearchPlaceholder);
    const searchBtn = screen.getByRole("button", { name: lang.en.search });

    await user.type(input, "funny movies");
    await user.click(searchBtn);

    // It calls fetch 5 times because movieNames is hardcoded to 5 names in the component currently 
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(5);
    });

    // Verify Redux state is updated
    expect(store.getState().gpt.movieName).toBeDefined();
    expect(store.getState().gpt.movieResults).toBeDefined();

    global.fetch.mockRestore();
  });
});
