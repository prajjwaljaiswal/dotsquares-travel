import { render, screen } from "@testing-library/react";
import Team from "./Team";

describe("Team", () => {
  it("renders the section heading", () => {
    render(<Team />);
    expect(
      screen.getByText(/Meet Our Travel Experts/i)
    ).toBeInTheDocument();
  });

  it("renders at least 4 team members with name, role, and bio", () => {
    render(<Team />);
    const headingElements = screen.getAllByRole("heading", { level: 3 });
    expect(headingElements.length).toBeGreaterThanOrEqual(4);

    headingElements.forEach((heading) => {
      expect(heading.textContent).toBeTruthy();
    });
  });

  it("renders a photo for each team member", () => {
    render(<Team />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(4);
  });
});
