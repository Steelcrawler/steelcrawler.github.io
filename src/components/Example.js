import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ReactComponent as RightArrow } from './right-arrow.svg';
import { ReactComponent as LeftArrow } from './left-arrow.svg';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Slideshow = ({ image, direction }) => (
  <AnimatePresence custom={direction}>
    <motion.img
      key={image}
      src={image}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="w-full h-full object-cover"
    />
  </AnimatePresence>
);

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Example = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex justify-center items-center w-full h-full relative">
      <div className="w-3/5 h-full overflow-hidden">
        <Slideshow image={images[imageIndex]} direction={direction} />
      </div>
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
        onClick={() => paginate(1)}
      >
        <LeftArrow className="w-12 h-12 text-orange-500" />
      </div>
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer"
        onClick={() => paginate(-1)}
      >
        <RightArrow className="w-12 h-12 text-orange-500" />
      </div>
    </div>
  );
};