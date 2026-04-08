type GoogleMapEmbedProps = {
  query?: string;
  lat?: string;
  lng?: string;
  zoom?: number;
};

export default function GoogleMapEmbed({
  query,
  lat,
  lng,
  zoom = 15,
}: GoogleMapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-[260px] items-center justify-center rounded-[12px] border border-[#ececec] bg-[#faf7f0] text-sm text-[#8b93a0]">
        ยังไม่ได้ตั้งค่า Google Maps API Key
      </div>
    );
  }

  let src = "";

  // ถ้ามี lat/lng ให้ใช้ mode = view
  if (lat && lng) {
    src = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=${zoom}&maptype=roadmap`;
  } else {
    // ถ้าไม่มี lat/lng ใช้ query แทน
    const safeQuery = encodeURIComponent(query || "Bangkok, Thailand");
    src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${safeQuery}&zoom=${zoom}`;
  }

  return (
    <div className="overflow-hidden rounded-[12px] border border-[#ececec]">
      <iframe
        title="Google Map"
        src={src}
        width="100%"
        height="260"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="block border-0"
      />
    </div>
  );
}