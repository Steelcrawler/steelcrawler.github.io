import React, { useEffect, useRef, useState } from 'react';
import Arrow from './Arrow';

const AboutSection = ({ arrowSize }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section about snap-start h-screen flex flex-col justify-center items-center text-center"
    >
      <div className="container mx-auto px-10">
        <h2 className={`text-5xl mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>About Me</h2>
        <p className={`text-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            I'm currently a research assistant at the Vector Institute and the University of Toronto. I'm currently working on healthcare in AI, particularly in relation to medical image segmentation and classification.
        </p>
        <Arrow size={arrowSize} target="#projects" />
      </div>
    </section>
  );
};

export default AboutSection;