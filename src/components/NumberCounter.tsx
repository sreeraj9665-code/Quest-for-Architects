import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface NumberCounterProps {
  endValue: number;
  duration?: number;
  className?: string;
}

export const NumberCounter = ({ endValue, duration = 2, className = '' }: NumberCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * endValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, endValue, duration]);

  return (
    <motion.span
      ref={ref}
      className={`font-orbitron font-black text-primary animate-neon-flicker ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {count}
    </motion.span>
  );
};