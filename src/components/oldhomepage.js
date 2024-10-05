import React, { useEffect, useState } from 'react';
import '../index.css'; // Correct the path to the Tailwind CSS file

const Home = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ['hero', 'introduction', 'projects', 'skills', 'contact'];
  const colors = ['bg-orange-100', 'bg-orange-200', 'bg-orange-300', 'bg-orange-400', 'bg-orange-500'];

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }

    const sectionHeight = window.innerHeight;
    const scrollPosition = window.scrollY + sectionHeight / 2;

    const newSection = Math.floor(scrollPosition / sectionHeight);
    setCurrentSection(newSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`home-container ${colors[currentSection]} transition-colors duration-500`}>
      <div className={`fixed w-full bg-orange-500 text-white p-5 text-center transition-transform duration-300 ${!showBanner ? '-translate-y-full' : ''}`}>
        <h1 className="text-5xl">Aditya Rajeev</h1>
      </div>
      
      <section className={`h-screen flex flex-col justify-center items-center text-center transition-opacity duration-500 ${currentSection === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-10">
          <h1 className="text-6xl mb-6">Welcome to My Personal Website</h1>
          <p className="text-2xl mb-8">I'm a passionate developer, eager to share my journey.</p>
          <a href="#projects" className="inline-block bg-orange-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-orange-600">View My Projects</a>
        </div>
      </section>

      <section className={`h-screen flex flex-col justify-center items-center text-center transition-opacity duration-500 ${currentSection === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-10">
          <h2 className="text-5xl mb-6">About Me</h2>
          <p className="text-2xl">
            Hello! I’m Aditya Rajeev, a [Your Profession] with a focus on [Your Focus Areas]. 
            I love creating solutions that make a difference and exploring new technologies. 
            Check out my work and feel free to get in touch!
          </p>
        </div>
      </section>

      <section className={`h-screen flex flex-col justify-center items-center text-center transition-opacity duration-500 ${currentSection === 2 ? 'opacity-100' : 'opacity-0'}`} id="projects">
        <div className="container mx-auto px-10">
          <h2 className="text-5xl mb-6">Projects</h2>
          <p className="text-2xl mb-8">
            Here are some of the projects I've worked on:
          </p>
          <ul className="list-disc list-inside text-xl">
            <li>Project 1: Description</li>
            <li>Project 2: Description</li>
            <li>Project 3: Description</li>
          </ul>
        </div>
      </section>

      <section className={`h-screen flex flex-col justify-center items-center text-center transition-opacity duration-500 ${currentSection === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-10">
          <h2 className="text-5xl mb-6">Skills</h2>
          <p className="text-2xl mb-8">
            These are some of the skills I have acquired:
          </p>
          <ul className="list-disc list-inside text-xl">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </div>
      </section>

      <section className={`h-screen flex flex-col justify-center items-center text-center transition-opacity duration-500 ${currentSection === 4 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-10">
          <h2 className="text-5xl mb-6">Contact</h2>
          <p className="text-2xl">
            Feel free to reach out to me via email at [Your Email].
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;