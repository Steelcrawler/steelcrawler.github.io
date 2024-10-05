import React, { useEffect, useState, useRef } from 'react';
import '../index.css'; // Correct the path to the Tailwind CSS file
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

const Home = () => {
  const [arrowSize, setArrowSize] = useState(window.innerHeight / 6); // Initial size of the arrow
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      document.body.style.backgroundPosition = `center ${scrollPercentage * 100}%`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const arrowObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const newSize = window.innerHeight / 6; // Increase size up to one-sixth of the screen height
          setArrowSize(newSize);
        }
      },
      { threshold: [0, 0.5, 1] } // Trigger at different scroll positions
    );

    if (heroSectionRef.current) {
      arrowObserver.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        arrowObserver.unobserve(heroSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <div className="fixed top-0 left-0 p-5 text-orange-500 z-50">
        <h1 className="text-4xl">Aditya Rajeev</h1>
      </div>
      
      <HeroSection arrowSize={arrowSize} />
      <AboutSection arrowSize={arrowSize} />
      <ProjectsSection arrowSize={arrowSize} />
      <SkillsSection arrowSize={arrowSize} />
      <ContactSection arrowSize={arrowSize} />
    </div>
  );
};

export default Home;