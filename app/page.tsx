import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-md w-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl p-8 text-center">
        <p className="text-xs uppercase tracking-widest text-white/70">Bienvenida</p>
        <h1 className="mt-2 text-3xl font-semibold">Bienvenida a la audioguía</h1>
        <p className="mt-3 text-white/70">Pulsa el botón para empezar la visita.</p>

        <Link
          href="/guia"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-medium px-6 py-3 shadow hover:opacity-95 transition"
        >
          Empezar
        </Link>
      </div>
    </main>
  );
}
