import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the story heading and placeholder copy", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /how dotsquares travel began/i }),
    ).toBeInTheDocument();
  });

  it("renders the mission, vision, and philosophy heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /mission, vision & philosophy/i }),
    ).toBeInTheDocument();
  });

  it("renders all three pillar cards", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /our mission/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /our vision/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /our travel philosophy/i }),
    ).toBeInTheDocument();
  });

  it("renders placeholder imagery with descriptive alt text", () => {
    render(<AboutPage />);
    expect(
      screen.getByAltText(/placeholder image representing the dotsquares travel story/i),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/placeholder image representing our mission/i),
    ).toBeInTheDocument();
  });
});
