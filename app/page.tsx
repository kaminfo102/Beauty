'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BottomNavigation from '@/components/BottomNavigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />

      <main className="pb-20 md:pb-0">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <BottomNavigation />
    </div>
  );
}

