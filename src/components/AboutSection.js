import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Arrow from './Arrow';

const AboutSection = ({ arrowSize }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showInterests, setShowInterests] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
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
        setIsWideScreen(false);
      } else {
        setIsWideScreen(true);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize); // Recalculate on window resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleInterests = () => {
    setShowInterests(!showInterests);
  };

  const handleF1CarAnimationStart = () => {
    setShowArrow(false);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section about snap-start h-screen flex flex-col justify-center items-center text-center bg-cyan-200"
    >
      <div className="container mx-auto px-4 sm:px-10">
        <motion.h2
          className={`text-4xl sm:text-5xl mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className={`text-xl sm:text-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm currently a research assistant at the{' '}
          <a href="https://vectorinstitute.ai/vector-co-founder-geoffrey-hinton-wins-the-nobel-prize-in-physics-2024/" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">
            Vector Institute
          </a>{' '}
          and the{' '}
          <a href="https://www.uhn.ca/" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">
            University Health Network
          </a>. I'm pursuing a degree in Computer Science, with a focus in AI and Computer Systems. I'm passionate about using technology to solve real-world problems, and I'm always looking for opportunities to expand my technical knowledge.
        </motion.p>
        {isWideScreen && (
          <motion.button
            onClick={toggleInterests}
            className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Personal Interests
          </motion.button>
        )}
        {showInterests && isWideScreen && (
          <div className="mt-10">
            <motion.h3
              className="text-3xl mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Some of my personal interests include:
            </motion.h3>
            <div className="flex flex-wrap justify-around w-full">
              <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                <motion.span
                  className="text-8xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  🏋️‍♂️
                </motion.span>
                <motion.p
                  className="text-xl mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Lifting
                </motion.p>
                <motion.p
                  className="text-lg mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  You can find me at the gym 6 days a week or watching <a href="https://www.youtube.com/@JeffNippard" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">Jeff Nippard</a> and <a href="https://www.youtube.com/channel/UCfQgsKhHjSyRLOp9mnffqVg" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">Renaissance Periodization</a>.
                </motion.p>
              </div>
              <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                <motion.span
                  className="text-8xl"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={isVisible ? { opacity: 1, scale: 1, rotate: [0, -10, 10, -10, 10, -10, 0] } : { opacity: 0, scale: 0.5, rotate: -45 }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                >
                  🎮
                </motion.span>
                <motion.p
                  className="text-xl mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  Video games
                </motion.p>
                <motion.p
                  className="text-lg mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  I love playing sports games like NBA 2K, as well as FPS games like Rainbow Six Siege.
                </motion.p>
              </div>
              <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                <motion.span
                  className="text-8xl"
                  initial={{ opacity: 0, x: '100vw' }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '100vw' }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  🏎️
                </motion.span>
                <motion.p
                  className="text-xl mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  Sports
                </motion.p>
                <motion.p
                  className="text-lg mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  I love to watch sports, like football, basketball, and F1. My favorite teams are the 49ers, Warriors, and Ferrari! I like to play fantasy sports as well.
                </motion.p>
              </div>
            </div>
          </div>
        )}
        <Arrow size={arrowSize} target="#projects" />
      </div>
    </section>
  );
};

export default AboutSection;