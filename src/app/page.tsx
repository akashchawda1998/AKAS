import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { ProjectEstimator } from "@/components/sections/ProjectEstimator";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Users, Zap, Globe, Rocket, Terminal, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20 lg:pt-28">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Tech Partners */}
      <Partners />

      {/* 3. Who We Are (Intro) */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/klique-office/800/600" 
                alt="Who We Are" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
                data-ai-hint="modern tech office team"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 p-8 rounded-xl text-white z-20 hidden md:block">
                <p className="text-4xl font-bold">20+</p>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Years Excellence</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">Empowering Businesses Worldwide with <span className="text-blue-600">IT Solutions</span></h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Klique is a global leader specializing in world-class CRM solutions and high-end IT services. We primarily serve elite clients from the USA, UK, Australia, and the APAC region.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Scalable Enterprise Solutions",
                  "Expert Salesforce Consultation",
                  "Cutting-edge AI Integration",
                  "Human-Centric UI/UX Design"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-primary mt-8">
                <Link href="/about">Read More <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Services (Grid) */}
      <Services />

      {/* 5. Why Choose Us (Process) */}
      <section className="section-padding bg-blue-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Our Methodology</h2>
            <h3 className="text-3xl md:text-5xl font-bold">How We Scale Visions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Discovery", icon: Globe, desc: "We analyze your business needs and market landscape." },
              { title: "Engineering", icon: Terminal, desc: "Custom development with the latest tech stack." },
              { title: "Testing", icon: Shield, desc: "Rigorous quality assurance for flawless delivery." },
              { title: "Deployment", icon: Rocket, desc: "Seamless launch and ongoing optimization support." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technologies We Work With */}
      <Technologies />

      {/* 7. AI Highlight Section */}
      <section className="section-padding bg-blue-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-blue-300 uppercase tracking-widest">Next-Gen Innovation</h2>
              <h3 className="text-4xl md:text-6xl font-bold leading-tight">Mastering the <span className="text-blue-400">AI Frontier</span></h3>
              <p className="text-xl text-blue-100/80 leading-relaxed">
                We integrate intelligent automation and generative AI into your business DNA. From predictive Salesforce analytics to custom NLP agents.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Neural Networks", "Cognitive Automation", "Generative AI"].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm font-semibold">{tag}</span>
                ))}
              </div>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/services/ai">Explore AI Labs</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/ai-lab/800/600" 
                alt="AI Innovation" 
                className="rounded-2xl shadow-2xl w-full"
                data-ai-hint="futuristic processor digital"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Portfolio Showcase */}
      <Portfolio />

      {/* 9. AI Technical Assistant */}
      <ProjectEstimator />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* Global CTA */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-6xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join 150+ global enterprises that trust Klique for their most critical digital transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 h-14">Get Started Now</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-10 h-14">Schedule a Call</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
