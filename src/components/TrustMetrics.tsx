export function TrustMetrics() {
  const items = [
    { k: "95%", v: "Pass rate" },
    { k: "10+", v: "Years experience" },
    { k: "4–8", v: "Learners per class" },
    { k: "1k+", v: "Happy families" },
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center md:grid-cols-4">
        {items.map((it) => (
          <div key={it.v}>
            <div className="text-3xl font-extrabold text-blue-700">{it.k}</div>
            <div className="mt-1 text-sm text-zinc-600">{it.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


