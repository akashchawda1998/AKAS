"use client";

import { Code, Cloud, Smartphone, Database, Globe, Layers, Shield, Cpu } from "lucide-react";

const TECHS = [
  { name: "Salesforce", icon: Cloud, color: "text-blue-500" },
  { name: "Next.js", icon: Globe, color: "text-black" },
  { name: "React Native", icon: Smartphone, color: "text-cyan-500" },
  { name: "Node.js", icon: Code, color: "text-green-500" },
  { name: "AWS", icon: Database, color: "text-orange-500" },
  { name: "Python", icon: Cpu, color: "text-blue-600" },
  { name: "Flutter", icon: Layers, color: "text-blue-400" },
  { name: "CyberSecurity", icon: Shield, color: "text-red-500" },
];

export function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Technologies We Work With</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We stay ahead of the curve by mastering the most advanced technologies to build future-ready ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TECHS.map((tech, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-blue-50 bg-blue-50/10 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center">
              <tech.icon className={`w-12 h-12 mb-6 ${tech.color} transition-transform group-hover:scale-110`} />
              <h4 className="font-bold text-lg">{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
