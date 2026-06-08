import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS = [
  {
    title: "Designing AI Experiences That Convert",
    date: "June 2026",
    desc: "A modern framework for building AI-powered interfaces that delight customers and drive measurable ROI.",
    tag: "AI Strategy"
  },
  {
    title: "Future-Proof Cloud Architectures for Growth",
    date: "May 2026",
    desc: "How we design multi-cloud systems with resilience, security, and frictionless scale in mind.",
    tag: "Cloud"
  },
  {
    title: "Why UX-Led Software Wins Every Time",
    date: "April 2026",
    desc: "The role of empathy, testing, and product storytelling in modern enterprise digital experiences.",
    tag: "UX"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 bg-slate-950 min-h-screen text-white">
      <section className="section-padding bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_32%),_radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_24%)]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-6">Insights & Stories</p>
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight mb-6">The Klique Blog</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 leading-relaxed">
            Explore articles about modern IT strategy, AI innovation, digital experience design, and the future of enterprise transformation.
          </p>
          <div className="mt-12 inline-flex items-center gap-3">
            <Button className="rounded-full bg-primary text-white px-10 py-4 font-bold">Subscribe</Button>
            <Link href="#posts" className="flex items-center gap-2 text-slate-200 hover:text-white font-bold">
              Browse Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="posts" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {POSTS.map((post, index) => (
              <article key={index} className="rounded-[3rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6 text-xs uppercase tracking-[0.35em] text-cyan-300 font-bold">
                  <span>{post.tag}</span>
                  <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /> {post.date}</span>
                </div>
                <h2 className="text-3xl font-serif font-black mb-4">{post.title}</h2>
                <p className="text-slate-400 leading-relaxed mb-8">{post.desc}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 border-t border-white/10">
        <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.4em] text-cyan-300">Join the conversation</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-serif font-black tracking-tight">Stay ahead with weekly insights.</h2>
            <p className="mt-6 text-slate-400 leading-relaxed max-w-2xl">
              Get fresh strategies for product, technology, and growth delivered to your inbox.
            </p>
          </div>
          <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white"><BookOpen className="w-6 h-6" /></div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Need help?</p>
                <p className="text-lg font-bold">Book a strategy session.</p>
              </div>
            </div>
            <Button className="w-full rounded-full bg-primary px-8 py-4 text-lg font-bold">Book Consulting</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
