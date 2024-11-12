import React from 'react';
import { motion, useInView } from 'framer-motion';

const Arrow = ({ size, target }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <a ref={ref} href={target} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <svg
        className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${size}px`, height: `${size}px`, opacity: 0.7 }}
      >
        {/* Left line of the arrow */}
        <motion.line
          x1="5"
          y1="8.5"
          x2="10"
          y2="13.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Right line of the arrow */}
        <motion.line
          x1="15"
          y1="8.5"
          x2="10"
          y2="13.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </svg>
    </a>
  );
};

export default Arrow;