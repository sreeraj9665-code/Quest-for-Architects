import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedImageSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Much slower parallax effect (20% speed)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  
  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Premium cinematic container with responsive height and proper aspect ratio */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1] lg:aspect-[21/9] flex items-center justify-center">
        <motion.div
          style={{ 
            y,
            backgroundImage: 'url(/lovable-uploads/91d9b4e2-964a-41d3-984f-3a85b4384e05.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
          className="absolute inset-0"
        />
        {/* Subtle gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/10" />
      </div>
    </section>
  );
};