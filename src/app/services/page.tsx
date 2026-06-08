import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="bg-blue-50/50 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">World-Class <span className="text-primary">CRM & IT</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Klique provides scalable, high-quality solutions designed to solve your most challenging business issues through cutting-edge technology.
          </p>
        </div>
      </section>

      <Services />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold">Why Choose Klique Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Salesforce Experts",
                  "24/7 Global Support",
                  "Secure Architecture",
                  "Scalable Operations",
                  "Human-Centric UX",
                  "Advanced AI Labs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-bold text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-primary glow-blue">
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/klique-serv/800/600" 
                alt="Expertise" 
                className="rounded-3xl shadow-2xl relative z-10"
                data-ai-hint="digital dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      <Technologies />
    </div>
  );
}