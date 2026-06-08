import { TrendingUp, Search, BarChart, MousePointer, Mail, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DigitalMarketingPage() {
  const offerings = [
    { title: "Search Engine Optimization", desc: "Rank higher on Google and drive organic traffic to your platform.", icon: Search },
    { title: "Pay-Per-Click Advertising", desc: "Data-driven ad campaigns that maximize ROI and conversion rates.", icon: MousePointer },
    { title: "Content Strategy", desc: "Engaging storytelling that builds brand authority and trust.", icon: Share2 },
    { title: "Email Marketing", desc: "Targeted outreach to nurture leads and maintain customer relationships.", icon: Mail }
  ];

  return (
    <div className="pt-28">
      <section className="bg-blue-900 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Marketing Labs</h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Drive <span className="text-blue-400">Growth</span> with Precision Marketing</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-10">
              We combine data analytics with creative excellence to build digital marketing strategies that deliver measurable business outcomes.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-10 h-14">Get a Free Audit</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((o, i) => (
              <div key={i} className="modern-card p-10 group">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <o.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{o.title}</h3>
                <p className="text-gray-500 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Data-Driven Performance Tracking</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide real-time dashboards so you can see exactly how your marketing spend is performing. No guesswork, just results.
              </p>
              <div className="space-y-4">
                {[
                  "Conversion rate optimization.",
                  "A/B testing for landing pages.",
                  "Comprehensive competitor analysis.",
                  "Transparent reporting and insights."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="btn-primary">Consult Our Strategists <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </div>
            <img src="https://picsum.photos/seed/marketing-data/800/600" alt="Marketing Data" className="rounded-2xl shadow-xl" data-ai-hint="digital marketing dashboard" />
          </div>
        </div>
      </section>
    </div>
  );
}