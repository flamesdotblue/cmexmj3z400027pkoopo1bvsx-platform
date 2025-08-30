import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Dungeon UI Kit',
    desc: 'A retro UI component set with pixel borders and CRT glow.',
    tag: 'UI/Design',
    href: '#',
  },
  {
    title: 'Motion Arcade',
    desc: 'Framer Motion playground for micro-interactions & page transitions.',
    tag: 'Animation',
    href: '#',
  },
  {
    title: 'NetRunner CLI',
    desc: 'Node-based build utilities for fast local dev loops.',
    tag: 'Tooling',
    href: '#',
  },
];

function Card({ children }) {
  return (
    <div className="relative rounded-lg border-4 border-white/15 bg-[#0f0f13] p-5 shadow-[0_6px_0_#000]">
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10" />
      {children}
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-extrabold text-3xl sm:text-4xl">Missions</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">A selection of recent work and experiments.</p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-lg border-4 border-white/20 bg-black/40 px-4 py-2 font-mono text-xs uppercase tracking-wider text-white hover:bg-black/60 sm:inline-block"
        >
          Request Co-op
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Card>
              <div className="flex items-center justify-between">
                <span className="rounded px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-orange-300 ring-1 ring-orange-500/30 bg-black/40">
                  {p.tag}
                </span>
                <a
                  href={p.href}
                  className="inline-flex items-center gap-1 rounded-md border-2 border-white/10 bg-black/30 px-2 py-1 text-xs text-white hover:bg-black/50"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> View
                </a>
              </div>
              <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
