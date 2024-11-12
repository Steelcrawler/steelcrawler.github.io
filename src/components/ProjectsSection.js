import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from './Arrow';

const projects = [
  {
    id: '1',
    title: 'DeepEmotion ML Developer',
    subtitle: 'UTMIST Project',
    details:
      'I am currently a developer for the DeepEmotion project with the UofT machine intelligence student team, working on developing machine learning algorithms for continuous fMRI classification. You can find more details on the writeup <a href="https://tinyurl.com/DeepEmotion" class="text-orange-500 underline" target="_blank" rel="noopener noreferrer">here</a>.',
    emoji: '🤖',
    images: ['/test-1.jpg', '/test-2.jpg'],
  },
  {
    id: '2',
    title: 'Aercoustics ML Developer',
    subtitle: 'UTMIST Project',
    details:
      'I am also currently working to develop ML Algorithms for Aercoustics, a sound engineering company based in Toronto. You can learn more about the company <a href="https://aercoustics.com/" class="text-orange-500 underline" target="_blank" rel="noopener noreferrer">here</a>.',
    emoji: '🔊',
    images: ['/images/project2-1.jpg', '/images/project2-2.jpg'],
  },
  {
    id: '3',
    title: 'Cartoon Talk',
    subtitle: 'Hackathon Project for UofT Hacks',
    details:
      'Lead a team that used Cohere AI, Eleven Labs, and DALL-E to build an AI chatbot that mimicked cartoon characters. Utilized Azure and Heroku for backend development. The repository can be found <a href="https://github.com/Steelcrawler/UofTHacks11" class="text-orange-500 underline" target="_blank" rel="noopener noreferrer">here</a>.',
    emoji: '🗣️',
    images: ['/images/project3-1.jpg', '/images/project3-2.jpg'],
  },
  {
    id: '4',
    title: 'Citadel Invitational Hackathon',
    subtitle: 'Terminal One Competition',
    details: 'Selected by Citadel to develop an algorithm with a team to compete in the Terminal One game. You can find the work we did <a href="https://github.com/Steelcrawler/CitadelHackathon" class="text-orange-500 underline" target="_blank" rel="noopener noreferrer">here</a>.',
    emoji: '💻',
    images: ['/images/project4-1.jpg', '/images/project4-2.jpg'],
  },
  {
    id: '5',
    title: 'CANIS Hackathon',
    subtitle: 'Data Visualization Hackathon',
    details: 'Used the YouTube API/Visualization Packages to scrape data to determine levels of foreign interference in elections. You can find it here <a href="https://github.com/Steelcrawler/CANISDataVizPrj" class="text-orange-500 underline" target="_blank" rel="noopener noreferrer">here</a>.',
    emoji: '📊',
    images: ['/images/project5-1.jpg', '/images/project5-2.jpg'],
  },
  {
    id: '6',
    title: 'This Website!',
    subtitle: 'Built with React and Tailwind CSS',
    details: 'Built this website from scratch using React and Tailwind CSS, along with Framer Motion. You can find the repository <a href="https://github.com/Steelcrawler/steelcrawler.github.io" class="text-orange-500 underline" target="_blank" rel="noopener noreferrer">here</a>.',
    emoji: '🌐',
    images: ['/images/project6-1.jpg', '/images/project6-2.jpg'],
  },
];

const ProjectsSection = ({ arrowSize }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [titleSize, setTitleSize] = useState('text-5xl sm:text-4xl');
  const [subtitleSize, setSubtitleSize] = useState('text-2xl sm:text-3xl');
  const [cardSize, setCardSize] = useState('p-6 sm:p-8');
  const [emojiSize, setEmojiSize] = useState('text-4xl sm:text-6xl');
  const [cardTitleSize, setCardTitleSize] = useState('text-xl sm:text-2xl');
  const [cardSubtitleSize, setCardSubtitleSize] = useState('text-xl sm:text-2xl');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
        setVisibleProjects(projects.slice(0, 3)); // Show only the first 3 projects on small screens
        setTitleSize('text-3xl');
        setSubtitleSize('text-xl');
        setCardSize('p-4');
        setEmojiSize('text-3xl');
        setCardTitleSize('text-xl');
        setCardSubtitleSize('text-lg');
        setIsSmallScreen(true);
      } else {
        setVisibleProjects(projects); // Show all projects on larger screens
        setTitleSize('text-5xl sm:text-7xl');
        setSubtitleSize('text-2xl sm:text-3xl');
        setCardSize('p-6 sm:p-8');
        setEmojiSize('text-4xl sm:text-6xl');
        setCardTitleSize('text-2xl sm:text-3xl');
        setCardSubtitleSize('text-xl sm:text-2xl');
        setIsSmallScreen(false);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize); // Recalculate on window resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section projects snap-start h-screen flex flex-col justify-center items-center text-center bg-cyan-200"
    >
      <div className="container mx-auto px-10 pb-20"> {/* Added padding-bottom to create space for the arrow */}
        <motion.h2
          className={`${titleSize} mb-6`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 1 }}
          style={{ willChange: 'transform, opacity' }}
        >
          Projects
        </motion.h2>
        <motion.p
          className={`${subtitleSize} mb-8`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 1, delay: 0.01 }}
          style={{ willChange: 'transform, opacity' }}
        >
          Here are some of the projects I've worked on:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              className={`border-4 border-orange-500 bg-cyan-400 rounded-lg cursor-pointer ${cardSize}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, rotate: isVisible ? 0 : -10 }}
              transition={{ duration: 0.6, delay: 0.01 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 0],
                transition: { 
                  scale: { duration: 0.2 }, // Initial scale-up happens quickly
                  rotate: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                },
                boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.span className={`${emojiSize}`}>{project.emoji}</motion.span>
              <motion.h2 className={`${cardTitleSize}`} style={{ willChange: 'transform, opacity' }}>{project.title}</motion.h2>
              <motion.h5 className={`${cardSubtitleSize}`} style={{ willChange: 'transform, opacity' }}>{project.subtitle}</motion.h5>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(null)}
              />
              <motion.div
                layoutId={selectedId}
                className="fixed inset-0 m-auto bg-cyan-400 px-8 z-50 flex flex-col items-center justify-center rounded-lg shadow-lg"
                style={isSmallScreen ? { width: '90%', height: '90%', padding: '20px' } : { width: '50%', height: '40%', padding: '50px' }} // Adjusted width and height
              >
                <motion.h2 className="text-3xl mb-4" style={{ willChange: 'transform, opacity' }}>
                  {projects.find((project) => project.id === selectedId).title}
                </motion.h2>
                <motion.h5 className="text-xl mb-4" style={{ willChange: 'transform, opacity' }}>
                  {projects.find((project) => project.id === selectedId).subtitle}
                </motion.h5>
                <motion.p
                  className="text-lg mb-6"
                  style={{ willChange: 'transform, opacity' }}
                  dangerouslySetInnerHTML={{ __html: projects.find((project) => project.id === selectedId).details }}
                />
                <motion.button
                  className="mt-4 p-2 bg-orange-700 text-white rounded"
                  onClick={() => setSelectedId(null)}
                  whileHover={{ scale: 1.1 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  Close
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <Arrow size={arrowSize} target="#skills" />
      </div>
    </section>
  );
};

export default ProjectsSection;