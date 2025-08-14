"use client";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/lib/themes";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4 flex flex-wrap gap-2">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`px-3 py-1 rounded-full border bg-gradient-to-b from-gray-50 to-gray-200 ${theme.id === t.id ? "border-black font-bold" : "border-gray-300"}`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
}
