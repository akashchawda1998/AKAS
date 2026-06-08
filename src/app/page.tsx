import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { ProjectEstimator } from "@/components/sections/ProjectEstimator";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Users, Zap, CheckCircle2, Globe, Rocket, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Mesh Background */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none -z-10" />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Tech Partners */}
      <Partners />

      {/* 3. Who We Are Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-all duration-1000" />
              <img 
                src="https://picsum.photos/seed/klique-impact/1000/800" 
                alt="Impact" 
                className="relative rounded-[3.5rem] shadow-2xl border border-white/50 w-full object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700"
                data-ai-hint="team collaborating professional"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-blue-50 hidden md:block animate-float">
                 <div className="text-4xl font-headline font-black text-primary">20+</div>
                 <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase">
                <Shield className="w-4 h-4" /> Trusted Excellence
              </div>
              <h2 className="text-5xl md:text-7xl font-headline font-extrabold leading-[1.05] text-foreground">
                Solving Complex <span className="text-gradient">Business Challenges</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As a global leader in Salesforce development and IT solutions, we specialize in transforming legacy systems into high-performance digital ecosystems. We primarily serve elite clients across the USA, UK, and APAC regions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: "Scalable Solutions", icon: Zap, desc: "Built for long-term growth and global reach." },
                  { title: "User-Centric", icon: Users, desc: "Empathetic design focused on the end-user." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100/50 hover:bg-white transition-colors group">
                    <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="modern-btn h-16 px-12 text-lg shadow-xl shadow-primary/20 bg-primary">
                <Link href="/about">Our Philosophy <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <Services />

      {/* 5. Our Global Methodology */}
      <section className="section-padding bg-blue-50/30 border-y border-blue-100/50 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
             <h2 className="text-sm font-black text-primary tracking-[0.3em] uppercase">The Klique Blueprint</h2>
             <h3 className="text-4xl md:text-6xl font-headline font-black">How We Scale Visions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {[
              { title: "Discover", icon: Globe, val: "01", color: "bg-blue-600" },
              { title: "Engineer", icon: Terminal, val: "02", color: "bg-accent" },
              { title: "Optimize", icon: Rocket, val: "03", color: "bg-blue-500" },
              { title: "Evolve", icon: Zap, val: "04", color: "bg-primary" }
            ].map((item, i) => (
              <div key={i} className="group relative pt-12">
                <div className={`absolute top-0 left-0 w-16 h-16 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl transition-transform group-hover:-translate-y-2 ${item.color}`}>
                  {item.val}
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white border border-blue-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 min-h-[220px]">
                   <item.icon className="w-10 h-10 text-primary mb-6 opacity-20" />
                   <h4 className="text-2xl font-black mb-3">{item.title}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">Systematic approach ensuring excellence at every stage of development.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Stack */}
      <Technologies />

      {/* 7. AI Innovation Showcase */}
      <section className="section-padding bg-foreground text-white overflow-hidden relative rounded-[4rem] mx-6 my-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-accent font-bold text-xs uppercase tracking-[0.2em]">Next-Gen Innovation</div>
              <h2 className="text-6xl md:text-8xl font-headline font-black leading-tight">Mastering the <span className="text-accent italic">AI Frontier.</span></h2>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                We don't just use AI; we engineer intelligence into your business fabric. From custom NLP models to predictive Salesforce analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Neural Networks", "Generative AI", "Cognitive Automation"].map((tag) => (
                  <div key={tag} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> {tag}
                  </div>
                ))}
              </div>
              <Button size="lg" asChild className="h-16 px-10 rounded-full bg-white text-foreground hover:bg-accent hover:text-white transition-all font-bold text-lg">
                <Link href="/services/ai">Explore AI Labs</Link>
              </Button>
            </div>
            <div className="relative">
               <div className="aspect-square rounded-[4rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-12 relative overflow-hidden group">
                  <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-primary/20 blur-[120px] group-hover:bg-primary/40 transition-all duration-1000" />
                  <div className="relative z-10 grid grid-cols-2 gap-8 h-full">
                     <div className="flex flex-col justify-end p-8 rounded-3xl bg-white/5 border border-white/10 animate-float">
                        <Zap className="w-12 h-12 text-accent mb-4" />
                        <h4 className="font-black text-2xl">Speed</h4>
                     </div>
                     <div className="flex flex-col justify-start p-8 rounded-3xl bg-primary shadow-2xl translate-y-8">
                        <Shield className="w-12 h-12 text-white mb-4" />
                        <h4 className="font-black text-2xl text-white">Trust</h4>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Portfolio Showcase */}
      <Portfolio />

      {/* 9. AI Consultation Tool */}
      <ProjectEstimator />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* Global CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[5rem] overflow-hidden bg-primary py-24 px-12 md:px-24 text-center text-white shadow-2xl shadow-primary/30">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/30 blur-[180px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/20 blur-[180px] -ml-64 -mb-64" />
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <h2 className="text-6xl md:text-8xl font-headline font-black leading-tight tracking-tighter">Ready to Redefine <br /> the Status Quo?</h2>
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed font-medium">
                Join the global market leaders who trust Klique for their most critical digital transformations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button size="lg" className="h-18 px-14 rounded-full bg-white text-primary hover:bg-blue-50 transition-all font-black text-2xl shadow-2xl">
                  Let's Collaborate
                </Button>
                <Button size="lg" variant="outline" className="h-18 px-14 rounded-full border-white/30 text-white hover:bg-white/10 transition-all font-black text-2xl">
                  Speak to Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
