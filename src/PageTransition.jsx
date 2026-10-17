import { motion } from "framer-motion";

const pageAnimations = {
  home: {
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 60, opacity: 0 },
  },
  about: {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 },
  },
  works: {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 60, opacity: 0 },
  },
};

function PageTransition({ page, children }) {
  const animation = pageAnimations[page];

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;