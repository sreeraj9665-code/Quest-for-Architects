import { ScrollSection } from './ScrollSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
export const ArchitectsSection = () => {
  const emptySlots = Array.from({
    length: 9
  }, (_, i) => i + 1);
  return <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollSection>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-center text-foreground mb-16">
            The <span className="text-primary">Architects</span>
          </h2>
        </ScrollSection>

        {/* Prime Architect */}
        <ScrollSection delay={0.3}>
          <div className="max-w-2xl mx-auto mb-20">
            <Card className="bg-gradient-primary border-primary/30 shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto border-2 border-primary shadow-neon">
                    <AvatarImage src="" alt="Prime Architect" />
                    <AvatarFallback className="bg-primary text-primary-foreground font-orbitron font-bold text-xl">Shree</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-orbitron font-bold text-2xl text-foreground mb-2">PRIME ARCHITECT</h3>
                <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed">
                  The visionary leading the revolution against inefficiency. 
                  Building the foundation for a future where humans focus on what truly matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollSection>

        {/* Optimus Architects Grid */}
        <ScrollSection delay={0.6}>
          <div className="text-center mb-12">
            <h3 className="font-orbitron font-bold text-3xl text-foreground mb-4">
              FOUNDING ARCHITECTS
            </h3>
            <p className="font-rajdhani text-xl text-muted-foreground">
              Nine founding positions await the right architects
            </p>
          </div>
        </ScrollSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {emptySlots.map((slot, index) => <ScrollSection key={slot} delay={0.8 + index * 0.1}>
              <Card className="aspect-square bg-secondary/30 border-primary/20 hover:border-primary/60 transition-all duration-300 animate-glow-pulse">
                <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 border-2 border-dashed border-primary/50 rounded-full flex items-center justify-center mb-3">
                    <span className="font-orbitron font-bold text-primary text-lg">
                      {slot}
                    </span>
                  </div>
                  <p className="font-rajdhani text-sm text-primary font-bold">Slots Open</p>
                  <p className="font-rajdhani text-xs text-muted-foreground mt-1">Identify Projects to join the team</p>
                </CardContent>
              </Card>
            </ScrollSection>)}
        </div>
      </div>
    </section>;
};