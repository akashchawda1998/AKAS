"use client";

import { Target, Eye, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Who We Are</h2>
              <h3 className="text-5xl md:text-7xl font-serif font-black leading-[1] text-slate-900">
                Crafting Excellence <br /> <span className="text-gradient">Since 2004.</span>
              </h3>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              kLIQUE Technologies primarily serves global elite clients from the USA, UK, Australia, and APAC. We focus on providing scalable, high-quality, amazing solutions for the most challenging business issues.
            </p>

            <div className="p-10 glass-card bg-blue-900 border-none relative overflow-hidden group">
              <Quote className="absolute -top-4 -left-4 w-32 h-32 text-blue-400/10 group-hover:scale-110 transition-transform" />
              <p className="text-2xl text-blue-50 font-serif italic relative z-10 leading-relaxed">
                "We don't just build code; we restore empathy to technical solutions, ensuring the end-user is always at the heart of our architecture."
              </p>
              <div className="mt-8 flex items-center gap-4 text-blue-200">
                <div className="w-12 h-px bg-blue-200/30" />
                <span className="font-bold tracking-widest uppercase text-xs">The kLIQUE Founders</span>
              </div>
            </div>

            <Button size="lg" className="rounded-full h-16 px-10 text-xl font-bold shadow-xl shadow-primary/20">
              Read Our History <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-10">
              <div className="glass-card p-12 bg-slate-50/50 hover:bg-white transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-black mb-4">Our Mission</h4>
                <p className="text-slate-500 leading-relaxed">
                  To restore empathy and compassion in the digital landscape through human-centric Salesforce and AI solutions.
                </p>
              </div>
              <img src="https://picsum.photos/seed/klique-about-1/600/800" className="rounded-[3rem] shadow-2xl animate-float" alt="Team Work" data-ai-hint="team work" />
            </div>
            <div className="space-y-10 pt-12 md:pt-24">
              <img src="https://picsum.photos/seed/klique-about-2/600/800" className="rounded-[3rem] shadow-2xl" alt="Office Life" data-ai-hint="office collaboration" />
              <div className="glass-card p-12 bg-blue-600 text-white border-none hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-black mb-4 text-white">Our Vision</h4>
                <p className="text-blue-100 leading-relaxed">
                  To be recognized as a creative global leader in cloud innovation that alters how organizations conduct business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}