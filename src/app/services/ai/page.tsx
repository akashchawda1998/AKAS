import { Cpu, Zap, Cloud, Shield, Database, BrainCircuit, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIPage() {
  const features = [
    { title: "Predictive Analytics", desc: "Forecast future trends with precision using historical data models.", icon: BrainCircuit },
    { title: "Custom Chatbots", desc: "Intelligent NLP agents for seamless customer support 24/7.", icon: Bot },
    { title: "Automated Workflows", desc: "Replace robotic manual tasks with smart trigger-based automation.", icon: Zap },
    { title: "Vision AI", desc: "Advanced image and video recognition for quality control and security.", icon: Cpu }
  ];

  return (
    <div className="pt-24">
      {/* Hero Header */}
      <section className="bg-primary py-32 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold mb-8">
              <Cpu className="w-4 h-4" /> AI & INNOVATION
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-8">Next-Gen <span className="text-accent">Artificial Intelligence</span> for Business</h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10">
              Transforming raw data into actionable intelligence. We help businesses integrate AI into their DNA, optimizing performance and scaling outcomes.
            </p>
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 font-bold px-10">
              Consult AI Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-10 rounded-3xl border border-blue-50 bg-blue-50/10 hover:shadow-xl hover:border-primary/20 transition-all text-center group">
                <f.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Driving Efficiency with Intelligent Automation</h2>
              <div className="space-y-6">
                {[
                  "Reduce operational costs by up to 40% with smart automation.",
                  "Improve customer response time by 80% using AI Chatbots.",
                  "Enhance decision-making with real-time predictive dashboards.",
                  "Seamless integration with your existing CRM and tech stack."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/ai-tech/800/600" 
                alt="AI Tech" 
                className="rounded-3xl shadow-2xl relative z-10"
                data-ai-hint="futuristic processor"
              />
              <div className="absolute -inset-10 bg-primary/5 blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
