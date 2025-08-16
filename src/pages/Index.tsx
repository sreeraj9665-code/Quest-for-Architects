import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ArchitectsSection } from '@/components/ArchitectsSection';
import { OpportunitySection } from '@/components/OpportunitySection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ArchitectsSection />
      <OpportunitySection />
      <CTASection />
    </div>
  );
};

export default Index;