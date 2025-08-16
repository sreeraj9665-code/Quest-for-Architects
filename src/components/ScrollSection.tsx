import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export const ScrollSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: ScrollSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 50 : 0,
        x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0,
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};