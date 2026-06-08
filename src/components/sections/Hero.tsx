"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card border-blue-100/50 text-blue-700 text-sm font-bold tracking-wider uppercase mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Sparkles className="w-4 h-4 text-cyan-500" /> Defining the Digital Frontier
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Visionary <span className="text-gradient">Tech</span> <br />
            Architected <span className="italic font-light">for You.</span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-500 max-w-4xl leading-relaxed mb-12 font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            kLIQUE Technologies is a global powerhouse providing elite Cloud, AI, and Cybersecurity solutions that empower enterprises to dominate the landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button size="lg" className="h-20 px-16 rounded-full text-2xl font-bold bg-primary hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
              Start Your Journey <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
            <Button size="lg" variant="outline" className="h-20 px-16 rounded-full text-2xl font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all">
              <PlayCircle className="mr-3 w-7 h-7" /> Our Story
            </Button>
          </div>

          <div className="mt-24 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-16 animate-in fade-in duration-1000 delay-700">
            {[
              { val: "20+", label: "Years Impact" },
              { val: "150+", label: "Global Clients" },
              { val: "50+", label: "Elite Engineers" },
              { val: "99%", label: "Success Rate" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl font-serif font-black text-slate-900 group-hover:text-primary transition-colors">{stat.val}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}