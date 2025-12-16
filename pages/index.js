import React from 'react';
import Navigation from '../components/portfolio/Navigation';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ExperienceTimeline from '../components/portfolio/ExperienceTimeline';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}