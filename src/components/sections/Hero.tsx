"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/5 text-primary text-xs font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ShieldCheck className="w-4 h-4" /> GLOBAL LEADER IN CRM SOLUTIONS
          </div>
          
          <h1 className="font-headline text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 text-foreground">
            Empowering Your Business <br />
            <span className="text-primary italic">With Modern Tech</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            committed to providing world-class CRM solutions that help businesses of all sizes grow and succeed. Specialized in Salesforce, Web, Mobile, and AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-primary text-white glow-blue">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg font-bold border-blue-100 hover:bg-blue-50 transition-all text-primary">
              Our Vision
            </Button>
          </div>
        </div>

        {/* Global Presence Highlight */}
        <div className="mt-20 pt-12 border-t border-blue-50 animate-in fade-in duration-1000 delay-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Global Presence</p>
              <div className="flex items-center gap-4 text-xl font-headline font-bold text-foreground opacity-70">
                <span>USA</span> • <span>UK</span> • <span>AUSTRALIA</span> • <span>INDIA</span>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-xs font-bold text-muted-foreground uppercase">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-xs font-bold text-muted-foreground uppercase">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}