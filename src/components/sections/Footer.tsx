"use client";

import Link from "next/link";
import { Globe, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-headline font-bold text-xl tracking-tighter text-white uppercase">
                KLIQUE<span className="text-primary font-light lowercase">software</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Global leader in empowering businesses worldwide with world-class CRM and IT solutions. Specialized in Salesforce, AI, and enterprise-grade software development.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Salesforce Solutions", href: "/services/salesforce" },
                { name: "AI & Automation", href: "/services/ai" },
                { name: "Website Development", href: "/services/web" },
                { name: "Mobile App Development", href: "/services/mobile" },
                { name: "Digital Marketing", href: "/services/digital-marketing" },
                { name: "Social Media Growth", href: "/services/social-media" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Klique", href: "/about" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Career", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Trainer", href: "#" },
                { name: "Trainee", href: "#" },
                { name: "Freelancer", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-sm">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">hr@kliquesoftwaresolutions.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>+91-7014-294-738</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>202, Pragati Nagar, Kotra 305004, Ajmer, Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Klique Software Solutions.
          </p>
          <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest font-bold">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}