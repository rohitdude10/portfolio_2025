"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

export default function Home() {
  return (
    <main className="min-h-screen">
      <NeuralNetworkBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ThemeToggle />
    </main>
  );
} 