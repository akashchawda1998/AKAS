import { Globe, Layout, Smartphone, Search, Zap, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WebDevPage() {
  const stacks = [
    { name: "Enterprise Portals", desc: "Complex business applications built for security and scale.", icon: Layout },
    { name: "E-Commerce", desc: "Conversion-optimized stores with seamless payment flows.", icon: Globe },
    { name: "Progressive Web Apps", desc: "Native-like experiences delivered through the browser.", icon: Smartphone },
    { name: "CMS Solutions", desc: "Custom Headless CMS implementations for content control.", icon: Search }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Dynamic Header */}
      <section className="section-padding bg-foreground text-white relative overflow-hidden rounded-b-[4rem]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[150px] -z-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold mb-10 tracking-[0.3em] uppercase">
              <Code className="w-4 h-4" /> Next-Gen Engineering
            </div>
            <h1 className="text-6xl md:text-[8rem] font-headline font-black mb-12 leading-[0.9] tracking-tighter">
              Performance <span className="text-accent italic">Driven</span> <br /> Web Ecosystems.
            </h1>
            <p className="text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl mb-12">
              We engineer fast, accessible, and ultra-secure web platforms using the most advanced frameworks like Next.js and React.
            </p>
            <Button size="lg" className="h-18 px-12 modern-btn text-2xl bg-primary shadow-2xl shadow-primary/30">
              Start Project
            </Button>
          </div>
        </div>
      </section>

      {/* Stack Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {stacks.map((item, i) => (
              <div key={i} className="p-16 rounded-[4rem] bg-blue-50/50 border border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <item.icon className="w-20 h-20 text-primary mb-10 transform group-hover:-rotate-12 transition-transform" />
                <h3 className="text-4xl font-black mb-4">{item.name}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-5xl md:text-7xl font-headline font-black leading-tight">Speed as a <span className="text-gradient">Core Feature</span></h2>
              <div className="space-y-8">
                {[
                  "Optimized Core Web Vitals for better SEO.",
                  "Server-side rendering for instant loading.",
                  "Enterprise-grade security and SSL protocols.",
                  "Responsive architectures for every device size."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-medium text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="h-16 px-10 modern-btn text-xl bg-foreground text-white">View Case Studies</Button>
            </div>
            <div className="lg:w-1/2 relative">
               <img 
                 src="https://picsum.photos/seed/klique-web/1000/800" 
                 alt="Web Tech" 
                 className="rounded-[3rem] shadow-3xl"
                 data-ai-hint="modern sleek computer setup"
               />
               <div className="absolute -inset-10 bg-primary/5 blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
