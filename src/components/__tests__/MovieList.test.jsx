import React from "react";
import { render, screen } from "@testing-library/react";
import MovieList from "../MovieList";

// Mock MovieCard
jest.mock("../MovieCard", () => ({ posterPath }) => (
  <div data-testid="movie-card">{posterPath}</div>
));

describe("MovieList Component", () => {
  it("renders title correctly", () => {
    render(<MovieList title="Trending Movies" movies={[]} />);
    expect(screen.getByText("Trending Movies")).toBeInTheDocument();
  });

  it("renders multiple movie cards", () => {
    const mockMovies = [
      { key: "1", poster_path: "path1.jpg" },
      { key: "2", poster_path: "path2.jpg" },
    ];
    
    render(<MovieList title="Movies" movies={mockMovies} />);
    
    const cards = screen.getAllByTestId("movie-card");
    expect(cards).toHaveLength(2);
    expect(cards[0]).toHaveTextContent("path1.jpg");
    expect(cards[1]).toHaveTextContent("path2.jpg");
  });

  it("does not crash if movies is null or undefined", () => {
    render(<MovieList title="Empty" movies={null} />);
    expect(screen.getByText("Empty")).toBeInTheDocument();
    expect(screen.queryByTestId("movie-card")).not.toBeInTheDocument();
  });
});
