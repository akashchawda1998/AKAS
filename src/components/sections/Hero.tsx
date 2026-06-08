"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Globe2, Sparkles, Activity } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 overflow-hidden bg-transparent">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-blue-100 bg-white/50 backdrop-blur-md shadow-sm text-primary text-xs font-black tracking-[0.2em] uppercase animate-in fade-in slide-in-from-top-4 duration-1000">
              <Sparkles className="w-4 h-4 text-accent" /> Global IT & CRM Excellence
            </div>
            
            <h1 className="font-headline text-7xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Building the <br />
              <span className="text-gradient">Future Now.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Klique provides elite CRM architecture and next-gen IT solutions, empowering enterprises to dominate the digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500 pt-4">
              <Button size="lg" className="h-18 px-14 rounded-full text-2xl font-black bg-primary text-white shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                Get Started <ArrowRight className="ml-3 w-7 h-7" />
              </Button>
              <Button size="lg" variant="outline" className="h-18 px-12 rounded-full text-2xl font-black border-blue-100 bg-white/50 text-primary hover:bg-white transition-all">
                <PlayCircle className="mr-3 w-7 h-7" /> Our Story
              </Button>
            </div>

            {/* Metrics Ticker */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 pt-24 w-full max-w-5xl border-t border-blue-100/50 animate-in fade-in duration-1000 delay-700">
              {[
                { val: "20+", label: "Years Impact", icon: Activity },
                { val: "150+", label: "Elite Clients", icon: Globe2 },
                { val: "50+", label: "Tech Experts", icon: Sparkles },
                { val: "99%", label: "Satisfaction", icon: Activity }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 group cursor-default">
                  <div className="text-5xl font-headline font-black text-foreground group-hover:text-primary transition-colors">{stat.val}</div>
                  <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
