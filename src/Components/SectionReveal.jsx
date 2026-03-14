import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const directionMap = {
  up: { y: 18, x: 0 },
  down: { y: -18, x: 0 },
  left: { x: 18, y: 0 },
  right: { x: -18, y: 0 },
};

const SectionReveal = ({
  children,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.25,
  stagger = 0, // set >0 if your children are multiple items and you want stagger
}) => {
  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: "blur(8px)",
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      viewport={{ once, amount }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.6,
        delay,
      }}
      {...(stagger > 0
        ? { transition: { staggerChildren: stagger, delayChildren: delay } }
        : {})}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
