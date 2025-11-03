import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Request sent! We\'ll get back within 24 hours.');
    }, 700);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Nova Studio</h2>
            <p className="mt-2 text-gray-300">Tell us about your brand. We\'ll craft a plan and send a free AI-generated post sample.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Name</label>
                  <input required type="text" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Business Name</label>
                  <input required type="text" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Nova Coffee" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input required type="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea rows={5} className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="What do you need help with?" />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="rounded-full px-6 py-3 text-white font-medium bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 shadow-[0_0_40px_rgba(99,102,241,0.45)] hover:shadow-[0_0_60px_rgba(168,85,247,0.55)] transition-shadow">
                  Send Request
                </button>
                <span className="text-sm text-gray-300">{status}</span>
              </div>
            </form>
          </div>
          <div className="order-1 lg:order-2 relative rounded-2xl border border-white/10 bg-[radial-gradient(70%_70%_at_100%_0%,rgba(168,85,247,.2),transparent),radial-gradient(70%_70%_at_0%_100%,rgba(34,211,238,.2),transparent)] p-8 overflow-hidden min-h-[320px]">
            <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(236,72,153,.08),rgba(59,130,246,.08),rgba(20,184,166,.08),rgba(236,72,153,.08))]" />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-widest text-fuchsia-300/80">Powered</p>
              <h3 id="powered" className="mt-2 text-2xl font-semibold text-white">Glowing Cube Engine</h3>
              <p className="mt-2 max-w-md text-gray-300">Our stack mixes AI tooling with precision design systems. It\'s fast, scalable, and obsessed with detail.</p>
              <ul className="mt-6 space-y-2 text-gray-200">
                <li>• AI content drafts in minutes</li>
                <li>• Design tokens for consistent brand feel</li>
                <li>• Automated scheduling & reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
