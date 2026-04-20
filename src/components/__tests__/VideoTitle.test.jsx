import React from "react";
import { render, screen } from "@testing-library/react";
import VideoTitle from "../VideoTitle";

describe("VideoTitle Component", () => {
  it("renders title and overview correctly", () => {
    render(<VideoTitle title="Test Movie" overview="Test movie overview description" />);

    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("Test movie overview description")).toBeInTheDocument();
  });

  it("renders Play and More Info buttons", () => {
    render(<VideoTitle title="Test" overview="Overview" />);

    expect(screen.getByRole("button", { name: /play/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /more info/i })).toBeInTheDocument();
  });
});
