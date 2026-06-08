"use client";

import { useState } from "react";
import { projectConsultation, type ProjectConsultationOutput } from "@/ai/flows/project-consultation-ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Sparkles, Loader2, CheckCircle2, AlertCircle, Rocket } from "lucide-react";

export function ProjectEstimator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProjectConsultationOutput | null>(null);
  const [formData, setFormData] = useState({
    projectDescription: "",
    companyType: "",
    budgetRange: "",
    targetAudience: "",
    keyFeatures: "",
    desiredTimeline: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await projectConsultation(formData);
      setResult(output);
    } catch (error) {
      console.error("Consultation error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimator" className="py-24 bg-card/20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3377FF_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6">
              <Sparkles className="w-4 h-4" /> AI POWERED
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Intelligent Project Estimator
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Not sure where to start? Our AI Technical Assistant helps you scope your project needs and provides an instant preliminary consultation.
            </p>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Instant Analysis</h4>
                  <p className="text-muted-foreground">Get a technical breakdown of your requirements in seconds.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Complexity Estimation</h4>
                  <p className="text-muted-foreground">Understand the scale and technical difficulty of your vision.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Tailored Recommendations</h4>
                  <p className="text-muted-foreground">Receive suggested tech stacks and next steps for growth.</p>
                </div>
              </li>
            </ul>
          </div>

          <Card className="glass p-8 border-white/10 shadow-2xl relative overflow-hidden">
            {loading ? (
              <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="relative">
                   <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                   <Loader2 className="w-16 h-16 text-primary animate-spin relative" />
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-2">Analyzing Your Project...</h3>
                  <p className="text-muted-foreground">Our AI is processing your requirements and drafting a strategy.</p>
                </div>
              </div>
            ) : result ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-headline font-bold text-gradient">Your Consultation Result</h3>
                  <div className="px-3 py-1 rounded-full bg-primary text-xs font-bold text-white uppercase tracking-widest">
                    {result.estimatedComplexity} Complexity
                  </div>
                </div>

                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                    <Label className="text-accent uppercase text-[10px] tracking-widest font-bold">Preliminary Analysis</Label>
                    <p className="mt-2 text-foreground/90 leading-relaxed">{result.preliminaryAnalysis}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-accent uppercase text-[10px] tracking-widest font-bold">Estimated Timeline</Label>
                      <p className="mt-1 font-headline font-bold text-lg">{result.roughTimeEstimate}</p>
                    </div>
                    <div>
                      <Label className="text-accent uppercase text-[10px] tracking-widest font-bold">Recommended Services</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {result.recommendedServices.map((s, i) => (
                          <span key={i} className="text-[10px] px-2 py-1 rounded bg-secondary border border-white/5">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-accent uppercase text-[10px] tracking-widest font-bold">Key Considerations</Label>
                    <ul className="mt-2 space-y-2">
                      {result.keyConsiderations.map((c, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <AlertCircle className="w-4 h-4 text-primary shrink-0" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm italic text-foreground/80 mb-4">{result.nextStepsGuidance}</p>
                    <Button className="w-full glow-blue" onClick={() => setResult(null)}>
                      Start New Analysis
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Company Type</Label>
                    <Select onValueChange={(v) => setFormData({...formData, companyType: v})} required>
                      <SelectTrigger className="bg-secondary/50 border-white/10">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Startup">Startup</SelectItem>
                        <SelectItem value="NGO">NGO / Non-Profit</SelectItem>
                        <SelectItem value="Established Business">Established Business</SelectItem>
                        <SelectItem value="Personal Brand">Personal Brand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget Range</Label>
                    <Select onValueChange={(v) => setFormData({...formData, budgetRange: v})} required>
                      <SelectTrigger className="bg-secondary/50 border-white/10">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Under $5k">Under $5k</SelectItem>
                        <SelectItem value="$5k-$15k">$5k - $15k</SelectItem>
                        <SelectItem value="$15k-$50k">$15k - $50k</SelectItem>
                        <SelectItem value="Over $50k">Over $50k</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Project Description</Label>
                  <Textarea 
                    placeholder="Tell us about your project goals and vision..." 
                    className="min-h-[120px] bg-secondary/50 border-white/10 focus:border-primary transition-all"
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <Label>Target Audience</Label>
                    <Input 
                      placeholder="e.g. Gen Z, Local Retailers" 
                      className="bg-secondary/50 border-white/10"
                      value={formData.targetAudience}
                      onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Key Features</Label>
                    <Input 
                      placeholder="e.g. Payments, Chat, Dashboard" 
                      className="bg-secondary/50 border-white/10"
                      value={formData.keyFeatures}
                      onChange={(e) => setFormData({...formData, keyFeatures: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Desired Timeline</Label>
                  <Select onValueChange={(v) => setFormData({...formData, desiredTimeline: v})} required>
                    <SelectTrigger className="bg-secondary/50 border-white/10">
                      <SelectValue placeholder="When do you need it?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under 1 month">Under 1 month (Rush)</SelectItem>
                      <SelectItem value="1-3 months">1-3 months</SelectItem>
                      <SelectItem value="3-6 months">3-6 months</SelectItem>
                      <SelectItem value="6+ months">Long term project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full h-12 text-lg glow-blue font-bold rounded-xl" disabled={loading}>
                  Generate Free Consultation <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}