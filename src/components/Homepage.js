import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import './styles.css';

const Home = () => {
  const [arrowSize, setArrowSize] = useState(window.innerHeight / 6);
  const heroSectionRef = useRef(null);
  const [showName, setShowName] = useState(true);
  const [nameSize, setNameSize] = useState('text-4xl sm:text-6xl');

  const { scrollY } = useScroll();
  const scaleX = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 0) {
        setShowName(false);
      } else {
        setShowName(true);
      }
    });
  }, [scrollY]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setNameSize('text-2xl');
      } else {
        setNameSize('text-4xl sm:text-6xl');
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize); // Recalculate on window resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const arrowObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const newSize = window.innerHeight / 6;
          setArrowSize(newSize);
        }
      },
      { threshold: [0, 0.5, 1] }
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
      {showName && (
        <motion.div
          className="fixed top-2 right-2 p-5 text-orange-500 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.7 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <h1 className={`${nameSize}`}>Aditya Rajeev</h1>
        </motion.div>
      )}

      <HeroSection arrowSize={arrowSize} />
      <AboutSection arrowSize={arrowSize} />
      <ProjectsSection arrowSize={arrowSize} />
      <SkillsSection arrowSize={arrowSize} />
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
};

export default Home;