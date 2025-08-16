import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { AnimatedImageSection } from '@/components/AnimatedImageSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ImpactCalculatorSection } from '@/components/ImpactCalculatorSection';
import { ArchitectsSection } from '@/components/ArchitectsSection';
import { OpportunitySection } from '@/components/OpportunitySection';
import { YourRoleSection } from '@/components/YourRoleSection';
import { CTASection } from '@/components/CTASection';
import { Header } from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <AnimatedImageSection />
      <SolutionSection />
      <ImpactCalculatorSection />
      <ArchitectsSection />
      <OpportunitySection />
      <YourRoleSection />
      <CTASection />
    </div>
  );
};

export default Index;