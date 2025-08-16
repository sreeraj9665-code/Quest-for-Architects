import { ScrollSection } from './ScrollSection';

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollSection>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-foreground mb-12">
            The Silent Drain
          </h2>
        </ScrollSection>

        <ScrollSection delay={0.3}>
          <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Every click, every copy-paste, every manual report. It's the ghost in the machine—a{' '}
            <span className="text-primary font-bold">silent drain</span> on our most valuable resource:{' '}
            <span className="text-foreground font-bold">Time</span>.
          </p>
        </ScrollSection>

        <ScrollSection delay={0.6}>
          <p className="font-rajdhani text-xl md:text-2xl text-primary font-bold mt-8">
            We are building the cure.
          </p>
        </ScrollSection>
      </div>
    </section>
  );
};