import React from 'react';
import HeroSection from '../../components/about/HeroSection';
import StorySection from '../../components/about/StorySection';
import MissionSection from '../../components/about/MissionSection';
import ValuesSection from '../../components/about/ValuesSection';
import TeamSection from '../../components/about/TeamSection';
import CTASection from '../../components/about/CTASection';
import styles from './AboutUsPage.module.css';

function AboutUsPage(): JSX.Element {
  return (
    <main className={styles.aboutUsPage} data-testid="about-us-page">
      <HeroSection />
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}

export default AboutUsPage;
