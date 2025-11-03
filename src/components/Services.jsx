import React from 'react';
import { Palette, Cpu, Sparkles, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    desc: 'Responsive, fast, and conversion-focused sites with a neon sci‑fi aesthetic.',
    gradient: 'from-fuchsia-600/30 to-fuchsia-400/10',
  },
  {
    icon: Cpu,
    title: 'AI Automation',
    desc: 'Workflows that create, schedule, and optimize content while you sleep.',
    gradient: 'from-indigo-600/30 to-indigo-400/10',
  },
  {
    icon: Sparkles,
    title: 'Branding',
    desc: 'Logos, palettes, and motion systems that feel futuristic and confident.',
    gradient: 'from-purple-600/30 to-purple-400/10',
  },
  {
    icon: Megaphone,
    title: 'Social Media',
    desc: 'AI-enhanced posts and ads that carry your voice across platforms.',
    gradient: 'from-cyan-600/30 to-cyan-400/10',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[36rem] bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
            <p className="mt-2 max-w-xl text-gray-300">We blend creative direction with automation so everything looks sharp and scales effortlessly.</p>
          </div>
          <a href="#contact" className="self-start inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-gray-200 hover:bg-white/5 transition">Request a proposal</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, gradient }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-black/40 p-6 overflow-hidden">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient}`} />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
