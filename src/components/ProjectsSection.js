import React, { useEffect, useRef, useState } from 'react';
import Arrow from './Arrow';

const ProjectsSection = ({ arrowSize }) => {
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
      id="projects"
      ref={sectionRef}
      className="section projects snap-start h-screen flex flex-col justify-center items-center text-center"
    >
      <div className="container mx-auto px-10">
        <h2 className={`text-5xl mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Projects</h2>
        <p className={`text-2xl mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Here are some of the projects I've worked on:
        </p>
        <ul className={`list-disc list-inside text-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <li>Project 1: Description</li>
          <li>Project 2: Description</li>
          <li>Project 3: Description</li>
        </ul>
        <Arrow size={arrowSize} target="#skills" />
      </div>
    </section>
  );
};

export default ProjectsSection;