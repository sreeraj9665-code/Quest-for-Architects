import { useState } from 'react';
import { ScrollSection } from './ScrollSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { NumberCounter } from './NumberCounter';

export const ImpactCalculatorSection = () => {
  const [formData, setFormData] = useState({
    taskName: '',
    timeMinutes: '',
    frequency: '',
    monthlySalary: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [roiPercentage, setRoiPercentage] = useState([300]);
  
  const calculateResults = () => {
    const minutes = parseFloat(formData.timeMinutes) || 0;
    const salary = parseFloat(formData.monthlySalary) || 0;
    
    let tasksPerYear = 0;
    switch (formData.frequency) {
      case 'daily':
        tasksPerYear = 365;
        break;
      case 'weekly':
        tasksPerYear = 52;
        break;
      case 'monthly':
        tasksPerYear = 12;
        break;
    }
    
    const annualHours = (minutes * tasksPerYear) / 60;
    const hourlyRate = (salary * 12) / (40 * 52); // Monthly salary to hourly
    const annualCostSavings = annualHours * hourlyRate;
    const automationPrice = annualCostSavings / (roiPercentage[0] / 100);
    
    return {
      annualHours: Math.round(annualHours),
      annualCostSavings: Math.round(annualCostSavings),
      automationPrice: Math.round(automationPrice)
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const results = showResults ? calculateResults() : null;

  return (
    <section id="impact-calculator" className="py-32 px-6 bg-card relative">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollSection>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-center text-foreground mb-16">
            The <span className="text-primary">Impact Calculator</span>
          </h2>
        </ScrollSection>

        <ScrollSection delay={0.3}>
          <Card className="bg-background/80 backdrop-blur-sm border-border shadow-premium">
            <CardContent className="p-8">
              {!showResults ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="taskName" className="font-rajdhani font-bold text-foreground">
                      Task Name
                    </Label>
                    <Input
                      id="taskName"
                      value={formData.taskName}
                      onChange={(e) => setFormData(prev => ({ ...prev, taskName: e.target.value }))}
                      required
                      className="bg-input border-border focus:border-primary font-rajdhani"
                      placeholder="e.g., Monthly expense reports"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeMinutes" className="font-rajdhani font-bold text-foreground">
                      Time to Complete Task (in minutes)
                    </Label>
                    <Input
                      id="timeMinutes"
                      type="number"
                      value={formData.timeMinutes}
                      onChange={(e) => setFormData(prev => ({ ...prev, timeMinutes: e.target.value }))}
                      required
                      className="bg-input border-border focus:border-primary font-rajdhani"
                      placeholder="120"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-rajdhani font-bold text-foreground">
                      How Often is this Task Done?
                    </Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, frequency: value }))}>
                      <SelectTrigger className="bg-input border-border focus:border-primary font-rajdhani">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Per Day</SelectItem>
                        <SelectItem value="weekly">Per Week</SelectItem>
                        <SelectItem value="monthly">Per Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlySalary" className="font-rajdhani font-bold text-foreground">
                      Monthly Salary of Employee (in ₹)
                    </Label>
                    <Input
                      id="monthlySalary"
                      type="number"
                      value={formData.monthlySalary}
                      onChange={(e) => setFormData(prev => ({ ...prev, monthlySalary: e.target.value }))}
                      required
                      className="bg-input border-border focus:border-primary font-rajdhani"
                      placeholder="50000"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-orbitron font-bold text-lg py-6 bg-primary text-primary-foreground hover:shadow-neon transition-all duration-300"
                  >
                    [CALCULATE IMPACT]
                  </Button>
                </form>
              ) : (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/20">
                      <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">Annual Hours Reclaimed</h3>
                      <div className="text-4xl font-orbitron font-black text-primary">
                        <NumberCounter endValue={results.annualHours} />
                      </div>
                    </div>
                    
                    <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/20">
                      <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">Annual Cost Savings</h3>
                      <div className="text-4xl font-orbitron font-black text-primary">
                        ₹<NumberCounter endValue={results.annualCostSavings} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="font-rajdhani font-bold text-foreground text-lg mb-4 block">
                        Client's First-Year ROI: {roiPercentage[0]}%
                      </Label>
                      <Slider
                        value={roiPercentage}
                        onValueChange={setRoiPercentage}
                        max={1000}
                        min={100}
                        step={50}
                        className="w-full"
                      />
                    </div>

                    <div className="text-center p-8 bg-gradient-primary/10 rounded-lg border border-primary/30">
                      <h3 className="font-orbitron font-bold text-2xl text-foreground mb-4">Your One-Time Automation Price</h3>
                      <div className="text-5xl font-orbitron font-black text-primary">
                        ₹{results.automationPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setShowResults(false)}
                    variant="outline"
                    className="w-full font-rajdhani font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Calculate Another Task
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </ScrollSection>
      </div>
    </section>
  );
};