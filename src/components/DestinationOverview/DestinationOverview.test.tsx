import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DestinationOverview from "./DestinationOverview";

describe("DestinationOverview", () => {
  const overview = "This is a test overview of the destination.";
  const highlights = ["Highlight one", "Highlight two", "Highlight three"];

  it("renders the overview text", () => {
    render(
      <DestinationOverview overview={overview} highlights={highlights} />
    );
    expect(screen.getByText(overview)).toBeInTheDocument();
  });

  it("renders all highlights as list items", () => {
    render(
      <DestinationOverview overview={overview} highlights={highlights} />
    );
    highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });
    expect(screen.getAllByRole("listitem")).toHaveLength(highlights.length);
  });
});
