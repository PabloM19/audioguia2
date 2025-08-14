// app/guia/[id]/page.tsx
import { trackGroups } from "@/lib/tracks";
import Image from "next/image";

export default async function TrackDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const track = trackGroups.flatMap((g) => g.tracks).find((t) => t.id === id);
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
    </main>
  );
}
