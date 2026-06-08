"use client";

export function Partners() {
  const partners = [
    "Salesforce", "Google Cloud", "AWS Partner", "Microsoft Azure", "DigitalEdge", "CloudNova"
  ];

  return (
    <section className="py-12 bg-blue-50/30 border-y border-blue-100/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-10">Trusted By Global Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <span key={i} className="text-2xl font-headline font-black text-foreground">{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}