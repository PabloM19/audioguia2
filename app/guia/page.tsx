"use client";

import { useEffect, useRef, useState } from "react";
import { tracks } from "@/lib/tracks";
import TrackItem from "@/components/TrackItem";

export default function GuiaPage() {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  function registerRef(id: string, el: HTMLAudioElement | null) {
    audioRefs.current[id] = el;
  }

  function handlePlay(id: string) {
    // Pausa cualquier otra pista que esté sonando
    Object.entries(audioRefs.current).forEach(([key, el]) => {
      if (key !== id && el) el.pause();
    });
    setActiveId(id);
  }

  useEffect(() => {
    return () => {
      // Por higiene: pausar todo al salir
      Object.values(audioRefs.current).forEach((el) => el?.pause());
    };
  }, []);

  return (
    <main className="mx-auto max-w-xl p-4 sm:p-6">
      <header className="sticky top-0 z-10 -mx-4 sm:mx-0 backdrop-blur-lg bg-slate-950/60 border-b border-white/10 p-4 sm:rounded-2xl">
        <h1 className="text-xl font-semibold">Audioguía</h1>
        <p className="text-white/60 text-sm">Pulsa reproducir para escuchar cada pista.</p>
      </header>

      <section className="mt-4 space-y-3">
        {tracks.map((t, idx) => (
          <TrackItem
            key={t.id}
            track={t}
            index={idx + 1}
            registerRef={registerRef}
            onPlay={handlePlay}
            active={activeId === t.id}
          />
        ))}
      </section>
    </main>
  );
}
