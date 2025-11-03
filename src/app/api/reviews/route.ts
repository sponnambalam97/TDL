import { NextResponse } from "next/server";

// Fetch Google Place Details to get reviews
// Requires env vars: GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID
export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || "2746717506473676146"; // fallback from user
  if (!key || !placeId) {
    return NextResponse.json(
      { error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID" },
      { status: 500 }
    );
  }
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,review");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", key);

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
  if (!res.ok) return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  const data = await res.json();
  const reviews = data?.result?.reviews ?? [];
  return NextResponse.json({ reviews });
}


