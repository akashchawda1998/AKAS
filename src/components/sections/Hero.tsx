"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-mesh" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            NEXT-GEN IT SOLUTIONS
          </div>
          
          <h1 className="font-headline text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Transforming Ideas Into <br />
            <span className="text-gradient">Scalable Digital Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            We build intelligent websites, powerful mobile applications, and result-driven Salesforce solutions that help businesses, NGOs, and communities grow faster in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg font-semibold glow-blue">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-semibold glass hover:bg-white/5 transition-all">
              <PlayCircle className="mr-2 w-5 h-5 text-accent" /> Book Free Consultation
            </Button>
          </div>
        </div>

        {/* Brand Proof */}
        <div className="mt-24 pt-12 border-t border-white/5 animate-in fade-in duration-1000 delay-500">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Trusted by visionary brands</p>
          <div className="flex flex-wrap items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-headline font-bold">O2Bharat</span>
            <span className="text-2xl font-headline font-bold">DigitalEdge</span>
            <span className="text-2xl font-headline font-bold">CloudNova</span>
            <span className="text-2xl font-headline font-bold">InnoTech</span>
          </div>
        </div>
      </div>
    </section>
  );
}