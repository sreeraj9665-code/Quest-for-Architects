import { ScrollSection } from './ScrollSection';
import { NumberCounter } from './NumberCounter';

export const SolutionSection = () => {
  return (
    <section className="py-32 px-6 bg-card relative">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <ScrollSection>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-foreground mb-8">
            Our solution is a{' '}
            <span className="text-primary">surgical strike</span>{' '}
            against inefficiency
          </h2>
        </ScrollSection>

        <ScrollSection delay={0.3}>
          <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-16">
            We will automate simple tasks that could be automated via code based automation, 
            built to solve one problem, <span className="text-primary font-bold">perfectly</span>.
          </p>
        </ScrollSection>

        <ScrollSection delay={0.6}>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-12 inline-block shadow-premium">
            <div className="text-center">
              <div className="text-8xl md:text-9xl font-orbitron font-black mb-4">
                <NumberCounter endValue={48} />
              </div>
              <p className="font-rajdhani text-2xl md:text-3xl text-muted-foreground font-bold">
                Hours to Deploy
              </p>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};