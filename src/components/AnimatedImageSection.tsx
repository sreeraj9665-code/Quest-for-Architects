import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedImageSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Responsive container - better mobile handling */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full">
        <motion.div 
          style={{ 
            y,
            backgroundImage: 'url(/lovable-uploads/91d9b4e2-964a-41d3-984f-3a85b4384e05.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          className="absolute inset-0 scale-110"
        />
        {/* Gradient overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
      </div>
    </section>
  );
};