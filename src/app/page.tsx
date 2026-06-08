import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { ProjectEstimator } from "@/components/sections/ProjectEstimator";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      {/* About Mission Highlight */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="inline-block px-4 py-1.5 rounded-full glass border border-accent/20 text-accent text-sm font-bold animate-float">
              OUR MISSION
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
              Building Technology That <br /> 
              <span className="text-gradient">Creates Real Impact</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are a next-generation IT solutions company focused on delivering modern digital experiences through technology, automation, marketing, and innovation. Our mission is not just to develop software — but to create ecosystems that empower businesses and communities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { label: "Founded", val: "2021" },
                { label: "Projects", val: "150+" },
                { label: "Experts", val: "25+" },
                { label: "Impact", val: "Global" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl font-headline font-bold text-primary">{stat.val}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectEstimator />
      <Portfolio />
      
      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden glass p-12 md:p-24 border-primary/20 glow-blue text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 blur-[120px] -ml-48 -mb-48" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
                Ready to scale your <br /> vision to the next level?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the ranks of visionary companies that choose BlueNova Systems to architect their digital future.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <button className="h-16 px-10 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all glow-blue">
                  Start Your Project Now
                </button>
                <button className="h-16 px-10 rounded-full glass border-white/10 font-bold text-lg hover:bg-white/5 transition-all">
                  Contact Sales Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}