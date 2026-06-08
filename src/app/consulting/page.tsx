import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck } from "lucide-react";

const PACKAGES = [
  {
    title: "Accelerate",
    subtitle: "Discovery & Roadmap",
    price: "$2,500",
    items: ["Strategy session", "Technical audit", "Roadmap delivery"]
  },
  {
    title: "Elevate",
    subtitle: "Solution Architecture",
    price: "$6,500",
    items: ["Platform design", "Security review", "Implementation plan"]
  },
  {
    title: "Transform",
    subtitle: "End-to-End Delivery",
    price: "$15,000+",
    items: ["Full-stack build", "QA & launch", "Ongoing optimization"]
  }
];

export default function ConsultingPage() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="section-padding bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 text-white overflow-hidden">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200 mb-4">Book Your Strategic Partnership</p>
            <h1 className="text-5xl md:text-6xl font-serif font-black leading-tight">Consulting For Bold Growth.</h1>
            <p className="mt-8 text-lg text-slate-200 leading-relaxed max-w-3xl">
              Bring your most ambitious ideas to life with expert guidance, technical precision, and a consulting partner that understands both business and technology.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="rounded-full bg-white text-slate-950 px-10 py-4 font-bold">Request a Call</Button>
              <Button variant="outline" className="rounded-full border-white/30 text-white px-10 py-4 font-bold">Download Guide</Button>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[3rem] bg-white/10 border border-white/10 p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6 text-white">
                <Globe className="w-10 h-10" />
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Global Perspective</p>
                  <p className="text-lg font-bold">Build for any region, any scale.</p>
                </div>
              </div>
              <p className="text-slate-200 leading-relaxed">We combine local market insight with global delivery experience so your strategy works everywhere.</p>
            </div>
            <div className="rounded-[3rem] bg-white/10 border border-white/10 p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6 text-white">
                <ShieldCheck className="w-10 h-10" />
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Trusted Security</p>
                  <p className="text-lg font-bold">Protect every launch.</p>
                </div>
              </div>
              <p className="text-slate-200 leading-relaxed">Our consulting approach includes security posture, compliance readiness, and sustainable operations from day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Our Packages</p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">Choose the advisory track that fits your stage.</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {PACKAGES.map((pkg, index) => (
              <div key={index} className="rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl transition hover:-translate-y-2">
                <p className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4">{pkg.subtitle}</p>
                <h3 className="text-3xl font-serif font-black mb-4">{pkg.title}</h3>
                <p className="text-4xl font-headline font-black mb-8">{pkg.price}</p>
                <ul className="space-y-4 mb-10">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full bg-slate-950 text-white px-8 py-4 font-bold">Start Planning</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-serif font-black">What You Get From Klique Consulting</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              A sharp, action-oriented advisory partner that turns strategy into delivery. We map the right technology, team, and timeline for your success.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              "Clear execution plans",
              "Custom technical blueprints",
              "Stakeholder-aligned roadmaps",
              "Risk-aware launch support"
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <p className="font-bold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
