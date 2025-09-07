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
    timesPerMonth: '',
    monthlySalary: '',
    workHoursPerDay: '8',
    numberOfEmployees: '1'
  });
  const [showResults, setShowResults] = useState(false);
  const [paybackPeriod, setPaybackPeriod] = useState([12]);
  
  const calculateResults = () => {
    const minutes = parseFloat(formData.timeMinutes) || 0;
    const salary = parseFloat(formData.monthlySalary) || 0;
    const timesPerMonth = parseFloat(formData.timesPerMonth) || 0;
    const workHoursPerDay = parseFloat(formData.workHoursPerDay) || 8;
    const numberOfEmployees = parseFloat(formData.numberOfEmployees) || 1;
    
    // Assume 22 working days in a month
    const hourlyRate = salary / (workHoursPerDay * 22);
    
    // Total annual hours = (minutes / 60) * (times per month * 12) * number of employees
    const totalAnnualHours = (minutes / 60) * (timesPerMonth * 12) * numberOfEmployees;
    
    // Annual cost savings = total annual hours * hourly rate
    const annualCostSavings = totalAnnualHours * hourlyRate;
    
    // Monthly cost savings = annual cost savings / 12
    const monthlyCostSavings = annualCostSavings / 12;
    
    // Automation price = monthly cost savings * payback period (months)
    const automationPrice = monthlyCostSavings * paybackPeriod[0];
    
    return {
      annualHours: Math.round(totalAnnualHours),
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
                    <Label htmlFor="timesPerMonth" className="font-rajdhani font-bold text-foreground">
                      How many times is this task done per month?
                    </Label>
                    <Input
                      id="timesPerMonth"
                      type="number"
                      value={formData.timesPerMonth}
                      onChange={(e) => setFormData(prev => ({ ...prev, timesPerMonth: e.target.value }))}
                      required
                      className="bg-input border-border focus:border-primary font-rajdhani"
                      placeholder="20"
                    />
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

                  <div className="space-y-2">
                    <Label htmlFor="workHoursPerDay" className="font-rajdhani font-bold text-foreground">
                      Average Work Hours per Day for this Employee
                    </Label>
                    <Input
                      id="workHoursPerDay"
                      type="number"
                      value={formData.workHoursPerDay}
                      onChange={(e) => setFormData(prev => ({ ...prev, workHoursPerDay: e.target.value }))}
                      required
                      className="bg-input border-border focus:border-primary font-rajdhani"
                      placeholder="8"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="numberOfEmployees" className="font-rajdhani font-bold text-foreground">
                      Number of Employees Doing This Task
                    </Label>
                    <Input
                      id="numberOfEmployees"
                      type="number"
                      value={formData.numberOfEmployees}
                      onChange={(e) => setFormData(prev => ({ ...prev, numberOfEmployees: e.target.value }))}
                      required
                      className="bg-input border-border focus:border-primary font-rajdhani"
                      placeholder="1"
                      min="1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-orbitron font-bold text-lg py-6 bg-primary text-primary-foreground hover:shadow-neon transition-all duration-300"
                  >
                    CALCULATE IMPACT
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
                        Client's Payback Period: {paybackPeriod[0]} months
                      </Label>
                      <Slider
                        value={paybackPeriod}
                        onValueChange={setPaybackPeriod}
                        max={24}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="text-center p-8 bg-gradient-primary/10 rounded-lg border border-primary/30 space-y-6">
                      <div>
                        <h3 className="font-orbitron font-bold text-2xl text-foreground mb-4">Suggested Total Price (for this Payback Period)</h3>
                        <div className="text-5xl font-orbitron font-black text-primary">
                          ₹{results.automationPrice.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="border-t border-primary/20 pt-6">
                        <h4 className="font-orbitron font-bold text-xl text-foreground mb-3">Equivalent Monthly Installment (for 12 months)</h4>
                        <div className="text-3xl font-orbitron font-black text-primary">
                          ₹{Math.round(results.automationPrice / 12).toLocaleString()}
                        </div>
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