import React from "react";
import { render, screen } from "@testing-library/react";
import MovieCard from "../MovieCard";
import { IMG_CDN_URL } from "../../utils/constants";

describe("MovieCard Component", () => {
  it("renders nothing if posterPath is null or missing", () => {
    const { container } = render(<MovieCard />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders poster image with correct src", () => {
    render(<MovieCard posterPath="poster.jpg" />);
    
    const img = screen.getByAltText("movie card");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", IMG_CDN_URL + "poster.jpg");
  });
});
