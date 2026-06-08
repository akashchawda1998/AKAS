import { ArrowRight, Target, Eye, Quote, Users, Globe, Heart, ShieldCheck, Trophy, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="pt-24 bg-white">
      {/* Elegant Header */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black tracking-[0.3em] uppercase mb-10">
            Heritage & Innovation
          </div>
          <h1 className="text-6xl md:text-[8rem] font-headline font-black mb-12 leading-[0.9] tracking-tighter">
            We Build <span className="text-primary italic">Systems</span> <br /> that Last.
          </h1>
          <p className="text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto">
            Founded by five driven visionaries, Klique is more than a firm—it's a mission to restore empathy to technology through elite CRM solutions.
          </p>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://picsum.photos/seed/klique-structure/1000/1200" 
                alt="Architecture" 
                className="rounded-[4rem] shadow-3xl w-full aspect-[4/5] object-cover"
                data-ai-hint="modern architectural building"
              />
              <div className="absolute -bottom-12 -left-12 p-12 bg-primary rounded-[3rem] text-white shadow-2xl shadow-primary/30 hidden lg:block">
                 <Trophy className="w-16 h-16 mb-6 text-accent" />
                 <h4 className="text-3xl font-black">20+ Years</h4>
                 <p className="text-primary-foreground/70 font-bold uppercase tracking-widest text-xs">Industry Leadership</p>
              </div>
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-headline font-black leading-tight">Mastering the <span className="text-gradient">IT Landscape</span></h2>
              <div className="space-y-8 text-xl text-muted-foreground font-medium leading-relaxed">
                <p>
                  As a leading Salesforce development house in India, Klique serves as a bridge for global enterprises in the USA, UK, and APAC regions to access world-class engineering.
                </p>
                <p>
                  We don't just deliver products; we build long-term relationships. By exceeding expectations through cutting-edge solutions, we've maintained a 99% client retention rate over two decades.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 border-t border-blue-50 pt-12">
                <div>
                   <div className="text-5xl font-black text-foreground">150+</div>
                   <div className="text-xs font-black text-primary uppercase tracking-widest mt-2">Global Deployments</div>
                </div>
                <div>
                   <div className="text-5xl font-black text-foreground">50+</div>
                   <div className="text-xs font-black text-primary uppercase tracking-widest mt-2">Expert Consultants</div>
                </div>
              </div>
              <Button size="lg" className="h-16 px-12 modern-btn text-xl bg-primary">Start Your Transformation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Unique Cards */}
      <section className="section-padding bg-foreground text-white rounded-[5rem] mx-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-16 rounded-[4rem] bg-white/5 border border-white/10 space-y-8 hover:bg-white/10 transition-all group">
              <div className="w-24 h-24 rounded-3xl bg-accent flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
                <Target className="w-12 h-12" />
              </div>
              <div className="space-y-6">
                <h3 className="text-xs font-black text-accent uppercase tracking-[0.4em]">The Mandate</h3>
                <h4 className="text-5xl font-headline font-black">Our Mission</h4>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  We are here to dismantle the "robotic" nature of software development. By restoring empathy and deep business intelligence to every solution, we transform how companies operate.
                </p>
              </div>
            </div>
            <div className="p-16 rounded-[4rem] bg-white/5 border border-white/10 space-y-8 hover:bg-white/10 transition-all group">
              <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-white transform group-hover:-rotate-6 transition-transform">
                <Eye className="w-12 h-12" />
              </div>
              <div className="space-y-6">
                <h3 className="text-xs font-black text-primary uppercase tracking-[0.4em]">The Future</h3>
                <h4 className="text-5xl font-headline font-black">Our Vision</h4>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  To be the global authority in Salesforce innovation, providing cloud architecture that not only solves problems but anticipates the future of enterprise commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Wisdom */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-blue-50/50 p-16 md:p-32 rounded-[5rem] border border-blue-100 flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
                <img 
                  src="https://picsum.photos/seed/klique-lead/800/800" 
                  alt="Leadership" 
                  className="relative rounded-full shadow-2xl aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  data-ai-hint="professional business leader portrait"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-12">
              <Quote className="w-24 h-24 text-primary opacity-20" />
              <div className="text-3xl md:text-5xl font-headline font-semibold italic text-foreground leading-[1.3]">
                "We cherish the humans behind the data. Our success is measured by the balance we maintain between global engineering excellence and personal connection."
              </div>
              <div className="pt-10 border-t border-blue-100 flex justify-between items-end">
                <div>
                  <p className="text-3xl font-black text-foreground">Klique Leadership Team</p>
                  <p className="text-primary font-black uppercase text-xs tracking-[0.4em] mt-2">Founding Visionaries</p>
                </div>
                <Landmark className="w-16 h-16 text-primary opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Stat Cloud */}
      <section className="section-padding border-y border-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-xs font-black text-muted-foreground tracking-[0.4em] uppercase mb-20">Dominance in Global Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            {[
              { label: "Expert Consultants", val: "50+", icon: Users },
              { label: "Nations Served", val: "15+", icon: Globe },
              { label: "Partner Love", val: "99%", icon: Heart },
              { label: "Secure Ops", val: "100%", icon: ShieldCheck }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-6">
                <stat.icon className="w-12 h-12 mx-auto text-primary/30" />
                <div className="text-6xl font-headline font-black text-foreground">{stat.val}</div>
                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <h2 className="text-6xl md:text-8xl font-headline font-black leading-tight tracking-tighter">Ready to Scale your <br /> Global Vision?</h2>
          <Button size="lg" className="h-18 px-14 modern-btn text-2xl bg-white text-primary hover:bg-blue-50 shadow-2xl">
            Book Strategic Consultation <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
        </div>
      </section>
    </div>
  );
}
