import { useState } from 'react';
import { ScrollSection } from './ScrollSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Application Received",
      description: "Welcome to the quest. We'll be in touch soon.",
    });

    setFormData({ name: '', email: '', phoneNumber: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollSection>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-foreground mb-8">
            The Quest for the Ten{' '}
            <span className="text-primary">has begun</span>
          </h2>
        </ScrollSection>

        <ScrollSection delay={0.3}>
          <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            If you are ready to build the future, let's connect.
          </p>
        </ScrollSection>

        <ScrollSection delay={0.6}>
          <Card className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm border-primary/30 shadow-glow">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
                <div className="space-y-2 text-left">
                  <Label htmlFor="name" className="font-rajdhani font-bold text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary focus:ring-primary font-rajdhani"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="email" className="font-rajdhani font-bold text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary focus:ring-primary font-rajdhani"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="phoneNumber" className="font-rajdhani font-bold text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary focus:ring-primary font-rajdhani"
                    placeholder="+91 9876543210"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-orbitron font-bold text-lg py-6 bg-primary text-primary-foreground hover:shadow-neon transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'PROCESSING...' : "I'M READY TO BUILD"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollSection>
      </div>
    </section>
  );
};