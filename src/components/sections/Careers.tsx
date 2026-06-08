"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock } from "lucide-react";

export function Careers() {
  const jobs = [
    { title: "Senior React Developer", type: "Full Time", loc: "Remote", salary: "$120k - $160k" },
    { title: "AI Solutions Architect", type: "Contract", loc: "Hybrid / Ajmer", salary: "$140k+" },
    { title: "Cybersecurity Analyst", type: "Full Time", loc: "USA / Remote", salary: "$110k - $150k" },
    { title: "DevOps Engineer", type: "Full Time", loc: "APAC / Remote", salary: "$100k - $140k" }
  ];

  return (
    <section id="careers" className="section-padding bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-2/5 space-y-8 sticky top-32">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em]">Join the kLIQUE</h2>
            <h3 className="text-5xl md:text-7xl font-serif font-black leading-tight text-slate-900">
              Build Your <br /> <span className="text-gradient">Legacy</span> with Us.
            </h3>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              We're looking for visionary thinkers who want to bridge the gap between human empathy and digital excellence.
            </p>
            <div className="p-8 glass-card bg-slate-50 border-none">
              <div className="text-4xl font-serif font-black text-slate-900">4.9/5</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Employee Satisfaction Rating</div>
            </div>
            <Button size="lg" className="h-16 px-10 rounded-full text-xl font-bold bg-slate-900">
              View All Positions
            </Button>
          </div>

          <div className="lg:w-3/5 w-full space-y-6">
            {jobs.map((job, i) => (
              <div key={i} className="glass-card p-10 flex flex-col md:flex-row justify-between items-center gap-8 hover:bg-blue-50/50">
                <div className="space-y-4">
                  <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-700 border-none">
                    {job.type}
                  </Badge>
                  <h4 className="text-3xl font-serif font-black text-slate-900">{job.title}</h4>
                  <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-bold">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.loc}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.salary}</span>
                  </div>
                </div>
                <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}