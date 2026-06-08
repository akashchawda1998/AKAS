"use client";

import { 
  Code, 
  Cpu, 
  Cloud, 
  ShieldAlert, 
  Smartphone, 
  Settings2,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Web Engineering",
    desc: "Next-gen React and Next.js platforms optimized for high performance and global scale.",
    icon: Code,
    color: "bg-blue-500"
  },
  {
    title: "AI & Innovation",
    desc: "Custom Generative AI models and predictive analytics integrated into your business DNA.",
    icon: Cpu,
    color: "bg-cyan-500"
  },
  {
    title: "Cloud Infrastructure",
    desc: "AWS and Azure management with a focus on high availability and serverless architecture.",
    icon: Cloud,
    color: "bg-indigo-500"
  },
  {
    title: "CyberSecurity",
    desc: "Enterprise-grade protection, threat detection, and zero-trust security implementation.",
    icon: ShieldAlert,
    color: "bg-red-500"
  },
  {
    title: "Mobile Dominance",
    desc: "Native iOS and Android experiences built with Flutter and React Native.",
    icon: Smartphone,
    color: "bg-emerald-500"
  },
  {
    title: "DevOps & Scale",
    desc: "Continuous integration and delivery pipelines that accelerate your time-to-market.",
    icon: Settings2,
    color: "bg-amber-500"
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em]">What We Do</h2>
          <h3 className="text-5xl md:text-8xl font-serif font-black text-slate-900">
            End-to-End <br /> <span className="text-gradient">IT Solutions.</span>
          </h3>
          <p className="text-xl text-slate-500 font-medium">
            We solve the most complex business problems through elite technical engineering and creative vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((s, i) => (
            <div key={i} className="glass-card p-12 group hover:bg-slate-900 hover:border-slate-800">
              <div className={`w-20 h-20 ${s.color} rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-xl`}>
                <s.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-serif font-black mb-6 text-slate-900 group-hover:text-white transition-colors">
                {s.title}
              </h4>
              <p className="text-lg text-slate-500 group-hover:text-slate-400 leading-relaxed mb-10 transition-colors">
                {s.desc}
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold group-hover:text-white transition-all hover:gap-4">
                Explore Tech <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}