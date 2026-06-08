"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SERVICES = [
  { name: "Web Engineering", href: "#services" },
  { name: "AI & Automation", href: "#services" },
  { name: "Cloud Solutions", href: "#services" },
  { name: "CyberSecurity", href: "#services" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm" : "py-8 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 rotate-3 group hover:rotate-0 transition-transform">
            <Globe className="w-7 h-7 text-white" />
          </div>
          <span className="font-serif font-black text-3xl tracking-tighter text-slate-900">
            kLIQUE<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">About</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors outline-none">
              Expertise <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-3 rounded-2xl glass-card">
              {SERVICES.map((s) => (
                <DropdownMenuItem key={s.name} asChild>
                  <Link href={s.href} className="w-full p-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl">{s.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="#portfolio" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Work</Link>
          <Link href="#careers" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Careers</Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Button className="h-12 px-8 rounded-full bg-slate-900 text-white font-bold hover:scale-105 transition-transform">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t p-10 lg:hidden flex flex-col gap-10 shadow-2xl h-screen animate-in fade-in slide-in-from-top-4">
           <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black">Home</Link>
           <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black">About</Link>
           <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black">Expertise</Link>
           <Link href="#careers" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black">Careers</Link>
           <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black">Contact</Link>
           <Button className="w-full h-18 rounded-full bg-primary text-xl font-bold">Contact Now</Button>
        </div>
      )}
    </nav>
  );
}