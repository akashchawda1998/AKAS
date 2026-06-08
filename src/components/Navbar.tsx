"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SERVICES = [
  { name: "Website Development", href: "/services/web" },
  { name: "Mobile App Development", href: "/services/mobile" },
  { name: "Salesforce Solutions", href: "/services/salesforce" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Social Media Growth", href: "/services/social-media" },
  { name: "AI & Automation", href: "/services/ai" },
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
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex bg-blue-900 text-white text-[11px] font-semibold py-2 px-6 justify-between items-center fixed top-0 w-full z-[110]">
        <div className="flex gap-6">
          <a href="mailto:hr@kliquesoftwaresolutions.com" className="flex items-center gap-2 hover:text-blue-200">
            <Mail className="w-3 h-3" /> hr@kliquesoftwaresolutions.com
          </a>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" /> +91-7014-294-738
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-blue-200">Linkedin</Link>
          <Link href="#" className="hover:text-blue-200">Twitter</Link>
          <Link href="#" className="hover:text-blue-200">Instagram</Link>
        </div>
      </div>

      <nav
        className={cn(
          "fixed left-0 right-0 z-[100] transition-all duration-300",
          isScrolled ? "top-0 lg:top-0 shadow-md bg-white py-3" : "top-0 lg:top-8 bg-white py-4 shadow-sm"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="font-headline font-black text-2xl tracking-tighter text-foreground">
              KLIQUE<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-gray-700 hover:text-primary">Home</Link>
            <Link href="/about" className="text-sm font-bold text-gray-700 hover:text-primary">About Us</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-primary outline-none">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2">
                {SERVICES.map((s) => (
                  <DropdownMenuItem key={s.name} asChild>
                    <Link href={s.href} className="w-full p-2 text-sm font-medium">{s.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/case-studies" className="text-sm font-bold text-gray-700 hover:text-primary">Case Studies</Link>
            <Link href="#" className="text-sm font-bold text-gray-700 hover:text-primary">Blog</Link>
            <Link href="#" className="text-sm font-bold text-gray-700 hover:text-primary">Career</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button className="btn-primary rounded-full px-8">Contact Us</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t p-6 lg:hidden flex flex-col gap-6 shadow-xl h-screen overflow-y-auto">
             <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Home</Link>
             <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">About Us</Link>
             <div className="space-y-4">
               <span className="text-lg font-bold text-primary">Services</span>
               <div className="flex flex-col gap-3 pl-4">
                 {SERVICES.map((s) => (
                   <Link key={s.name} href={s.href} onClick={() => setIsMobileMenuOpen(false)} className="text-md font-medium text-gray-600">{s.name}</Link>
                 ))}
               </div>
             </div>
             <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Case Studies</Link>
             <Button className="w-full btn-primary mt-4">Contact Now</Button>
          </div>
        )}
      </nav>
    </>
  );
}