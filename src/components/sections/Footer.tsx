"use client";

import Link from "next/link";
import { Globe, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-headline font-bold text-xl tracking-tighter text-foreground">
                KLIQUE<span className="text-primary font-light">Software</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Global leader in empowering businesses worldwide with world-class CRM and IT solutions.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-blue-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-foreground">Services</h4>
            <ul className="space-y-4">
              {["Salesforce Solutions", "AI & Automation", "Web Development", "Mobile Apps", "Digital Marketing"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              {["About Klique", "Career", "Blog", "Trainer", "Trainee", "Freelancer"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold text-lg mb-6 text-foreground">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>hr@kliquesoftwaresolutions.com</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>+91-7014-294-738</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>202, Pragati Nagar, Kotra 305004, Ajmer, Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Klique Software Solutions. All rights reserved.
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