import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { ProjectEstimator } from "@/components/sections/ProjectEstimator";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Users, Zap, CheckCircle2, Globe, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Partners/Clientele Section */}
      <Partners />

      {/* 3. Who We Are (Overview) */}
      <section id="about-overview" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
                Who We Are
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold leading-[1.1] text-foreground">
                More than <span className="text-primary italic">20+ years</span> of IT Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                One of the best Salesforce development companies in India, Klique primarily serves clients from the USA, UK, Australia, and the APAC region. We focus on providing scalable, high-quality, amazing solutions for the most challenging business issues.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Trusted Experts</h4>
                    <p className="text-sm text-muted-foreground">Certified professionals with global domain expertise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Client Centric</h4>
                    <p className="text-sm text-muted-foreground">We prioritize your growth and long-term success.</p>
                  </div>
                </div>
              </div>
              <Button asChild className="rounded-full h-14 px-10 text-lg font-bold glow-blue">
                <Link href="/about">Read Our Story <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full animate-float" />
              <img 
                src="https://picsum.photos/seed/klique-team-alt/900/700" 
                alt="Klique Team" 
                className="relative rounded-[3rem] shadow-3xl border border-blue-50 w-full object-cover aspect-[4/3]"
                data-ai-hint="team office meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <Services />

      {/* 5. Our Process (The "8-10 Sections" requirement) */}
      <section className="py-24 bg-blue-50/30 border-y border-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Methodology</h2>
             <h3 className="text-4xl md:text-5xl font-headline font-bold">How We Deliver Excellence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Discover", desc: "Understanding your unique business challenges and goals.", icon: Globe },
              { step: "02", title: "Strategy", desc: "Crafting a scalable technical roadmap for success.", icon: Rocket },
              { step: "03", title: "Build", desc: "Agile development using cutting-edge technologies.", icon: Zap },
              { step: "04", title: "Scale", desc: "Ongoing support and optimization for global growth.", icon: Cloud }
            ].map((item, i) => (
              <div key={i} className="relative space-y-6 group">
                <div className="text-7xl font-headline font-black text-blue-100 group-hover:text-primary/10 transition-colors">{item.step}</div>
                <div className="space-y-2">
                   <h4 className="text-2xl font-bold">{item.title}</h4>
                   <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technologies Section */}
      <Technologies />

      {/* 7. AI & Innovation Highlight */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-accent font-bold text-xs uppercase tracking-widest">Innovation Hub</div>
              <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight">Leading the <span className="text-accent">AI Revolution</span></h2>
              <p className="text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
                We integrate cutting-edge Artificial Intelligence and Automation to transform your business processes into predictive, high-efficiency engines.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Predictive Analytics", "Custom NLP", "Vision AI", "Smart Automation"].map((tag) => (
                  <span key={tag} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> {tag}
                  </span>
                ))}
              </div>
              <Button size="lg" variant="outline" asChild className="rounded-full h-14 px-10 border-white/20 hover:bg-white/10 text-white text-lg font-bold">
                <Link href="/services/ai">Explore AI Solutions</Link>
              </Button>
            </div>
            <div className="flex-1 relative">
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 p-8 rounded-[2rem] backdrop-blur-md border border-white/10 animate-float">
                    <Zap className="w-12 h-12 mb-6 text-accent" />
                    <h4 className="font-bold text-2xl mb-2">Automation</h4>
                    <p className="text-primary-foreground/70">Seamless workflow optimizations that save time and costs.</p>
                  </div>
                  <div className="bg-white/10 p-8 rounded-[2rem] backdrop-blur-md border border-white/10 translate-y-12">
                    <Cloud className="w-12 h-12 mb-6 text-accent" />
                    <h4 className="font-bold text-2xl mb-2">Cloud AI</h4>
                    <p className="text-primary-foreground/70">Scalable intelligence deployed securely in the cloud.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Case Studies / Portfolio */}
      <Portfolio />

      {/* 9. Project Estimator (AI Tool) */}
      <ProjectEstimator />

      {/* 10. Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[4rem] overflow-hidden bg-primary p-12 md:p-24 text-center text-white">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[150px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-[150px] -ml-64 -mb-64" />
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-headline font-bold">Ready to Scale Your Vision?</h2>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Join the global leaders who trust Klique for their most challenging digital transformations. Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 font-bold px-12 h-16 text-xl">
                  Work With Us
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 font-bold px-12 h-16 text-xl">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
