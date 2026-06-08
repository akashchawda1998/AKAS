"use client";

import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    name: "John Miller",
    role: "CTO, Logistics Dynamics",
    content: "Klique transformed our legacy CRM into a powerhouse. Their Salesforce expertise is unmatched in the APAC region.",
    avatar: "https://picsum.photos/seed/john/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Director, Global Solutions",
    content: "The level of empathy Klique brings to technical problems is refreshing. They don't just build code; they build solutions for users.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "David Smith",
    role: "Founder, Fintech Start",
    content: "Working with the team at Klique was the best decision for our mobile app launch. Scalable, high-quality, and amazing support.",
    avatar: "https://picsum.photos/seed/david/100/100"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={t.avatar} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs font-bold text-primary uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}