"use client";

import Link from "next/link";
import { Zap, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-headline font-bold text-xl tracking-tighter">
                BlueNova<span className="text-primary">Systems</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              We create ecosystems that empower businesses, communities, startups, NGOs, and social platforms through future-ready technology.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {["Web Development", "Mobile Apps", "Salesforce", "Digital Marketing", "AI & Automation"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Team", "Portfolio", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <span>hello@bluenova.systems</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>Global Digital Headquarters</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BlueNova Systems. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}