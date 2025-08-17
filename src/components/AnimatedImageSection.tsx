export const AnimatedImageSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile: aspect-ratio container, Desktop: full height */}
      <div className="relative h-[50vh] md:h-screen w-full">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat md:bg-cover"
          style={{
            backgroundImage: 'url(/lovable-uploads/91d9b4e2-964a-41d3-984f-3a85b4384e05.png)',
            animation: 'breathe 4s ease-in-out infinite'
          }}
        />
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.02); opacity: 1; }
          }
        `
      }} />
    </section>
  );
};