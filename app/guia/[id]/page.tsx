"use client";

import { trackGroups } from "@/lib/tracks";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function TrackDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const track = trackGroups.flatMap((g) => g.tracks).find((t) => t.id === id);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function onLoaded() {
      setDuration(audio?.duration || 0);
    }
    function onTime() {
      setProgress(audio?.currentTime || 0);
    }
    function onEnded() {
      setIsPlaying(false);
      setProgress(0);
    }

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
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const v = Number(e.target.value);
    audio.currentTime = v;
    setProgress(v);
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
      <h1 className="text-xl font-semibold">{track.title}</h1>
      <Image
        src={track.image}
        alt={track.title}
        width={800}
        height={600}
        className="rounded-lg border border-gray-300"
        priority
      />
      <p className="text-gray-700">{track.description}</p>

      {/* Reproductor */}
      <div className="rounded-xl bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 shadow-sm p-4 space-y-3">
        <div className="flex justify-center gap-2">
          <button
            onClick={() =>
              audioRef.current && (audioRef.current.currentTime -= 5)
            }
            className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-lg bg-gradient-to-b from-gray-50 to-gray-200"
          >
            ⏪
          </button>
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-lg bg-gradient-to-b from-gray-50 to-gray-200"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button
            onClick={stopAudio}
            className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-lg bg-gradient-to-b from-gray-50 to-gray-200"
          >
            ⏹️
          </button>
          <button
            onClick={() =>
              audioRef.current && (audioRef.current.currentTime += 5)
            }
            className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-lg bg-gradient-to-b from-gray-50 to-gray-200"
          >
            ⏩
          </button>
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