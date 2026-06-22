import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResultsSection from './components/ResultsSection';
import SocialMediaSection from './components/SocialMediaSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import SkillsCertificationsSection from './components/SkillsCertificationsSection';
import PersonalBrandSection from './components/PersonalBrandSection';
import TestimonialsSection from './components/TestimonialsSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-warm-beige selection:bg-soft-terracotta/20 selection:text-dark-charcoal">
      {/* Editorial Floating Navigation */}
      <Navigation />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Full Viewport Hero Page */}
        <HeroSection />

        {/* Brand Ethos and About Me column layouts */}
        <AboutSection />

        {/* Results Metrics Display Panels */}
        <ResultsSection />

        {/* Sydney Lim-styled phone and browser templates */}
        <SocialMediaSection />

        {/* Sliding detail brand Case Studies */}
        <CaseStudiesSection />

        {/* Skill Clouds and Stacked credentials lifts */}
        <SkillsCertificationsSection />

        {/* Beyond Marketing Personal and inspirations board */}
        <PersonalBrandSection />

        {/* Carousel Cutout reviews */}
        <TestimonialsSection />

        {/* Premium connect endpoint section */}
        <ConnectSection />
      </main>

      {/* Footer layout */}
      <Footer />
    </div>
  );
}

