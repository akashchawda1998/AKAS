import { Smartphone, Zap, Layers, Cpu, Shield, ArrowRight, AppWindow } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileDevPage() {
  const solutions = [
    { title: "Native iOS", desc: "High-performance Swift applications for the Apple ecosystem.", icon: Smartphone },
    { title: "Native Android", desc: "Robust Kotlin-based apps optimized for Google Play.", icon: Cpu },
    { title: "Cross-Platform", desc: "React Native and Flutter apps for multi-platform dominance.", icon: Layers },
    { title: "Mobile Security", desc: "Biometric auth and advanced encryption protocols.", icon: Shield }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* High-Impact Header */}
      <section className="section-padding bg-primary text-white relative overflow-hidden rounded-b-[5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-black tracking-[0.3em] uppercase">
              <AppWindow className="w-4 h-4" /> Mobility Labs
            </div>
            <h1 className="text-6xl md:text-[9rem] font-headline font-black mb-12 leading-[0.85] tracking-tighter">
              Apps that <span className="text-accent italic">Move</span> <br /> the Needle.
            </h1>
            <p className="text-2xl text-primary-foreground/80 font-medium leading-relaxed max-w-3xl mx-auto">
              We build high-performance mobile experiences that bridge the gap between user desire and business results. From custom UI to complex backend sync.
            </p>
            <Button size="lg" className="h-18 px-14 modern-btn text-2xl bg-white text-primary shadow-2xl">
              Get Mobile Strategy
            </Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {solutions.map((s, i) => (
              <div key={i} className="p-12 rounded-[3.5rem] bg-blue-50/50 border border-blue-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:bg-primary transition-all">
                  <s.icon className="w-10 h-10 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 order-2 lg:order-1 relative">
               <img 
                 src="https://picsum.photos/seed/klique-mobile/1000/1200" 
                 alt="Mobile Experience" 
                 className="rounded-[4rem] shadow-2xl"
                 data-ai-hint="smartphone interface modern"
               />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-12">
              <h2 className="text-6xl md:text-8xl font-headline font-black leading-tight">Human-Centric <span className="text-accent">Mobility</span></h2>
              <p className="text-2xl text-muted-foreground font-medium leading-relaxed">
                Mobile isn't just a platform; it's the primary touchpoint for modern consumers. We focus on low-latency, high-engagement architectures.
              </p>
              <div className="space-y-8">
                {[
                  "Offline-first synchronization models.",
                  "Fluid animations and transitions.",
                  "Optimized battery and data consumption.",
                  "End-to-end DevOps for rapid updates."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xl font-bold text-white/80">{text}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="h-16 px-12 modern-btn text-xl bg-primary">Talk to Architects <ArrowRight className="ml-3 w-6 h-6" /></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
