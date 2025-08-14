"use client";

import { useEffect, useRef, useState } from "react";
import type { Track } from "@/lib/tracks";
import Link from "next/link";

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
    <div className="rounded-xl bg-white border border-gray-300 p-4 flex items-center gap-4 shadow-sm">
      <div className="flex flex-col flex-1 min-w-0 text-gray-900">
        <p className="truncate font-medium mb-2">
          {index}. <Link href={`/guia/${track.id}`} className="underline">{track.title}</Link>
        </p>

        <div className="flex justify-center gap-2 mb-2">
          {[
            { icon: "⏪", action: () => audioRef.current && (audioRef.current.currentTime -= 5) },
            { icon: isPlaying ? "⏸️" : "▶️", action: togglePlay },
            { icon: "⏹️", action: () => {
                if (audioRef.current) {
                  audioRef.current.pause();
                  audioRef.current.currentTime = 0;
                  setIsPlaying(false);
                  setProgress(0);
                }
              }
            },
            { icon: "⏩", action: () => audioRef.current && (audioRef.current.currentTime += 5) },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={btn.action}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-400 bg-gradient-to-b from-gray-50 to-gray-200"
            >
              {btn.icon}
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
    </div>
  );
}
