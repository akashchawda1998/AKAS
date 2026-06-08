"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[140px]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-primary text-xs font-bold mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles className="w-4 h-4 text-accent" /> GLOBAL LEADER IN CRM & IT SOLUTIONS
          </div>
          
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 text-foreground">
            Empowering Your <br />
            <span className="text-primary">Global Vision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Klique provides world-class CRM solutions and IT expertise, helping businesses of all sizes scale and succeed in the digital era.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Button size="lg" className="rounded-full h-16 px-12 text-xl font-bold bg-primary text-white glow-blue hover:scale-105 transition-all">
              Start Your Journey <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-xl font-bold border-blue-100 hover:bg-blue-50 transition-all text-primary">
              <PlayCircle className="mr-2 w-6 h-6" /> Our Story
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-blue-50/50 animate-in fade-in duration-1000 delay-500">
          <div>
            <div className="text-4xl font-headline font-bold text-primary">20+</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-primary">150+</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Global Projects</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-primary">50+</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Expert Techs</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-primary">99%</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
