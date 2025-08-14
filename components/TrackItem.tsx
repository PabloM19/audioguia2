"use client";

import { Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Track } from "@/lib/tracks";

type Props = {
  track: Track;
  index: number;
  registerRef: (id: string, el: HTMLAudioElement | null) => void;
  onPlay: (id: string) => void;
  active: boolean;
};

export default function TrackItem({ track, index, registerRef, onPlay, active }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    registerRef(track.id, audioRef.current);
  }, [registerRef, track.id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function onLoaded() { setDuration(audio?.duration || 0); }
    function onTime() { setProgress(audio?.currentTime || 0); }
    function onEnded() { setIsPlaying(false); setProgress(0); }

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    if (!active) setIsPlaying(false);
  }, [active]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      onPlay(track.id);
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
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

  return (
    <div className="rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-md p-4 flex items-center gap-4">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar" : "Reproducir"}
        className="h-12 w-12 shrink-0 rounded-full bg-white text-slate-900 flex items-center justify-center"
      >
        {isPlaying ? <Pause size={22} /> : <Play size={22} />}
      </button>

      <div className="flex-1 min-w-0">
        <p className="truncate font-medium">
          {index}. {track.title}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={progress}
            onChange={handleSeek}
            className="w-full accent-white"
          />
          <span className="text-xs text-white/70 w-16 text-right">
            {fmt(progress)} / {fmt(duration)}
          </span>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata">
        <source src={track.src} type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>
    </div>
  );
}
