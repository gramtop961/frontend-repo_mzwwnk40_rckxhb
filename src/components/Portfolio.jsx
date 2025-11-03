import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Neon Retail Landing', tag: 'Web' },
  { id: 2, title: 'AI Fashion Campaign', tag: 'Brand' },
  { id: 3, title: 'Crypto SaaS Dashboard', tag: 'UI' },
  { id: 4, title: 'Autonomous Cafe Concept', tag: 'Motion' },
];

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-20 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio</h2>
            <p className="mt-2 max-w-xl text-gray-300">Selected work with a focus on clarity, speed, and a neon edge.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(75%_75%_at_0%_0%,rgba(168,85,247,.25),transparent),radial-gradient(60%_60%_at_100%_0%,rgba(34,197,94,.15),transparent),radial-gradient(55%_55%_at_100%_100%,rgba(34,211,238,.2),transparent)] p-6 text-left hover:scale-[1.02] transition-transform"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[conic-gradient(from_180deg_at_50%_50%,rgba(236,72,153,.15),rgba(59,130,246,.15),rgba(20,184,166,.15),rgba(236,72,153,.15))]" />
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-gray-200">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-300">Click to preview</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/80" onClick={(e) => e.stopPropagation()}>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/15 via-indigo-600/10 to-cyan-500/15" />
            <div className="relative p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">{active.title}</h4>
                  <p className="mt-1 text-sm text-gray-300">A luminous concept preview with soft neon depth and crisp type.</p>
                </div>
                <button onClick={() => setActive(null)} className="rounded-md border border-white/10 px-3 py-1 text-sm text-gray-200 hover:bg-white/5">Close</button>
              </div>
              <div className="mt-6 h-64 w-full rounded-xl border border-white/10 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(99,102,241,.25),transparent),radial-gradient(70%_70%_at_0%_100%,rgba(6,182,212,.25),transparent)]" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
