import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { ProjectEstimator } from "@/components/sections/ProjectEstimator";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Partners/Clientele Section */}
      <Partners />

      {/* 3. Who We Are (Overview) */}
      <section id="about-overview" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">
                WHO WE ARE
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                Empowering Businesses Worldwide with <span className="text-primary">CRM Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                One of the best Salesforce development companies in India, Klique primarily serves clients from the USA, UK, Australia, and the APAC region. We focus on providing scalable, high-quality solutions for the most challenging business issues.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Trusted Experts</h4>
                    <p className="text-sm text-muted-foreground">20+ years of collective excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Client Centric</h4>
                    <p className="text-sm text-muted-foreground">Empathy driven solutions</p>
                  </div>
                </div>
              </div>
              <Button asChild className="rounded-full h-12 px-8">
                <Link href="/about">Read Our Story <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
              <img 
                src="https://picsum.photos/seed/klique-team/800/600" 
                alt="Klique Team" 
                className="relative rounded-3xl shadow-2xl border border-blue-50"
                data-ai-hint="team office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <Services />

      {/* 5. Technologies Section */}
      <Technologies />

      {/* 6. AI & Innovation Highlight */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-6xl font-headline font-bold">Leading the <span className="text-accent">AI Revolution</span></h2>
              <p className="text-xl text-primary-foreground/90 max-w-xl">
                We integrate cutting-edge Artificial Intelligence and Automation to transform your business processes and predictive capabilities.
              </p>
              <Button variant="outline" asChild className="rounded-full h-12 px-8 border-white/20 hover:bg-white/10 text-white">
                <Link href="/services/ai">Explore AI Solutions</Link>
              </Button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                <Zap className="w-10 h-10 mb-4 text-accent" />
                <h4 className="font-bold text-xl mb-2">Automation</h4>
                <p className="text-sm text-primary-foreground/70">Seamless workflow optimizations.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 translate-y-8">
                <Cloud className="w-10 h-10 mb-4 text-accent" />
                <h4 className="font-bold text-xl mb-2">Cloud AI</h4>
                <p className="text-sm text-primary-foreground/70">Scalable intelligence in the cloud.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Case Studies / Portfolio */}
      <Portfolio />

      {/* 8. Project Estimator (AI Tool) */}
      <ProjectEstimator />

      {/* 9. Testimonials Section */}
      <Testimonials />

      {/* 10. Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-20 text-center text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] -mr-48 -mt-48" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-bold">Ready to Scale Your Vision?</h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Join hundreds of global businesses that trust Klique for their most challenging digital transformations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 font-bold px-10">
                  Start Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 font-bold px-10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}