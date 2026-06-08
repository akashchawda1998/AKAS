import { Database, CheckCircle2, ArrowRight, Layers, Zap, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SalesforcePage() {
  const offerings = [
    { title: "Salesforce Implementation", desc: "End-to-end setup and configuration of your CRM ecosystem." },
    { title: "Custom App Development", desc: "Bespoke Lightning components and applications tailored to your UX." },
    { title: "Data Migration", desc: "Securely migrating legacy data into the Salesforce cloud with zero loss." },
    { title: "Automated Workflows", desc: "Replacing manual tasks with powerful Flow and Apex automation." }
  ];

  return (
    <div className="pt-24">
      <section className="bg-primary py-32 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold mb-8 uppercase tracking-widest">
              <Database className="w-4 h-4" /> CRM Mastery
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold mb-8 leading-tight">World-Class <span className="text-accent">Salesforce</span> Solutions</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-12 max-w-2xl">
              As a global leader in Salesforce development, we help businesses find simple solutions to complex technical challenges.
            </p>
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 font-bold px-12 h-16 text-xl">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((f, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-blue-50 bg-blue-50/20 hover:shadow-xl hover:border-primary/20 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  <Database className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Why Klique for Salesforce?</h2>
              <div className="space-y-6">
                {[
                  "20+ years of collective platform experience.",
                  "Proven track record with global enterprises in USA and UK.",
                  "Focus on human-centric UX in CRM environments.",
                  "Expertise in complex multi-cloud integrations.",
                  "Post-launch support and training for your teams."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-xl text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold glow-blue">
                Consult with Experts <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full" />
               <img 
                 src="https://picsum.photos/seed/sf-tech/900/700" 
                 alt="Salesforce Expertise" 
                 className="relative rounded-[3rem] shadow-3xl w-full border border-blue-50"
                 data-ai-hint="digital cloud data dashboard"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
