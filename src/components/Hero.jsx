import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0b0b0f]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-block rounded px-3 py-1 text-xs font-mono tracking-widest text-orange-300 ring-1 ring-orange-500/40 bg-black/30">
          DEV_PROFILE // V1.0
        </span>
        <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight [text-shadow:0_4px_0_rgba(0,0,0,0.35)]">
          Retro Blocky Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-orange-100/90">
          Building immersive, gamified web experiences with a love for pixels, performance, and playful UX.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#skills"
            className="group inline-flex items-center gap-2 rounded-lg border-4 border-[#ff6a00] bg-[#ff6a00] px-5 py-3 font-mono text-sm uppercase tracking-wider text-black shadow-[0_6px_0_#732800] active:translate-y-1 active:shadow-[0_3px_0_#732800]"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> Start Quest
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border-4 border-white/20 bg-black/50 px-5 py-3 font-mono text-sm uppercase tracking-wider text-white hover:bg-black/70"
          >
            View Missions
          </a>
        </div>

        <div className="pointer-events-none mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-orange-300/80">
          <span className="h-2 w-2 animate-pulse rounded-sm bg-orange-400" /> Interactive Background Enabled
        </div>
      </div>
    </section>
  );
}
