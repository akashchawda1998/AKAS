import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: 'Klique Software Solutions | Global Leader in CRM & IT Excellence',
  description: 'Providing world-class CRM solutions and IT services. Expert Salesforce consulting, Web & Mobile development, and AI automation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
