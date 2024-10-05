import React, { useEffect, useRef, useState } from 'react';

const ContactSection = ({ arrowSize }) => {
  const emailRef = useRef(null);
  const [missCount, setMissCount] = useState(0);
  const [showContactInfo, setShowContactInfo] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (emailRef.current) {
        const emailElement = emailRef.current;
        const rect = emailElement.getBoundingClientRect();
        const emailX = rect.left + rect.width / 2;
        const emailY = rect.top + rect.height / 2;
        const distanceX = emailX - event.clientX;
        const distanceY = emailY - event.clientY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 100) {
          const randomX = Math.random() * (window.innerWidth - rect.width);
          const randomY = Math.random() * (window.innerHeight - rect.height - 200) + 100; // Avoid top and bottom overlap
          emailElement.style.position = 'absolute';
          emailElement.style.left = `${randomX}px`;
          emailElement.style.top = `${randomY}px`;
          setMissCount((prevCount) => prevCount + 1);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (missCount >= 5) {
      setShowContactInfo(true);
    }
  }, [missCount]);

  return (
    <section id="contact" className="section contact snap-start h-screen flex flex-col justify-center items-center text-center relative">
      <div className="container mx-auto px-10">
        <h2 className="text-5xl mb-6">Contact</h2>
        <p className="text-2xl">
          Feel free to reach out to me via email at:{' '}
          <span
            ref={emailRef}
            className="text-blue-500 cursor-pointer"
            style={{ display: 'inline-block', transition: 'transform 0.1s ease' }}
          >
            umailadi@gmail.com
          </span>
        </p>
        {showContactInfo && (
          <div className="mt-10 animate-fade-in">
            <p className="text-3xl">Since you can't catch it:</p>
            <a href="mailto:umailadi@gmail.com" className="text-blue-500 text-3xl">
              umailadi@gmail.com
            </a>
            <p className="text-3xl mt-2">You can also find me on LinkedIn:</p>
            <a href="https://www.linkedin.com/in/adityarajeev" className="text-blue-500 text-3xl">
                https://www.linkedin.com/in/adityarajeev
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;