import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Audioguía",
  description: "Audioguía web mobile-first",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 antialiased">
        <ThemeProvider>
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
