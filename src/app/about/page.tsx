import { ArrowRight, Target, Eye, Quote, Users, TrendingUp, Globe, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Header */}
      <section className="bg-blue-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Our Journey & Purpose
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold mb-8 leading-tight">
            Built on <span className="text-primary italic">Excellence</span> <br /> & Innovation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Five driven visionaries founded Klique with a single goal: building a Salesforce consultation and development firm that finds simple solutions to the most challenging business issues.
          </p>
        </div>
      </section>

      {/* Who We Are Detailed */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all" />
              <img 
                src="https://picsum.photos/seed/klique-office/800/1000" 
                alt="Our Workspace" 
                className="relative rounded-[2.5rem] shadow-2xl w-full"
                data-ai-hint="modern architectural office"
              />
            </div>
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">We Are Experts In <span className="text-primary">IT Solutions</span></h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  One of the best Salesforce development companies in India, Klique primarily serves clients from the USA, UK, Australia, and the APAC region and focuses on providing scalable, high-quality, amazing solutions for the most challenging business issues.
                </p>
                <p>
                  Our solutions, services, and products have assisted our clients in maximising their potential for growth thanks to our cutting-edge, best-in-class industry solutions that are supported by the most recent technology. By giving our clients more than they expected from us, we have maintained our connections.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                   <div className="text-4xl font-headline font-bold text-foreground">20+</div>
                   <div className="text-sm font-bold text-primary uppercase tracking-widest">Years Expertise</div>
                </div>
                <div className="flex flex-col gap-2">
                   <div className="text-4xl font-headline font-bold text-foreground">150+</div>
                   <div className="text-sm font-bold text-primary uppercase tracking-widest">Global Clients</div>
                </div>
              </div>
              <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold">Contact Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Unique Style */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-white p-12 rounded-[3.5rem] border border-blue-100 shadow-sm space-y-8 hover:shadow-xl transition-all duration-500">
              <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
                <Target className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Mission</h3>
                <h4 className="text-4xl font-headline font-bold">Our Mission Statement</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We want to transform the current environment, where developers have a robotic tendency to offer a simple fix without regard for the end-user. Along with our specialised Salesforce solutions, we make a strong effort to restore that empathy and compassion.
                </p>
              </div>
            </div>
            <div className="group bg-white p-12 rounded-[3.5rem] border border-blue-100 shadow-sm space-y-8 hover:shadow-xl transition-all duration-500">
              <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center text-white transform group-hover:-rotate-6 transition-transform">
                <Eye className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-accent uppercase tracking-[0.3em]">Our Vision</h3>
                <h4 className="text-4xl font-headline font-bold">Our Future Goals</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Klique hopes to be recognised as a creative leader in the Salesforce community, offering cloud solutions that alter the way organisations conduct business and aid them in staying one step ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto bg-blue-50/50 p-12 md:p-20 rounded-[4rem] border border-blue-50">
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl" />
                <img 
                  src="https://picsum.photos/seed/klique-founder/600/600" 
                  alt="Founder" 
                  className="relative rounded-full shadow-2xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="portrait professional man"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-10">
              <Quote className="w-20 h-20 text-primary/10" />
              <div className="space-y-6 text-2xl font-headline font-medium text-foreground italic leading-relaxed">
                <p>
                  "At Klique, we cherish each and every person connected to us, whether they are clients or workers. We have discovered a way to keep a good work-life balance for our staff in the face of such a competitive and dynamic industry without sacrificing the calibre of work we do for our clients."
                </p>
              </div>
              <div className="pt-4 border-t border-blue-100">
                <p className="font-headline font-bold text-2xl text-foreground">Klique Founding Team</p>
                <p className="text-primary font-bold uppercase text-sm tracking-[0.3em]">Visionaries & Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Stats */}
      <section className="py-24 bg-white border-y border-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-muted-foreground tracking-[0.4em] uppercase mb-16">Global Presence & Trust</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Expert Consultants", val: "50+", icon: Users },
              { label: "Countries Served", val: "15+", icon: Globe },
              { label: "Client Love", val: "99%", icon: Heart },
              { label: "Enterprise Secure", val: "100%", icon: ShieldCheck }
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <stat.icon className="w-8 h-8 mx-auto text-primary/50" />
                <div className="text-5xl font-headline font-bold text-foreground">{stat.val}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 space-y-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold">Want to transform your business?</h2>
          <Button size="lg" className="rounded-full bg-white text-primary hover:bg-blue-50 px-12 h-16 text-xl font-bold glow-blue">
            Book Free Consultation <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  );
}
