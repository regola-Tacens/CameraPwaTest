import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import "./index.css";

const AppFramerMotion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  const pathVariant = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: {
        duration: 2,
        type: "bounce",
        stiffness: 2,
      },
    },
  };

  return (
    <>
      <motion.div
        drag="x"
        dragConstraints={{ left: -200, right: 300 }}
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className="parent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div layout className="child" />
      </motion.div>
      <motion.div
        style={{ backgroundColor: "red", width: 100, height: 100, x, opacity }}
        drag="x"
        onDrag={(event, info) => console.log(info.point.x, info.point.y)}
        onDragStart={(event, info) => console.log(info.point.x, info.point.y)}
        onDragEnd={(event, info) => console.log(info.point.x, info.point.y)}
      />
      <motion.div
        style={{
          backgroundColor: "white",
          width: 47,
          height: 47,
          x: -30,
          borderRadius: 50,
        }}
        animate={{ scale: 1, x: 50 }}
        transition={{ duration: 0.4 }}
        // whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      {/* <motion.div initial="hidden" animate="visible" variants={variants} /> */}
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>
            <stop id="stop2" stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <motion.path
          initial="initial"
          animate="animate"
          variants={pathVariant}
          fill="none"
          d="M22.3,-34.2C28.6,-30.6,33.3,-24,35.6,-16.9C37.9,-9.8,37.7,-2.2,37.4,5.9C37,14,36.5,22.5,32,27.7C27.5,32.9,19.1,34.8,10.8,37.5C2.5,40.2,-5.7,43.9,-13.6,43C-21.4,42.2,-28.8,36.8,-34.3,30C-39.8,23.2,-43.5,15,-44.3,6.6C-45.2,-1.8,-43.3,-10.3,-39.2,-17.4C-35.1,-24.4,-28.9,-29.9,-22,-33.2C-15.1,-36.5,-7.6,-37.7,0.2,-38C8,-38.3,16,-37.8,22.3,-34.2Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="1"
          stroke="url(#sw-gradient)"
        ></motion.path>
      </svg>
    </>
  );
};

export default AppFramerMotion;
