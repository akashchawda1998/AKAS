import { ArrowRight, Target, Eye, Quote, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Header */}
      <section className="bg-blue-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">Our Journey & <span className="text-primary">Purpose</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Five driven people founded Klique with the goal of building a Salesforce consultation and development firm that specialises in finding simple solutions to challenging business issues.
          </p>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all" />
                <img 
                  src="https://picsum.photos/seed/founder/500/600" 
                  alt="Founder" 
                  className="relative rounded-2xl shadow-xl w-full"
                  data-ai-hint="portrait man"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8">
              <Quote className="w-16 h-16 text-primary/10" />
              <h2 className="text-4xl font-headline font-bold">A Message From Our Founders</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Klique, we cherish each and every person connected to us, whether they are clients or workers. We have discovered a way to keep a good work-life balance for our staff in the face of such a competitive and dynamic industry without sacrificing the calibre of work we do for our clients.
                </p>
                <p>
                  We want to transform the current environment, where developers have a robotic tendency to offer a simple fix without regard for the end-user. Along with our specialised Salesforce solutions, we make a strong effort to restore that empathy and compassion.
                </p>
              </div>
              <div className="pt-4">
                <p className="font-bold text-xl text-foreground">The Klique Founding Team</p>
                <p className="text-primary font-bold uppercase text-sm tracking-widest">Visionaries & Leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] border border-blue-100 shadow-sm space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-headline font-bold">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We want to transform the current environment, where developers have a robotic tendency to offer a simple fix without regard for the end-user. Along with our specialised Salesforce solutions, we make a strong effort to restore that empathy and compassion.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] border border-blue-100 shadow-sm space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-headline font-bold">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Klique hopes to be recognised as a creative leader in the Salesforce community, offering cloud solutions that alter the way organisations conduct business and aid them in staying one step ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years Experience", val: "20+", icon: TrendingUp },
              { label: "Countries Served", val: "15+", icon: Globe },
              { label: "Expert Consultants", val: "50+", icon: Users },
              { label: "Success Rate", val: "99%", icon: Target }
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <stat.icon className="w-8 h-8 mx-auto text-primary/50" />
                <div className="text-5xl font-headline font-bold text-foreground">{stat.val}</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Ready to work with experts?</h2>
          <Button size="lg" className="rounded-full bg-white text-primary hover:bg-blue-50 px-10 h-14 text-lg font-bold">
            Contact Klique Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

import { Globe } from "lucide-react";