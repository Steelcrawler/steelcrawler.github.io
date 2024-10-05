import React, { useEffect, useRef, useState } from 'react';
import Arrow from './Arrow';

const SkillsSection = ({ arrowSize }) => {
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
      id="skills"
      ref={sectionRef}
      className="section skills snap-start h-screen flex flex-col justify-center items-center text-center"
    >
      <div className="container mx-auto px-10">
        <h2 className={`text-5xl mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Skills</h2>
        <p className={`text-2xl mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          These are some of the skills I have acquired:
        </p>
        <ul className={`list-disc list-inside text-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
        <Arrow size={arrowSize} target="#contact" />
      </div>
    </section>
  );
};

export default SkillsSection;