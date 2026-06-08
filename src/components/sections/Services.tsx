"use client";

import { 
  Globe, 
  Smartphone, 
  Database, 
  TrendingUp, 
  Users, 
  Cpu, 
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Website Development",
    description: "High-performance, responsive corporate websites, portals, and SEO-friendly architectures.",
    icon: Globe,
    href: "/services/web",
    items: ["Corporate Portals", "E-Commerce", "Admin Panels"]
  },
  {
    title: "Mobile App Development",
    description: "Scalable iOS and Android applications built for high engagement and seamless experiences.",
    icon: Smartphone,
    href: "/services/mobile",
    items: ["Native Apps", "React Native", "Flutter Development"]
  },
  {
    title: "Salesforce Solutions",
    description: "Expert CRM customization, implementation, and automation to streamline operations.",
    icon: Database,
    href: "/services/salesforce",
    items: ["Implementation", "Custom Apps", "Data Migration"]
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase brand visibility and conversions.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
    items: ["SEO & SEM", "Content Strategy", "Performance Ads"]
  },
  {
    title: "Social Media Growth",
    description: "Building powerful online communities and scaling presence across social platforms.",
    icon: Users,
    href: "/services/social-media",
    items: ["Viral Content", "Community Management", "Influencers"]
  },
  {
    title: "AI & Automation",
    description: "Integrating intelligent AI solutions to automate tasks and optimize your business flows.",
    icon: Cpu,
    href: "/services/ai",
    items: ["Custom Chatbots", "Workflow Automation", "Predictive Analytics"]
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Expert Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold">We Are Expert In <span className="text-blue-600">IT Solutions</span></h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Our cutting-edge industry solutions are supported by the most recent technology to maximize your growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="modern-card p-10 group bg-white">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>

              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-500 mb-8 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              <ul className="space-y-3 mb-10">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-semibold text-gray-700">
                    <ChevronRight className="w-4 h-4 text-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                href={service.href} 
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}