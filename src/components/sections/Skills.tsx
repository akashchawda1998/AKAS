"use client";

import { Sparkles, Cpu, ShieldCheck, Cloud, Layers, Users } from "lucide-react";

const SKILLS = [
  {
    title: "Product Strategy",
    desc: "Research-backed product plans that align technology with measurable business growth.",
    icon: Sparkles,
    accent: "bg-gradient-to-br from-blue-600 to-cyan-400"
  },
  {
    title: "AI & Data Engineering",
    desc: "Intelligent systems, predictive models, and automation pipelines built for scale.",
    icon: Cpu,
    accent: "bg-gradient-to-br from-cyan-600 to-slate-900"
  },
  {
    title: "Cybersecurity",
    desc: "Zero-trust security, compliance readiness, and resilient defense for enterprise ecosystems.",
    icon: ShieldCheck,
    accent: "bg-gradient-to-br from-slate-800 to-blue-700"
  },
  {
    title: "Cloud Architecture",
    desc: "Flexible multi-cloud infrastructure designed for performance, reliability, and cost control.",
    icon: Cloud,
    accent: "bg-gradient-to-br from-indigo-600 to-sky-500"
  },
  {
    title: "UX & Design",
    desc: "Human-first digital experiences that feel effortless, modern, and highly polished.",
    icon: Layers,
    accent: "bg-gradient-to-br from-fuchsia-600 to-pink-500"
  },
  {
    title: "Enterprise Delivery",
    desc: "Cross-functional delivery with agile teams, clear governance, and rapid time-to-value.",
    icon: Users,
    accent: "bg-gradient-to-br from-teal-600 to-slate-900"
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-300 mb-4">Core Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight">Skills That Turn Ambition Into Impact.</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            From engineering strategy and platform modernization to AI enablement and security operations, we deliver a full-stack edge for growth-focused companies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <div key={index} className="group rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-xl shadow-slate-950/30 transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
              <div className={`p-10 ${skill.accent}`}>
                <skill.icon className="w-10 h-10 text-white" />
              </div>
              <div className="p-10 bg-slate-950">
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-slate-400 leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
