export const AnimatedImageSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile: aspect-ratio container, Desktop: full height */}
      <div className="relative h-[50vh] md:h-screen w-full">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat md:bg-cover"
          style={{
            backgroundImage: 'url(/lovable-uploads/91d9b4e2-964a-41d3-984f-3a85b4384e05.png)',
            animation: 'kenBurns 20s ease-in-out infinite'
          }}
        />
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes kenBurns {
            0% { 
              transform: scale(1) translate(0, 0);
            }
            25% { 
              transform: scale(1.08) translate(-2%, -1%);
            }
            50% { 
              transform: scale(1.12) translate(-3%, 1%);
            }
            75% { 
              transform: scale(1.06) translate(1%, -2%);
            }
            100% { 
              transform: scale(1) translate(0, 0);
            }
          }
        `
      }} />
    </section>
  );
};