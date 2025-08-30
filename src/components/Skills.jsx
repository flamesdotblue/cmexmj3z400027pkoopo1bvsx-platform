import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Gamepad2, Rocket } from 'lucide-react';

const skills = [
  { name: 'React + TypeScript', level: 92, color: '#ff6a00', icon: Code },
  { name: 'Node + APIs', level: 85, color: '#ff3d00', icon: Cpu },
  { name: 'Web Animation', level: 88, color: '#ff6a00', icon: Gamepad2 },
  { name: 'Performance Ops', level: 80, color: '#ff3d00', icon: Rocket },
];

function PixelCard({ children }) {
  return (
    <div className="relative rounded-lg border-4 border-white/15 bg-[#111114] p-4 shadow-[0_6px_0_#000]">
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10" />
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="font-extrabold text-3xl sm:text-4xl">Skill Tree</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            Unlocking levels across frontend, systems, and motion. Each bar shows XP progress toward mastery.
          </p>
        </div>
        <span className="hidden rounded px-3 py-1 font-mono text-xs tracking-widest text-orange-300 ring-1 ring-orange-500/40 bg-black/40 sm:block">
          MODE // GAMIFIED
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <PixelCard>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-md border-4 border-white/20 bg-black/40">
                      <Icon className="h-5 w-5 text-orange-300" />
                    </div>
                    <div>
                      <div className="font-bold">{s.name}</div>
                      <div className="text-xs text-white/60">XP {s.level}/100</div>
                    </div>
                  </div>
                  <span className="rounded-md border-2 border-white/10 bg-black/30 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-orange-300">
                    Tier {Math.ceil(s.level / 25)}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="h-5 w-full rounded-md border-4 border-white/15 bg-black/60 p-0.5">
                    <motion.div
                      className="h-full rounded-[2px]"
                      style={{ background: s.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </PixelCard>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-10 grid gap-4 sm:grid-cols-3"
      >
        {["Pixel-perfect UIs", "DX tooling & CI", "Micro-interactions"].map((t) => (
          <PixelCard key={t}>
            <div className="flex items-center gap-3">
              <span className="inline-block h-3 w-3 rounded-sm bg-orange-400" />
              <p className="text-sm text-white/80">{t}</p>
            </div>
          </PixelCard>
        ))}
      </motion.div>
    </section>
  );
}
