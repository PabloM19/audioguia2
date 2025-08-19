"use client";

import { trackGroups } from "@/lib/tracks";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function TrackDetailClient({ id }: { id: string }) {
  const track = trackGroups.flatMap((g) => g.tracks).find((t) => t.id === id);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setProgress(audio.currentTime || 0);
    const onEnded = () => { setIsPlaying(false); setProgress(0); };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) { audio.play(); setIsPlaying(true); }
    else { audio.pause(); setIsPlaying(false); }
  };

  const stopAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
  };

  const seek = (v: number) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Math.max(0, Math.min(v, duration || 0));
    setProgress(a.currentTime);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  if (!track) return <div className="p-6">Pista no encontrada</div>;

  return (
    <main className="max-w-xl mx-auto p-4 space-y-4 text-gray-900">
      {/* Botón de volver */}
      <Link
        href="/guia"
        className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100 shadow-sm"
      >
        ← Volver
      </Link>

      <h1 className="text-xl font-semibold">{track.title}</h1>

      <Image
        src={track.image}
        alt={track.title}
        width={800}
        height={600}
        className="w-full aspect-[4/3] object-cover object-center rounded-lg border border-gray-300"
        priority
      />

      <p className="text-gray-700">{track.description}</p>

      {/* Reproductor */}
      <div className="rounded-xl bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 shadow-sm p-4 space-y-3">
        <div className="flex justify-center gap-2">
          {[
            { icon: "⏪", onClick: () => seek((audioRef.current?.currentTime || 0) - 5) },
            { icon: isPlaying ? "⏸️" : "▶️", onClick: togglePlay },
            { icon: "⏹️", onClick: stopAudio },
            { icon: "⏩", onClick: () => seek((audioRef.current?.currentTime || 0) + 5) },
          ].map((b, i) => (
            <button
              key={i}
              onClick={b.onClick}
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-lg bg-gradient-to-b from-gray-50 to-gray-200"
            >
              {b.icon}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={progress}
            onChange={handleSeek}
            className="w-full accent-black"
          />
          <span className="text-xs text-gray-600 w-16 text-right">
            {fmt(progress)} / {fmt(duration)}
          </span>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata">
        <source src={track.src} type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>
    </main>
  );
}
