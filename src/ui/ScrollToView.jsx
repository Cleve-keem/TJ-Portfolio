import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollToView({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controller = useAnimation();

  useEffect(() => {
    if (isInView) {
      controller.start("visible");
    }
  }, [isInView]);

  const animationVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate={controller}
      transition={{ duration: 0.5, delay: 0.2 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
