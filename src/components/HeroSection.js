import React, { useRef } from 'react';
import Arrow from './Arrow';

const HeroSection = ({ arrowSize }) => {
  const heroSectionRef = useRef(null);
  const heroSectionTopRef = useRef(null);

  return (
    <section
      ref={heroSectionRef}
      className="section hero snap-start h-screen flex flex-col justify-between items-center text-center relative"
    >
      <div
        ref={heroSectionTopRef}
        className="absolute top-0 w-full h-1"
      ></div>
      <div className="container mx-auto px-10 relative z-10 mt-20">
        <h1 className="text-9xl mb-6 animate-fade-in hero-title">Hi! 👋</h1>
        <p className="text-2xl mb-8 animate-fade-in-delay">I'm Aditya, a second year student at the University of Toronto.</p>
      </div>
      <div className="relative z-10 mb-10">
        <Arrow size={arrowSize} target="#about" />
      </div>
    </section>
  );
};

export default HeroSection;