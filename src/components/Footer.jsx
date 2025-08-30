import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 font-extrabold text-xl">Retro Blocky</div>
            <p className="text-sm text-white/70">
              Crafting playful, high-performance web apps. Available for freelance and collab missions.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="mb-2 font-mono text-xs uppercase tracking-wider text-orange-300">Navigation</div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><a className="hover:text-white" href="#home">Home</a></li>
                  <li><a className="hover:text-white" href="#skills">Skills</a></li>
                  <li><a className="hover:text-white" href="#projects">Missions</a></li>
                </ul>
              </div>
              <div>
                <div className="mb-2 font-mono text-xs uppercase tracking-wider text-orange-300">Contact</div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><a className="hover:text-white" href="mailto:dev@example.com">dev@example.com</a></li>
                  <li>UTC ±0 • Remote</li>
                </ul>
              </div>
              <div>
                <div className="mb-2 font-mono text-xs uppercase tracking-wider text-orange-300">Social</div>
                <div className="flex gap-3">
                  <a aria-label="GitHub" href="#" className="rounded-md border-2 border-white/10 bg-black/40 p-2 hover:bg-black/60">
                    <Github className="h-4 w-4" />
                  </a>
                  <a aria-label="Twitter" href="#" className="rounded-md border-2 border-white/10 bg-black/40 p-2 hover:bg-black/60">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a aria-label="LinkedIn" href="#" className="rounded-md border-2 border-white/10 bg-black/40 p-2 hover:bg-black/60">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a aria-label="Email" href="mailto:dev@example.com" className="rounded-md border-2 border-white/10 bg-black/40 p-2 hover:bg-black/60">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Retro Blocky — All rights reserved.</div>
          <div className="font-mono tracking-wider">BUILD STATUS: STABLE</div>
        </div>
      </div>
    </footer>
  );
}
