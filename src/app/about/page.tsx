import { Target, Eye, Trophy, Users, Heart, ShieldCheck, Quote, Landmark, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Header Section */}
      <section className="bg-blue-50 py-24 border-b">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">About Klique</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Empowering Businesses Worldwide with <span className="text-blue-600">CRM Excellence</span></h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            KLIQUE is a global leader committed to providing world-class CRM solutions that help businesses of all sizes grow and succeed.
          </p>
        </div>
      </section>

      {/* Who We Are & Founders Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Who We Are</h3>
              <h4 className="text-3xl md:text-5xl font-bold">More than 20+ years of <span className="text-blue-600">IT Solutions</span> expertise</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                One of the best Salesforce development companies in India, Klique primarily serves clients from the USA, UK, Australia, and the APAC region. We focus on providing scalable, high-quality, amazing solutions for the most challenging business issues.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Five driven visionaries founded Klique with the goal of building a Salesforce consultation and development firm that specialises in finding simple solutions to challenging business issues.
              </p>
              <div className="p-8 bg-blue-900 rounded-2xl text-white relative overflow-hidden group">
                <Quote className="w-12 h-12 text-blue-400 opacity-20 absolute top-4 left-4" />
                <p className="relative z-10 text-lg italic font-medium">
                  "By giving our clients more than they expected from us, we have maintained our connections and built trust that spans decades."
                </p>
                <p className="mt-4 font-bold">— Founder Message</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/k1/500/600" alt="Team 1" className="rounded-2xl shadow-lg mt-12" data-ai-hint="team work" />
              <img src="https://picsum.photos/seed/k2/500/600" alt="Team 2" className="rounded-2xl shadow-lg" data-ai-hint="office collaboration" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Target className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Mission</h4>
              <h5 className="text-3xl font-bold mb-6">Our Mission Statement</h5>
              <p className="text-gray-600 text-lg leading-relaxed">
                We want to transform the current environment, where developers have a robotic tendency to offer a simple fix without regard for the end-user. Along with our specialised Salesforce solutions, we make a strong effort to restore that empathy and compassion.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Eye className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Vision</h4>
              <h5 className="text-3xl font-bold mb-6">Our Future Goals</h5>
              <p className="text-gray-600 text-lg leading-relaxed">
                By offering incredible cloud solutions to organisations that alter the way they conduct business and aid them in staying one step ahead of the competition, Klique hopes to be recognised as a creative leader in the Salesforce community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-4xl font-bold mb-8">Work-Life Balance at Klique</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            At Klique, we cherish each and every person connected to us, whether they are clients or workers. We have discovered a way to keep a good work-life balance for our staff without sacrificing the calibre of work we do for our clients.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Expert Consultants", val: "50+", icon: Users },
              { label: "Nations Served", val: "15+", icon: Landmark },
              { label: "Client Retention", val: "99%", icon: Heart },
              { label: "Years Experience", val: "20+", icon: Rocket }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-2xl bg-blue-50 border border-blue-100">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground">{stat.val}</div>
                <div className="text-xs font-bold text-gray-500 uppercase mt-2 tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Start Your Transformation Journey</h2>
          <p className="text-xl text-blue-100">Connect with our experts today to solve your complex business challenges.</p>
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-bold px-12 h-16 text-lg">Contact Us Now</Button>
        </div>
      </section>
    </div>
  );
}
