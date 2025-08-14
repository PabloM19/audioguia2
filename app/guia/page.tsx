"use client";

import { trackGroups } from "@/lib/tracks";
import TrackItem from "@/components/TrackItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useRef, useEffect } from "react";

export default function GuiaPage() {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  function registerRef(id: string, el: HTMLAudioElement | null) {
    audioRefs.current[id] = el;
  }

  function handlePlay(id: string) {
    Object.entries(audioRefs.current).forEach(([key, el]) => {
      if (key !== id && el) el.pause();
    });
    setActiveId(id);
  }

  useEffect(() => {
    const refsSnapshot = audioRefs.current;
    return () => {
      Object.values(refsSnapshot).forEach((el) => el?.pause());
    };
  }, []);

  return (
    <main className="mx-auto max-w-xl p-4 sm:p-6">
      {/* Cabecera con bordes redondeados */}
      <header className="sticky top-0 z-10 -mx-4 sm:mx-0 backdrop-blur-lg bg-gray-200 border-b border-slate-300 p-4 rounded-2xl">
        <h1 className="text-xl font-semibold">Audioguía</h1>
        <p className="text-black/60 text-sm">
          Selecciona una categoría y reproduce un audio.
        </p>
      </header>

      {/* Acordeón con bordes redondeados y degradado suave */}
      <Accordion type="single" collapsible className="mt-4 space-y-4">
        {trackGroups.map((group) => (
          <AccordionItem
            key={group.id}
            value={group.id}
            className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl border border-gray-300 overflow-hidden"
          >
            <AccordionTrigger className="text-lg font-medium px-4">
              {group.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 mt-2 px-4 pb-4">
                {group.tracks.map((t, idx) => (
                  <TrackItem
                    key={t.id}
                    track={t}
                    index={idx + 1}
                    registerRef={registerRef}
                    onPlay={handlePlay}
                    active={activeId === t.id}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
