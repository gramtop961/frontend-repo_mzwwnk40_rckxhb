import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        {/* About */}
        <section id="about" className="relative py-20">
          <div className="pointer-events-none absolute inset-0"><div className="absolute left-1/4 top-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" /></div>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">About Our AI-Powered Services</h2>
            <p className="mt-4 text-gray-300">We help small businesses grow with a fusion of strategic branding, lightning-fast web experiences, and AI that amplifies your voice. Minimal text. Maximum clarity.</p>
          </div>
        </section>
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nova Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-gray-300 hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a className="text-gray-300 hover:text-white" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a className="text-gray-300 hover:text-white" href="mailto:novastudio080@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
