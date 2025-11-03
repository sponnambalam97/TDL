"use client";
import { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => {
        if (d?.reviews) setReviews(d.reviews);
        else setError("No reviews found");
      })
      .catch(() => setError("Failed to load reviews"));
  }, []);

  if (error) {
    return null;
  }

  if (!reviews.length) {
    return null;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-bold">What parents say</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.slice(0, 3).map((r, i) => (
          <article key={i} className="card">
            <div className="flex items-center justify-between">
              <div className="font-medium">{r.author_name}</div>
              <div className="text-sm text-zinc-500">{r.relative_time_description}</div>
            </div>
            <div className="mt-1 text-amber-500">{"★".repeat(Math.round(r.rating))}</div>
            <p className="mt-2 text-zinc-800">{r.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
