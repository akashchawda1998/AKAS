"use client";

import { Users, Layout, Trophy, Globe } from "lucide-react";

export function StatsCounter() {
  const stats = [
    { label: "Elite Clients", val: "150+", icon: Users },
    { label: "Projects Delivered", val: "500+", icon: Layout },
    { label: "Global Presence", val: "15+", icon: Globe },
    { label: "Awards Won", val: "24+", icon: Trophy }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          {stats.map((item, i) => (
            <div key={i} className="text-center space-y-4 group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <item.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div className="text-6xl md:text-7xl font-serif font-black tracking-tighter">
                {item.val}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}