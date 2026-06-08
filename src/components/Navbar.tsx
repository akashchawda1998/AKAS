"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown, Sparkles } from "lucide-react";
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
  { name: "Blog", href: "#blog" },
  { name: "Career", href: "#career" },
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto rounded-full transition-all duration-500 px-8 flex items-center justify-between",
        isScrolled ? "nav-blur shadow-xl py-3" : "bg-transparent py-2"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-headline font-black text-2xl tracking-tighter text-foreground">
              KLIQUE<span className="text-primary">.</span>
            </span>
            <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">Software</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground hover:text-primary transition-colors outline-none">
                  {link.name} <ChevronDown className="w-4 h-4 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-3 rounded-3xl border-blue-50 shadow-2xl mt-4">
                  {link.subLinks.map((sub) => (
                    <DropdownMenuItem key={sub.name} asChild className="rounded-xl p-3 cursor-pointer hover:bg-blue-50 transition-colors">
                      <Link href={sub.href} className="w-full flex items-center justify-between font-semibold text-sm">
                        {sub.name} <Sparkles className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100" />
                      </Link>
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
          <Button variant="ghost" className="modern-btn px-6 text-primary">Login</Button>
          <Button className="modern-btn px-8 bg-primary shadow-lg shadow-primary/25">Contact Us</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 rounded-2xl bg-blue-50 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-white lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col p-12 gap-8 pt-32">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="space-y-4">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-headline font-black text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="flex flex-col gap-4 pl-6 border-l-4 border-blue-100">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-bold text-muted-foreground hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-4 mt-auto pb-12">
               <Button className="h-16 text-xl modern-btn bg-primary">Talk to Experts</Button>
               <Button variant="outline" className="h-16 text-xl modern-btn border-blue-100">Client Portal</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
