import Team from '../components/Team';
import AboutStory from '../components/AboutStory';
import AboutMissionVision from '../components/AboutMissionVision';
import AboutPhilosophy from '../components/AboutPhilosophy';

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            About DotSquares Travel
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Placeholder introduction summarizing who we are, what drives us, and why travelers
            trust us to plan their journeys.
          </p>
        </div>
      </section>
      <AboutStory />
      <AboutMissionVision />
      <AboutPhilosophy />
      <Team />
    </main>
  );
}