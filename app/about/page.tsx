import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutStory from "../components/AboutStory";
import MissionVision from "../components/MissionVision";

export const metadata: Metadata = {
  title: "About Us | DotSquares Travel",
  description:
    "Learn about the DotSquares Travel story, our mission, vision, and travel philosophy.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutStory />
        <MissionVision />
      </main>
      <Footer />
    </>
  );
}
