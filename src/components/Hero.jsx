import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlays for neon glow - should not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 h-full flex flex-col items-center justify-center text-center">
        <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-gray-200">
          AI-Powered Web & Branding
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
          Your Brand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-blue-500 to-cyan-400">Our Vision.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300">
          Get your first AI-generated post free today. Design that feels futuristic, human, and fast.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="rounded-full px-6 py-3 text-white font-medium bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 shadow-[0_0_40px_rgba(99,102,241,0.45)] hover:shadow-[0_0_60px_rgba(168,85,247,0.55)] transition-shadow"
          >
            Get Free Sample
          </a>
          <a href="#portfolio" className="text-sm text-gray-300 hover:text-white transition-colors">See Work</a>
        </div>
      </div>
    </section>
  );
}
