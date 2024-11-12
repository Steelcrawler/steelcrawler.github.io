import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Arrow from './Arrow';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const HeroSection = ({ arrowSize }) => {
  const heroSectionRef = useRef(null);
  const [arrowSizeDynamic, setArrowSizeDynamic] = useState(arrowSize);
  const [buttonSize, setButtonSize] = useState('text-base sm:text-lg');
  const [textSize, setTextSize] = useState('text-xl sm:text-2xl');
  const [titleSize, setTitleSize] = useState('text-4xl sm:text-6xl');

  useEffect(() => {
    const handleResize = () => {
      if (heroSectionRef.current) {
        const heroSectionHeight = heroSectionRef.current.clientHeight;
        const contentHeight = heroSectionRef.current.scrollHeight;
        const remainingSpace = heroSectionHeight - contentHeight;
        const newSize = Math.max(arrowSize, remainingSpace / 2); // Adjust the divisor to control the size
        setArrowSizeDynamic(newSize);

        // Adjust button and text sizes based on screen width
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
          setButtonSize('text-sm px-4 py-2');
          setTextSize('text-lg');
          setTitleSize('text-4xl');
        } else {
          setButtonSize('text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-5');
          setTextSize('text-xl sm:text-3xl');
          setTitleSize('text-5xl sm:text-9xl');
        }
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize); // Recalculate on window resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [arrowSize]);

  return (
    <section
      ref={heroSectionRef}
      className="section hero snap-start h-screen flex flex-col justify-between items-center text-center relative bg-cyan-200"
    >
      <div className="container mx-auto px-4 sm:px-10 relative z-10 mt-10">
        <motion.h1
          className={`${titleSize} mb-6 hero-title`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi! 👋
        </motion.h1>
        <motion.p
          className={`${textSize} mb-4`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm Aditya, a second-year student at the University of Toronto.
        </motion.p>
        <motion.p
          className="text-lg sm:text-2xl mb-16 sm:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Passionate about AI and ML, currently working on medical image segmentation and classification.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 sm:space-x-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <a href="https://www.linkedin.com/in/adityarajeev" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl sm:text-5xl text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://github.com/steelcrawler" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl sm:text-5xl text-gray-800 hover:text-gray-600" />
          </a>
          <a href="mailto:umailadi@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-3xl sm:text-5xl text-orange-500 hover:text-orange-700" />
          </a>
        </motion.div>
        <motion.a
          href="/resume.pdf"
          className={`inline-block ${buttonSize} bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors mb-10`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          download
        >
          Download Resume
        </motion.a>
      </div>
      <Arrow size={arrowSizeDynamic} target="#about" />
    </section>
  );
};

export default HeroSection;