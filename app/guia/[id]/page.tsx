import TrackDetailClient from "@/components/TrackDetailClient";

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <TrackDetailClient id={id} />;
}
