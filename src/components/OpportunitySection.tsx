import { ScrollSection } from './ScrollSection';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, TrendingUp, Rocket } from 'lucide-react';

export const OpportunitySection = () => {
  const opportunities = [
    {
      icon: Crown,
      title: "Legacy",
      description: "A permanent, public profile as one of the ten founding architects. Your contribution, immortalized.",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: "Equity",
      description: "True ownership. Earn a stake in the entire company for every successful project you help build. No investment needed.",
      delay: 0.5
    },
    {
      icon: Rocket,
      title: "Leadership",
      description: "Go from founding architect to a leader of your own division as we scale our organization.",
      delay: 0.7
    }
  ];

  return (
    <section className="py-32 px-6 bg-card relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollSection>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-center text-foreground mb-16">
            The <span className="text-primary">Opportunity</span>
          </h2>
        </ScrollSection>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <ScrollSection key={opportunity.title} delay={opportunity.delay}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 shadow-premium hover:shadow-glow group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6 mx-auto">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon group-hover:animate-glow-pulse">
                      <opportunity.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="font-orbitron font-bold text-2xl text-foreground mb-4">
                    {opportunity.title}
                  </h3>
                  
                  <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed flex-grow">
                    {opportunity.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};