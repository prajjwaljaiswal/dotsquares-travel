import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DestinationHero from "./DestinationHero";

describe("DestinationHero", () => {
  it("renders the destination name and tagline", () => {
    render(
      <DestinationHero
        name="Bali, Indonesia"
        tagline="Island of the Gods"
        desktopImage="/desktop.jpg"
        mobileImage="/mobile.jpg"
        imageAlt="Bali beach"
      />
    );

    expect(
      screen.getByRole("heading", { name: "Bali, Indonesia" })
    ).toBeInTheDocument();
    expect(screen.getByText("Island of the Gods")).toBeInTheDocument();
  });

  it("renders a responsive picture element with the correct image sources", () => {
    render(
      <DestinationHero
        name="Bali, Indonesia"
        tagline="Island of the Gods"
        desktopImage="/desktop.jpg"
        mobileImage="/mobile.jpg"
        imageAlt="Bali beach"
      />
    );

    const image = screen.getByAltText("Bali beach");
    expect(image).toHaveAttribute("src", "/desktop.jpg");

    const source = document.querySelector("source");
    expect(source).toHaveAttribute("srcset", "/mobile.jpg");
    expect(source).toHaveAttribute("media", "(max-width: 767px)");
  });
});
