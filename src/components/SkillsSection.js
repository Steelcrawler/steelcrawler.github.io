import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TypewriterSection = ({ lines, className }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState(Array(lines.length).fill(''));
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ line: 0, char: 0 });

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsTypingComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];
    const currentText = displayedLines[currentLineIndex];

    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        const newLines = [...displayedLines];
        newLines[currentLineIndex] = currentLine.slice(0, currentText.length + 1);
        setDisplayedLines(newLines);
        setCursorPosition({ line: currentLineIndex, char: currentText.length + 1 });
      }, 25);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCursorPosition({ line: currentLineIndex + 1, char: 0 });
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, displayedLines, lines]);

  return (
    <div className={className}>
      {displayedLines.map((line, index) => (
        <div key={index} className="relative min-h-[2em] flex items-center">
          <span>{line}</span>
          {cursorPosition.line === index && !isTypingComplete && (
            <span className="inline-block w-0.5 h-5 bg-black animate-blink ml-1"></span>
          )}
        </div>
      ))}
    </div>
  );
};

const SkillsSection = ({ arrowSize }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [titleSize, setTitleSize] = useState('text-6xl sm:text-8xl');
  const [textSize, setTextSize] = useState('text-2xl sm:text-3xl');
  const [isWideScreen, setIsWideScreen] = useState(true);

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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setTitleSize('text-4xl');
        setTextSize('text-xl');
        setIsWideScreen(false);
      } else {
        setTitleSize('text-6xl sm:text-8xl');
        setTextSize('text-2xl sm:text-3xl');
        setIsWideScreen(true);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize); // Recalculate on window resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const lines = [
    "- Python: Experience with PyTorch, Pandas, Flask, Diffusers, Qiskit, Matplotlib, Seaborn, used in a variety of projects",
    "- Java: Used Java with RESTful APIs and to develop applets",
    "- JavaScript: Experience with React and Tailwind CSS to build web applications",
    "- Linux: Experience with Linux to manage workspaces and Slurm to allocate resources",
    "- Git: Experienced with Git for version control and GitHub",
    "- SQL: Used SQL to manage and manipulate large databases",
    "- R: Used R for statistical analysis and data visualization"
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section skills snap-start h-screen flex flex-col justify-center items-center text-center bg-cyan-200"
    >
      <div className="container mx-auto px-4 sm:px-10 flex flex-col justify-center items-center h-full">
        {isVisible && (
          <>
            <motion.h2
              className={`${titleSize} mb-10`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Technical Skills
            </motion.h2>
            {isWideScreen ? (
              <TypewriterSection 
                lines={lines}
                className={`flex flex-col gap-4 text-left ${textSize}`}
              />
            ) : (
              <div className={`flex flex-col gap-4 text-left ${textSize}`}>
                {lines.map((line, index) => (
                  <div key={index} className="relative min-h-[2em] flex items-center">
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;