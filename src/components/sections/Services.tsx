"use client";

import { 
  Globe, 
  Smartphone, 
  Database, 
  TrendingUp, 
  Users, 
  Cpu, 
  ChevronRight 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const SERVICES = [
  {
    title: "Website Development",
    description: "High-performance, responsive, and SEO-friendly websites tailored to your business goals.",
    icon: Globe,
    items: ["Corporate Websites", "E-Commerce Platforms", "Custom Admin Panels"],
    color: "primary"
  },
  {
    title: "Mobile App Development",
    description: "Scalable iOS and Android applications built with modern frameworks for seamless experiences.",
    icon: Smartphone,
    items: ["Native iOS & Android", "React Native", "Flutter Apps"],
    color: "accent"
  },
  {
    title: "Salesforce Solutions",
    description: "Enterprise-level CRM customization and implementation to streamline your business operations.",
    icon: Database,
    items: ["Implementation", "Custom Apps", "Automation Flows"],
    color: "primary"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility and drive meaningful conversions.",
    icon: TrendingUp,
    items: ["SEO & SEM", "Content Strategy", "Performance Ads"],
    color: "accent"
  },
  {
    title: "Social Media Growth",
    description: "Building powerful online communities and scaling brand presence across all social platforms.",
    icon: Users,
    items: ["Viral Content", "Community Management", "Influencer Hub"],
    color: "primary"
  },
  {
    title: "AI & Automation",
    description: "Integrating intelligent AI solutions to automate repetitive tasks and optimize workflows.",
    icon: Cpu,
    items: ["Custom Chatbots", "Workflow Automation", "Predictive Analytics"],
    color: "accent"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">What we do</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6">Our Services</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer a comprehensive suite of digital solutions designed to help your business excel in a competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <Card key={idx} className="group relative glass p-8 border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-secondary group-hover:bg-primary group-hover:glow-blue`}>
                <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>

              <h4 className="text-2xl font-headline font-bold mb-4">{service.title}</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                    <ChevronRight className="w-4 h-4 text-accent mr-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="text-primary font-bold inline-flex items-center gap-1 group/btn hover:text-accent transition-colors">
                Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}