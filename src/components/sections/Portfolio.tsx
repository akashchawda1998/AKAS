"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PROJECTS = [
  {
    title: "O2Bharat",
    tag: "Social Impact Platform",
    description: "A nationwide platform connecting businesses, professionals, and opportunities in India. Built for scale using Next.js and high-availability architecture.",
    image: PlaceHolderImages.find(img => img.id === "o2bharat")?.imageUrl || "https://picsum.photos/seed/o2b/1200/800",
    stats: ["1M+ Users", "99.9% Uptime", "Global Reach"]
  },
  {
    title: "NovaAdmin",
    tag: "Enterprise Dashboard",
    description: "Custom administrative suite for multi-national logistics company. Integrated with real-time tracking and automated reporting.",
    image: PlaceHolderImages.find(img => img.id === "project-1")?.imageUrl || "https://picsum.photos/seed/adm/1200/800",
    stats: ["Real-time Sync", "Multi-region", "Secure Auth"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Landmark Projects That <br /> Power The Future</h3>
          </div>
          <Button variant="outline" className="rounded-full h-12 px-6 glass">View All Projects</Button>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
              <div className="flex-1 w-full group">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass border-white/10 glow-blue">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint="modern web dashboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded bg-primary/10">{project.tag}</span>
                <h4 className="text-4xl font-headline font-bold">{project.title}</h4>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 py-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="px-4 py-2 rounded-lg bg-secondary/50 border border-white/5 text-sm font-medium">
                      {stat}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-6 pt-4">
                   <Button className="rounded-full glow-blue">View Case Study <ArrowRight className="ml-2 w-4 h-4" /></Button>
                   <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
                     Live Site <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}