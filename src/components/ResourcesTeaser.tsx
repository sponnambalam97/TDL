import Link from "next/link";

const posts = [
  {
    title: "How to prepare for the 11+",
    excerpt: "A parent-friendly guide to structure practice and build confidence.",
  },
  {
    title: "GCSE revision that actually works",
    excerpt: "Focus on high-yield methods: spaced practice, retrieval, interleaving.",
  },
  {
    title: "Nurturing a growth mindset",
    excerpt: "Turn setbacks into momentum with practical at-home tips.",
  },
];

export function ResourcesTeaser() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-bold">Resources</h2>
        <Link href="/blog" className="btn-secondary">View all</Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="card">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-zinc-700">{p.excerpt}</p>
            <div className="mt-4">
              <Link href="#" className="text-blue-700 hover:underline">Read more</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


