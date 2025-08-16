import { ScrollSection } from './ScrollSection';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Calculator, Zap, Award } from 'lucide-react';

export const YourRoleSection = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Identify the Blueprint",
      description: "Your first mission is to find a business crippled by a repetitive, manual task. Listen to their pain points. This real-world problem is a 'Blueprint'—the raw material for a custom Automation.",
      delay: 0.3
    },
    {
      number: 2,
      icon: Calculator,
      title: "Calculate the Impact",
      description: "Use our \"Impact Calculator\" tool to understand the scope and know how much money we could make with this automation. Input their numbers and check the undeniable, massive ROI of Automation. This isn't a sales pitch; it's a data-driven truth.",
      delay: 0.5
    },
    {
      number: 3,
      icon: Zap,
      title: "Forge the Automation",
      description: "Bring the validated Blueprint to me, the Prime Architect. We will collaborate directly. You'll provide the client context, and we will forge the custom Automation together in 48 hours - A weekend.",
      delay: 0.7
    },
    {
      number: 4,
      icon: Award,
      title: "Claim Your Legacy",
      description: "Upon successful deployment, you will have solved a real business problem and officially claimed your 0.1% equity stake. Your name and achievement will be one step closer to being immortalized in the \"Founding Ten.\"",
      delay: 0.9
    }
  ];

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('impact-calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollSection>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-center text-foreground mb-8">
            Your Role: The <span className="text-primary">Architect's Path</span>
          </h2>
        </ScrollSection>

        <ScrollSection delay={0.2}>
          <p className="font-rajdhani text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Follow this proven 4-step process to transform repetitive tasks into powerful automations and claim your place among the founding architects.
          </p>
        </ScrollSection>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <ScrollSection key={step.number} delay={step.delay}>
              <Card className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 shadow-premium group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon group-hover:animate-glow-pulse">
                        <span className="font-orbitron font-black text-2xl text-primary-foreground">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <step.icon className="w-8 h-8 text-primary" />
                        <h3 className="font-orbitron font-bold text-2xl text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed">
                        {step.number === 2 ? (
                          <>
                            Use our{' '}
                            <button
                              onClick={scrollToCalculator}
                              className="text-primary font-bold hover:underline cursor-pointer transition-colors"
                            >
                              "Impact Calculator"
                            </button>
                            {' '}tool to understand the scope and know how much money we could make with this automation. Input their numbers and check the undeniable, massive ROI of Automation. This isn't a sales pitch; it's a data-driven truth.
                          </>
                        ) : (
                          step.description
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};