import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audioguía",
  description: "Audioguía web mobile-first",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-900 text-white antialiased selection:bg-indigo-500/30">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
