import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DestinationDetailPage from "./DestinationDetailPage";
import { destinations } from "../../data/destinations";

const renderWithRoute = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[`/destinations/${slug}`]}>
      <Routes>
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
      </Routes>
    </MemoryRouter>
  );

describe("DestinationDetailPage", () => {
  it("renders hero and overview for a valid destination slug", () => {
    const destination = destinations[0];
    renderWithRoute(destination.slug);

    expect(screen.getByTestId("destination-hero")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: destination.name })
    ).toBeInTheDocument();
    expect(screen.getByText(destination.tagline)).toBeInTheDocument();
    expect(screen.getByTestId("destination-overview")).toBeInTheDocument();
    expect(screen.getByText(destination.overview)).toBeInTheDocument();
  });

  it("renders a not found message for an invalid slug", () => {
    renderWithRoute("non-existent-destination");
    expect(screen.getByTestId("destination-not-found")).toBeInTheDocument();
  });
});
