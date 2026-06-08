import { ArrowRight, ExternalLink, Trophy, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CASES = [
  {
    title: "Global CRM Migration",
    client: "Logistics Pro USA",
    outcome: "45% Sales Surge",
    desc: "We unified a fragmented legacy system for a global logistics leader, migrating 20+ regions into a single Salesforce ecosystem.",
    img: "https://picsum.photos/seed/klique-case1/1200/800",
    tags: ["Salesforce", "Integration", "Enterprise"],
    color: "bg-blue-600"
  },
  {
    title: "AI-Powered Customer Hub",
    client: "RetailEdge UK",
    outcome: "90% Support Automation",
    desc: "Built a custom NLP-driven support engine that handles 24/7 queries with human-like precision for a major retail brand.",
    img: "https://picsum.photos/seed/klique-case2/1200/800",
    tags: ["AI", "Next.js", "Customer Success"],
    color: "bg-accent"
  },
  {
    title: "Real-time Supply Chain",
    client: "AgroTech APAC",
    outcome: "Zero Downtime achieved",
    desc: "A mobile-first dashboard connecting regional farmers to global markets with real-time tracking and logistics.",
    img: "https://picsum.photos/seed/klique-case3/1200/800",
    tags: ["Mobile", "IoT", "Supply Chain"],
    color: "bg-primary"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 bg-white">
      {/* Narrative Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-black tracking-[0.4em] uppercase mb-10">
            Proven Results
          </div>
          <h1 className="text-6xl md:text-[9rem] font-headline font-black mb-12 leading-[0.85] tracking-tighter">
            Impact in <br /><span className="text-gradient">Real-Time.</span>
          </h1>
          <p className="text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto">
            Explore how Klique has architected success for visionary companies worldwide, solving their most critical technical hurdles.
          </p>
        </div>
      </section>

      {/* Case List */}
      <section className="pb-32">
        <div className="container mx-auto px-6 space-y-32">
          {CASES.map((c, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-24 items-center max-w-7xl mx-auto`}>
              <div className="lg:w-3/5">
                <div className="relative group overflow-hidden rounded-[4rem] shadow-3xl">
                  <img 
                    src={c.img} 
                    alt={c.title} 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-1000 object-cover aspect-video"
                    data-ai-hint="modern business workspace"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-10 left-10 ${c.color} text-white px-8 py-4 rounded-3xl font-black text-xl shadow-2xl`}>
                    {c.outcome}
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 space-y-10">
                <div className="flex gap-3">
                  {c.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-50 text-primary border border-blue-100">{tag}</span>
                  ))}
                </div>
                <h2 className="text-5xl font-headline font-black leading-tight">{c.title}</h2>
                <div className="p-8 rounded-[2.5rem] bg-blue-50/50 border border-blue-100">
                  <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-2">Partner Organization</p>
                  <p className="text-3xl font-headline font-black text-foreground">{c.client}</p>
                </div>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed">{c.desc}</p>
                <div className="flex flex-wrap items-center gap-8 pt-6">
                  <Button size="lg" className="h-16 px-10 modern-btn text-xl bg-primary">View Deep Dive</Button>
                  <a href="#" className="flex items-center gap-2 font-black text-muted-foreground hover:text-primary transition-colors">
                    Visit Project <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Cloud */}
      <section className="section-padding bg-blue-50 rounded-[5rem] mx-6 mb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { label: "Global Deployments", val: "500+", icon: Globe },
              { label: "Hours of Support", val: "24/7", icon: Zap },
              { label: "Awards & Certs", val: "12", icon: Trophy }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <item.icon className="w-16 h-16 mx-auto text-primary opacity-20" />
                <div className="text-7xl font-headline font-black text-foreground">{item.val}</div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
