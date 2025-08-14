import { trackGroups } from "@/lib/tracks";
import Image from "next/image";

export default function TrackDetail({ params }: { params: { id: string } }) {
  const track = trackGroups.flatMap(g => g.tracks).find(t => t.id === params.id);

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
      />
      <p className="text-gray-700">{track.description}</p>
    </main>
  );
}
