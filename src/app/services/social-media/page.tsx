import { Share2, Users, MessageSquare, TrendingUp, Camera, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialMediaPage() {
  const pillars = [
    { title: "Community Management", desc: "Building and nurturing loyal brand communities on LinkedIn, Twitter, and beyond.", icon: Users },
    { title: "Viral Content Creation", desc: "Creating high-impact visual stories that resonate and spark conversations.", icon: Camera },
    { title: "Engagement Strategies", desc: "Improving brand-customer interaction through proactive community outreach.", icon: MessageSquare },
    { title: "Influence Marketing", desc: "Partnering with industry leaders to amplify your brand's reach and authority.", icon: Share2 }
  ];

  return (
    <div className="pt-28">
      <section className="bg-blue-600 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold text-blue-100 uppercase tracking-[0.3em] mb-4">Growth Labs</h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Build Powerful <span className="text-blue-200">Social Connections</span></h2>
            <p className="text-xl text-blue-50 leading-relaxed mb-10">
              We help you dominate the digital social landscape with strategic content that turns followers into brand advocates.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 h-14">Scale Your Presence</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="modern-card p-10 group">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <p.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://picsum.photos/seed/social-presence/800/800" alt="Social Impact" className="rounded-3xl shadow-2xl" data-ai-hint="social media influence" />
              <div className="absolute -bottom-6 -right-6 p-8 bg-white rounded-2xl shadow-xl flex items-center gap-4">
                 <Heart className="w-10 h-10 text-red-500 fill-red-500" />
                 <div>
                    <p className="text-3xl font-bold">1M+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Engagement</p>
                 </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">Human-Centric Social <span className="text-primary">Engagement</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In a world of noise, we create meaningful signals. Our social media strategies focus on building real relationships, not just chasing vanity metrics.
              </p>
              <ul className="space-y-4">
                {[
                  "Platform-specific content optimization.",
                  "Real-time sentiment monitoring.",
                  "Crisis management and brand safety.",
                  "Influencer identification and outreach."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="btn-primary">Book Strategy Session <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}