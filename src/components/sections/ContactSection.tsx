"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto glass-card bg-white p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
          
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Contact Us</h2>
              <h3 className="text-5xl md:text-7xl font-serif font-black leading-tight text-slate-900">
                Let's Start a <br /> <span className="text-gradient">Conversation.</span>
              </h3>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-2xl font-serif font-bold text-slate-900">hr@kliquesoftwaresolutions.com</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-2xl font-serif font-bold text-slate-900">+91-7014-294-738</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Visit Headquarters</div>
                  <div className="text-xl font-serif font-bold text-slate-900 leading-relaxed max-w-xs">
                    202, Pragati Nagar, Kotra 305004, Ajmer, Rajasthan, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-8 bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</Label>
                <Input placeholder="John Doe" className="h-14 rounded-2xl bg-white border-slate-200 focus:ring-primary" />
              </div>
              <div className="space-y-3">
                <Label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</Label>
                <Input placeholder="john@example.com" type="email" className="h-14 rounded-2xl bg-white border-slate-200 focus:ring-primary" />
              </div>
            </div>
            <div className="space-y-3">
              <Label className="text-xs font-black uppercase tracking-widest text-slate-400">Service Needed</Label>
              <Input placeholder="e.g. Web Development" className="h-14 rounded-2xl bg-white border-slate-200 focus:ring-primary" />
            </div>
            <div className="space-y-3">
              <Label className="text-xs font-black uppercase tracking-widest text-slate-400">Project Details</Label>
              <Textarea placeholder="Tell us about your project goals..." className="min-h-[160px] rounded-3xl bg-white border-slate-200 focus:ring-primary p-6" />
            </div>
            <Button className="w-full h-18 rounded-full text-xl font-bold bg-primary hover:scale-105 transition-transform">
              Send Message <Send className="ml-3 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}