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

const NAV_LINKS = [
  { 
    name: "Services", 
    href: "/services",
    subLinks: [
      { name: "Salesforce Solutions", href: "/services/salesforce" },
      { name: "AI & Automation", href: "/services/ai" },
      { name: "Web Development", href: "/services/web" },
      { name: "Mobile App Development", href: "/services/mobile" },
    ]
  },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Career", href: "#career" },
  { name: "Blog", href: "#blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-blue-100 py-3 shadow-sm" 
          : "bg-white border-b border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow-blue transition-transform group-hover:scale-110">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-headline font-bold text-2xl tracking-tighter text-foreground">
              KLIQUE<span className="text-primary font-light">Software</span>
            </span>
            <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase pl-1">Solutions</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-primary transition-colors outline-none">
                  {link.name} <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 p-2 rounded-xl border-blue-50 shadow-xl">
                  {link.subLinks.map((sub) => (
                    <DropdownMenuItem key={sub.name} asChild className="rounded-lg cursor-pointer">
                      <Link href={sub.href} className="w-full font-medium">{sub.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-bold text-primary hover:text-primary hover:bg-blue-50 rounded-full px-6">
            Log In
          </Button>
          <Button variant="default" className="glow-blue rounded-full px-8 bg-primary text-white font-bold h-11">
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg bg-blue-50 text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-[90] bg-white lg:hidden overflow-y-auto animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="p-6 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="space-y-3">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-headline font-bold text-foreground"
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-4 flex flex-col gap-3 border-l-2 border-blue-50">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-muted-foreground font-medium hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-blue-50 flex flex-col gap-4">
              <Button className="w-full h-12 rounded-xl text-lg font-bold">Free Consultation</Button>
              <Button variant="outline" className="w-full h-12 rounded-xl text-lg font-bold border-blue-100">Client Login</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
