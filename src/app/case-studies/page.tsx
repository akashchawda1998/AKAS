import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CASES = [
  {
    title: "Global CRM Migration",
    client: "Logistics Pro USA",
    outcome: "45% Increase in Sales Efficiency",
    desc: "Migrated a fragmented legacy system into a unified Salesforce ecosystem for a global logistics leader.",
    img: "https://picsum.photos/seed/case1/800/500",
    tags: ["Salesforce", "Integration", "Global Scale"]
  },
  {
    title: "AI-Powered Customer Hub",
    client: "RetailEdge UK",
    outcome: "90% Automated Support",
    desc: "Implemented custom NLP chatbots and automated ticketing for a large e-commerce platform.",
    img: "https://picsum.photos/seed/case2/800/500",
    tags: ["AI", "Customer Success", "Next.js"]
  },
  {
    title: "Real-time Supply Chain",
    client: "AgroTech APAC",
    outcome: "Zero Downtime Operations",
    desc: "Built a high-performance mobile dashboard for real-time tracking of agricultural products across regions.",
    img: "https://picsum.photos/seed/case3/800/500",
    tags: ["Mobile", "React Native", "Cloud"]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-24">
      <section className="bg-white py-24 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">Success <span className="text-primary">Stories</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how Klique has helped visionary companies overcome their most challenging technical hurdles and scale to new heights.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 space-y-24">
        {CASES.map((c, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}>
            <div className="lg:w-1/2">
              <div className="relative group overflow-hidden rounded-[3rem] border border-blue-50 shadow-lg">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="modern office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="flex gap-2">
                {c.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/10">{tag}</span>
                ))}
              </div>
              <h2 className="text-4xl font-headline font-bold">{c.title}</h2>
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-primary font-bold mb-1">Impact Highlight</p>
                <p className="text-2xl font-headline font-bold text-foreground">{c.outcome}</p>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="flex items-center gap-6">
                <Button className="rounded-full h-12 px-8 bg-primary text-white font-bold glow-blue">
                  View Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <a href="#" className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                  Live Preview <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}