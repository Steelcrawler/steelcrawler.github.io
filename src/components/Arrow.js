import React from 'react';

const Arrow = ({ size, target }) => (
  <a href={target} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <svg
      className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${size}px`, height: `${size}px`, opacity: 0.7 }}
    >
      <path
        fillRule="evenodd"
        d="M10 15a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L10 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 15z"
        clipRule="evenodd"
      />
    </svg>
  </a>
);

export default Arrow;