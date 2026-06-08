import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: 'kLIQUE Technologies | Modern IT & CRM Solutions',
  description: 'Global leader in Web Development, AI, Cloud, and Cybersecurity.',
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}